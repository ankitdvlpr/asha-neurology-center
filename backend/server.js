const express = require('express');
const payload = require('payload');
const cors = require('cors');
const cron = require('node-cron');
const nodemailer = require('nodemailer');
const sendEmailUtil = require('./utils/sendEmail');
require('dotenv').config();

const app = express();

// Configure CORS
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
}));

app.use(express.json());

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin');
});

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
  });

  // --- Custom API Endpoints ---

  // 1. GET /api/custom/doctors - Return active doctors
  app.get('/api/custom/doctors', async (req, res) => {
    try {
      const doctors = await payload.find({
        collection: 'doctors',
        where: {
          isActive: { equals: true },
        },
      });
      res.status(200).json(doctors.docs);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // 2. GET /api/custom/available-slots - Return available slots
  app.get('/api/custom/available-slots', async (req, res) => {
    const { doctorId, month, year } = req.query;
    if (!doctorId || !month || !year) {
      return res.status(400).json({ error: 'Missing required parameters' });
    }

    try {
      const slots = await payload.find({
        collection: 'appointment-slots',
        where: {
          and: [
            { doctor: { equals: doctorId } },
            { month: { equals: parseInt(month) } },
            { year: { equals: parseInt(year) } },
            { status: { equals: 'available' } },
            { date: { greater_than: new Date() } }, // Only future slots
          ],
        },
        sort: 'date',
        limit: 100,
      });
      res.status(200).json(slots.docs);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // 3. GET /api/custom/next-available-slots
  app.get('/api/custom/next-available-slots', async (req, res) => {
    const { doctorId } = req.query;
    try {
      // Find the first month/year starting from now that has available slots
      const nextSlot = await payload.find({
        collection: 'appointment-slots',
        where: {
          and: [
            { doctor: { equals: doctorId } },
            { status: { equals: 'available' } },
            { date: { greater_than: new Date() } },
          ],
        },
        sort: 'date',
        limit: 1,
      });

      if (nextSlot.docs.length === 0) {
        return res.status(404).json({ error: 'No available slots found' });
      }

      const { month, year } = nextSlot.docs[0];
      const allInMonth = await payload.find({
        collection: 'appointment-slots',
        where: {
          and: [
            { doctor: { equals: doctorId } },
            { month: { equals: month } },
            { year: { equals: year } },
            { status: { equals: 'available' } },
          ],
        },
        sort: 'date',
      });

      res.status(200).json({ month, year, slots: allInMonth.docs });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // 4. POST /api/custom/book-appointment
  app.post('/api/custom/book-appointment', async (req, res) => {
    const { patientName, patientPhone, patientEmail, patientAge, problem, doctorId, slotId } = req.body;

    if (!patientName || !patientPhone || !doctorId || !slotId) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
      // 1. Check if slot exists and is available
      const slot = await payload.findByID({
        collection: 'appointment-slots',
        id: slotId,
      });

      if (!slot) return res.status(404).json({ error: 'Slot not found' });
      if (slot.status !== 'available') return res.status(400).json({ error: 'This slot is already booked' });

      // 2. Create appointment
      const appointment = await payload.create({
        collection: 'appointments',
        data: {
          patientName,
          patientPhone,
          patientEmail,
          patientAge: parseInt(patientAge),
          problem,
          doctor: typeof slot.doctor === 'object' ? slot.doctor.id : slot.doctor,
          slot: slot.id,
          appointmentDate: slot.date,
          appointmentTime: slot.startTime,
          status: 'pending',
        },
      });

      // 3. Update slot status
      await payload.update({
        collection: 'appointment-slots',
        id: slotId,
        data: {
          status: 'booked',
          appointment: appointment.id,
        },
      });

      // 4. Send Email Notification
      if (patientEmail) {
        try {
          const doctorObj = typeof slot.doctor === 'object' ? slot.doctor : await payload.findByID({ collection: 'doctors', id: slot.doctor });
          
          const text = `Hello ${patientName},\n\nYour appointment has been booked successfully.\n\nBooking Details:\nDoctor: ${doctorObj.name || doctorObj.id}\nDate: ${new Date(slot.date).toLocaleDateString()}\nTime: ${slot.startTime}\nStatus: pending\n\nThank you.`;
          
          await sendEmailUtil({
            to: patientEmail,
            subject: 'Appointment Booking Confirmation',
            text
          });

          return res.status(201).json({
            success: true,
            message: 'Appointment booked successfully. Confirmation email sent to patient.',
            appointment
          });
        } catch (emailErr) {
          payload.logger.error(`Email sending failed: ${emailErr.message}`);
          return res.status(201).json({
            success: true,
            message: 'Appointment booked successfully, but email notification failed.',
            appointment
          });
        }
      }

      return res.status(201).json({
        success: true,
        message: 'Appointment booked successfully.',
        appointment
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // 5. POST /api/custom/generate-slots (Admin only - simplified security for this example)
  app.post('/api/custom/generate-slots', async (req, res) => {
    const { doctorId, month, year } = req.body;

    try {
      // Get availability config
      const availabilityResult = await payload.find({
        collection: 'doctor-availability',
        where: {
          and: [
            { doctor: { equals: doctorId } },
            { month: { equals: parseInt(month) } },
            { year: { equals: parseInt(year) } },
          ],
        },
      });

      if (availabilityResult.docs.length === 0) {
        return res.status(404).json({ error: 'Availability configuration not found for this month/year' });
      }

      const config = availabilityResult.docs[0];
      const daysInMonth = new Date(year, month, 0).getDate();
      const slotsCreated = [];

      for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month - 1, day);
        const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });

        // Check if date is blocked
        const isBlocked = config.blockedDates?.some(b => new Date(b.date).toDateString() === date.toDateString());
        if (isBlocked) continue;

        // Get working day config
        const dayConfig = config.workingDays.find(d => d.dayOfWeek === dayName && d.isAvailable);
        if (!dayConfig) continue;

        // Generate slots
        let current = timeToMinutes(dayConfig.startTime);
        const end = timeToMinutes(dayConfig.endTime);
        const lunchStart = dayConfig.lunchStartTime ? timeToMinutes(dayConfig.lunchStartTime) : null;
        const lunchEnd = dayConfig.lunchEndTime ? timeToMinutes(dayConfig.lunchEndTime) : null;

        while (current + dayConfig.slotDurationMinutes <= end) {
          const slotStart = current;
          const slotEnd = current + dayConfig.slotDurationMinutes;

          // Check for lunch break overlap
          const isLunch = lunchStart !== null && (
            (slotStart >= lunchStart && slotStart < lunchEnd) ||
            (slotEnd > lunchStart && slotEnd <= lunchEnd)
          );

          if (!isLunch) {
            const startTimeStr = minutesToTime(slotStart);
            const endTimeStr = minutesToTime(slotEnd);

            try {
              const newSlot = await payload.create({
                collection: 'appointment-slots',
                data: {
                  doctor: doctorId,
                  date: date.toISOString(),
                  startTime: startTimeStr,
                  endTime: endTimeStr,
                  status: 'available',
                  month: parseInt(month),
                  year: parseInt(year),
                },
              });
              slotsCreated.push(newSlot);
            } catch (err) {
              // Skip duplicates due to unique index
              payload.logger.warn(`Duplicate slot skipped: ${date.toDateString()} ${startTimeStr}`);
            }
          }
          current += dayConfig.slotDurationMinutes;
        }
      }

      res.status(200).json({ message: `Generated ${slotsCreated.length} slots`, count: slotsCreated.length });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // --- Notification Engine (Nodemailer) ---
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.ethereal.email',
    port: process.env.SMTP_PORT || 587,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // Helper to send Email
  const sendEmail = async (to, subject, text) => {
    if (!to) return;
    try {
      await transporter.sendMail({
        from: '"Asha Neurology Center" <appointments@ashaneurology.com>',
        to,
        subject,
        text,
      });
      payload.logger.info(`Email sent to ${to}`);
    } catch (error) {
      payload.logger.error(`Email failed: ${error.message}`);
    }
  };

  // --- Daily Reminder Cron Job (Runs every day at 9:00 AM) ---
  cron.schedule('0 9 * * *', async () => {
    payload.logger.info('Running daily appointment reminders...');
    
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);

    const endOfTomorrow = new Date(tomorrow);
    endOfTomorrow.setHours(23, 59, 59, 999);

    try {
      const upcoming = await payload.find({
        collection: 'appointments',
        where: {
          and: [
            { appointmentDate: { greater_than_equal: tomorrow.toISOString() } },
            { appointmentDate: { less_than_equal: endOfTomorrow.toISOString() } },
            { status: { not_equals: 'cancelled' } },
          ],
        },
      });

      for (const appt of upcoming.docs) {
        const message = `Reminder: Hi ${appt.patientName}, you have a neurological consultation scheduled for tomorrow at ${appt.appointmentTime}. Please arrive 10 minutes early. Location: Brij Enclave Colony, Varanasi.`;
        
        // Send Email
        if (appt.patientEmail) {
          await sendEmail(appt.patientEmail, 'Appointment Reminder - Asha Neurology', message);
        }
      }
    } catch (error) {
      payload.logger.error(`Cron error: ${error.message}`);
    }
  });

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

// Helper functions
function timeToMinutes(timeStr) {
  const [hrs, mins] = timeStr.split(':').map(Number);
  return hrs * 60 + mins;
}

function minutesToTime(totalMins) {
  const hrs = Math.floor(totalMins / 60);
  const mins = totalMins % 60;
  return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
}

start();

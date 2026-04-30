const payload = require('payload');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const start = async () => {
  console.log('--- One-Click Slot Generator ---');
  console.log('Connecting to MongoDB Atlas...');
  
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    mongoURL: process.env.DATABASE_URI,
    local: true,
  });

  const doctorId = "69f1a4dea891308aeb03efe7";
  const month = 4;
  const year = 2026;

  try {
    console.log('Checking for existing office hours...');
    const existing = await payload.find({
      collection: 'doctor-availability',
      where: {
        and: [
          { doctor: { equals: doctorId } },
          { month: { equals: month } },
          { year: { equals: year } },
        ],
      },
    });

    if (existing.docs.length === 0) {
      console.log('Creating new office hours (9 AM - 5 PM)...');
      const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      await payload.create({
        collection: 'doctor-availability',
        data: {
          doctor: doctorId,
          month: month,
          year: year,
          workingDays: days.map(day => ({
            dayOfWeek: day,
            isAvailable: true,
            startTime: "09:00",
            endTime: "17:00",
            slotDurationMinutes: 30
          })),
          blockedDates: []
        }
      });
    }

    console.log('Cleaning up existing slots to prevent duplicates...');
    await payload.delete({
      collection: 'appointment-slots',
      where: {
        and: [
          { doctor: { equals: doctorId } },
          { month: { equals: month } },
          { year: { equals: year } },
          { status: { equals: 'available' } } // Don't delete booked slots!
        ]
      }
    });

    console.log('Generating fresh slots for April 2026...');
    const daysInMonth = new Date(year, month, 0).getDate();
    let count = 0;

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month - 1, day);
      const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
      if (dayName === 'Sunday') continue;

      let current = 9 * 60;
      const end = 17 * 60;

      while (current + 30 <= end) {
        const h = Math.floor(current / 60).toString().padStart(2, '0');
        const m = (current % 60).toString().padStart(2, '0');
        const h2 = Math.floor((current + 30) / 60).toString().padStart(2, '0');
        const m2 = ((current + 30) % 60).toString().padStart(2, '0');

        try {
          await payload.create({
            collection: 'appointment-slots',
            data: {
              doctor: doctorId,
              date: date.toISOString(),
              startTime: `${h}:${m}`,
              endTime: `${h2}:${m2}`,
              status: 'available',
              month: month,
              year: year,
            },
          });
          count++;
          if (count % 10 === 0) process.stdout.write('.');
        } catch (err) {}
        current += 30;
      }
    }

    console.log(`\n\nSUCCESS! Generated ${count} slots.`);
    console.log('You can now run "npm run dev" and refresh your website!');
    process.exit(0);
  } catch (error) {
    console.error('Failed:', error.message);
    process.exit(1);
  }
};

start();

const payload = require('payload');
require('dotenv').config();

const start = async () => {
  const appointmentId = process.argv[2];
  if (!appointmentId) {
    console.error('Please provide an appointment ID.');
    process.exit(1);
  }

  console.log(`Connecting to database to delete appointment: ${appointmentId}...`);

  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    mongoOptions: { useUnifiedTopology: true },
    local: true,
  });

  try {
    const result = await payload.delete({
      collection: 'appointments',
      id: appointmentId,
    });

    if (result) {
      console.log('SUCCESS! Appointment deleted.');
    }
  } catch (error) {
    console.error('Error during deletion:', error.message);
  }

  process.exit(0);
};

start();

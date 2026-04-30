const payload = require('payload');
const path = require('path');
require('dotenv').config();

const start = async () => {
  console.log('--- Slot Deletion Utility ---');
  console.log('Connecting to database...');

  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    mongoOptions: { useUnifiedTopology: true },
    local: true, // No need for express
  });

  console.log('Deleting all available slots...');

  try {
    const result = await payload.delete({
      collection: 'appointment-slots',
      where: {
        status: { equals: 'available' }
      },
    });

    console.log(`SUCCESS! Deleted ${result.errors.length === 0 ? 'all' : 'some'} slots.`);
    console.log('Your "Available Slots" list is now empty.');
  } catch (error) {
    console.error('Error during deletion:', error.message);
  }

  process.exit(0);
};

start();

const nodemailer = require('nodemailer');

async function test() {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: 'krankit0219@gmail.com',
      pass: 'xfhmqudeiywfebwo'
    }
  });

  try {
    await transporter.verify();
    console.log("SUCCESS! The credentials work.");
  } catch (error) {
    console.error("FAILED! Gmail rejected these credentials:");
    console.error(error.message);
  }
}

test();

const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || process.env.SMTP_HOST || 'smtp.ethereal.email',
  port: process.env.EMAIL_PORT || process.env.SMTP_PORT || 587,
  auth: {
    user: process.env.EMAIL_USER || process.env.SMTP_USER,
    pass: process.env.EMAIL_PASS || process.env.SMTP_PASS,
  },
});

const sendEmail = async ({ to, subject, text }) => {
  if (!to) {
    throw new Error('No recipient email provided.');
  }
  
  const from = process.env.EMAIL_FROM || '"Asha Neurology Center" <appointments@ashaneurology.com>';
  
  try {
    const info = await transporter.sendMail({
      from,
      to,
      subject,
      text,
    });
    return info;
  } catch (error) {
    throw new Error(`Email sending failed: ${error.message}`);
  }
};

module.exports = sendEmail;

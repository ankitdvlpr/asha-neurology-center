const { buildConfig } = require('payload/config');
const path = require('path');
const { mongooseAdapter } = require('@payloadcms/db-mongodb');
const { slateEditor } = require('@payloadcms/richtext-slate');
const { webpackBundler } = require('@payloadcms/bundler-webpack');

const Doctors = require('./collections/Doctors');
const DoctorAvailability = require('./collections/DoctorAvailability');
const AppointmentSlots = require('./collections/AppointmentSlots');
const Appointments = require('./collections/Appointments');
const Media = require('./collections/Media');

module.exports = buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3001',
  admin: {
    user: 'users',
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
  collections: [
    {
      slug: 'users',
      auth: true,
      admin: {
        useAsTitle: 'email',
      },
      fields: [],
    },
    Doctors,
    DoctorAvailability,
    AppointmentSlots,
    Appointments,
    Media,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  email: process.env.SMTP_USER && process.env.SMTP_USER !== 'your_email_here' ? {
    fromName: 'Asha Neurology Center',
    fromAddress: 'appointments@ashaneurology.com',
    transportOptions: {
      host: process.env.SMTP_HOST || 'smtp.ethereal.email',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      port: parseInt(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_PORT === '465',
    },
  } : undefined,
});

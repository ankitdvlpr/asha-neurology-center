# Asha Neurology Center - Backend

Standalone backend for appointment booking using Payload CMS and MongoDB.

## Features
- **Doctor Profiles**: Manage doctor information.
- **Availability Config**: Monthly working days, slots, and lunch breaks.
- **Auto Slot Generation**: Admin API to generate monthly slots skipping lunch and blocked dates.
- **Atomic Booking**: Prevention of double-booking with status re-check.
- **REST APIs**: Custom endpoints for frontend integration.

## Environment Variables
Create a `.env` file based on `.env.example`:
- `PAYLOAD_SECRET`: Secret key for Payload.
- `DATABASE_URI`: MongoDB connection string.
- `PORT`: Server port (default 3000).
- `FRONTEND_URL`: URL of your Next.js frontend (for CORS).

## Getting Started
1. `cd backend`
2. `npm install`
3. `npm run dev`

## API Endpoints
- `GET /api/custom/doctors`: Returns all active doctors.
- `GET /api/custom/available-slots?doctorId=ID&month=M&year=Y`: Returns available slots for a month.
- `GET /api/custom/next-available-slots?doctorId=ID`: Finds the next month with available slots.
- `POST /api/custom/book-appointment`: Books a specific slot.
- `POST /api/custom/generate-slots`: (Admin) Generates slots for a doctor for a specific month.

## Deployment on Railway
1. Push this code to a GitHub repository.
2. Create a new project on Railway.
3. Connect your repository.
4. Add the environment variables.
5. Railway will automatically detect the `package.json` and start the server.

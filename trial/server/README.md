DrCloud Backend (Express + MongoDB + Nodemailer)
===============================================

## Tech Stack

- Node.js + Express.js
- MongoDB Atlas via Mongoose
- Nodemailer SMTP email notifications
- Helmet, CORS, Morgan logging

## Scripts

```bash
cd server
npm install
npm run dev    # start dev server with nodemon on http://localhost:5000
npm start      # production start
```

## Environment

Copy `.env.example` to `.env` at the repo root and fill in:

- `MONGODB_URI` – MongoDB Atlas connection string
- `PORT` – API port (default 5000)
- `CORS_ORIGIN` – frontend origin, e.g. `http://localhost:5173`
- SMTP settings (`SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM`)
- `NOTIFY_EMAIL_TO` – support email address to receive enquiries

## API

### `POST /api/enquiry`

Receives enquiry payload:

```json
{
  "name": "Full Name",
  "email": "user@example.com",
  "phone": "+91-9999999999",
  "serviceType": "AWS",
  "message": "Tell me more about your AWS training."
}
```

Flow:

1. Validate and sanitize fields
2. Store new document in `enquiries` collection (`Enquiry` model)
3. Build email via Nodemailer and send to `NOTIFY_EMAIL_TO`
4. Respond with `201` and a success message


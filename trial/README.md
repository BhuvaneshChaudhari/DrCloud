DrCloud – Cloud Services & DevOps Website
=======================================

This repository contains the complete **DrCloud** production-ready web application:

- **Frontend**: React (Vite), React Router, Axios, Tailwind CSS
- **Backend**: Node.js, Express.js, MongoDB Atlas (Mongoose), Nodemailer (SMTP)

The app implements the full workflow:

1. User browses services and trainings
2. Clicks **Read More** to view service details
3. Clicks **Get Started** to open the enquiry form
4. Submits enquiry → **POST `/api/enquiry`**
5. Enquiry is validated, sanitized, stored in MongoDB, and emailed to the support team

## Project Structure

- `client/` – React SPA (Vite) with Tailwind CSS
- `server/` – Express API server with MongoDB + Nodemailer

See the detailed sections at the bottom of this file for:

- Frontend setup & scripts
- Backend setup & scripts
- Environment variables
- Deployment notes (Vercel/Netlify + Render/AWS)

---

## Getting Started

Clone the repo into your workspace directory:

```bash
cd c:\\Users\\bhuva\\Desktop\\trial
```

Then follow the instructions in:

- `client/README.md` – Frontend
- `server/README.md` – Backend


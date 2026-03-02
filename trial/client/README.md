DrCloud Frontend (React + Vite)
===============================

## Tech Stack

- React 18 with Vite
- React Router DOM (SPA, same-tab navigation)
- Axios (via `src/lib/apiClient.js`)
- Tailwind CSS

## Scripts

```bash
cd client
npm install
npm run dev      # start dev server on http://localhost:5173
npm run build    # production build
npm run preview  # preview production build
```

## Routes

- `/` – `Home.jsx`
- `/services` – `Services.jsx`
- `/training` – `Training.jsx`
- `/cloud-services` – `CloudServices.jsx`
- `/other-services` – `OtherServices.jsx`
- `/about` – `About.jsx`
- `/contact` – `Contact.jsx`
- `/enquiry` – `Enquiry.jsx`

Navigation is handled via `react-router-dom` and the top navbar; route
transitions do not trigger full page reloads.

## API Configuration

The frontend talks to the backend using `VITE_API_BASE_URL`:

```env
VITE_API_BASE_URL=http://localhost:5000
```

This should point to your Express server (local, Render, AWS, etc.).


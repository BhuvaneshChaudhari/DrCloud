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

## Recent Changes & Features

### 1. UI Polish & Animations

#### Fade-In Animation System
- **Implementation**: Simple CSS-based `@keyframes fadeIn` animation
- **Duration**: 0.6s ease-in timing
- **Applied to**: All card components across all pages
  - Service cards (Home)
  - Training cards (Training page)
  - Cloud service cards (Cloud Services page)
  - Feature cards (Other Services page)
  - Pillar boxes (About section)
  - Testimonial cards (Home page)
- **Behavior**: Animations trigger on page load, reload, and page navigation
- **Benefits**: Smooth, consistent visual experience without glitching

#### Rocket Animation
- Floating animation on the hero section
- Uses `@keyframes rocketLaunch` and `rocketFloat` for smooth motion

#### Button Styling
- Yellow gradient buttons with hover scale effect
- Yellow buttons: `linear-gradient(135deg, #fbbf24, #f59e0b)`
- Hover effect: `scale(1.05)` with additional brightness
- White text on "Read More" buttons

#### Card Hover Effects
- Lift effect on hover: `translateY(-8px)`
- Backdrop blur enhancement
- Smooth shadow transitions

### 2. Component Improvements

#### Navbar
- **Desktop**: Horizontal navigation menu (Home, Services, About, Contact Us)
- **Mobile**: Hamburger menu (3-line icon) that toggles a dropdown
- **Features**:
  - Sticky positioning with backdrop blur
  - Active section highlighting
  - Smooth section scrolling on Home page
  - Mobile menu auto-closes on navigation
  - Responsive with Tailwind breakpoints (`hidden md:flex` for desktop, `md:hidden` for mobile)
- **Button**: "Get Started" call-to-action (visible on desktop and mobile)

#### Footer
- LinkedIn logo added with hover scale effect
- LinkedIn company page link opens in new tab
- Existing contact info and links intact

#### Chatbot
- Auto-opens on page load
- Uses `robot.jpg` image instead of emoji
- Floating widget on bottom-right corner
- Smooth popup animations

### 3. Page & Tab Customization

#### Favicon & Title
- Favicon: Updated to `drlogotaab.png`
- Page title: "DrCloud – Cloud Services & Trainings"
- Proper branding across all browser tabs

### 4. Mobile Optimization

#### Responsive Breakpoints
- **Mobile-first design** using Tailwind CSS utilities
- **Desktop nav**: `hidden md:flex` (shows on screens ≥768px)
- **Mobile menu**: `md:hidden flex` (shows on screens <768px)
- **Grid layouts**: Responsive columns (`grid-cols-1`, `sm:grid-cols-2`, `md:grid-cols-3`, `md:grid-cols-4`)

#### Mobile Menu Features
- Hamburger icon with animated lines (rotate and fade on toggle)
- Dropdown menu with all navigation options
- Touch-friendly button sizes
- Smooth `slideDown` animation (0.3s ease-out)
- Menu closes automatically when:
  - A link is clicked
  - User navigates to a different page

#### Responsive Pages
- All sections adapt to mobile screens
- Proper padding and spacing adjustments
- Text sizes scale appropriately (`text-sm`, `md:text-lg`, `md:text-xl`)
- Hero images hidden on mobile for cleaner layout

### 5. File Structure

**Components** (`src/components/`)
- `Navbar.jsx` – Navigation with hamburger menu
- `Footer.jsx` – Footer with LinkedIn integration
- `Chatbot.jsx` – Floating chat widget

**Pages** (`src/pages/`)
- `Home.jsx` – Landing page with services, about, testimonials
- `Training.jsx` – Cloud & DevOps courses
- `CloudServices.jsx` – Cloud solutions and services
- `OtherServices.jsx` – Expert instructors, certification, labs, etc.
- `Enquiry.jsx` – Contact form with dropdown fields

**Assets** (`src/assets/`)
- `drlogo.png` – Main logo
- `robot.jpg` – Chatbot avatar
- Various icon images for services and features

**Styling** (`src/index.css`)
- Tailwind CSS directives
- Custom animations (@keyframes)
- Component-specific styles (.drcloud-card, .drcloud-pill-primary, etc.)

### 6. CSS Classes & Utilities

**Animation Classes**
- `.fade-in` – Fade-in effect on page load/navigation
- `.animate-slideIn` – Slide-in animation for navbar items
- `.animate-slideDown` – Slide-down animation for mobile menu
- `.rocket-launch` – Combined rocket launch and float animations

**Component Classes**
- `.drcloud-card` – Base card styling with backdrop blur
- `.drcloud-pill-primary` – Yellow gradient button (primary CTAs)
- `.drcloud-pill-outline` – Outlined button style
- `.drcloud-container` – Max-width wrapper container

**Responsive Utilities**
- Tailwind breakpoints: `sm:` (640px), `md:` (768px), `lg:` (1024px)
- Flexbox and grid utilities for layouts
- Spacing and padding scales for responsive design

## Testing Notes

- ✅ Page load animations trigger correctly
- ✅ Page reload animations retrigger smoothly
- ✅ Navigation between pages maintains animation state
- ✅ Mobile hamburger menu works and closes on navigation
- ✅ All cards display content properly without glitching
- ✅ Responsive design works on mobile, tablet, and desktop


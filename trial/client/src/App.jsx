import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Chatbot from './components/Chatbot.jsx';
import Home from './pages/Home.jsx';
import Training from './pages/Training.jsx';
import CloudServices from './pages/CloudServices.jsx';
import OtherServices from './pages/OtherServices.jsx';
import Enquiry from './pages/Enquiry.jsx';
import OurStory from './pages/OurStory.jsx';

import AOS from 'aos';
import 'aos/dist/aos.css';

// helper to scroll to top on navigation and on mount
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
};

const App = () => {

  // ✅ GLOBAL ANIMATION INIT
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />

      <ScrollToTop />

      <main className="flex-1">

        <Routes>

          <Route path="/" element={<Home />} />

          {/* Scroll sections on home */}
          <Route path="/services" element={<Navigate to="/#services" replace />} />
          <Route path="/about" element={<Navigate to="/#about" replace />} />
          <Route path="/contact" element={<Navigate to="/#contact" replace />} />

          {/* Pages */}
          <Route path="/training" element={<Training />} />
          <Route path="/cloud-services" element={<CloudServices />} />
          <Route path="/other-services" element={<OtherServices />} />
          <Route path="/enquiry" element={<Enquiry />} />

          {/* Our Story */}
          <Route path="/our-story" element={<OurStory />} />

        </Routes>

      </main>

      <Footer />
      <Chatbot />

    </div>
  );
};

export default App;
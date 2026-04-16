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

import AOS from 'aos';
import 'aos/dist/aos.css';


// ✅ Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


// ✅ FINAL: Force Home on reload (100% working)
const ReloadToHome = () => {
  useEffect(() => {
    const navEntries = performance.getEntriesByType("navigation");

    if (navEntries.length > 0 && navEntries[0].type === "reload") {
      window.location.replace("/"); // 🔥 force home
    }
  }, []);

  return null;
};


const App = () => {
  const location = useLocation();

  // ✅ Initialize AOS once
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  // ✅ Refresh AOS on every route change
  useEffect(() => {
    AOS.refresh();
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />

      {/* ✅ IMPORTANT: Reload fix added here */}
      <ReloadToHome />

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

        </Routes>
      </main>

      <Footer />
      <Chatbot />

    </div>
  );
};

export default App;
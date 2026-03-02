import { Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Chatbot from './components/Chatbot.jsx';
import Home from './pages/Home.jsx';
import Training from './pages/Training.jsx';
import CloudServices from './pages/CloudServices.jsx';
import OtherServices from './pages/OtherServices.jsx';
import Enquiry from './pages/Enquiry.jsx';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Navigate to="/#services" replace />} />
          <Route path="/about" element={<Navigate to="/#about" replace />} />
          <Route path="/contact" element={<Navigate to="/#contact" replace />} />
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


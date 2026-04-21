import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import logo from '../assets/drlogo.png';

const navLinkBase =
  'text-sm font-medium px-3 py-2 rounded-full transition-all duration-300 hover:text-drcloudBlue';

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname, hash } = useLocation();
  const isHome = pathname === '/';
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isHome) {
      setActiveSection('');
    }
  }, [pathname, isHome]);

  // ❌ CSR removed from section tracking
  useEffect(() => {
    if (!isHome) return;

    const sections = ['services', 'about', 'contact'];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section);
      if (el) observer.observe(el);
    });

    const handleScroll = () => {
      if (window.scrollY < 200) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHome]);

  const goToSection = (section) => {
    setMobileMenuOpen(false);
    if (isHome && hash === `#${section}`) {
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigate(`/#${section}`);
    }
  };

  const handleHomeClick = () => {
    setMobileMenuOpen(false);
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGetStarted = () => {
    setMobileMenuOpen(false);
    navigate('/enquiry');
  };

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-white/60">
      <div className="drcloud-container flex items-center justify-between py-3">
        <button
          onClick={() => navigate('/')}
          className="flex items-center"
          aria-label="DrCloud Home"
        >
          <img
            src={logo}
            alt="DrCloud Logo"
            className="h-12 md:h-14 w-auto object-contain"
          />
        </button>

        <div className="flex items-center gap-6">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            
            <button
              onClick={handleHomeClick}
              className={`${navLinkBase} ${
                isHome && !activeSection
                  ? 'bg-sky-100 text-drcloudBlue'
                  : 'text-slate-700'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => goToSection('services')}
              className={`${navLinkBase} ${
                activeSection === 'services'
                  ? 'bg-sky-100 text-drcloudBlue'
                  : 'text-slate-700'
              }`}
            >
              Services
            </button>

            {/* ✅ CSR = PAGE NOW */}
            <button
              onClick={() => navigate('/csr')}
              className={`${navLinkBase} ${
                pathname === '/csr'
                  ? 'bg-sky-100 text-drcloudBlue'
                  : 'text-slate-700'
              }`}
            >
              CSR Project
            </button>

            <button
              onClick={() => goToSection('about')}
              className={`${navLinkBase} ${
                activeSection === 'about'
                  ? 'bg-sky-100 text-drcloudBlue'
                  : 'text-slate-700'
              }`}
            >
              About
            </button>

            <button
              onClick={() => goToSection('contact')}
              className={`${navLinkBase} ${
                activeSection === 'contact'
                  ? 'bg-sky-100 text-drcloudBlue'
                  : 'text-slate-700'
              }`}
            >
              Contact Us
            </button>
          </nav>

          {/* Get Started */}
          <button
            onClick={() => navigate('/enquiry')}
            className="hidden sm:inline-flex drcloud-pill-primary text-sm !text-white"
          >
            Book Consultation
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/20 transition"
          >
            <span className={`h-0.5 w-6 bg-slate-900 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`h-0.5 w-6 bg-slate-900 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`h-0.5 w-6 bg-slate-900 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 border-t animate-slideDown">
          <nav className="drcloud-container py-4 space-y-2">

            <button onClick={handleHomeClick} className="nav-mobile">Home</button>
            <button onClick={() => goToSection('services')} className="nav-mobile">Services</button>

            {/* ✅ CSR MOBILE */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                navigate('/csr');
              }}
              className="nav-mobile"
            >
              CSR Project
            </button>

            <button onClick={() => goToSection('about')} className="nav-mobile">About Us</button>
            <button onClick={() => goToSection('contact')} className="nav-mobile">Contact Us</button>

            <button onClick={handleGetStarted} className="block w-full mt-4 drcloud-pill-primary text-sm !text-white">
              Get Started
            </button>

          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
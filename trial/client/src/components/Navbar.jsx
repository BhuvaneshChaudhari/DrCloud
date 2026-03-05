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

  // Reset activeSection when navigating away from home
  useEffect(() => {
    if (!isHome) {
      setActiveSection('');
    }
  }, [pathname]);

  useEffect(() => {
    // Only observe sections if we're on the home page
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

    // Check if we're at the top of the page (home section)
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
    if (isHome && hash === `#${section}`) {
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigate(`/#${section}`);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur-md border-b border-white/60">
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
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => {
                navigate('/');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`${navLinkBase} ${isHome && !activeSection ? 'bg-sky-100 text-drcloudBlue animate-slideIn' : 'text-slate-700'}`}
            >
              Home
            </button>

            <button
              onClick={() => goToSection('services')}
              className={`${navLinkBase} ${activeSection === 'services' ? 'bg-sky-100 text-drcloudBlue animate-slideIn' : 'text-slate-700'}`}
            >
              Services
            </button>

            <button
              onClick={() => goToSection('about')}
              className={`${navLinkBase} ${activeSection === 'about' ? 'bg-sky-100 text-drcloudBlue animate-slideIn' : 'text-slate-700'}`}
            >
              About
            </button>

            <button
              onClick={() => goToSection('contact')}
              className={`${navLinkBase} ${activeSection === 'contact' ? 'bg-sky-100 text-drcloudBlue animate-slideIn' : 'text-slate-700'}`}
            >
              Contact Us
            </button>
          </nav>

          <button
            onClick={() => navigate('/enquiry')}
            className="hidden sm:inline-flex drcloud-pill-primary text-sm !text-white hover:!text-white"
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

// import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import personImg from '../assets/person.png';
import rocketImg from '../assets/rocket.png';
import coursesIcon from '../assets/courses.png';
import cloudIcon from '../assets/cloud.png';
import otherIcon from '../assets/other.png';
import callIcon from '../assets/call.png';
import emailIcon from '../assets/email.png';
import locationIcon from '../assets/location.png';
import missionIcon from '../assets/mission.png';
import communityIcon from '../assets/community.png';
import innovationIcon from '../assets/innovation.png';
import careerIcon from '../assets/career.png';

import CountUp from "react-countup";
import { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";


const StatCard = ({ label, value, suffix = "", prefix = "", start }) => (
  <div
    className="drcloud-card px-6 py-5 flex flex-col gap-1 items-center text-center min-h-24 w-36 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    data-aos="zoom-in"
  >
    <div className="text-2xl font-bold text-slate-900 tracking-wide">
      {prefix}
      <CountUp
        start={start ? 0 : null}
        end={start ? value : 0}
        duration={3}
        separator=""
      />
      {suffix}
    </div>
    <div className="text-sm text-slate-600 whitespace-nowrap">
      {label}
    </div>
  </div>
);


const ServiceCard = ({ title, description, bullets, buttonLabel, onClick, icon }) => (
  <div
    className="drcloud-card px-6 py-5 flex flex-col h-full transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    data-aos="fade-up"
  >
    <div className="flex flex-col items-center text-center gap-2">
      <img src={icon} alt={title} className="w-14 h-14 object-contain" />
      <h3 className="text-2xl font-bold text-slate-900 mb-3 text-center">{title}</h3>
    </div>

    <p className="text-sm text-slate-600">{description}</p>

    <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
      {bullets.map((b) => (
        <li key={b}>{b}</li>
      ))}
    </ul>

    <div className="mt-auto flex justify-center pt-4">
      <button
        type="button"
        onClick={onClick}
        className="drcloud-pill-primary text-sm"
      >
        {buttonLabel}
      </button>
    </div>
  </div>
);


const PILLARS = [
  { icon: missionIcon, title: 'Mission-Driven', body: "We're committed to bridging the skills gap in cloud computing and helping professionals excel in digital transformation era." },
  { icon: communityIcon, title: 'Community Focus', body: 'Building a supportive learning community where students and instructors collaborate and grow together.' },
  { icon: innovationIcon, title: 'Innovation First', body: 'We stay ahead of industry trends, constantly updating our curriculum with latest technologies and practices.' },
  { icon: careerIcon, title: 'Career Growth', body: 'Our programs are designed to accelerate career advancement with practical skills that employers value.' }
];


// ✅ FIXED OFFSET
const SECTION_CLASS = 'scroll-mt-24';


const Home = () => {

  const navigate = useNavigate();
  const { hash } = useLocation();
  const [startCounting, setStartCounting] = useState(false);

  // ✅ FIX 1: scroll to top on page load
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartCounting(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // ✅ FIX 2: proper alignment with navbar offset
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);

      if (el) {
        const navbarHeight = 90; // adjust if needed
        const y = el.offsetTop - navbarHeight;

        window.scrollTo({
          top: y,
          behavior: 'smooth',
        });
      }
    }
  }, [hash]);

  return (

    <div>

      {/* HERO */}
      <section
        className={`drcloud-container py-16 md:py-24 grid gap-10 md:grid-cols-[1.2fr,1fr] items-center min-h-[560px] ${SECTION_CLASS}`}
      >

        {/* LEFT SIDE */}
        <div
          className="space-y-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >

          <p className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1 text-xs font-medium text-drcloudBlue shadow-soft">
            Trusted Cloud & DevOps Training · 24/7 Support
          </p>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 leading-tight">
            Cloud Services & Training
          </h1>

          <p className="text-sm md:text-base text-slate-600 max-w-xl">
            Transform your business and career with cloud services, DevOps,
            training, and CSR initiatives.
          </p>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => navigate('/enquiry')}
              className="drcloud-pill-primary text-sm"
            >
              Start Learning Today
            </button>

            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-sm px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 transition duration-200"
            >
              View Our Services
            </button>
          </div>

          {/* STATS */}
          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 justify-items-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <StatCard label="Students Enrolled" value={1200} suffix="+" start={startCounting} />
            <StatCard label="Success Rate" value={98} suffix="%" start={startCounting} />
            <StatCard label="AWS Services" value={50} suffix="+" start={startCounting} />
            <StatCard label="Support" value={24} suffix="/7" start={startCounting} />
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div
          className="relative hidden md:block w-full h-[450px]"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <img
            src={personImg}
            alt="Cloud Illustration"
            className="absolute top-6 -right-20 w-[520px] object-contain transition duration-500 hover:scale-105"
          />

          <img
            src={rocketImg}
            alt="Rocket"
            className="absolute -top-10 right-[420px] w-20 md:w-23 z-20 rocket-animate"
          />
        </div>

      </section>

      {/* SERVICES */}
      <section
        id="services"
        className={`drcloud-container py-10 md:py-14 ${SECTION_CLASS}`}
        data-aos="fade-up"
      >

        <div className="text-center space-y-3 mb-8">

          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-slate-900">Our </span>
            <span className="text-drcloudBlue">Services</span>
          </h2>

          <p className="text-sm md:text-lg text-slate-600 max-w-2xl mx-auto">
            Learn modern technologies and prepare confidently for today’s IT careers.
          </p>

        </div>

        <div className="grid gap-6 md:grid-cols-3">

          <ServiceCard
            icon={coursesIcon}
            title="Courses"
            description="Learn modern technologies and prepare confidently for today's IT careers."
            bullets={[
              'AWS Certification Training',
              'Microsoft Azure',
              'Google Cloud Platform (GCP)',
              'Docker & Kubernetes',
              'DevOps Bootcamp',
              'Infrastructure as Code'
            ]}
            buttonLabel="Read More"
            onClick={() => navigate('/training')}
          />

          <ServiceCard
            icon={cloudIcon}
            title="Cloud Services"
            description="Scalable and secure services designed to store data and run applications efficiently."
            bullets={[
              'Cloud Storage',
              'Migration & Deployment',
              'Scalable Infrastructure',
              'Backup & Recovery',
              'Monitoring & Support'
            ]}
            buttonLabel="Read More"
            onClick={() => navigate('/cloud-services')}
          />

          <ServiceCard
            icon={otherIcon}
            title="Other Services"
            description="Enhance your learning experience with comprehensive support."
            bullets={[
              'Expert mentorship',
              'Industry curriculum',
              'Career guidance',
              'Skill development'
            ]}
            buttonLabel="Read More"
            onClick={() => navigate('/other-services')}
          />

        </div>

      </section>

      {/* ABOUT */}
      <section
        id="about"
        className={`drcloud-container py-10 md:py-14 space-y-8 ${SECTION_CLASS}`}
        data-aos="fade-up"
      >

        <div className="space-y-8 text-center">

          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-slate-900">About </span>
            <span className="text-drcloudBlue">DrCloud</span>
          </h2>

          <p className="text-sm md:text-xl text-slate-600 max-w-3xl mx-auto">
            DrCloud is dedicated to empowering individuals with the skills and knowledge needed
            to excel in the cloud computing and DevOps landscape.
          </p>

          <div className="flex justify-center">
            <button
              onClick={() => navigate('/our-story')}
              className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition"
            >
              OurStory
            </button>
          </div>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 justify-items-center">

          {PILLARS.map((p) => (

            <div
              key={p.title}
              className="pillar-box w-[250px] h-[250px] flex flex-col items-center justify-center text-center rounded-full bg-white/10 shadow-xl backdrop-blur-xl border border-white/20 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              data-aos="zoom-in"
            >

              <img src={p.icon} alt={p.title} className="w-12 h-12 mb-3 object-contain" />

              <h3 className="text-lg md:text-xl font-semibold text-slate-900">
                {p.title}
              </h3>

              <p className="text-sm text-slate-600">
                {p.body}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className={`drcloud-container py-10 md:py-14 ${SECTION_CLASS}`}
        data-aos="fade-up"
      >

        <div className="space-y-5 text-center">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-slate-900">Start Your </span>
            <span className="text-drcloudBlue">Cloud Journey</span>
          </h2>

          <p className="text-sm md:text-xl text-slate-600 max-w-xl mx-auto">
            Ready to transform your career? Get in touch with our experts and
            discover the perfect learning path for you.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 items-start mt-10">

          {/* Left Box */}
          <div
            className="drcloud-card px-6 py-6 space-y-4 flex flex-col h-full transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            data-aos="fade-right"
          >
            <h3 className="text-lg font-bold text-slate-900">
              Get Started Today
            </h3>

            <p className="text-sm text-slate-600">
              Fill out our quick enquiry form and our team will help you choose
              the best learning path.
            </p>

            <ul className="text-sm text-slate-600 space-y-2">
              <li>✓ Personalized learning recommendations</li>
              <li>✓ Free guidance from our experts</li>
              <li>✓ Career pathway planning</li>
            </ul>

            <div className="flex justify-center pt-4 mt-auto">
              <button
                onClick={() => navigate('/enquiry')}
                className="drcloud-pill-primary text-sm"
              >
                Open Enquiry Form
              </button>
            </div>
          </div>

          {/* Right Box */}
          <div
            className="space-y-4 drcloud-card px-6 py-6 flex flex-col h-full transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            data-aos="fade-left"
          >
            <h3 className="text-lg font-bold text-slate-900">
              Get in Touch
            </h3>

            <ul className="space-y-4 text-sm text-slate-600">

              <li className="flex items-center gap-3">
                <img src={emailIcon} alt="Email" className="w-5 h-5" />
                <div>
                  <div className="font-semibold text-slate-900">Email</div>
                  <div>support@drcloud.co.in</div>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <img src={callIcon} alt="Call" className="w-5 h-5" />
                <div>
                  <div className="font-semibold text-slate-900">Call Us</div>
                  <div>+91-842-115-0803</div>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <img src={locationIcon} alt="Location" className="w-5 h-5" />
                <div>
                  <div className="font-semibold text-slate-900">Visit Us</div>
                  <div>S. B. Patil Road, Ravet, Pune, MH 411044</div>
                </div>
              </li>

            </ul>

          </div>

        </div>

      </section>

    </div>

  );
};

export default Home;
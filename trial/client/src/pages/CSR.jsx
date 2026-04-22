import { useNavigate } from "react-router-dom";
import "aos/dist/aos.css";
import PlacedCompanies from "../components/PlacedCompanies";

import awsLogo from "../assets/csr/aws-restart.png";
import awsLogo2 from "../assets/csr/csr-logo.webp";



const CSR = () => {
  const navigate = useNavigate();

  const steps = [
    {
      title: "Apply & Review",
      desc: "No prior tech experience required. Submit your application."
    },
    {
      title: "Information Session",
      desc: "Attend a live session to understand program details."
    },
    {
      title: "Interview",
      desc: "A short interaction to understand your goals."
    },
    {
      title: "Orientation",
      desc: "Get introduced to tools, mentors, and roadmap."
    },
    {
      title: "Class Begins",
      desc: "Start hands-on cloud training with real projects."
    },
    {
      title: "Interview Prep",
      desc: "Mock interviews, resume polish, and employer introductions."
    },
    {
      title: "Graduation",
      desc: "Complete the program and earn your career certificate."
    },
    {
      title: "Advance Your Career!",
      desc: "Land your first tech role with placement support from Talenio."
    }
  ];

  return (
    <div>

      {/* ================= HERO ================= */}
      <section className="drcloud-container py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">

        
        {/* LEFT */}
<div data-aos="fade-up" className="space-y-6">

  {/* TOP TAG */}
  <p className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-100 to-blue-100 px-4 py-1 text-xs font-semibold text-drcloudBlue shadow-soft">
    🌍 CSR Initiative • Empowering Careers
  </p>

  {/* HEADLINE */}
  <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
    Learn Cloud. <br />
    <span className="text-drcloudBlue">Break Into Tech.</span>
  </h1>

  {/* SUBTEXT */}
  <p className="text-slate-600 max-w-xl text-lg leading-relaxed">
    A CSR-driven program designed to help students and job-seekers 
    build real-world cloud skills with mentorship, projects, and 
    guaranteed career support.
  </p>

  {/* 🔥 TRUST STATS (VERY IMPORTANT) */}
  <div className="flex flex-wrap gap-6 text-sm text-slate-700 font-medium">

    <div className="flex items-center gap-2">
      🚀 <span>1000+ Students Trained</span>
    </div>

    <div className="flex items-center gap-2">
      💼 <span>98% Placement Support</span>
    </div>

    <div className="flex items-center gap-2">
      🎓 <span>Industry Certification</span>
    </div>

  </div>

  {/* CTA BUTTONS */}
  <div className="flex gap-4 mt-4 flex-wrap">

    <button
      onClick={() => navigate("/enquiry")}
      className="drcloud-pill-primary flex items-center gap-2"
    >
      Apply Now →
    </button>

    <button
      onClick={() =>
        window.open(
          "https://wa.me/918421150803?text=Hi, I want to know about CSR training",
          "_blank"
        )
      }
      className="px-6 py-3 rounded-full border border-green-500 text-green-600 hover:bg-green-50 transition font-medium flex items-center gap-2"
    >
      💬 Chat on WhatsApp
    </button>

  </div>

  {/* 🔥 URGENCY + CSR IMPACT */}
  <p className="text-xs text-slate-500 mt-2">
    ⚡ Limited CSR seats available • Focused on underrepresented & aspiring talent
  </p>

</div>
        

        {/* RIGHT SIDE - IMAGE */}
       
<div
  className="relative flex flex-col items-center justify-center py-6 md:py-0"
  data-aos="fade-up"
  data-aos-delay="200"
>

  {/* 🔥 MAIN GLOW */}
  <div className="absolute w-[420px] h-[420px] bg-gradient-to-r from-orange-300 via-pink-200 to-blue-300 rounded-full blur-3xl opacity-40 animate-pulse"></div>

  {/*  SECOND GLOW */}
  <div className="absolute w-[300px] h-[300px] bg-orange-200 rounded-full blur-2xl opacity-30"></div>

  {/*  FLOATING IMAGE */}
  <img
    src={awsLogo2}
    alt="AWS re/Start"
    className="relative z-10 w-[260px] md:w-[420px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)] transition duration-500 hover:scale-105 animate-float my-8 md:my-0"
  />

  {/*  COMBINED FLOATING BADGE */}
 
<div className="relative md:absolute md:bottom-[-80px] z-20 flex gap-4 px-6 py-3 rounded-2xl bg-white/90 backdrop-blur-md shadow-xl text-xs font-medium animate-float mt-4 md:mt-0">

  <span className="flex items-center gap-2 hover:scale-105 transition">
    🎓 Certification
  </span>

  <span className="flex items-center gap-2 hover:scale-105 transition">
    💼 Placement
  </span>

  <span className="flex items-center gap-2 hover:scale-105 transition">
    ⚡ Projects
  </span>

</div>

</div>

      </section>

      {/* ================= WHAT YOU WILL LEARN ================= */}
<section className="drcloud-container py-16 space-y-12">

  {/* HEADER */}
  <div className="text-center max-w-xl mx-auto" data-aos="fade-up">
    <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
      What You Will <span className="text-drcloudBlue">Learn</span>
    </h2>

    <p className="text-slate-600 mt-3 text-sm md:text-lg">
      CSR-powered training focused on real skills, real projects, and real jobs 
    </p>
  </div>

  {/* CARDS */}
  <div className="grid sm:grid-cols-2 gap-4 md:gap-6">

    {[
      {
        title: "Cloud Foundations",
        desc: "Learn AWS, IT basics & industry workflows.",
        icon: "☁️"
      },
      {
        title: "Real Projects",
        desc: "Build live apps, CI/CD & deployments.",
        icon: "⚡"
      },
      {
        title: "DevOps Skills",
        desc: "Docker, Linux, automation & tools.",
        icon: "🛠️"
      },
      {
        title: "Placement Support",
        desc: "Resume, mock interviews & hiring help.",
        icon: "💼"
      }
    ].map((item, i) => (

      <div
        key={i}
        data-aos="fade-up"
        data-aos-delay={i * 100}
        className="group relative p-4 md:p-5 rounded-2xl bg-white/70 backdrop-blur-md border border-white/40 shadow-sm hover:shadow-xl transition duration-300 overflow-hidden flex items-center gap-4"
      >

        {/* 🔥 HOVER GLOW */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-100 via-transparent to-blue-100 opacity-0 group-hover:opacity-100 transition duration-300"></div>

        {/* ICON */}
        <div className="relative z-10 w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-orange-500 text-white text-lg shadow-md group-hover:scale-110 transition">
          {item.icon}
        </div>

        {/* TEXT */}
        <div className="relative z-10 flex-1">
          <h3 className="text-sm md:text-base font-semibold text-slate-900">
            {item.title}
          </h3>

          <p className="text-xs md:text-sm text-slate-600 mt-1 leading-snug">
            {item.desc}
          </p>
        </div>

        {/* NUMBER (SUBTLE) */}
        <div className="absolute right-3 top-2 text-xl font-bold text-slate-100 group-hover:text-orange-100 transition">
          0{i + 1}
        </div>

      </div>

    ))}

  </div>

</section>

      {/* ================= WHO SHOULD ATTEND ================= */}
<section className="drcloud-container py-20 space-y-14">

  {/* HEADER */}
  <div className="text-center max-w-2xl mx-auto" data-aos="fade-up">
    <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
      Who Should <span className="text-drcloudBlue">Attend?</span>
    </h2>

    <p className="text-slate-600 mt-4 text-sm md:text-lg">
      This CSR initiative is designed to empower individuals from diverse
      backgrounds to start and grow a career in cloud technology 
    </p>
  </div>

  {/* CARDS */}
  <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">

    {[
      {
        title: "Students & Graduates",
        desc: "Kickstart your career with industry-ready cloud skills.",
        icon: "🎓"
      },
      {
        title: "Career Switchers",
        desc: "Move into tech with structured guidance and support.",
        icon: "🔄"
      },
      {
        title: "Working Professionals",
        desc: "Upskill and transition into high-demand cloud roles.",
        icon: "💼"
      },
      {
        title: "Non-Tech Learners",
        desc: "Start from zero with beginner-friendly training.",
        icon: "🚀"
      }
    ].map((item, i) => (

      <div
        key={i}
        data-aos="fade-up"
        data-aos-delay={i * 100}
        className="group relative p-5 rounded-2xl bg-white/70 backdrop-blur-md border border-white/40 shadow-sm hover:shadow-2xl transition duration-300 text-center overflow-hidden"
      >

        {/* 🔥 HOVER GLOW */}
        <div className="absolute inset-0 bg-gradient-to-b from-orange-100 via-transparent to-blue-100 opacity-0 group-hover:opacity-100 transition duration-300"></div>

        {/* ICON */}
        <div className="relative z-10 w-12 h-12 mx-auto flex items-center justify-center rounded-xl bg-orange-500 text-white text-xl shadow-md group-hover:scale-110 transition">
          {item.icon}
        </div>

        {/* TITLE */}
        <h3 className="relative z-10 mt-4 text-sm md:text-base font-semibold text-slate-900">
          {item.title}
        </h3>

        {/* DESC */}
        <p className="relative z-10 text-xs md:text-sm text-slate-600 mt-2 leading-snug">
          {item.desc}
        </p>

        {/* SUBTLE NUMBER */}
        <div className="absolute top-3 right-4 text-xl font-bold text-slate-100 group-hover:text-orange-100 transition">
          0{i + 1}
        </div>

      </div>

    ))}

  </div>

</section>

      {/* ================= JOURNEY ================= */}
<section className="drcloud-container py-20 space-y-14">

  {/* HEADER */}
  <div className="text-center max-w-2xl mx-auto" data-aos="fade-up">
    <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
      From Beginner to <span className="text-drcloudBlue">Cloud Professional</span>
    </h2>

    <p className="text-slate-600 mt-4 text-sm md:text-lg">
      A guided CSR journey designed to take you from zero knowledge to your first tech job 
    </p>
  </div>

  {/* TIMELINE */}
  <div className="relative max-w-4xl mx-auto">

    {/*  GRADIENT LINE */}
    <div className="absolute left-5 top-0 h-full w-[3px] bg-gradient-to-b from-orange-300 via-orange-200 to-transparent"></div>

    <div className="space-y-6">

      {[
        {
          title: "Apply & Get Shortlisted",
          desc: "Fill a simple form and check your eligibility for the CSR program.",
          icon: "📝"
        },
        {
          title: "Program Introduction",
          desc: "Understand how the training works, career paths, and outcomes.",
          icon: "🎯"
        },
        {
          title: "Quick Screening",
          desc: "A short interaction to understand your goals and commitment.",
          icon: "💬"
        },
        {
          title: "Onboarding & Setup",
          desc: "Get access to tools, mentors, and your learning roadmap.",
          icon: "⚙️"
        },
        {
          title: "Live Training Begins",
          desc: "Hands-on sessions with real cloud labs and guided practice.",
          icon: "🧑‍💻"
        },
        {
          title: "Projects & Practice",
          desc: "Work on real-world deployments and DevOps workflows.",
          icon: "🚀"
        },
        {
          title: "Career Preparation",
          desc: "Resume building, mock interviews, and confidence training.",
          icon: "💼"
        },
        {
          title: "Get Placed 🎉",
          desc: "Connect with hiring partners and land your first cloud role.",
          icon: "🏆"
        }
      ].map((step, i) => (

        <div
          key={i}
          className="group relative flex items-start gap-4"
          data-aos="fade-up"
          data-aos-delay={i * 100}
        >

          {/* 🔥 ICON CIRCLE */}
          <div className="relative z-10 w-11 h-11 flex items-center justify-center rounded-full bg-orange-500 text-white text-lg shadow-lg ring-4 ring-orange-100 group-hover:scale-110 transition">
            {step.icon}
          </div>

          {/* 🔥 CARD */}
          <div className="relative w-full p-4 md:p-5 rounded-2xl bg-white/70 backdrop-blur-md border border-white/40 shadow-sm hover:shadow-xl transition overflow-hidden">

            {/* HOVER GLOW */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-100 via-transparent to-blue-100 opacity-0 group-hover:opacity-100 transition duration-300"></div>

            <h3 className="relative z-10 text-sm md:text-base font-semibold text-slate-900">
              {step.title}
            </h3>

            <p className="relative z-10 text-xs md:text-sm text-slate-600 mt-1 leading-snug">
              {step.desc}
            </p>

            {/* STEP NUMBER */}
            <div className="absolute right-4 top-3 text-lg font-bold text-slate-100 group-hover:text-orange-100 transition">
              0{i + 1}
            </div>

          </div>

        </div>

      ))}

    </div>
  </div>

</section>

     

      {/* ================= COMPANIES ================= */}
<section className="drcloud-container py-20 space-y-12">

  {/* HEADER */}
  <div className="text-center max-w-2xl mx-auto" data-aos="fade-up">
    <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
      Where Our <span className="text-drcloudBlue">Graduates</span> Work
    </h2>

    <p className="text-slate-600 mt-4 text-sm md:text-lg">
      Our learners are placed across top companies, startups, and global organizations 
    </p>
  </div>



  {/* LOGO STRIP */}
  <PlacedCompanies />

</section>
      


      
    </div>
  );
};

export default CSR;
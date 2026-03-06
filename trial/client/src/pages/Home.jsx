import { useEffect } from 'react';
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

const StatCard = ({ label, value }) => (
  <div className="drcloud-card px-6 py-5 flex flex-col gap-1 items-center text-center min-h-24 w-32">
    <div className="text-2xl font-bold text-slate-900">{value}</div>
    <div className="text-sm text-slate-600">{label}</div>
  </div>
);

const ServiceCard = ({ title, description, bullets, buttonLabel, onClick, icon }) => (
  <div className="drcloud-card px-6 py-7 flex flex-col h-full">
    <div className="flex flex-col items-center text-center gap-2">
      <img
        src={icon}
        alt={title}
        className="w-14 h-14 object-contain"
      />
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
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

const TESTIMONIALS = [
  { name: 'Atharva Gawali', company: 'Johnson Controls Placement', quote: "DrCloud's expert training and placement support helped me land a position at Johnson Controls, a global leader in smart building technologies and automation. The hands-on skills, mentorship, and industry connections gave me the confidence to excel at interviews and adapt quickly in my professional role. I am grateful to the entire Dr Cloud team for turning my career aspirations into reality." },
  { name: 'Raunak', company: 'TalenIQ Placement', quote: "Dr Cloudʼs practical cloud and DevOps training made a real difference in my career journey. Thanks to expert guidance and focused placement support, I was placed at Talenio, a fast-growing company redefining employability training and tech solutions. The curriculum, real-world projects, and dedicated team at Dr Cloud gave me the confidence and clarity to succeed professionally. I truly appreciate their commitment to every studentʼs future." },
  { name: 'Trupti Wankhede', company: 'Johnson Controls Placement', quote: "Thanks to Dr Cloudʼs comprehensive training and dedicated placement support, I secured my role at Johnson Controls, a global leader in smart building technologies and sustainable solutions. The real-world skills and personalized guidance prepared me well for the professional challenges I face today. Dr Cloud truly transforms learning into career success.." }
];

const SECTION_CLASS = 'scroll-mt-16';

const Home = () => {
  const navigate = useNavigate();
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [hash]);

  return (
    <div>
      {/* Hero - Home */}
      <section className={`drcloud-container py-16 md:py-24 grid gap-10 md:grid-cols-[1.2fr,1fr] items-center min-h-[560px] ${SECTION_CLASS}`}>
        
        {/* LEFT CONTENT (TEXT) */}
        <div className="space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1 text-xs font-medium text-drcloudBlue shadow-soft">
            Trusted Cloud &amp; DevOps Training · 24/7 Support
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 leading-tight">
            Cloud Services &amp; Training
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-xl">
            Transform your business and career with cloud services, DevOps,
            training, and CSR initiatives. Join thousands building their cloud
            careers through our services and DevOps expertise.
          </p>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => navigate('/enquiry')}
              className="drcloud-pill-primary text-sm !text-white"
            >
              Start Learning Today
            </button> 
            <button
              type="button"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className="text-sm px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition duration-200"
            >
              View Our Services
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 justify-items-center">
            <StatCard label="Students Enrolled" value="1200+" />
            <StatCard label="Success Rate" value="98%" />
            <StatCard label="AWS Services" value="50+" />
            <StatCard label="Support" value="24/7" />
          </div>
        </div>

        {/* RIGHT SIDE IMAGES (PERSON + ROCKET) */}
        <div className="relative hidden md:block w-full h-[450px]">

          {/* Person + Laptop */}
          <img
            src={personImg}
            alt="Cloud Illustration"
            className="absolute top-6 -right-20 w-[520px] object-contain"
          />

          {/* Rocket tilted above laptop left corner */}
          <img
          src={rocketImg}
          alt="Rocket"
          className="absolute -top-10 right-[420px] w-20 md:w-23 rotate-[-35deg] z-20 rocket-launch"
        />

        </div>

      </section>

      {/* Services - three boxes */}
      <section id="services" className={`drcloud-container py-10 md:py-14 ${SECTION_CLASS}`}>
        <div className="text-center space-y-3 mb-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-slate-900">Our </span>
            <span className="text-drcloudBlue">Services</span>
          </h2>
          <p className="text-sm md:text-lg text-slate-600 max-w-2xl mx-auto">
            Learn modern technologies and prepare confidently for today&apos;s IT
            careers with our comprehensive courses, cloud solutions, and other
            value-added services.
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
              'Infrastructure as Code',
              'CSR Project Training'
            ]}
            buttonLabel="Read More"
            onClick={() => navigate('/training')}
          />
          <ServiceCard
            icon={cloudIcon}
            title="Cloud Services"
            description="Scalable and secure services designed to store data, run applications, and manage infrastructure efficiently."
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
            description="Enhance your learning experience with comprehensive support designed for real-world success."
            bullets={[
              'Expert mentorship',
              'Industry-focused curriculum',
              'Ongoing career guidance',
              'Skill development support'
            ]}
            buttonLabel="Read More"
            onClick={() => navigate('/other-services')}
          />
        </div>
      </section>

      {/* About Us */}
      <section id="about" className={`drcloud-container py-10 md:py-14 space-y-16 ${SECTION_CLASS}`}>
        <div className="space-y-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-slate-900">About </span>
            <span className="text-drcloudBlue">DrCloud</span>
          </h2>
          <p className="text-sm md:text-xl text-slate-600 max-w-3xl mx-auto">
            DrCloud is dedicated to empowering individuals with the skills and
            knowledge needed to excel in the cloud computing and DevOps
            landscape. Our mission is to provide high-quality, accessible
            education that bridges the gap between theory and practice, enabling
            our students to achieve their career goals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 justify-items-center">
          {PILLARS.map((p) => (
            <div
              key={p.title}
              className="w-[250px] h-[250px] flex flex-col items-center justify-center text-center rounded-full bg-white/10 shadow-xl backdrop-blur-xl border border-white/20 p-6 transition duration-300 hover:bg-white/20 hover:shadow-2xl"
            >
              <img src={p.icon} alt={p.title} className="w-12 h-12 mb-3 object-contain" />
              <h3 className="text-lg md:text-xl font-semibold text-slate-900">{p.title}</h3>
              <p className="text-sm text-slate-600">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="space-y-12 mt-32 md:mt-36">
          <div className="text-center space-y-8">
            <h3 className="text-4xl md:text-5xl font-bold">
              <span className="text-slate-900">What </span>
              <span className="text-drcloudBlue">They Say</span>
            </h3>
            <p className="text-base md:text-xl text-slate-600 mb-12">
              What our students and professionals who have trusted DrCloud for
              their career growth say about us.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="drcloud-card px-8 py-12 flex flex-col justify-between">
                <p className="text-sm text-slate-600 mb-4">{t.quote}</p>
                <div className="mt-auto">
                  <div className="text-sm font-semibold text-slate-900">{t.name}</div>
                  <div className="text-xs text-drcloudBlue">{t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section id="contact" className={`drcloud-container py-10 md:py-14 ${SECTION_CLASS}`}>

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

        {/* Two Boxes */}
        <div className="grid gap-10 md:grid-cols-2 items-start mt-10">

          {/* Left Box */}
          <div className="drcloud-card px-6 py-6 space-y-4 flex flex-col h-full">
            <h3 className="text-lg font-bold text-slate-900">
              Get Started Today
            </h3>

            <p className="text-sm text-slate-600">
              Fill out our quick enquiry form to let us know your interests. Our
              team will connect with you to recommend the best course and path.
            </p>

            <ul className="text-sm text-slate-600 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-yellow-500 font-bold">✓</span>
                <span>Personalized learning recommendations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-500 font-bold">✓</span>
                <span>Free guidance from our experts</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-500 font-bold">✓</span>
                <span>Career pathway planning</span>
              </li>
            </ul>

            <div className="flex justify-center pt-4 mt-auto">
              <button
                type="button"
                onClick={() => navigate('/enquiry')}
                className="drcloud-pill-primary text-sm !text-white"
              >
                Open Enquiry Form
              </button>
            </div>
          </div>

          {/* Right Box */}
          <div className="space-y-4 drcloud-card px-6 py-6 flex flex-col h-full">
            <h3 className="text-lg font-bold text-slate-900">
              Get in Touch
            </h3>

            <p className="text-sm text-slate-600">
              Our team is here to help you every step of the way. Whether you are
              just starting or looking to advance your existing skills, we will
              create a personalized learning path for you.
            </p>

            <ul className="space-y-4 text-sm text-slate-600">
              <li className="flex items-center gap-3">
                <img src={emailIcon} alt="Email" className="w-5 h-5" />
                <div>
                  <div className="font-semibold text-slate-900">Email:</div>
                  <div>support@drcloud.co.in</div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <img src={callIcon} alt="Call" className="w-5 h-5" />
                <div>
                  <div className="font-semibold text-slate-900">Call Us:</div>
                  <div>+91-842-115-0803</div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <img src={locationIcon} alt="Location" className="w-5 h-5" />
                <div>
                  <div className="font-semibold text-slate-900">Visit Us:</div>
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

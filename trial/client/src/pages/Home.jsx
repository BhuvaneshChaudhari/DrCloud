import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import personImg from '../assets/person.png';
import rocketImg from '../assets/rocket.png';

const StatCard = ({ label, value }) => (
  <div className="drcloud-card px-6 py-5 flex flex-col gap-1 items-start">
    <div className="text-2xl font-semibold text-slate-900">{value}</div>
    <div className="text-sm text-slate-600">{label}</div>
  </div>
);

const ServiceCard = ({ title, description, bullets, buttonLabel, onClick }) => (
  <div className="drcloud-card px-6 py-7 space-y-4">
    <div className="flex items-center gap-3">
      <div className="h-9 w-9 rounded-2xl bg-sky-100 flex items-center justify-center text-drcloudBlue text-xl">
        🎓
      </div>
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
    </div>
    <p className="text-sm text-slate-600">{description}</p>
    <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
      {bullets.map((b) => (
        <li key={b}>{b}</li>
      ))}
    </ul>
    <button
      type="button"
      onClick={onClick}
      className="mt-2 drcloud-pill-primary text-sm"
    >
      {buttonLabel}
    </button>
  </div>
);

const PILLARS = [
  { title: 'Mission-Driven', body: "We're committed to bridging the skills gap in cloud computing and helping professionals excel in the digital transformation era." },
  { title: 'Community Focus', body: 'Building a supportive learning community where students and instructors collaborate and grow together.' },
  { title: 'Innovation First', body: 'We stay ahead of industry trends, constantly updating our curriculum with the latest technologies and best practices.' },
  { title: 'Career Growth', body: 'Our programs are designed to accelerate career advancement with practical skills that employers value.' }
];

const TESTIMONIALS = [
  { name: 'Atharva Gawali', company: 'Johnson Controls Placement', quote: "DrCloud's expert training and placement support helped me land a position at Johnson Controls, a global leader in smart building technologies and automation. The hands-on skills, mentorship, and industry connections gave me the confidence to excel at interviews and adapt quickly in my professional role." },
  { name: 'Raunak', company: 'TalenIQ Placement', quote: "DrCloud's practical cloud and DevOps training made a real difference in my career journey. Thanks to expert guidance and focused placement support, I was placed at TalenIQ, a fast-growing company redefining employability through digital solutions." },
  { name: 'Trupti Wankhede', company: 'Johnson Controls Placement', quote: "Thanks to DrCloud's comprehensive training and dedicated placement support, I secured my role at Johnson Controls, a global leader in smart building technologies and sustainable solutions." }
];

const SECTION_CLASS = 'scroll-mt-20';

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
            Cloud Services &amp; DevOps
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
              className="drcloud-pill-primary text-sm"
            >
              Start Learning Today
            </button>
            <button
              type="button"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className="drcloud-pill-outline text-sm"
            >
              View Our Services
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
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
            className="absolute bottom-0 right-0 w-[520px] object-contain"
          />

          {/* Rocket tilted above laptop left corner */}
          <img
            src={rocketImg}
            alt="Rocket"
            className="absolute top-3 right-[420px] w-20 md:w-24 rotate-[-35deg] z-20"
          />

        </div>

      </section>

      {/* Services - three boxes */}
      <section id="services" className={`drcloud-container py-10 md:py-14 ${SECTION_CLASS}`}>
        <div className="text-center space-y-2 mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
            Our Services
          </h2>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
            Learn modern technologies and prepare confidently for today&apos;s IT
            careers with our comprehensive courses, cloud solutions, and other
            value-added services.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <ServiceCard
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
      <section id="about" className={`drcloud-container py-10 md:py-14 space-y-12 ${SECTION_CLASS}`}>
        <div className="space-y-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
            About DrCloud
          </h2>
          <p className="text-sm md:text-base text-slate-600 max-w-3xl mx-auto">
            DrCloud is dedicated to empowering individuals with the skills and
            knowledge needed to excel in the cloud computing and DevOps
            landscape. Our mission is to provide high-quality, accessible
            education that bridges the gap between theory and practice, enabling
            our students to achieve their career goals.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {PILLARS.map((p) => (
            <div key={p.title} className="drcloud-card px-5 py-6 space-y-2">
              <h3 className="text-base font-semibold text-slate-900">{p.title}</h3>
              <p className="text-sm text-slate-600">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <div className="text-center space-y-1">
            <h3 className="text-xl md:text-2xl font-semibold text-slate-900">
              What They Say
            </h3>
            <p className="text-sm md:text-base text-slate-600">
              What our students and professionals who have trusted DrCloud for
              their career growth say about us.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="drcloud-card px-5 py-6 flex flex-col justify-between">
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
        <div className="grid gap-10 md:grid-cols-[1.2fr,1fr] items-start">
          <div className="space-y-5">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
              Start Your Cloud Journey
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-xl">
              Ready to transform your career? Get in touch with our experts and
              discover the perfect learning path for you.
            </p>
            <div className="drcloud-card px-6 py-6 space-y-4">
              <h3 className="text-base font-semibold text-slate-900">
                Get Started Today
              </h3>
              <p className="text-sm text-slate-600">
                Fill out our quick enquiry form to let us know your interests. Our
                team will connect with you to recommend the best course and path.
              </p>
              <button
                type="button"
                onClick={() => navigate('/enquiry')}
                className="drcloud-pill-primary text-sm self-start"
              >
                Open Enquiry Form
              </button>
            </div>
          </div>

          <div className="space-y-4 drcloud-card px-6 py-6">
            <h3 className="text-base font-semibold text-slate-900">Get in Touch</h3>
            <p className="text-sm text-slate-600">
              Our team is here to help you every step of the way. Whether you are
              just starting or looking to advance your existing skills, we will
              create a personalized learning path for you.
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><span className="font-semibold">Email:</span> support@drcloud.co.in</li>
              <li><span className="font-semibold">Call Us:</span> +91-842-115-0803</li>
              <li><span className="font-semibold">Visit Us:</span> S. B. Patil Road, Ravet, Pune, MH 411044</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

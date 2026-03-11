import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ title, description, bullets, buttonLabel, onClick }) => (
  <div className="drcloud-card px-6 py-4 space-y-4">
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

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="drcloud-container py-10 md:py-14">
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
    </div>
  );
};

export default Services;
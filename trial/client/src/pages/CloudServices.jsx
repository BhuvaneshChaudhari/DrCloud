import { useNavigate } from 'react-router-dom';

const CloudCard = ({ title, description, bullets }) => {
  const navigate = useNavigate();
  return (
    <div className="drcloud-card px-6 py-6 space-y-3 flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold text-slate-900 mb-1">{title}</h3>
        <p className="text-sm text-slate-600 mb-2">{description}</p>
        <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>
      <button
        type="button"
        onClick={() => navigate('/enquiry')}
        className="mt-3 drcloud-pill-primary text-sm self-start"
      >
        Get Started
      </button>
    </div>
  );
};

const CloudServices = () => {
  return (
    <div className="drcloud-container py-10 md:py-14">
      <div className="text-center space-y-2 mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
          Cloud Based Services
        </h2>
        <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
          We offer advanced and secure cloud computing solutions tailored to
          your needs. Our services include scalable IaaS, PaaS, and SaaS,
          enabling enhanced operations, performance, and seamless scalability.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <CloudCard
          title="Cloud"
          description="Advanced and secure cloud computing solutions tailored to your business."
          bullets={[
            'IaaS, PaaS & SaaS',
            'Optimized operations and efficiency',
            'Seamless scalability'
          ]}
        />
        <CloudCard
          title="DevOps"
          description="DevOps services that streamline software delivery through automation and monitoring."
          bullets={[
            'CI/CD pipeline setup',
            'Automation & observability',
            'Faster releases with higher quality'
          ]}
        />
        <CloudCard
          title="Big Data"
          description="Big data solutions for analytics, warehousing, and data-driven decisions."
          bullets={[
            'ETL & data warehousing',
            'Real-time analytics',
            'Machine learning integration'
          ]}
        />
      </div>
    </div>
  );
};

export default CloudServices;


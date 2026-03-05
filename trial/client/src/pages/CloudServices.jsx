import { useNavigate } from 'react-router-dom';

const CloudCard = ({ title, description, bullets }) => {
  return (
    <div className="drcloud-card px-6 py-6 space-y-3 flex flex-col min-h-80">
      <div className="flex-1">
        <h3 className="text-2xl font-bold text-slate-900 mb-1 text-center">
          {title}
        </h3>

        <p className="text-sm text-slate-600 mb-2 text-center">
          {description}
        </p>

        <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const CloudServices = () => {
  const navigate = useNavigate();

  return (
    <div className="drcloud-container py-10 md:py-14">
      <div className="text-center space-y-8 mb-8">
        <h2 className="text-4xl md:text-5xl font-bold">
          <span className="text-slate-900">Cloud Based </span>
          <span className="text-drcloudBlue">Services</span>
        </h2>

        <p className="text-sm md:text-xl text-slate-600 max-w-2xl mx-auto">
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

      <div className="text-center mt-12 space-y-4">
        <p className="text-base md:text-2xl text-slate-600">
          To know more about services, click below
        </p>

        <button
          type="button"
          onClick={() => navigate('/enquiry')}
          className="drcloud-pill-primary text-sm !text-white"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default CloudServices;
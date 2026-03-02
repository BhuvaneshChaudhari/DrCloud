import { useNavigate } from 'react-router-dom';

const OtherCard = ({ title, description, bullets }) => {
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

const OtherServices = () => {
  return (
    <div className="drcloud-container py-10 md:py-14">
      <div className="text-center space-y-2 mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
          Our Services
        </h2>
        <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
          Discover additional services that support your learning journey and
          career growth.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <OtherCard
          title="Expert Instructors"
          description="Learn from industry professionals with years of real-world experience in cloud and DevOps."
          bullets={['Real-world insights', 'Hands-on mentoring', 'Practical guidance']}
        />
        <OtherCard
          title="Certification Support"
          description="Get comprehensive preparation for AWS, Azure, GCP, and other industry-recognized certifications."
          bullets={['Exam-focused content', 'Practice tests', 'Doubt-clearing sessions']}
        />
        <OtherCard
          title="Hands-on Labs"
          description="Practice with real cloud environments and build projects you can showcase to employers."
          bullets={['Sandbox access', 'Guided labs', 'Real project scenarios']}
        />
        <OtherCard
          title="Placement Support"
          description="We support you even after you complete your course to accelerate your career."
          bullets={['Interview preparation', 'Resume building', 'Placement assistance']}
        />
        <OtherCard
          title="One to One Mentorship"
          description="Personalised mentorship for your chosen course, going deep into topics with industry experts."
          bullets={['1:1 sessions', 'Career guidance', 'Learning roadmaps']}
        />
        <OtherCard
          title="Community & Networking"
          description="Join a vibrant community of learners and professionals to collaborate, share knowledge, and grow."
          bullets={['Community events', 'Peer learning', 'Industry networking']}
        />
      </div>
    </div>
  );
};

export default OtherServices;


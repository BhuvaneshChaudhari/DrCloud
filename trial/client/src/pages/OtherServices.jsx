import { useNavigate } from "react-router-dom";

// Import icons from assets folder
import expertInstructor from "../assets/expert-instructor.png";
import certificationSupport from "../assets/certification-support.png";
import handsOnLabs from "../assets/hands-on-labs.png";
import placementSupport from "../assets/placement-support.png";
import oneToOneMentorship from "../assets/one-to-one-mentorship.png";
import communityNetworking from "../assets/community-networking.png";

const OtherCard = ({ icon, title, description, bullets }) => {
  return (
    <div
      className="drcloud-card px-6 py-6 space-y-3 flex flex-col min-h-80 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
      data-aos="fade-up"
    >

      {/* Icon */}
      <div className="flex justify-center mb-0.5">
        <img
          src={icon}
          alt={title}
          className="w-16 h-16 object-contain mx-auto transition duration-300 hover:scale-110"
        />
      </div>

      <div className="flex-1">

        {/* Title */}
        <h3 className="text-2xl font-bold text-slate-900 mb-3 text-center">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-600 mb-4">
          {description}
        </p>

        {/* Bullet Points */}
        <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
          {bullets.map((b, index) => (
            <li key={index}>{b}</li>
          ))}
        </ul>

      </div>
    </div>
  );
};

const OtherServices = () => {
  const navigate = useNavigate();

  return (
    <div className="drcloud-container py-10 md:py-14">

      {/* Heading */}
      <div
        className="text-center space-y-6 mb-10"
        data-aos="fade-up"
      >
        <h2 className="text-4xl md:text-5xl font-bold">
          <span className="text-slate-900">Other </span>
          <span className="text-drcloudBlue">Services</span>
        </h2>

        <p className="text-sm md:text-xl text-slate-600 max-w-2xl mx-auto">
          Discover additional services that support your learning journey and
          career growth.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid gap-6 md:grid-cols-3">

        <OtherCard
          icon={expertInstructor}
          title="Expert Instructors"
          description="Learn from industry professionals with years of real-world experience in cloud and DevOps."
          bullets={[
            "Real-world insights",
            "Hands-on mentoring",
            "Practical guidance"
          ]}
        />

        <OtherCard
          icon={certificationSupport}
          title="Certification Support"
          description="Get comprehensive preparation for AWS, Azure, GCP, and other industry-recognized certifications."
          bullets={[
            "Exam-focused content",
            "Practice tests",
            "Doubt-clearing sessions"
          ]}
        />

        <OtherCard
          icon={handsOnLabs}
          title="Hands-on Labs"
          description="Practice with real cloud environments and build projects you can showcase to employers."
          bullets={[
            "Sandbox access",
            "Guided labs",
            "Real project scenarios"
          ]}
        />

        <OtherCard
          icon={placementSupport}
          title="Placement Support"
          description="We support you even after you complete your course to accelerate your career."
          bullets={[
            "Interview preparation",
            "Resume building",
            "Placement assistance"
          ]}
        />

        <OtherCard
          icon={oneToOneMentorship}
          title="One to One Mentorship"
          description="Personalised mentorship for your chosen course, going deep into topics with industry experts."
          bullets={[
            "1:1 sessions",
            "Career guidance",
            "Learning roadmaps"
          ]}
        />

        <OtherCard
          icon={communityNetworking}
          title="Community & Networking"
          description="Join a vibrant community of learners and professionals to collaborate, share knowledge, and grow."
          bullets={[
            "Community events",
            "Peer learning",
            "Industry networking"
          ]}
        />

      </div>

      {/* Button Section */}
      <div
        className="text-center mt-12 space-y-4"
        data-aos="fade-up"
      >
        <p className="text-base md:text-2xl text-slate-600">
          To know more about services, click below
        </p>

        <button
          type="button"
          onClick={() => navigate("/enquiry")}
          className="drcloud-pill-primary text-sm !bg-yellow-500 !text-white"
        >
          Get Started
        </button>
      </div>

    </div>
  );
};

export default OtherServices;
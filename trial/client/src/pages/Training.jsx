import { useNavigate } from 'react-router-dom';
import awsIcon from "../assets/aws-icon.png";
import azureIcon from "../assets/azure-icon.png";
import gcpIcon from "../assets/gcp-icon.png";
import dockerIcon from "../assets/docker-icon.png";
import devopsIcon from "../assets/devops-icon.png";
import iacIcon from "../assets/iac-icon.png";
import csrIcon from "../assets/csr-icon.png";

const TrainingCard = ({ icon, title, description, bullets }) => {
  return (
    <div
      className="drcloud-card px-6 py-6 space-y-3 flex flex-col min-h-80 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
      data-aos="fade-up"
    >
      <div className="flex-1">
        <img
          src={icon}
          alt={title}
          className="w-18 h-16 mx-auto mb-4 transition duration-300 hover:scale-110"
        />

        <h3 className="text-2xl font-bold text-slate-900 mb-1 text-center">
          {title}
        </h3>

        <p className="text-sm text-slate-600 mb-2">
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

const Training = () => {
  const navigate = useNavigate();

  return (
    <div className="drcloud-container py-10 md:py-14">

      {/* Heading */}
      <div
        className="text-center space-y-8 mb-8"
        data-aos="fade-up"
      >
        <h2 className="text-4xl md:text-5xl font-bold">
          <span className="text-slate-900">Our </span>
          <span className="text-drcloudBlue">Courses</span>
        </h2>

        <p className="text-sm md:text-xl text-slate-600 max-w-2xl mx-auto">
          Comprehensive cloud and DevOps training designed to accelerate your
          career with hands-on practice, expert mentoring, and placement
          support.
        </p>
      </div>

      {/* Main Courses */}
      <div className="grid gap-6 md:grid-cols-3">

        <TrainingCard
          icon={awsIcon}
          title="AWS"
          description="Comprehensive AWS certification training covering core services and architectures."
          bullets={[
            'Hands-on Practice Sandbox',
            'Cloud Practitioner & AI Practitioner',
            'Expert Training',
            'Placement Assistance'
          ]}
        />

        <TrainingCard
          icon={azureIcon}
          title="Azure"
          description="Azure certification training focused on AZ-900 and AZ-104 with real-world labs."
          bullets={[
            'Hands-on Practice Sandbox',
            'Cloud Practitioner & AI Practitioner',
            'Expert Training',
            'Placement Assistance'
          ]}
        />

        <TrainingCard
          icon={gcpIcon}
          title="GCP"
          description="Master deploying and managing scalable systems on Google Cloud Platform."
          bullets={[
            'Hands-on Practice Sandbox',
            'Cloud Practitioner & AI Practitioner',
            'Expert Training',
            'Placement Assistance'
          ]}
        />

        <TrainingCard
          icon={dockerIcon}
          title="Docker and Kubernetes"
          description="Master containerization, orchestration, and CI/CD with Docker and Kubernetes."
          bullets={[
            'Hands-on Practice Sandbox',
            'Expert Training',
            'Placement Assistance'
          ]}
        />

        <TrainingCard
          icon={devopsIcon}
          title="DevOps Bootcamp"
          description="End-to-end CI/CD pipelines and DevOps automation with real projects."
          bullets={[
            'End-to-End CI/CD Implementation',
            'Containerization & Orchestration',
            'Placement Assistance'
          ]}
        />

        <TrainingCard
          icon={iacIcon}
          title="Infrastructure as Code"
          description="Provision and manage cloud infrastructure using modern IaC tools."
          bullets={[
            'Terraform',
            'Ansible',
            'Git Workflows',
            'Placement Assistance'
          ]}
        />

      </div>

      {/* CSR Card */}
      <div className="grid gap-6 md:grid-cols-3 mt-8">

        <div className="md:col-start-2">

          <TrainingCard
            icon={csrIcon}
            title="CSR Project Training"
            description="CSR-driven cloud and DevOps projects with real community impact."
            bullets={[
              'Hands-on Live CSR Projects',
              'Cloud & DevOps Skill Application',
              'Mentorship by Industry Experts',
              'Certification Support',
              'Career Guidance & Placement Assistance'
            ]}
          />

        </div>

      </div>

      {/* CTA */}
      <div
        className="text-center mt-12 space-y-4"
        data-aos="fade-up"
      >
        <p className="text-base md:text-2xl text-slate-600">
          To know more about courses, click below
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

export default Training;
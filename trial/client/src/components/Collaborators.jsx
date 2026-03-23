import collab1 from '../assets/collab1.png';
import collab2 from '../assets/collab2.png';
import collab3 from '../assets/collab3.jpg';
import collab4 from '../assets/collab4.jpeg';   
import collab5 from '../assets/collab5.png';   

import TiltCard from "../components/TiltCard";

const logos = [collab1, collab2, collab3, collab4, collab5];
const collaborators = [...logos, ...logos, ...logos, ...logos];

const Collaborators = () => {
  return (
    <section className="drcloud-container py-14 md:py-20">

      {/* 🔵 Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center">
        Our <span className="text-drcloudBlue">Collaborators</span>
      </h2>

      {/* 🔵 Description */}
      <p className="text-center text-gray-600 mt-4 mb-12 max-w-2xl mx-auto">
        We collaborate with leading enterprises, technology partners, and training institutions to deliver scalable cloud solutions, DevOps excellence, and industry-focused skill development programs.
      </p>

      {/* 🔵 Logo Slider */}
      <div className="overflow-hidden relative" style={{ perspective: "1200px" }}>
        <div className="flex animate-scroll-left gap-12 w-max">
          {collaborators.map((logo, idx) => (
            <TiltCard key={idx}>
              <img
                src={logo}
                alt={`Collaborator ${idx + 1}`}
                className="object-contain h-16"
                style={{ transform: "translateZ(20px)" }}
              />
            </TiltCard>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Collaborators;
import { useRef } from "react";

function TiltCard({ children }) {
  const innerRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = innerRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 25;
    const rotateY = (x - centerX) / 25;

    card.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.05)
    `;
  };

  const handleMouseLeave = () => {
    innerRef.current.style.transform =
      "rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div
      className="flex-shrink-0 w-32 h-20 flex items-center justify-center"
      style={{ perspective: "1200px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* INNER WRAPPER (this gets tilted, NOT the scrolling one) */}
      <div
        ref={innerRef}
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.2s ease-out",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default TiltCard;
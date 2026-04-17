import { useEffect, useRef, useState } from "react";
import ilmtecLogo from "../assets/ilmtec_solutions_logo.jpeg";
import drcloudLogo from "../assets/drlogo1.png";   // your logo
import talenlioLogo from "../assets/talenlio.png";

/* ─────────────────────── Keyframe injection ─────────────────────── */
const KEYFRAMES = `
  @keyframes spinCW  { to { transform: rotate(360deg); } }
  @keyframes spinCCW { to { transform: rotate(-360deg); } }
  @keyframes pulse   { 0%,100% { opacity:.5; transform:scale(1); }
                       50%     { opacity:1;  transform:scale(1.08); } }
  @keyframes dotFwd  { 0%   { left:0%;     opacity:0; }
                       8%   { opacity:1; }
                       92%  { opacity:1; }
                       100% { left:calc(100% - 6px); opacity:0; } }
  @keyframes dotBwd  { 0%   { left:calc(100% - 6px); opacity:0; }
                       8%   { opacity:1; }
                       92%  { opacity:1; }
                       100% { left:0%;   opacity:0; } }
  @keyframes badgeSpin { to { transform:rotate(360deg); } }
  @keyframes fadeUp  { from { opacity:0; transform:translateY(18px); }
                       to   { opacity:1; transform:translateY(0); } }
  @keyframes countUp { from { opacity:0; transform:translateY(10px); }
                       to   { opacity:1; transform:translateY(0); } }
  @keyframes orbitCW { to { transform: rotate(360deg) translateX(54px); } }
  @keyframes orbitCCW{ to { transform: rotate(-360deg) translateX(54px); } }
`;

function injectKeyframes() {
  if (document.getElementById("collab-kf")) return;
  const s = document.createElement("style");
  s.id = "collab-kf";
  s.textContent = KEYFRAMES;
  document.head.appendChild(s);
}

/* ─────────────────────── Brand config ───────────────────────────── */
const BRANDS = [
  {
    key: "ilmtec",
    label: "ILMTEC",
    sub: "Institute of Learning",
    color: "#0ea5e9",
    ringColor: "#0ea5e9",
    dir: "CW",
    logo: ilmtecLogo,
  },
  {
    key: "drcloud",
    label: "DrCloud",
    sub: "Cloud & DevOps",
    color: "#2563eb",
    ringColor: "#2563eb",
    dir: "CCW",
    isCentral: true,
    logo: drcloudLogo,
  },
  {
    key: "talenlio",
    label: "Talenlio",
    sub: "Career Platform",
    color: "#7c3aed",
    ringColor: "#7c3aed",
    dir: "CW",
    logo: talenlioLogo,
  },
];

/* ─────────────────────── Stats config ───────────────────────────── */
const STATS = [
  { value: "1000+", label: "Students Trained" },
  { value: "540+", label: "Placements" },
  { value: "30+", label: "Workshops" },
  { value: "20+", label: "Industry Mentors" },
];

/* ─────────────────────── Sub-components ────────────────────────── */

/** Spinning conic-gradient ring around a brand logo */
const BrandRing = ({ brand, size = 108 }) => {
  const inner = size - 10;
  const spinAnim = brand.dir === "CCW"
    ? "spinCCW 3s linear infinite"
    : "spinCW 3s linear infinite";

  return (
    <div style={{ position: "relative", width: size, height: size, flexShrink: 0 }}>
      {/* Outer ring — spinning conic gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          padding: 3,
          background: `conic-gradient(${brand.ringColor} 0deg 100deg, transparent 100deg 360deg)`,
          animation: spinAnim,
          WebkitMaskImage: "linear-gradient(#fff 0 0)",
          maskImage: "linear-gradient(#fff 0 0)",
        }}
      />
      {/* White inner disc */}
      <div
        style={{
          position: "absolute",
          inset: 6,
          overflow: "hidden",
          borderRadius: "50%",
          background: "#fff",
          border: "1px solid #e2e8f0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 2,
          boxShadow: brand.isCentral
            ? `0 0 0 3px ${brand.color}22, 0 4px 20px ${brand.color}18`
            : "0 2px 12px rgba(0,0,0,0.06)",
        }}
      >
        <img
          src={brand.logo}
          alt={brand.label}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "50%",
          }}
        />

      </div>
    </div>
  );
};

/** Animated connector between two brands */
const Connector = ({ leftColor, rightColor, wide = false }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8,
      width: wide ? 140 : 100,
      marginLeft: -20,
      marginRight: -20,
      flexShrink: 0,
      position: "relative",
    }}
  >
    {/* Top wire */}
    <div style={{ width: "100%", height: 1, position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, background: "#e2e8f0" }} />
      <div
        style={{
          position: "absolute",
          top: -3,
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: leftColor,
          animation: "dotFwd 2s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: -3,
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: rightColor,
          animation: "dotBwd 2s ease-in-out infinite 1s",
        }}
      />
    </div>

    {/* × badge */}
    <div
      style={{
        width: 48,
        height: 48,
        borderRadius: "50%",
        background: "#fff",
        border: "1px solid #e2e8f0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 18,
        fontWeight: 600,
        color: "#64748b",
        boxShadow: "0 1px 8px rgba(0,0,0,0.06)",
        position: "relative",
        animation: "pulse 2.5s ease-in-out infinite",
        flexShrink: 0,
      }}
    >
      ×
      {/* Dashed orbit ring */}
      <div
        style={{
          position: "absolute",
          inset: -10,
          borderRadius: "50%",
          border: "1px dashed #cbd5e1",
          animation: "badgeSpin 8s linear infinite",
          pointerEvents: "none",
        }}
      />
    </div>

    {/* Bottom wire */}
    <div style={{ width: "100%", height: 1, position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, background: "#e2e8f0" }} />
      <div
        style={{
          position: "absolute",
          top: -3,
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: rightColor,
          animation: "dotFwd 2s ease-in-out infinite 0.5s",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: -3,
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: leftColor,
          animation: "dotBwd 2s ease-in-out infinite 1.5s",
        }}
      />
    </div>
  </div>
);

/** Individual stat pill */
const StatPill = ({ stat, delay }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 4,
      animation: `countUp 0.6s ease both`,
      animationDelay: `${delay}ms`,
    }}
  >
    <span
      style={{
        fontSize: 26,
        fontWeight: 700,
        lineHeight: 1,
        color: stat.color,
        letterSpacing: "-0.02em",
      }}
    >
      {stat.value}
    </span>
    <span
      style={{
        fontSize: 11,
        color: "#94a3b8",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
      }}
    >
      {stat.label}
    </span>
  </div>
);

/** Vertical divider between stats */
const StatDivider = () => (
  <div
    style={{
      width: 1,
      height: 36,
      background: "#e2e8f0",
      alignSelf: "center",
    }}
  />
);

/* ─────────────────────── Main component ───────────────────────── */
const Collaborators = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);
  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    injectKeyframes();
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="drcloud-container py-14 md:py-20">

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center">
        Our <span className="text-drcloudBlue">Collaborators</span>
      </h2>

      {/* Description */}
      <p className="text-center text-gray-500 mt-4 mb-14 max-w-2xl mx-auto text-sm md:text-base">
        We partner with leading institutions, cloud platforms, and career
        networks to deliver industry-ready programs and real-world outcomes.
      </p>

      {/* ── Brand stage ── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? 40 : 30,
          flexWrap: "wrap",
          rowGap: 32,
        }}
      >
        {/* ILMTEC */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 10,
            animation: visible ? "fadeUp 0.7s ease both" : "none",
            animationDelay: "0ms",
          }}
        >
          <BrandRing brand={BRANDS[0]} size={isMobile ? 100 : 130} />
          <span style={{ fontSize: 12, fontWeight: 600, color: "#475569", letterSpacing: "0.05em" }}>
            {BRANDS[0].label}
          </span>
          <span style={{ fontSize: 10, color: "#94a3b8" }}>{BRANDS[0].sub}</span>
        </div>

        {/* Connector L */}
        {isMobile ? (
          <div style={{ fontSize: 20, color: "#64748b" }}>×</div>
        ) : (
          <Connector leftColor={BRANDS[0].color} rightColor={BRANDS[1].color} />
        )}

        {/* DrCloud (central — larger) */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 10,
            animation: visible ? "fadeUp 0.7s ease both" : "none",
            animationDelay: "120ms",
            zIndex: 1,
          }}
        >
          <BrandRing brand={BRANDS[1]} size={isMobile ? 130 : 170} />
          <span style={{ fontSize: 13, fontWeight: 700, color: BRANDS[1].color, letterSpacing: "0.04em" }}>
            {BRANDS[1].label}
          </span>
          <span style={{ fontSize: 10, color: "#94a3b8" }}>{BRANDS[1].sub}</span>
        </div>

        {/* Connector R */}
        {isMobile ? (
          <div style={{ fontSize: 20, color: "#64748b" }}>×</div>
        ) : (
          <Connector leftColor={BRANDS[1].color} rightColor={BRANDS[2].color} />
        )}

        {/* Talenlio */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 10,
            animation: visible ? "fadeUp 0.7s ease both" : "none",
            animationDelay: "240ms",
          }}
        >
          <BrandRing brand={BRANDS[2]} size={isMobile ? 100 : 130} />
          <span style={{ fontSize: 12, fontWeight: 600, color: "#475569", letterSpacing: "0.05em" }}>
            {BRANDS[2].label}
          </span>
          <span style={{ fontSize: 10, color: "#94a3b8" }}>{BRANDS[2].sub}</span>
        </div>
      </div>


      {/* ── Stats ── */}
      <div className="flex justify-center items-center gap-10 mt-14 flex-wrap">

        {STATS.map((stat, i) => (
          <div key={i} className="flex flex-col items-center text-center">

            <span className="text-2xl font-bold text-slate-900">
              {stat.value}
            </span>

            <span className="text-xs text-slate-500 tracking-widest uppercase mt-1">
              {stat.label}
            </span>

          </div>
        ))}

      </div>

      {/* ── Footer tagline ── */}
      <p
        style={{
          textAlign: "center",
          marginTop: 20,
          fontSize: 11,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#cbd5e1",
          animation: visible ? "fadeUp 0.8s 0.5s ease both" : "none",
        }}
      >
        Stronger together —{" "}
        <span
          style={{
            background: "linear-gradient(90deg, #0ea5e9, #2563eb, #7c3aed)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          education redefined
        </span>
      </p>

    </section>
  );
};

export default Collaborators;

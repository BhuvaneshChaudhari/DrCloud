import hyundai from "../assets/placed/hyundai.svg";
import siemens from "../assets/placed/siemens.png";
import genpact from "../assets/placed/genpact.png";
import lnt from "../assets/placed/L&T.png";
import tcs from "../assets/placed/tcs.png";

const companies = [
  hyundai,
  siemens,
  genpact,
  lnt,
  tcs,
];

// duplicate for seamless loop
const loopLogos = [...companies, ...companies];

const PlacedCompanies = () => {
  return (
    <div className="relative w-full overflow-hidden">

      {/* 🔥 FADE EDGES (cleaner) */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-16 md:w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 md:w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

      {/* 🔥 SCROLL TRACK */}
      <div className="flex items-center gap-10 md:gap-14 animate-scroll whitespace-nowrap">

        {loopLogos.map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt="company"
            className="
              h-6 md:h-8
              object-contain
              grayscale opacity-60
              hover:grayscale-0 hover:opacity-100 hover:scale-110
              transition duration-300 ease-in-out
            "
          />
        ))}

      </div>
    </div>
  );
};

export default PlacedCompanies;
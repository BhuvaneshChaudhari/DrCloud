import React from "react";

const pillars = [
  {
    title: "Mission-Driven",
    body:
      "We're committed to bridging the skills gap in cloud computing and helping professionals excel in the digital transformation era."
  },
  {
    title: "Community Focus",
    body:
      "Building a supportive learning community where students and instructors collaborate and grow together."
  },
  {
    title: "Innovation First",
    body:
      "We stay ahead of industry trends, constantly updating our curriculum with the latest technologies and best practices."
  },
  {
    title: "Career Growth",
    body:
      "Our programs are designed to accelerate career advancement with practical skills that employers value."
  }
];

const testimonials = [
  {
    name: "Atharva Gawali",
    company: "Johnson Controls Placement",
    quote:
      "DrCloud's expert training and placement support helped me land a position at Johnson Controls, a global leader in smart building technologies and automation. The hands-on skills, mentorship, and industry connections gave me the confidence to excel at interviews and adapt quickly in my professional role."
  },
  {
    name: "Raunak",
    company: "TalenIQ Placement",
    quote:
      "DrCloud's practical cloud and DevOps training made a real difference in my career journey. Thanks to expert guidance and focused placement support, I was placed at TalenIQ, a fast-growing company redefining employability through digital solutions."
  },
  {
    name: "Trupti Wankhede",
    company: "Johnson Controls Placement",
    quote:
      "Thanks to DrCloud's comprehensive training and dedicated placement support, I secured my role at Johnson Controls, a global leader in smart building technologies and sustainable solutions."
  }
];

const About = () => {
  return (
    <div
      className="drcloud-container py-10 md:py-14 space-y-12"
      data-aos="fade-up"
    >
      <section className="space-y-4 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
          About DrCloud
        </h2>
        <p className="text-sm md:text-base text-slate-600 max-w-3xl mx-auto">
          DrCloud is dedicated to empowering individuals with the skills and
          knowledge needed to excel in the cloud computing and DevOps
          landscape. Our mission is to provide high-quality, accessible
          education that bridges the gap between theory and practice, enabling
          our students to achieve their career goals.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
        {pillars.map((p) => (
          <div
            key={p.title}
            className="pillar-box w-[250px] h-[250px] flex flex-col items-center justify-center text-center rounded-full bg-white/10 shadow-xl backdrop-blur-xl border border-white/20 p-6"
          >
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              {p.title}
            </h3>
            <p className="text-xs text-slate-600 px-2">{p.body}</p>
          </div>
        ))}
      </section>

      <section className="space-y-4">
        <div className="text-center space-y-1">
          <h3 className="text-xl md:text-2xl font-semibold text-slate-900">
            What They Say
          </h3>
          <p className="text-sm md:text-base text-slate-600">
            What our students and professionals who have trusted DrCloud for
            their career growth say about us.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="drcloud-card px-5 py-6 flex flex-col justify-between"
            >
              <p className="text-sm text-slate-600 mb-4">{t.quote}</p>
              <div className="mt-auto">
                <div className="text-sm font-semibold text-slate-900">
                  {t.name}
                </div>
                <div className="text-xs text-drcloudBlue">
                  {t.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
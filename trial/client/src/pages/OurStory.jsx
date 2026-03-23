import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import founderImg from "../assets/founder.jpeg";

import Collaborators from '../components/Collaborators';

const EVENTS = [
  {
    year: "2022",
    title: "DrCloud Founded",
    description:
      "DrCloud started with a mission to empower students with practical cloud and DevOps skills."
  },
  {
    year: "2023",
    title: "First Training Batches",
    description:
      "Our first DevOps and AWS training batches graduated with hands-on labs."
  },
  {
    year: "2024",
    title: "Placement Success",
    description:
      "Students secured placements in companies including Johnson Controls."
  },
  {
    year: "2025",
    title: "Community Growth",
    description:
      "DrCloud expanded workshops and mentorship programs."
  }
];

const STATS = [
  { number: 500, label: "Students Trained" },
  { number: 120, label: "Placements" },
  { number: 20, label: "Workshops" },
  { number: 15, label: "Industry Mentors" }
];

const GALLERY = [
  "/events/event1.jpeg",
  "/events/event2.jpeg",
  "/events/event3.jpeg",
  "/events/event4.jpeg",
  "/events/event5.jpeg",
  "/events/event6.jpeg"
];

const OurStory = () => {

  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="drcloud-container py-12 space-y-24">

      {/* HERO */}
      <section className="text-center space-y-6" data-aos="fade-up">
        <h1 className="text-4xl md:text-5xl font-bold">
          <span className="text-slate-900">Our </span>
          <span className="text-drcloudBlue">Story</span>
        </h1>

        <p className="max-w-3xl mx-auto text-slate-600 text-lg">
          DrCloud was created to bridge the gap between academic learning
          and real-world cloud skills through hands-on training.
        </p>
      </section>


      {/* FOUNDER MESSAGE */}
      <section className="grid md:grid-cols-2 gap-10 items-center" data-aos="fade-right">

        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-slate-900">
            Message from the Founder
          </h2>

          <p className="text-slate-600">
            “Our mission is simple — empower students with real cloud
            experience so they can confidently step into the tech industry.”
          </p>

          <p className="font-semibold text-drcloudBlue">
            — Founder, DrCloud
          </p>
        </div>

        <div className="flex justify-center">
          <img
            src={founderImg}
            alt="DrCloud Founder"
            className="w-60 h-60 object-cover rounded-full shadow-lg transition duration-300 hover:scale-105"
          />
        </div>

      </section>


      {/* TIMELINE */}
      <section className="space-y-12" data-aos="fade-up">

        <div className="text-center">
          <h2 className="text-3xl font-bold">
            <span className="text-slate-900">Our </span>
            <span className="text-drcloudBlue">Journey</span>
          </h2>
        </div>

        <div className="relative max-w-3xl mx-auto">

          <div className="absolute left-3 top-0 w-1 h-full bg-drcloudBlue/30"></div>

          {EVENTS.map((event, index) => (
            <div key={index} className="relative pl-12 pb-10">

              <div className="absolute left-0 top-1 w-6 h-6 bg-drcloudBlue rounded-full border-4 border-white"></div>

              <div className="drcloud-card p-6 space-y-2">

                <div className="text-sm text-drcloudBlue font-semibold">
                  {event.year}
                </div>

                <h3 className="text-lg font-semibold text-slate-900">
                  {event.title}
                </h3>

                <p className="text-sm text-slate-600">
                  {event.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </section>


      {/* ACHIEVEMENT STATS */}
      <section ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

        {STATS.map((stat, index) => (
          <div key={index} className="drcloud-card p-6">

            <div className="text-3xl font-bold text-drcloudBlue">
              {inView && <CountUp end={stat.number} duration={2} />}+
            </div>

            <div className="text-sm text-slate-600 mt-1">
              {stat.label}
            </div>

          </div>
        ))}

      </section>


      {/* EVENT GALLERY */}
      <section className="space-y-10" data-aos="fade-up">

        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            DrCloud Moments
          </h2>
        </div>

        <PhotoProvider maskOpacity={0.9} photoClosable bannerVisible speed={() => 800}>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

            {GALLERY.map((img, index) => (
              <PhotoView src={img} key={index}>

                <div className="relative overflow-hidden rounded-xl cursor-pointer group">

                  <img
                    src={img}
                    alt="Event"
                    className="w-full h-60 object-cover transition duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition"></div>

                </div>

              </PhotoView>
            ))}

          </div>

        </PhotoProvider>

      </section>


      {/* WORKSHOP VIDEO */}
      <section className="space-y-8 text-center" data-aos="zoom-in">

        <h2 className="text-3xl font-bold text-slate-900">
          DrCloud Workshop Highlights
        </h2>

        <div className="aspect-video max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Workshop Video"
            allowFullScreen
          ></iframe>
        </div>

      </section>

      <Collaborators />

    </div>
  );
};

export default OurStory;
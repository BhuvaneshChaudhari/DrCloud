import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="drcloud-container py-10 md:py-14 grid gap-10 md:grid-cols-[1.2fr,1fr] items-start">
      <section className="space-y-5">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
          Start Your Cloud Journey
        </h2>
        <p className="text-sm md:text-base text-slate-600 max-w-xl">
          Ready to transform your career? Get in touch with our experts and
          discover the perfect learning path for you.
        </p>

        <div className="drcloud-card px-6 py-6 space-y-4">
          <h3 className="text-base font-semibold text-slate-900">
            Get Started Today
          </h3>
          <p className="text-sm text-slate-600">
            Fill out our quick enquiry form to let us know your interests. Our
            team will connect with you to recommend the best course and path.
          </p>
          <button
            type="button"
            onClick={() => navigate('/enquiry')}
            className="drcloud-pill-primary text-sm self-start"
          >
            Open Enquiry Form
          </button>
        </div>
      </section>

      <section className="space-y-4 drcloud-card px-6 py-6">
        <h3 className="text-base font-semibold text-slate-900">Get in Touch</h3>
        <p className="text-sm text-slate-600">
          Our team is here to help you every step of the way. Whether you are
          just starting or looking to advance your existing skills, we will
          create a personalized learning path for you.
        </p>
        <ul className="space-y-2 text-sm text-slate-600">
          <li>
            <span className="font-semibold">Email:</span> support@drcloud.co.in
          </li>
          <li>
            <span className="font-semibold">Call Us:</span> +91-842-115-0803
          </li>
          <li>
            <span className="font-semibold">Visit Us:</span> S. B. Patil Road,
            Ravet, Pune, MH 411044
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Contact;


import { useState } from 'react';
import apiClient from '../lib/apiClient.js';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  serviceType: '',
  message: ''
};

const Enquiry = () => {
  const [form, setForm] = useState(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    try {
      setSubmitting(true);

      const payload = {
        name: `${form.firstName} ${form.lastName}`.trim(),
        email: form.email,
        phone: form.phone,
        serviceType: form.serviceType,
        message: form.message
      };

      await apiClient.post('/api/enquiry', payload);

      setStatus({
        type: 'success',
        message: 'Thank you! Your enquiry has been submitted. We\'ll get back to you soon.'
      });

      setShowModal(true);
      setForm(initialState);

      setTimeout(() => setShowModal(false), 5000);

    } catch (error) {

      const message =
        error.response?.data?.message ||
        'Something went wrong while submitting your enquiry. Please try again.';

      setStatus({ type: 'error', message });
      setShowModal(true);

    } finally {
      setSubmitting(false);
    }
  };

  const SubmissionModal = () => {
    if (!showModal || !status) return null;

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">

        <div
          className="bg-white rounded-2xl shadow-2xl max-w-md w-full animate-slideUp"
        >

          <div className="p-8 text-center">

            {status.type === 'success' ? (
              <>
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-emerald-600 animate-checkmark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Request Submitted!
                </h3>

                <p className="text-slate-600 mb-6">
                  {status.message}
                </p>

                <p className="text-sm text-slate-500 mb-6">
                  Our team will contact you within 24 hours to discuss your learning goals.
                </p>
              </>
            ) : (
              <>
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Oops!
                </h3>

                <p className="text-slate-600 mb-6">
                  {status.message}
                </p>
              </>
            )}

            <button
              onClick={() => setShowModal(false)}
              className="drcloud-pill-primary text-sm w-full hover:scale-105 transition"
            >
              Close
            </button>

          </div>

        </div>
      </div>
    );
  };

  return (
    <div className="drcloud-container py-10 md:py-14 grid gap-10 md:grid-cols-[1.2fr,1fr] items-start">

      {/* FORM */}
      <section
        className="drcloud-card px-6 py-6"
        data-aos="fade-up"
      >

        <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-1">
          Enquiry Form
        </h2>

        <p className="text-sm text-slate-600 mb-5">
          Share your details and interests, and our support team will reach out
          with a personalized learning path.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>

          <div className="grid gap-4 md:grid-cols-2">

            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">
                First Name
              </label>

              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm bg-white/80 focus:outline-none focus:ring-2 focus:ring-drcloudBlue/40"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">
                Last Name
              </label>

              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm bg-white/80 focus:outline-none focus:ring-2 focus:ring-drcloudBlue/40"
              />
            </div>

          </div>

          <div className="grid gap-4 md:grid-cols-2">

            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm bg-white/80 focus:outline-none focus:ring-2 focus:ring-drcloudBlue/40"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">
                Phone
              </label>

              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm bg-white/80 focus:outline-none focus:ring-2 focus:ring-drcloudBlue/40"
              />
            </div>

          </div>

          <div>

            <label className="block text-xs font-medium text-slate-600 mb-1">
              Interested Service
            </label>

            <select
              name="serviceType"
              value={form.serviceType}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm bg-white/80 focus:outline-none focus:ring-2 focus:ring-drcloudBlue/40"
            >
              <option value="">Select a service</option>
              <option value="AWS">AWS</option>
              <option value="Azure">Azure</option>
              <option value="GCP">GCP</option>
              <option value="Docker & Kubernetes">Docker & Kubernetes</option>
              <option value="DevOps Bootcamp">DevOps Bootcamp</option>
              <option value="Infrastructure as Code">Infrastructure as Code</option>
              <option value="CSR Project Training">CSR Project Training</option>
              <option value="Cloud Services">Cloud Services</option>
              <option value="Other Services">Other Services</option>
            </select>

          </div>

          <div>

            <label className="block text-xs font-medium text-slate-600 mb-1">
              Message <span className="text-slate-400 font-normal">(Optional)</span>
            </label>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm bg-white/80 focus:outline-none focus:ring-2 focus:ring-drcloudBlue/40 resize-none"
            />

          </div>

          <button
            type="submit"
            disabled={submitting}
            className="drcloud-pill-primary text-sm disabled:opacity-70 disabled:cursor-not-allowed hover:scale-105 transition"
          >
            {submitting ? 'Submitting...' : 'Submit'}
          </button>

        </form>

        <SubmissionModal />

      </section>

      {/* INFO CARD */}
      <section
        className="space-y-4"
        data-aos="fade-up"
      >

        <div className="drcloud-card px-6 py-6 space-y-3">

          <h3 className="text-base font-semibold text-slate-900">
            Why Submit an Enquiry?
          </h3>

          <p className="text-sm text-slate-600">
            Once you submit this form, our support team receives an instant
            email notification with your details and preferred service.
          </p>

          <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
            <li>Personalized guidance from cloud & DevOps experts</li>
            <li>Clarification of course curriculum and career outcomes</li>
            <li>Information on upcoming batches and offers</li>
          </ul>

        </div>

      </section>

    </div>
  );
};

export default Enquiry;
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
      setStatus({ type: 'success', message: 'Thank you! Your enquiry has been submitted.' });
      setForm(initialState);
    } catch (error) {
      const message =
        error.response?.data?.message ||
        'Something went wrong while submitting your enquiry. Please try again.';
      setStatus({ type: 'error', message });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="drcloud-container py-10 md:py-14 grid gap-10 md:grid-cols-[1.2fr,1fr] items-start">
      <section className="drcloud-card px-6 py-6">
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
              <option value="Docker & Kubernetes">Docker &amp; Kubernetes</option>
              <option value="DevOps Bootcamp">DevOps Bootcamp</option>
              <option value="Infrastructure as Code">
                Infrastructure as Code
              </option>
              <option value="CSR Project Training">CSR Project Training</option>
              <option value="Cloud Services">Cloud Services</option>
              <option value="Other Services">Other Services</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              required
              className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm bg-white/80 focus:outline-none focus:ring-2 focus:ring-drcloudBlue/40 resize-none"
            />
          </div>

          {status && (
            <div
              className={`text-xs rounded-xl px-3 py-2 ${
                status.type === 'success'
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                  : 'bg-red-50 text-red-700 border border-red-100'
              }`}
            >
              {status.message}
            </div>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="drcloud-pill-primary text-sm disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {submitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </section>

      <section className="space-y-4">
        <div className="drcloud-card px-6 py-6 space-y-3">
          <h3 className="text-base font-semibold text-slate-900">
            Why Submit an Enquiry?
          </h3>
          <p className="text-sm text-slate-600">
            Once you submit this form, our support team receives an instant
            email notification with your details and preferred service. We will
            connect with you to clarify your goals and recommend the most
            suitable course or service package.
          </p>
          <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
            <li>Personalized guidance from cloud &amp; DevOps experts</li>
            <li>Clarification of course curriculum and career outcomes</li>
            <li>Information on upcoming batches and offers</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Enquiry;


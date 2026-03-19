import { useState, useEffect } from "react";
import apiClient from "../lib/apiClient";

const initialState = {
  fullName: "",
  email: "",
  phone: "",
  serviceType: "",
};

const services = [
  "AWS",
  "Azure",
  "GCP",
  "Docker & Kubernetes",
  "DevOps Bootcamp",
  "Infrastructure as Code",
  "CSR Project Training",
  "Cloud Services",
  "Other Services",
];

const ChatbotEnquiryForm = ({ onCancel, onSuccess, t }) => {
  const [form, setForm] = useState(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      const payload = {
        name: form.fullName.trim(),
        email: form.email,
        phone: form.phone,
        serviceType: form.serviceType,
      };
      await apiClient.post("/api/enquiry", payload);
      setStatus("success");
      setForm(initialState);
      if (onSuccess) onSuccess();
    } catch {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  // Auto-close status messages after 3 seconds
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <div className="w-[280px] max-w-[280px] animate-slideIn">
      <form className="flex flex-col gap-4 text-sm" onSubmit={handleSubmit}>
        {/* Full Name */}
        <div className="relative">
          <label
            className={`absolute left-3 text-xs transition-all duration-200 pointer-events-none
            ${form.fullName ? "text-blue-500 -top-2 bg-white px-1" : "text-slate-600 top-2"}`}
          >
            {t.form.fullName}
          </label>
          <input
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-slate-200 px-3 pt-5 pb-2 bg-white
            focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        {/* Email */}
        <div className="relative">
          <label
            className={`absolute left-3 text-xs transition-all duration-200 pointer-events-none
            ${form.email ? "text-blue-500 -top-2 bg-white px-1" : "text-slate-600 top-2"}`}
          >
            {t.form.email}
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-slate-200 px-3 pt-5 pb-2 bg-white
            focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        {/* Phone */}
        <div className="relative">
          <label
            className={`absolute left-3 text-xs transition-all duration-200 pointer-events-none
            ${form.phone ? "text-blue-500 -top-2 bg-white px-1" : "text-slate-600 top-2"}`}
          >
            {t.form.phone}
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-slate-200 px-3 pt-5 pb-2 bg-white
            focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        {/* Service Dropdown */}
        <div className="relative">
          <label className="block text-xs font-medium text-slate-600 mb-1">
            {t.form.service}
          </label>
          <button
            type="button"
            onClick={() => setOpenDropdown(!openDropdown)}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 bg-white text-left
            hover:shadow-md transition transform hover:scale-105"
          >
            {form.serviceType || t.form.servicePlaceholder}
          </button>

          <ul
            className={`absolute left-0 mt-1 w-full max-h-32 overflow-y-auto border border-slate-200
            rounded-lg bg-white shadow-inner z-10 transition-all duration-300 ease-in-out
            ${openDropdown ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}`}
          >
            {services.map((service) => (
              <li
                key={service}
                onClick={() => {
                  setForm((prev) => ({ ...prev, serviceType: service }));
                  setOpenDropdown(false);
                }}
                className="px-3 py-2 hover:bg-slate-100 cursor-pointer"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Status Messages */}
        {status === "success" && (
          <p className="text-green-600 text-xs transition transform scale-95 opacity-0 animate-pop">
            {t.form.success}
          </p>
        )}
        {status === "error" && (
          <p className="text-red-500 text-xs transition transform scale-95 opacity-0 animate-pop">
            {t.form.error}
          </p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={submitting}
          className="bg-blue-600 text-white rounded-lg py-2 text-sm
          hover:bg-blue-700 hover:scale-105 active:scale-95 transition transform"
        >
          {submitting ? t.form.submitting : t.form.submit}
        </button>

        {/* Cancel Button */}
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-200 text-gray-700 rounded-lg py-2 text-sm
          hover:bg-gray-300 hover:scale-105 active:scale-95 transition transform"
        >
          {t.form.cancel}
        </button>
      </form>

      {/* Tailwind Keyframe Animations */}
      <style>
        {`
          @keyframes slideIn {
            0% { transform: translateY(20px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
          .animate-slideIn { animation: slideIn 0.5s ease-out; }

          @keyframes pop {
            0% { transform: scale(0.9); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
          .animate-pop { animation: pop 0.3s ease-out forwards; }
        `}
      </style>
    </div>
  );
};

export default ChatbotEnquiryForm;
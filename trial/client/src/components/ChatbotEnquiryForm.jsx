import { useState } from "react";
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

      if (onSuccess) {
        onSuccess();
      }

    } catch {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (

    <div className="w-[280px] max-w-[280px]">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-sm">
        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">
            {t.form.fullName}
          </label>
          <input
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-slate-200 px-3 py-2 bg-white"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">
            {t.form.email}
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-slate-200 px-3 py-2 bg-white"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">
            {t.form.phone}
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-slate-200 px-3 py-2 bg-white"
          />
        </div>

        {/* Custom Dropdown */}
        <div className="relative">
          <label className="block text-xs font-medium text-slate-600 mb-1">
            {t.form.service}
          </label>
          <button
            type="button"
            onClick={() => setOpenDropdown(!openDropdown)}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 bg-white text-left"
          >
            {form.serviceType || t.form.servicePlaceholder}
          </button>

          {openDropdown && (
            <ul className="relative mt-1 max-h-32 overflow-y-auto border border-slate-200 rounded-lg bg-white shadow-inner">
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
          )}
        </div>

        {status === "success" && (
          <p className="text-green-600 text-xs">
            {t.form.success}
          </p>
        )}

        {status === "error" && (
          <p className="text-red-500 text-xs">
            {t.form.error}
          </p>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="bg-blue-600 text-white rounded-lg py-2 text-sm hover:bg-blue-700"
        >
          {submitting ? t.form.submitting : t.form.submit}
        </button>

        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-200 text-gray-700 rounded-lg py-2 text-sm hover:bg-gray-300"
        >
          {t.form.cancel}
        </button>



      </form>
    </div>
  );
};

export default ChatbotEnquiryForm;
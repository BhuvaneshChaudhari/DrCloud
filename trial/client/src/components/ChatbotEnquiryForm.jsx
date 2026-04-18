import { useState } from "react";
import apiClient from "../lib/apiClient";
import "./ChatbotEnquiryForm.css";

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
        message: form.serviceType,

      };


      // ✅ REAL API CALL
      await apiClient.post("/api/chat-enquiry", payload); 
  
      setStatus("success");
      setForm(initialState);


      if (onSuccess) onSuccess();
  
    } catch {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>

        <div style={{ animation: 'fieldIn 0.35s ease 0ms both' }}>
          <label className="cf-label">{t.form.fullName}</label>
          <input
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            required
            className="cf-input"
          />
        </div>

        <div style={{ animation: 'fieldIn 0.35s ease 60ms both' }}>
          <label className="cf-label">{t.form.email}</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="cf-input"
          />
        </div>

        <div style={{ animation: 'fieldIn 0.35s ease 120ms both' }}>
          <label className="cf-label">{t.form.phone}</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            className="cf-input"
          />
        </div>

        <div style={{ animation: 'fieldIn 0.35s ease 180ms both' }} className="relative">
          <label className="cf-label">{t.form.service}</label>
          <button
            type="button"
            onClick={() => setOpenDropdown(!openDropdown)}
            className={`cf-dropdown-btn ${openDropdown ? 'open' : ''}`}
          >
            <span style={{ color: form.serviceType ? '#1e293b' : '#94a3b8' }}>
              {form.serviceType || t.form.servicePlaceholder}
            </span>
            <span className={`cf-chevron ${openDropdown ? 'open' : ''}`}>▼</span>
          </button>
          {openDropdown && (
            <ul className="cf-dropdown-list">
              {services.map((service) => (
                <li
                  key={service}
                  onClick={() => { setForm(prev => ({ ...prev, serviceType: service })); setOpenDropdown(false); }}
                  className="cf-dropdown-item"
                >
                  {service}
                </li>
              ))}
            </ul>
          )}
        </div>

        {status === "success" && <div className="cf-success">✅ {t.form.success}</div>}
        {status === "error"   && <div className="cf-error">❌ {t.form.error}</div>}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', animation: 'fieldIn 0.35s ease 240ms both' }}>
          <button type="submit" disabled={submitting} className="cf-submit-btn">
            {submitting
              ? <><span className="cf-spinner" />{t.form.submitting}</>
              : t.form.submit
            }
          </button>
          <button type="button" onClick={onCancel} className="cf-cancel-btn">
            {t.form.cancel}
          </button>
        </div>

      </form>
    </div>
  );
};

export default ChatbotEnquiryForm;

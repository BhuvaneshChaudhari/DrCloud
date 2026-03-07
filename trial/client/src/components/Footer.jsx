import footerLogo from '../assets/drlogo.png';

const Footer = () => {
  return (
    <footer className="mt-12 border-t border-white/60 bg-gradient-to-r from-blue-400/70 to-sky-300/70">
      <div className="drcloud-container py-8 grid gap-8 md:grid-cols-[2fr,1.5fr,1.5fr] items-start border-b border-black">
        <div className="space-y-3">
          <div className="flex flex-col items-start gap-3">
            <img
              src={footerLogo}
              alt="DrCloud Logo"
              className="h-12 w-auto object-contain"
            />
            <div className="flex flex-col leading-tight">
              <p className="text-sm text-slate-600 max-w-md">
                Empowering professionals with cutting-edge <br />
                cloud and DevOps skills for the digital future.
              </p>
              <div className="flex items-center gap-3 mt-3">
                <a
                  href="https://www.linkedin.com/company/dr-cloud-co-in/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center transition-transform hover:scale-110"
                  aria-label="DrCloud LinkedIn"
                >
                  <svg className="w-5 h-5 text-blue-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <span className="text-sm text-slate-600">Follow us on LinkedIn</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-slate-900 mb-3 text-base">
            Our Courses
          </h3>
          <ul className="space-y-1 text-base text-slate-600">
            <li>AWS</li>
            <li>Azure</li>
            <li>Cloud Computing Services (GCP)</li>
            <li>Docker and Kubernetes</li>
            <li>DevOps Bootcamp</li>
            <li>Infrastructure as Code</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-slate-900 mb-3 text-base">
            Contact Info
          </h3>
          <ul className="space-y-1 text-base text-slate-600">
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-slate-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M2 6.75A2.75 2.75 0 014.75 4h14.5A2.75 2.75 0 0122 6.75v10.5A2.75 2.75 0 0119.25 20H4.75A2.75 2.75 0 012 17.25V6.75zM4.5 6.9v.8l7.5 4.5 7.5-4.5v-.8a1.25 1.25 0 00-1.25-1.25H5.75A1.25 1.25 0 004.5 6.9z" />
              </svg>
              <span>support@drcloud.co.in</span>
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-slate-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 3.07 4.18 2 2 0 0 1 5 2h3a2 2 0 0 1 2 1.72c.12 1.05.38 2.07.78 3.03a2 2 0 0 1-.45 2.11L9.91 10.09a16 16 0 0 0 6 6l1.23-1.23a2 2 0 0 1 2.11-.45c.96.4 1.98.66 3.03.78A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>+91-842-115-0803</span>
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-slate-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z" />
              </svg>
              <span>S. B. Patil Road, Ravet, Pune, MH 411044</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="drcloud-container py-4">
        <p className="text-[11px] text-slate-500">
          © 2026 DrCloud | All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
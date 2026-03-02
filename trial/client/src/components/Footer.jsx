const Footer = () => {
  return (
    <footer className="mt-12 border-t border-white/60 bg-sky-100/70">
      <div className="drcloud-container py-8 grid gap-8 md:grid-cols-[2fr,1.5fr,1.5fr] items-start">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-2xl bg-gradient-to-tr from-drcloudBlue to-sky-400 flex items-center justify-center text-white font-bold">
              Dr
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-semibold text-slate-900 text-base">
                DrCloud
              </span>
              <span className="text-[11px] text-slate-500">
                Empower. Inspire. Impact.
              </span>
            </div>
          </div>
          <p className="text-sm text-slate-600 max-w-md">
            Empowering professionals with cutting-edge cloud and DevOps skills
            for the digital future.
          </p>
          <p className="text-[11px] text-slate-500">
            © 2026 DrCloud | All rights reserved 2025
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-slate-900 mb-3 text-sm">
            Our Courses
          </h3>
          <ul className="space-y-1 text-sm text-slate-600">
            <li>AWS</li>
            <li>Azure</li>
            <li>Cloud Computing Services (GCP)</li>
            <li>Docker and Kubernetes</li>
            <li>DevOps Bootcamp</li>
            <li>Infrastructure as Code</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-slate-900 mb-3 text-sm">
            Contact Info
          </h3>
          <ul className="space-y-1 text-sm text-slate-600">
            <li>Email: support@drcloud.co.in</li>
            <li>Phone: +91-842-115-0803</li>
            <li>S. B. Patil Road, Ravet, Pune, MH 411044</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


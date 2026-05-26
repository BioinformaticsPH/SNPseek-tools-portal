const FOOTER_LINKS = [
  {
    heading: "Platform",
    links: [
      { label: "Databases", href: "#databases" },
      { label: "API", href: "#" },
      { label: "Documentation", href: "#" },
    ],
  },
  {
    heading: "Research",
    links: [
      { label: "Publications", href: "#" },
      { label: "Tutorials", href: "#" },
      { label: "Data Downloads", href: "#" },
    ],
  },
  {
    heading: "Organization",
    links: [
      { label: "About CIMMYT BRS", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 mt-auto">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-cimmyt-500 flex items-center justify-center shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4.5 h-4.5"
                  aria-hidden="true"
                >
                  <path d="M12 3v18" />
                  <path d="M8 6c2 1 4 1 6 0M8 10c2 1 4 1 6 0M8 14c2 1 4 1 6 0M8 18c2 1 4 1 6 0" />
                  <path d="M16 6c-2 1-4 1-6 0M16 10c-2 1-4 1-6 0M16 14c-2 1-4 1-6 0M16 18c-2 1-4 1-6 0" />
                </svg>
              </div>
              <div className="leading-tight">
                <p className="text-white font-bold text-base tracking-tight">SNP-Seek</p>
                <p className="text-[10px] font-semibold text-cimmyt-400 uppercase tracking-widest">
                  CIMMYT BRS
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-500">
              Open-access genomic variant database for crop improvement,
              maintained by the CIMMYT Breeding Resources &amp; Services team.
            </p>
          </div>

          {/* Link columns */}
          {FOOTER_LINKS.map((col) => (
            <div key={col.heading}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-300 mb-4">
                {col.heading}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-500 hover:text-cimmyt-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600">
            © {year} CIMMYT Breeding Resources &amp; Services. All rights reserved.
          </p>
          <p className="text-xs text-slate-700">
            Served at{" "}
            <span className="text-slate-500 font-mono">
              brs-snpseek.duckdns.org
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

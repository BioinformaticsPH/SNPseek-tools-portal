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
      { label: "About CGIAR BRS", href: "#" },
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
                  <path d="M12 21V11" />
                  <path d="M12 11C10.5 8.5 10.5 6 12 4C13.5 6 13.5 8.5 12 11Z" />
                  <path d="M12 14.5C10 13.5 8 14 7.5 15.5C9 16.5 11 16 12 14.5" />
                  <path d="M12 14.5C14 13.5 16 14 16.5 15.5C15 16.5 13 16 12 14.5" />
                  <path d="M12 19C9.5 17.5 7 18 6.5 19.5C8.5 20.5 11 20 12 19" />
                  <path d="M12 19C14.5 17.5 17 18 17.5 19.5C15.5 20.5 13 20 12 19" />
                </svg>
              </div>
              <div className="leading-tight">
                <p className="text-white font-bold text-base tracking-tight">SNP-Seek</p>
                <p className="text-[10px] font-semibold text-cimmyt-400 uppercase tracking-widest">
                  CGIAR BRS
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-500">
              Open-access genomic variant database for crop improvement,
              maintained by the CGIAR Breeding Resources &amp; Services team.
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
            © {year} CGIAR Breeding Resources &amp; Services. All rights reserved.
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

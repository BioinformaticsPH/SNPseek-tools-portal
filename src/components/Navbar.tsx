import { useState } from "react";

const NAV_LINKS = [
  { label: "Databases", href: "#databases" },
  { label: "API", href: "#" },
  { label: "Documentation", href: "#" },
  { label: "Publications", href: "#" },
  { label: "About", href: "#" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / wordmark */}
          <a href="#" className="flex items-center gap-3 group">
            {/* SVG wheat icon */}
            <div className="w-9 h-9 rounded-lg bg-cimmyt-500 flex items-center justify-center shrink-0 group-hover:bg-cimmyt-600 transition-colors">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
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
              <p className="text-xl font-bold text-cimmyt-700 tracking-tight">
                SNP-Seek
              </p>
              <p className="text-[10px] font-semibold text-cimmyt-500 uppercase tracking-widest -mt-0.5">
                CGIAR BRS
              </p>
            </div>
          </a>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-cimmyt-600 hover:bg-cimmyt-50 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden p-2 rounded-md text-slate-500 hover:bg-slate-100 transition-colors"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              /* X icon */
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              /* Hamburger icon */
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden border-t border-slate-100 py-2 pb-3">
            <ul className="flex flex-col gap-0.5">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block px-4 py-2 text-sm font-medium text-slate-600 hover:text-cimmyt-600 hover:bg-cimmyt-50 rounded-md transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

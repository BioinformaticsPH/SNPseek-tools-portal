const STATS = [
  { label: "Crop Species", value: "1+" },
  { label: "Database Instances", value: "4" },
  { label: "Accessions", value: "~29 K" },
  { label: "SNP Variants", value: "~64 M" },
  { label: "Genotyped Lines", value: "~50 K" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[calc(100svh-4rem)] flex items-center">
      {/* Green accent blob — top-right */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(74,124,63,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Eyebrow badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cimmyt-50 text-cimmyt-700 border border-cimmyt-200">
            <span className="w-1.5 h-1.5 rounded-full bg-cimmyt-500 animate-pulse" />
            CGIAR Breeding Resources &amp; Services
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-tight mb-3">
          SNP
          <span className="text-cimmyt-500">-Seek</span>
        </h1>
        <p className="text-center text-lg sm:text-xl font-medium text-slate-500 mb-6 tracking-wide">
          Multi-Crop Genomic Variant Database
        </p>

        {/* Description */}
        <p className="text-center max-w-2xl mx-auto text-base sm:text-lg text-slate-600 leading-relaxed mb-10">
          SNP-Seek is an open-access genomic variant repository maintained by
          CGIAR BRS, providing curated SNP datasets, genotype matrices, and
          analytical tools to accelerate crop improvement worldwide.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          <a
            href="#databases"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cimmyt-500 text-white font-semibold text-sm hover:bg-cimmyt-600 transition-colors shadow-sm"
          >
            Explore Databases
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-slate-700 font-semibold text-sm border border-slate-200 hover:border-cimmyt-300 hover:text-cimmyt-700 transition-colors shadow-sm"
          >
            API Documentation
          </a>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center bg-slate-50 border border-slate-200 rounded-xl px-4 py-5 text-center"
            >
              <span className="text-2xl sm:text-3xl font-bold text-cimmyt-600 tabular-nums">
                {stat.value}
              </span>
              <span className="mt-1 text-xs font-medium text-slate-500 uppercase tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

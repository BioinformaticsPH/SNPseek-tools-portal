import type { SnpInstance } from "../data/instances";

interface Props {
  instance: SnpInstance;
}

export default function InstanceCard({ instance }: Props) {
  return (
    <a
      href={instance.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-cimmyt-300 transition-all duration-200 overflow-hidden"
    >
      {/* Card header */}
      <div className="flex items-start justify-between gap-3 p-5 pb-3">
        <h3 className="text-base font-semibold text-slate-800 group-hover:text-cimmyt-700 transition-colors leading-snug">
          {instance.name}
        </h3>
        {instance.badge && (
          <span className="shrink-0 inline-block px-2 py-0.5 rounded-md text-[11px] font-semibold bg-cimmyt-50 text-cimmyt-700 border border-cimmyt-200">
            {instance.badge}
          </span>
        )}
      </div>

      {/* Description */}
      <p className="px-5 text-sm text-slate-500 leading-relaxed flex-1">
        {instance.description}
      </p>

      {/* Stats footer */}
      <div className="px-5 pt-4 pb-5 mt-2">
        <div className="flex items-center gap-4 border-t border-slate-100 pt-4">
          <Stat label="Accessions" value={instance.accessions} />
          <div className="w-px h-8 bg-slate-100" />
          <Stat label="SNPs" value={instance.snpCount} />

          {/* External link arrow */}
          <div className="ml-auto text-slate-300 group-hover:text-cimmyt-500 transition-colors">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
              aria-hidden="true"
            >
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </div>
        </div>
      </div>
    </a>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-base font-bold text-slate-800 tabular-nums">{value}</span>
      <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wide">
        {label}
      </span>
    </div>
  );
}

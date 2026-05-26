import { comingSoonCrops } from "../data/instances";

export default function ComingSoonStrip() {
  return (
    <section className="bg-cimmyt-700 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
          {/* Label */}
          <div className="shrink-0">
            <p className="text-xs font-bold uppercase tracking-widest text-cimmyt-300 mb-0.5">
              Coming Soon
            </p>
            <p className="text-lg font-semibold text-white">
              More crops in development
            </p>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-10 bg-cimmyt-600" />

          {/* Chips */}
          <ul className="flex flex-wrap gap-2">
            {comingSoonCrops.map((crop) => (
              <li key={crop.name}>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-cimmyt-600 text-cimmyt-100 border border-cimmyt-500">
                  <span>{crop.emoji}</span>
                  {crop.name}
                </span>
              </li>
            ))}
          </ul>

          {/* Spacer + note */}
          <p className="sm:ml-auto text-xs text-cimmyt-400 max-w-xs sm:text-right">
            New crop databases are added as genotyping projects reach curation
            milestones.
          </p>
        </div>
      </div>
    </section>
  );
}

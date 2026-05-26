import { cropGroups } from "../data/instances";
import InstanceCard from "./InstanceCard";

// Returns a Tailwind grid-cols class that exactly fits the card count,
// capped at 4 columns so cards don't become too narrow on wide screens.
function gridColsClass(count: number): string {
  const cols = Math.min(count, 4);
  const map: Record<number, string> = {
    1: "grid-cols-1",
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  };
  return map[cols] ?? "sm:grid-cols-2 lg:grid-cols-4";
}

export default function DatabasesSection() {
  return (
    <section id="databases" className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-cimmyt-500 mb-2">
            Available Databases
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Explore by Crop
          </h2>
          <p className="mt-3 text-slate-500 max-w-xl text-base leading-relaxed">
            Each database instance contains curated variant calls, genotype
            matrices, and metadata for a specific crop germplasm set.
          </p>
        </div>

        {/* Crop groups */}
        <div className="space-y-14">
          {cropGroups.map((group) => (
            <div key={group.commonName}>
              {/* Crop header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl" role="img" aria-label={group.commonName}>
                  {group.emoji}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800">
                    {group.commonName}
                  </h3>
                  <p className="text-sm text-slate-400 italic">
                    {group.scientificName}
                  </p>
                </div>
                <div className="ml-4 flex-1 h-px bg-slate-200" />
                <span className="text-xs font-medium text-slate-400">
                  {group.instances.length}{" "}
                  {group.instances.length === 1 ? "instance" : "instances"}
                </span>
              </div>

              {/* Instance cards — column count adapts to however many instances exist */}
              <div className={`grid gap-4 ${gridColsClass(group.instances.length)}`}>
                {group.instances.map((instance) => (
                  <InstanceCard key={instance.name} instance={instance} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

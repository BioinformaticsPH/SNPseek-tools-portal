// ---------------------------------------------------------------------------
// SNPSeek instance data
// ---------------------------------------------------------------------------
// Fields marked [PLACEHOLDER] should be replaced with real values before
// publishing. All other values are sourced from published literature or
// official project documentation.
// ---------------------------------------------------------------------------

export interface SnpInstance {
  /** Short display name shown on the card, e.g. "Rice SNP-Seek 3K" */
  name: string;
  /** Full URL the card links to (opens in new tab). Use "#" for coming-soon. */
  url: string;
  /** One-sentence description of the dataset / focus */
  description: string;
  /** Accession count shown on the card */
  accessions: string;
  /** SNP count shown on the card */
  snpCount: string;
  /** Optional badge shown on the card, e.g. a genome version */
  badge?: string;
}

export interface CropGroup {
  /** Emoji representing the crop */
  emoji: string;
  /** Common crop name, e.g. "Rice" */
  commonName: string;
  /** Latin species name shown in italics */
  scientificName: string;
  /** One or more database instances for this crop */
  instances: SnpInstance[];
  /**
   * Mark true to render the entire group with "Coming Soon" styling —
   * cards are non-clickable and clearly labelled as in development.
   */
  comingSoon?: boolean;
}

// ---------------------------------------------------------------------------
// LIVE crops
// ---------------------------------------------------------------------------

export const cropGroups: CropGroup[] = [
  {
    emoji: "🌾",
    commonName: "Rice",
    scientificName: "Oryza sativa",
    instances: [
      {
        // Source: SNP-Seek DB (Mansueto et al. 2017, NAR); 3K RG Consortium 2014, GigaScience
        name: "3K RG SNP-Seek",
        url: "https://brs-snpseek.duckdns.org/3kRG",
        description:
          "Genome-wide SNP data from the 3,000 Rice Genomes Project — the largest public rice diversity resource, jointly produced by IRRI, BGI, and the G3 consortium.",
        accessions: "3,024",
        snpCount: "~29 M",
        badge: "Multi-ref",
      },
      {
        // [PLACEHOLDER] — 19K RG SNP-Seek instance; fill in real values when published
        name: "19K RG SNP-Seek",
        url: "https://brs-snpseek.duckdns.org/19k/",
        description:
          "[PLACEHOLDER]",
        accessions: "[PLACEHOLDER]",
        snpCount: "[PLACEHOLDER]",
        badge: "[PLACEHOLDER]",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // COMING SOON crops — comingSoon: true renders these with a greyed-out,
  // non-clickable card and a "Coming Soon" indicator.
  // Replace comingSoon: true and fill in real data when a crop goes live.
  // ---------------------------------------------------------------------------

  {
    emoji: "🌽",
    commonName: "Maize",
    scientificName: "Zea mays",
    comingSoon: true,
    instances: [
      {
        name: "Maize SNP-Seek",
        url: "#",
        description:
          "Genome-wide SNP database for a diverse maize panel. Dataset curation is currently in progress.",
        accessions: "—",
        snpCount: "—",
      },
    ],
  },
  {
    emoji: "🌱",
    commonName: "Sorghum",
    scientificName: "Sorghum bicolor",
    comingSoon: true,
    instances: [
      {
        name: "Sorghum SNP-Seek",
        url: "#",
        description:
          "SNP catalog for a sorghum diversity panel spanning multiple subspecies. Currently under development.",
        accessions: "—",
        snpCount: "—",
      },
    ],
  },
  {
    emoji: "🫘",
    commonName: "Cowpea",
    scientificName: "Vigna unguiculata",
    comingSoon: true,
    instances: [
      {
        name: "Cowpea SNP-Seek",
        url: "#",
        description:
          "Genomic variant database for cowpea accessions targeting drought tolerance and yield traits.",
        accessions: "—",
        snpCount: "—",
      },
    ],
  },
  {
    emoji: "🌿",
    commonName: "Chickpea",
    scientificName: "Cicer arietinum",
    comingSoon: true,
    instances: [
      {
        name: "Chickpea SNP-Seek",
        url: "#",
        description:
          "SNP resource for chickpea germplasm to support breeding for climate-resilient desi and kabuli types.",
        accessions: "—",
        snpCount: "—",
      },
    ],
  },
  {
    emoji: "🌾",
    commonName: "Wheat",
    scientificName: "Triticum aestivum",
    comingSoon: true,
    instances: [
      {
        name: "Wheat SNP-Seek",
        url: "#",
        description:
          "Polyploid wheat SNP database integrating diversity panel genotyping data across A, B, and D sub-genomes.",
        accessions: "—",
        snpCount: "—",
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Coming-soon chips (displayed in the ComingSoonStrip banner at the bottom)
// ---------------------------------------------------------------------------

export const comingSoonCrops: Array<{ emoji: string; name: string }> = [
  { emoji: "🌽", name: "Maize" },
  { emoji: "🌱", name: "Sorghum" },
  { emoji: "🫘", name: "Cowpea" },
  { emoji: "🌿", name: "Chickpea" },
  { emoji: "🌾", name: "Wheat" },
];

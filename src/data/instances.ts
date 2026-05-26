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
  /** Full URL the card links to (opens in new tab) */
  url: string;
  /** One-sentence description of the dataset / focus */
  description: string;
  /** Placeholder accession count shown on the card */
  accessions: string;
  /** Placeholder SNP count shown on the card */
  snpCount: string;
  /** Arbitrary badge / tag shown on the card, e.g. a genome version */
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
}

// ---------------------------------------------------------------------------
// DATA — edit below
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
        // Source: Philippine Genome Center / PhilRice / DOST-PCAARRD
        // Full name: 1,001 Philippine Traditional Rice Varieties Genomics Program (1k1RG)
        // Reference genome: Japonica Nipponbare (IRGSP-1.0)
        // SNP count: [PLACEHOLDER] — not yet published as of 2026
        name: "1K1 Philippine Rice SNP-Seek",
        url: "https://brs-snpseek.duckdns.org/ph_gdb/",
        description:
          "SNP catalog for 1,001 Philippine traditional rice varieties (TRVs), a collaborative genomics program led by the Philippine Genome Center, PhilRice, and IRRI to characterise heirloom and heritage rice diversity.",
        accessions: "1,001",
        snpCount: "[PLACEHOLDER]", // not yet published
        badge: "Nipponbare",
      },
      {
        // [PLACEHOLDER] — all fields below are placeholder values
        name: "19K Rice SNP-Seek",
        url: "#", // [PLACEHOLDER]
        description:
          "[PLACEHOLDER] — Large-scale rice genotyping panel covering approximately 19,000 accessions.",
        accessions: "~19,000",       // [PLACEHOLDER]
        snpCount: "[PLACEHOLDER]",   // [PLACEHOLDER]
        badge: "[PLACEHOLDER]",      // [PLACEHOLDER] — reference genome version
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Coming-soon crops (displayed as placeholder chips)
// ---------------------------------------------------------------------------

export const comingSoonCrops: Array<{ emoji: string; name: string }> = [
  { emoji: "🌽", name: "Maize" },
  { emoji: "🌱", name: "Sorghum" },
  { emoji: "🫘", name: "Cowpea" },
  { emoji: "🌿", name: "Chickpea" },
  { emoji: "🌾", name: "Wheat" },
];

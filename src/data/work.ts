/**
 * Work engagements. Single source of truth for the home-page teaser and the
 * /work index. An engagement with a `slug` has a case study at /work/<slug>.
 */
export interface Engagement {
  company: string;
  blurb: string;
  stack: string;
  year: string;
  /** If set, links to a case study at /work/<slug>. */
  slug?: string;
}

export const work: Engagement[] = [
  {
    company: "Cebir",
    blurb: "Automated a multi-week statistics-and-reporting process down to a few minutes.",
    stack: "python · airflow · polars",
    year: "2024",
    slug: "cebir",
  },
  {
    company: "Enobase",
    blurb: "Schema-diffing tool that auto-generates typed database migrations from code.",
    stack: "typescript · postgres · kysely",
    year: "2024",
    slug: "enobase",
  },
  {
    company: "Embie",
    blurb: "Public subsidy platform: citizens file and track requests end to end.",
    stack: "next.js · trpc · kubernetes",
    year: "2023",
    slug: "embie",
  },
  {
    company: "IMEC",
    blurb: "Smart-city digital twin and an urban-mobility optimization model.",
    stack: "python · kafka · deck.gl",
    year: "2022",
    slug: "imec",
  },
  {
    company: "The Great Circle",
    blurb: "Decision-support apps for sailors, from weekend amateurs to professionals.",
    stack: "react · mapbox · electron",
    year: "2019",
    slug: "the-great-circle",
  },
  {
    company: "CSC",
    blurb: "Data-vault warehouse and ETL for a top Belgian insurer.",
    stack: "python · sql · qgis",
    year: "2016",
    slug: "csc",
  },
];

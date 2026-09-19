/**
 * Writing posts. Single source of truth for the writing list, the home-page
 * teaser, and the RSS feed. These are placeholder topics themed to Quentin's
 * real areas (applied maths, data, fullstack/DevOps) — replace the bodies with
 * real articles (or move to an Astro content collection) when you start publishing.
 */
export interface Post {
  slug: string;
  title: string;
  /** ISO date — drives sort order and RSS pubDate. */
  date: string;
  /** Human month label shown in the UI (e.g. "aug 2026"). */
  month: string;
  readingTime: string;
  tag: "maths" | "data" | "web";
  excerpt: string;
}

export const posts: Post[] = [
  {
    slug: "eight-years-across-the-stack",
    title: "Ten years across the stack, and what DevOps taught me",
    date: "2026-07-15",
    month: "jul 2026",
    readingTime: "9 min",
    tag: "web",
    excerpt: "From React frontends to Kafka and Kubernetes — where owning the whole stack pays off.",
  },
  {
    slug: "airflow-polars-killing-a-report",
    title: "Airflow and Polars: turning a multi-week report into minutes",
    date: "2026-05-02",
    month: "may 2026",
    readingTime: "8 min",
    tag: "data",
    excerpt: "How an orchestrated pipeline replaced weeks of copy-pasting code and data by hand.",
  },
  {
    slug: "convex-optimization-for-city-traffic",
    title: "Convex optimization for city traffic, in plain words",
    date: "2026-03-11",
    month: "mar 2026",
    readingTime: "11 min",
    tag: "maths",
    excerpt: "Modelling how pedestrians, cyclists and cars move — and what closing a road really does.",
  },
  {
    slug: "typed-migrations-from-a-schema-diff",
    title: "Typed database migrations from a schema diff",
    date: "2025-12-09",
    month: "dec 2025",
    readingTime: "6 min",
    tag: "web",
    excerpt: "Detecting changes to a declarative schema and generating safe, typed migrations from them.",
  },
  {
    slug: "community-detection-thesis",
    title: "Community detection, and what my thesis got wrong",
    date: "2025-10-20",
    month: "oct 2025",
    readingTime: "12 min",
    tag: "maths",
    excerpt: "Three modularity-maximization algorithms for fuzzy communities, and the benchmarks that humbled them.",
  },
  {
    slug: "data-vault-ten-years-on",
    title: "A data-vault warehouse, ten years on",
    date: "2025-08-18",
    month: "aug 2025",
    readingTime: "7 min",
    tag: "data",
    excerpt: "What the data-vault architecture got right for an insurer's warehouse — and where it hurt.",
  },
];

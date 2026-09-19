import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { posts } from "../data/posts";

export function GET(context: APIContext) {
  return rss({
    title: "quentin vanderlinden — writing",
    description:
      "Notes from the middle of the work — applied maths, data, and shipping fullstack software.",
    site: context.site ?? "https://quentin.dev",
    items: posts.map((p) => ({
      title: p.title,
      description: p.excerpt,
      pubDate: new Date(p.date),
      link: `/writing/${p.slug}/`,
      categories: [p.tag],
    })),
    customData: "<language>en</language>",
  });
}

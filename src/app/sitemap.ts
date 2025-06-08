import { MetadataRoute } from "next";

// Blog posts data
const blogPosts = [
  {
    slug: "vibe-coding-security-risks-and-fixes",
    lastModified: "2025-06-07",
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://disam.dev";

  // Static routes
  const staticRoutes = ["", "/blog"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Blog post routes
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.lastModified),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}

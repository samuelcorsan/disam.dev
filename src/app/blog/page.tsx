"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";

export default function BlogIndex() {
  const posts = [
    {
      title: "Vibe code, big risks: how to fix common security holes",
      date: "June 7, 2025",
      slug: "vibe-coding-security-risks-and-fixes",
      excerpt:
        "in this post, we'll explore the most common vulnerabilities introduced by vibe coding, demonstrate examples, and show you exactly how to fix them.",
    },
  ];

  return (
    <>
      <Header showHomeLink={true} />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-[2.5rem] font-serif tracking-tight text-primary mb-8">
          Blog Posts
        </h1>
        <div className="grid gap-8">
          {posts.map((post) => (
            <article key={post.slug} className="border-b border-gray-500 pb-8">
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-2xl font-serif tracking-tight text-primary hover:text-primary/80">
                  {post.title}
                </h2>
              </Link>
              <p className="text-sm text-foreground mt-1">{post.date}</p>
              <p className="text-foreground mt-4">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

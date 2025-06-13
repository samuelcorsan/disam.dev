"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import SocialLinks from "@/components/socials";
import ProjectCard from "@/components/project-card";
import BlogCard from "@/components/blog-card";
import Link from "next/link";

const projects = [
  /* {
    id: 1,
    title: "VisionCraft",
    description:
      "Create the logo, domain, marketing, roadmap, wireframes, pitches... of your startup. Never worry about marketing again.",
    link: "https://vcrft.com",
  },*/
  {
    id: 1,
    title: "Growth Race",
    description: "Earn money for growing in X (from 10 June to 31 August)",
    link: "https://growthrace.org",
  },
];

const blogs = [
  {
    id: 1,
    title: "Vibe code, big risks: how to fix common security holes",
    date: "June 7, 2025",
    link: "/blog/vibe-coding-security-risks-and-fixes",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <h1 className="text-[2.5rem] font-serif tracking-tight text-primary">
        Samuel Corsan
      </h1>

      <div className="flex items-center gap-1.5 font-medium tracking-tight">
        <h2 className="text-base text-foreground">Developer</h2>
        <span className="text-foreground/50">•</span>
        <h2 className="text-base text-foreground">Entrepreneur</h2>
      </div>

      <p className="pt-4 text-sm text-foreground">
        I'm Samuel, a 15 y/o high school student building web apps. I am
        passionate about <span className="text-primary">AI</span>,{" "}
        <span className="text-primary">UI/UX</span> and{" "}
        <span className="text-primary">databases</span>. I'm a{" "}
        <span className="text-primary">full-stack webdev</span> building
        applications to help humanity. When I'm not coding, I practice karate
        (blue belt), go to the gym and learn about topics such as geopolitics.
      </p>

      <SocialLinks />

      <section className="pt-8">
        <h2 className="font-medium tracking-tight text-foreground">Projects</h2>
        <div className="pt-1.5">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div>
          <p className="mt-4 w-fit rounded-md border border-foreground/10 bg-hoverColor px-2 py-1 text-xs text-foreground transition-all duration-300 ease-in-out">
            Most of these projects are open source. Feel free to explore my{" "}
            <Link
              href="https://github.com/samuelcorsan?tab=repositories"
              rel="noopener noreferrer"
              target="_blank"
              className="font-medium text-primary underline underline-offset-2 transition-all duration-150 ease-in-out md:hover:text-gray-300"
            >
              GitHub
            </Link>
          </p>
        </div>
      </section>

      <section className="pt-8">
        <h2 className="font-medium tracking-tight text-foreground">Blog</h2>
        <div className="pt-1.5">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

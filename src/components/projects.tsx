"use client";

import { useState, useEffect, useId, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";

interface MediaItem {
  type: "video" | "image";
  src: string;
}

interface Tech {
  label: string;
  iconSrc?: string;
  iconClassName?: string;
}

/**
 * A story entry's visual can be one of three textures:
 * - product:  a sharp, bordered product screenshot that opens a gallery modal
 * - polaroid: a tilted, white-bordered candid photo (drop real photos here later)
 * - marker:   an intentional typographic panel for eras with no real image yet
 */
type Visual =
  | { kind: "product"; preview: string; gallery: MediaItem[] }
  | { kind: "polaroid"; photos: { src: string; caption?: string; href?: string }[] }
  | { kind: "marker"; glyph: string; label: string };

interface Story {
  age: string;
  year: string;
  title: string;
  description: string;
  url?: string;
  github?: string;
  status?: { label: string; tone: "building" | "live" };
  tech?: Tech[];
  visual?: Visual;
  longform?: Longform;
}

type StoryBlock =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "quote"; text: string };

interface Longform {
  label: string;
  title: string;
  subtitle?: string;
  blocks: StoryBlock[];
  // terms wrapped in [[double brackets]] in block text get a hover explanation
  glossary?: Record<string, string>;
}

// local SVGs added via `svgls` (public/svg), no external URLs
const NEXT = "/svg/nextjs.svg";
const TS = "/svg/typescript.svg";
const GROQ = "/svg/groq.svg";
const REACT = "/svg/react_dark.svg";

// Oldest → newest, so the story builds from a 9-year-old in Roblox Studio
// up to the current flagship project.
const story: Story[] = [
  {
    age: "9",
    year: "2020–22",
    title: "caotic robbers",
    description:
      "my first real project. built a roblox game that somehow blew up, even though i couldn't spell \"chaotic\" correctly. it peaked at 20k players and 223k combined views. not bad for a 9 year old",
    url: "https://www.youtube.com/watch?v=loQrByYbWZw",
    tech: [
      { label: "Lua", iconSrc: "/svg/lua.svg" },
      { label: "Roblox Studio" },
    ],
    visual: {
      kind: "polaroid",
      photos: [
        {
          src: "/caotic-robbers.webp",
          caption: "the trailer · 11k views",
          href: "https://www.youtube.com/watch?v=loQrByYbWZw",
        },
        { src: "/caotic-cars.webp", caption: "the cars" },
        { src: "/caotic-bank.webp", caption: "the bank" },
        { src: "/caotic-train.webp", caption: "the train" },
      ],
    },
    longform: {
      label: "know the full story",
      title: "caotic robbers: the full story",
      subtitle: "shipping a 20k-player game at 9, and surviving sabotage right before launch",
      glossary: {
        Jailbreak:
          "one of roblox's biggest games ever, a cops-and-robbers world where you either pull off heists or try to stop them.",
      },
      blocks: [
        { type: "h", text: "the spark" },
        {
          type: "p",
          text: "i was obsessed with [[Jailbreak]]. at its peak it hit 530k players online at the same time. but for me it got repetitive fast, you robbed the same spots and did the same things over and over. i kept thinking: what if i built my own version, but better?",
        },
        { type: "h", text: "step 1: building the team" },
        {
          type: "p",
          text: "i found a few people on a discord server who liked the idea, pitched them, and put together a small team: coders, a designer, a modeler. i was 9, paying each of them in roblox currency, a tiny entrepreneurship project before i even knew the word.",
        },
        { type: "h", text: "step 2: a beta in silence" },
        {
          type: "p",
          text: "we built quietly for a few months. no announcements, no hype, just a beta we kept polishing until the game actually felt fun. i added way more robberies than jailbreak had, and a brand-new role: the citizen. instead of only cops and robbers, you could roam the city, feed criminals clues, or team up with the police. it made the world feel alive instead of a loop.",
        },
        { type: "h", text: "step 3: getting the youtubers" },
        {
          type: "p",
          text: "then i started reaching out to jailbreak content creators to show off the game. it worked, across all their videos, caotic robbers pulled in **223k combined views**, and our own trailer hit **11k views**. for a game made by a 10-year-old and his discord friends, that felt unreal.",
        },
        { type: "h", text: "step 4: someone deleted everything" },
        { type: "quote", text: "one year of work. one month to rebuild it." },
        {
          type: "p",
          text: "a month before release, one of the developers decided he wanted to be the leader. i said no. he wouldn't accept it, and because everyone had full access in roblox studio, he deleted the entire map. a year of work gone in seconds, and we had no backups.",
        },
        {
          type: "p",
          text: "so we rebuilt the whole thing in one month, scrambling, cutting corners, prioritizing what mattered and skipping the rest.",
        },
        { type: "h", text: "step 5: the launch (a disaster)" },
        {
          type: "p",
          text: "here's the cruel part: the youtubers had filmed the old game, the polished version from before the deletion. so players showed up expecting that, and got our rushed one-month rebuild instead. it didn't match, and it showed.",
        },
        {
          type: "p",
          text: "we still hit a peak of **20k players**. but the game wasn't ready, and a few days after launch we had to take it down.",
        },
        { type: "h", text: "what it taught me" },
        {
          type: "p",
          text: "two technical lessons i never forgot: give people access to only what they actually need, and always keep backups. but the bigger one was about ownership, i told the team “this was my mistake,” because it was my fault for giving everyone permissions. owning that, instead of blaming him, was the most valuable thing i took from the whole project.",
        },
      ],
    },
  },
  {
    age: "12",
    year: "2022",
    title: "learning to code",
    description:
      "learned html, css, and javascript. started building my first web projects and understanding how the web works. this was the foundation that led to everything else",
  },
  {
    age: "13",
    year: "2023–24",
    title: "freelance work",
    description:
      "worked on various freelance projects, building websites and web applications for clients. learned to work with deadlines, client communication, and turning ideas into real products",
  },
  {
    age: "14",
    year: "2024",
    title: "syntara ai",
    description:
      "tried to match o1's reasoning using gpt-4o without fine-tuning. built iterative chain of thought that refined answers over multiple passes. didn't continue because the field was advancing too fast to keep up",
    url: "https://github.com/samuelcorsan/syntara-ai",
    github: "https://github.com/samuelcorsan/syntara-ai",
    tech: [
      { label: "Python", iconSrc: "/svg/python.svg" },
      { label: "GPT-4o", iconSrc: "/svg/openai.svg", iconClassName: "dark:invert" },
      { label: "Groq", iconSrc: GROQ, iconClassName: "rounded-full" },
    ],
  },
  {
    age: "14",
    year: "2024–26",
    title: "fellows.best",
    description:
      "got tired of hunting down tech fellowships across random websites. built a single place to find all the best ones. now other people use it too",
    url: "https://fellows.best/",
    github: "https://github.com/samuelcorsan/fellows.best",
    status: { label: "live", tone: "live" },
    tech: [
      { label: "Next.js", iconSrc: NEXT, iconClassName: "dark:invert" },
      { label: "TypeScript", iconSrc: TS },
      { label: "MongoDB", iconSrc: "/svg/mongodb-icon-dark.svg" },
    ],
    visual: {
      kind: "product",
      preview: "/fellows-best.webp",
      gallery: [{ type: "image", src: "/fellows-best.webp" }],
    },
  },
  {
    age: "15",
    year: "2025–26",
    title: "Avalio",
    description:
      "a stock simulator for students who don't know about investment. designed like a real broker but for students to start practicing. got used by my school and we're expanding",
    url: "https://avalio.markets",
    status: { label: "live", tone: "live" },
    tech: [
      { label: "Next.js", iconSrc: NEXT, iconClassName: "dark:invert" },
      { label: "FMP" },
      { label: "Yahoo Finance API" },
      { label: "Groq", iconSrc: GROQ, iconClassName: "rounded-full" },
    ],
    visual: {
      kind: "product",
      preview: "/avalio.webp",
      gallery: [{ type: "image", src: "/avalio.webp" }],
    },
  },
  {
    age: "16",
    year: "now",
    title: "ladda",
    description:
      "reimagining fashion e-commerce. swipe through clothes like social media, try them on instantly with AI, checkout in one tap. shopping should feel personal and effortless, not like work",
    status: { label: "current project", tone: "building" },
    tech: [
      { label: "React Native", iconSrc: REACT },
      { label: "TypeScript", iconSrc: TS },
      { label: "Upstash", iconSrc: "/svg/upstash.svg" },
      { label: "Supabase", iconSrc: "/svg/supabase.svg" },
      { label: "vLLM", iconSrc: "/svg/ai.svg" },
    ],
    visual: {
      kind: "product",
      preview: "/ladda-1.webp",
      gallery: [
        { type: "video", src: "/ladda-demo-1.mp4" },
        { type: "video", src: "/ladda-demo-2.mp4" },
        { type: "image", src: "/ladda-1.webp" },
        { type: "image", src: "/ladda-3.webp" },
        { type: "image", src: "/ladda-4.webp" },
      ],
    },
  },
  {
    age: "16",
    year: "september 2026",
    title: "hackspain",
    description:
      "organizing spain's biggest youth hackathon. 24 hours in madrid backed by google, cursor, fal.ai, politécnica de madrid and more. building both the site and the movement to unite young spanish coders and put us on the european map. aiming for 300+ this year, thousands down the line",
    url: "https://hackspain.com",
    github: "https://github.com/samuelcorsan/hackspain.com",
    status: { label: "live", tone: "live" },
    tech: [
      { label: "Astro", iconSrc: "/svg/astro.svg" },
      { label: "React", iconSrc: REACT },
      { label: "TypeScript", iconSrc: TS },
    ],
    visual: {
      kind: "product",
      preview: "/hackspain.webp",
      gallery: [{ type: "image", src: "/hackspain.webp" }],
    },
  },
];

export default function Projects() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-2 tracking-tight">THE STORY</h2>
      <p className="text-sm font-mono text-neutral-500 mb-12">
        {/* the through-line: shipping since age 9 */}
        building since i was 9, here&apos;s how it went
      </p>

      {/* newest first → scrolls back toward the age-9 origin */}
      <div>
        {story
          .slice()
          .reverse()
          .map((entry) => (
            <StoryEntry key={entry.title} entry={entry} />
          ))}
      </div>
    </section>
  );
}

function StoryEntry({ entry }: { entry: Story }) {
  return (
    <article className="grid gap-5 md:grid-cols-[88px_1fr] md:gap-8">
      {/* age gutter, sticky so only the current era's number is pinned; because
          the articles are contiguous (spacing lives in the content's pb), the
          next era's number pushes this one out at the boundary */}
      <div className="flex items-baseline gap-2 md:flex-col md:items-end md:gap-0 md:text-right md:sticky md:top-12 md:self-start md:h-fit">
        <span className="text-5xl md:text-6xl font-bold tracking-tighter tabular-nums leading-none">
          {entry.age}
        </span>
        <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 md:mt-2">
          yrs old
        </span>
      </div>

      {/* content, reveal lives here (not on the article) so its transform
          never interferes with the sticky gutter above */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative pb-16 md:pb-28 md:border-l md:border-neutral-200 md:dark:border-neutral-800 md:pl-8"
      >
        <div className="hidden md:block absolute top-1.5 left-[-5px] h-2.5 w-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700 ring-4 ring-white dark:ring-black" />

        <div className="mb-2">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <h3 className="font-semibold text-lg">
              {entry.url ? (
                <Link
                  href={entry.url}
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  {entry.title}
                </Link>
              ) : (
                entry.title
              )}
            </h3>
            {entry.github && <GitHubIcon href={entry.github} />}
            {entry.status && <StatusBadge status={entry.status} />}
          </div>
          <span className="font-mono text-xs text-neutral-400">
            {entry.year}
          </span>
        </div>

        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4 max-w-prose">
          {entry.description}
        </p>

        {entry.longform && <LongformButton longform={entry.longform} />}

        {entry.visual && <StoryVisual entry={entry} />}

        {entry.tech && entry.tech.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {entry.tech.map((t) => (
              <TechBadge key={t.label} iconSrc={t.iconSrc} iconClassName={t.iconClassName}>
                {t.label}
              </TechBadge>
            ))}
          </div>
        )}
      </motion.div>
    </article>
  );
}

function StoryVisual({ entry }: { entry: Story }) {
  const v = entry.visual;
  if (!v) return null;
  if (v.kind === "product") {
    // only projects with a real gallery (ladda) expand; the rest link out
    const expandable = v.gallery.length > 1 || !entry.url;
    return expandable ? (
      <ExpandableProduct project={entry} visual={v} />
    ) : (
      <ProductLink href={entry.url!} preview={v.preview} title={entry.title} />
    );
  }
  if (v.kind === "polaroid") {
    return <Polaroid visual={v} />;
  }
  return <MarkerVisual glyph={v.glyph} label={v.label} />;
}

const POLAROID_ROTATIONS = [-4, 3, -3, 5, -2];

function Polaroid({
  visual,
}: {
  visual: Extract<Visual, { kind: "polaroid" }>;
}) {
  const [active, setActive] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActive(null);
    }
    document.body.style.overflow = active !== null ? "hidden" : "auto";
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  const open = active !== null ? visual.photos[active] : null;

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 h-full w-full z-[60]"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 grid place-items-center z-[100] p-4">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-3 right-3 md:top-5 md:right-5 items-center justify-center bg-white dark:bg-neutral-800 rounded-full h-8 w-8 z-[101]"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.1 } }}
              className="bg-[#fbfaf4] p-3 pb-10 rounded-[3px] shadow-2xl max-w-[90vw] md:max-w-2xl"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={open.src}
                alt={open.caption ?? "photo"}
                className="max-h-[75vh] w-auto object-contain"
              />
              {open.caption && (
                <p className="mt-3 text-center font-mono text-sm text-neutral-500">
                  {open.caption}
                </p>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="flex flex-wrap items-start gap-x-3 gap-y-5">
        {visual.photos.map((photo, i) => {
          const card = (
            <motion.div
              initial={{ rotate: POLAROID_ROTATIONS[i % POLAROID_ROTATIONS.length] }}
              whileHover={{ rotate: 0, scale: 1.05, zIndex: 10 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="relative inline-block bg-[#fbfaf4] p-2.5 pb-9 rounded-[3px] shadow-[0_16px_34px_-12px_rgba(0,0,0,0.5)] ring-1 ring-black/[0.06]"
            >
              <div className="relative w-[150px] sm:w-[180px] aspect-[4/3] overflow-hidden bg-neutral-300 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.12)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.src}
                  alt={photo.caption ?? "polaroid"}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                {/* subtle photo sheen + vignette so it reads as a print */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20" />
              </div>
              {photo.caption && (
                <p className="mt-2.5 text-center font-mono text-[11px] text-neutral-500">
                  {photo.caption}
                </p>
              )}
            </motion.div>
          );

          return (
            <div key={i} className="w-fit">
              {photo.href ? (
                <a
                  href={photo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-fit"
                >
                  {card}
                </a>
              ) : (
                <button
                  onClick={() => setActive(i)}
                  className="block w-fit cursor-zoom-in"
                  aria-label={`Expand ${photo.caption ?? "photo"}`}
                >
                  {card}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

function MarkerVisual({ glyph, label }: { glyph: string; label: string }) {
  return (
    <div className="flex w-full max-w-[320px] aspect-[4/3] flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-neutral-300 dark:border-neutral-700 bg-gradient-to-br from-neutral-50 to-neutral-100/40 dark:from-neutral-900 dark:to-neutral-900/30">
      <span className="text-4xl font-mono text-neutral-300 dark:text-neutral-700 select-none">
        {glyph}
      </span>
      <span className="font-mono text-xs text-neutral-500">{label}</span>
    </div>
  );
}

function ProductLink({
  href,
  preview,
  title,
}: {
  href: string;
  preview: string;
  title: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-full max-w-md aspect-[16/10] overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800"
      aria-label={`Visit ${title}`}
    >
      <Image
        src={preview}
        alt={`${title} preview`}
        fill
        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
      />
      <span className="absolute bottom-2 right-2 rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-mono text-white opacity-0 transition-opacity group-hover:opacity-100">
        visit site →
      </span>
    </a>
  );
}

function ExpandableProduct({
  project,
  visual,
}: {
  project: Story;
  visual: Extract<Visual, { kind: "product" }>;
}) {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActive(false);
    }
    document.body.style.overflow = active ? "hidden" : "auto";
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(false));

  const singleImage =
    visual.gallery.length === 1 && visual.gallery[0].type === "image";

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 h-full w-full z-[60]"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 grid place-items-center z-[100] p-4">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-3 right-3 md:top-5 md:right-5 items-center justify-center bg-white dark:bg-neutral-800 rounded-full h-8 w-8 z-[101]"
              onClick={() => setActive(false)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${id}`}
              ref={ref}
              className="w-full max-w-3xl bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6">
                <motion.h3
                  layoutId={`title-${id}`}
                  className="font-bold text-2xl text-neutral-800 dark:text-neutral-100 mb-3"
                >
                  {project.title}
                </motion.h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                  {project.description}
                </p>
                {singleImage ? (
                  <Image
                    src={visual.gallery[0].src}
                    alt={`${project.title} preview`}
                    width={1200}
                    height={750}
                    className="w-full h-auto rounded-xl border border-neutral-200 dark:border-neutral-800"
                  />
                ) : (
                  <div className="flex gap-3 justify-center overflow-x-auto pb-2">
                    {visual.gallery.map((item, i) => (
                      <div key={i} className="shrink-0 w-[140px]">
                        {item.type === "video" ? (
                          <video
                            src={item.src}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-72 object-contain rounded-lg"
                          />
                        ) : (
                          <div className="relative w-full h-72">
                            <Image
                              src={item.src}
                              alt={`${project.title} screenshot ${i + 1}`}
                              fill
                              className="object-contain rounded-lg"
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <motion.button
        layoutId={`card-${id}`}
        onClick={() => setActive(true)}
        className="group relative block w-full max-w-md aspect-[16/10] overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 cursor-pointer"
        aria-label={`View ${project.title} preview`}
      >
        <Image
          src={visual.preview}
          alt={`${project.title} preview`}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute bottom-2 right-2 rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-mono text-white opacity-0 transition-opacity group-hover:opacity-100">
          click to expand
        </span>
      </motion.button>
    </>
  );
}

function StatusBadge({ status }: { status: NonNullable<Story["status"]> }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium ${
        status.tone === "building"
          ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
          : "bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
      }`}
    >
      {status.tone === "live" && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
        </span>
      )}
      {status.label}
    </span>
  );
}

function Term({
  children,
  explanation,
}: {
  children: React.ReactNode;
  explanation: string;
}) {
  return (
    <span className="group relative inline cursor-help underline decoration-dotted decoration-neutral-400 underline-offset-4 hover:decoration-neutral-700 dark:hover:decoration-neutral-200">
      {children}
      <span
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 w-64 -translate-x-1/2 translate-y-1 rounded-lg bg-neutral-900 p-3 text-xs font-normal not-italic leading-relaxed text-white opacity-0 shadow-xl transition-all duration-150 group-hover:translate-y-0 group-hover:opacity-100 dark:bg-neutral-100 dark:text-black"
      >
        {explanation}
      </span>
    </span>
  );
}

function Stat({ children }: { children: React.ReactNode }) {
  return (
    <strong className="whitespace-nowrap font-semibold underline decoration-2 underline-offset-2">
      {children}
    </strong>
  );
}

// renders text with inline tokens:
//   [[term]]  → hover-explained <Term>
//   **stat**  → emphasized <Stat> (bold, black, underlined)
function renderRichText(
  text: string,
  glossary?: Record<string, string>
): React.ReactNode {
  const parts = text.split(/(\[\[.+?\]\]|\*\*.+?\*\*)/g);
  return parts.map((part, i) => {
    const term = part.match(/^\[\[(.+?)\]\]$/);
    if (term) {
      const explanation = glossary?.[term[1]];
      return explanation ? (
        <Term key={i} explanation={explanation}>
          {term[1]}
        </Term>
      ) : (
        term[1]
      );
    }
    const stat = part.match(/^\*\*(.+?)\*\*$/);
    if (stat) return <Stat key={i}>{stat[1]}</Stat>;
    return part;
  });
}

function LongformButton({ longform }: { longform: Longform }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.body.style.overflow = open ? "hidden" : "auto";
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(ref, () => setOpen(false));

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="group mb-5 inline-flex items-center gap-2 rounded-full border border-neutral-300 dark:border-neutral-700 px-4 py-2 text-sm font-medium transition-colors hover:border-neutral-900 hover:bg-neutral-900 hover:text-white dark:hover:border-neutral-100 dark:hover:bg-neutral-100 dark:hover:text-black"
      >
        {longform.label}
        <span className="transition-transform group-hover:translate-x-0.5">→</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] h-full w-full bg-black/60"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[100] grid place-items-center p-4">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="absolute right-3 top-3 z-[101] flex h-8 w-8 items-center justify-center rounded-full bg-white dark:bg-neutral-800 md:right-5 md:top-5"
              onClick={() => setOpen(false)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16, transition: { duration: 0.1 } }}
              className="flex max-h-[88vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl bg-white font-sans dark:bg-neutral-900"
            >
              <div className="overflow-y-auto p-6 md:p-9 [scrollbar-width:thin] [scrollbar-color:theme(colors.neutral.300)_transparent] dark:[scrollbar-color:theme(colors.neutral.700)_transparent] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-neutral-300 [&::-webkit-scrollbar-track]:bg-transparent dark:[&::-webkit-scrollbar-thumb]:bg-neutral-700">
              <span className="font-mono text-xs uppercase tracking-wider text-neutral-400">
                the story
              </span>
              <h3 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
                {longform.title}
              </h3>
              {longform.subtitle && (
                <p className="mt-2 text-sm text-neutral-500">
                  {longform.subtitle}
                </p>
              )}

              <div className="mt-6">
                {longform.blocks.map((block, i) => {
                  if (block.type === "h") {
                    return (
                      <h4
                        key={i}
                        className="mt-7 mb-2 text-sm font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-100"
                      >
                        {block.text}
                      </h4>
                    );
                  }
                  if (block.type === "quote") {
                    return (
                      <blockquote
                        key={i}
                        className="my-5 border-l-2 border-blue-500 pl-4 text-lg font-medium italic text-neutral-800 dark:text-neutral-200"
                      >
                        {block.text}
                      </blockquote>
                    );
                  }
                  return (
                    <p
                      key={i}
                      className="mb-4 leading-relaxed text-neutral-600 dark:text-neutral-400"
                    >
                      {renderRichText(block.text, longform.glossary)}
                    </p>
                  );
                })}
              </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

function TechBadge({
  children,
  iconSrc,
  iconClassName,
}: {
  children: React.ReactNode;
  iconSrc?: string;
  iconClassName?: string;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200">
      {iconSrc && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={iconSrc}
          alt=""
          className={`w-3.5 h-3.5 object-contain ${iconClassName}`}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}

function GitHubIcon({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
      aria-label="View on GitHub"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405 1.02 0 2.04.135 3 .405 2.28-1.56 3.285-1.23 3.285-1.23.675 1.65.255 2.895.135 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.285 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    </a>
  );
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black dark:text-white"
    >
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>
  );
}

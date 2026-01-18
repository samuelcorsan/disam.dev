"use client";

import { useState } from "react";

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-6 tracking-tight">ABOUT ME</h2>
      <div className="space-y-6 text-base leading-relaxed">
        <p>
          I'm a hustler. Every day I'm either learning something new, building
          something, or figuring out what's next.
        </p>
        {isExpanded && (
          <>
            <p>
              When I was 9, I discovered something that changed everything. I
              realized I could build things that actually helped people save time and
              solve problems. There was something magical about watching someone use
              something I created and hearing them say it made their day easier. I
              wasn't chasing money or recognition back then. That simple feeling of
              knowing I'd helped someone was all the reward I needed, and honestly,
              it still is.
            </p>
            <p>
              My mission is to retire my family, repaying them for everything
              they've given me, and to build a company that creates lasting
              positive impact on humanity.
            </p>
          </>
        )}
        <p>
          When I'm not coding, I'm training. I've been practising karate for 7
          years and currently hold a blue belt
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/BJJ_Blue_Belt.svg/1280px-BJJ_Blue_Belt.svg.png"
            alt="Blue Belt"
            className="inline-block h-5 w-auto ml-1.5 align-middle transform -rotate-12 hover:rotate-0 transition-transform duration-300"
          />
          . I also play football
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://freesvg.org/img/soccer_ball2.png"
            alt="Football"
            className="inline-block h-5 w-5 ml-1.5 mr-1 align-middle hover:translate-x-4 hover:rotate-[360deg] transition-all duration-700 ease-out cursor-pointer"
          />
          and enjoy debating current world issues and geopolitics with friends
          to expand my perspective.
        </p>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-600 hover:underline text-sm font-medium"
        >
          {isExpanded ? "show less" : "show more"}
        </button>
      </div>
    </section>
  );
}

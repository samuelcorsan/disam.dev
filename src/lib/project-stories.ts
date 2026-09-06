interface ProjectStory {
  paragraphs: string[];
  tech?: string[];
  images?: { src: string; caption?: string }[];
  videos?: { src: string; caption: string }[];
  chapters?: { type: "h" | "p" | "quote"; text: string }[];
  glossary?: Record<string, string>;
}

export const projectStories: Record<string, ProjectStory> = {
  ladda: {
    paragraphs: [
      "Reimagining fashion e-commerce. Swipe through clothes like social media, try them on instantly with AI, and check out in one tap. Shopping should feel personal and effortless, not like work."
    ],
    tech: ["React Native", "TypeScript", "Upstash", "Supabase", "vLLM"],
    videos: [
      { src: "/ladda-demo-1.mp4", caption: "Ladda · Product demo 1" },
      { src: "/ladda-demo-2.mp4", caption: "Ladda · Product demo 2" }
    ],
    images: [
      { src: "/ladda-1.webp", caption: "Ladda · App preview" },
      { src: "/ladda-3.webp", caption: "Ladda · App preview" },
      { src: "/ladda-4.webp", caption: "Ladda · App preview" }
    ]
  },
  avalio: {
    paragraphs: [
      "A stock simulator for students who are new to investing. Designed like a real broker, it gives students a place to start practising. It was used by my school, and we’re expanding."
    ],
    tech: ["Next.js", "FMP", "Yahoo Finance API", "Groq"],
    images: [{ src: "/avalio.webp", caption: "Avalio · Investing simulator" }]
  },
  fellows: {
    paragraphs: [
      "I got tired of hunting down tech fellowships across random websites, so I built a single place to find all the best ones. Now other people use it too."
    ],
    tech: ["Next.js", "TypeScript", "MongoDB"],
    images: [{ src: "/fellows-best.webp", caption: "fellows.best · Tech fellowships" }]
  },
  "quiver": {
    "paragraphs": [
      "I’m a product engineer at QuiverAI, working on AI-native tools for generating, editing, and animating vector graphics.",
      "I’ve helped build the Agent UI, Icons UI, and Fonts UI, and worked incredibly hard to refine the product and get every detail right."
    ]
  },
  "hackspain": {
    "paragraphs": [
      "I co-founded HackSpain, a 36-hour hackathon for 250 young builders at UPM–ETSIT in Madrid, from September 18–20, 2026.",
      "I’m building both the site and the movement: bringing young Spanish coders together and putting us on the European map."
    ],
    "images": [
      {
        "src": "/hackspain.webp",
        "caption": "HackSpain · Madrid 2026"
      }
    ]
  },
  "syntara": {
    "paragraphs": [
      "I tried to match o1’s reasoning using GPT-4o without fine-tuning. I built an iterative chain of thought that refined answers over multiple passes.",
      "I didn’t continue because the field was advancing too fast to keep up."
    ],
    "tech": [
      "Python",
      "GPT-4o",
      "Groq"
    ]
  },
  "freelance": {
    "paragraphs": [
      "I worked on freelance projects, building websites and web applications for clients.",
      "It taught me how to work with deadlines, communicate with clients, and turn ideas into real products."
    ]
  },
  "caotic": {
    "paragraphs": [
      "my first real project. built a roblox game that somehow blew up, even though i couldn't spell \"chaotic\" correctly. it peaked at 20k players and 223k combined views. not bad for a 9 year old"
    ],
    "tech": [
      "Lua",
      "Roblox Studio"
    ],
    "images": [
      {
        "src": "/caotic-robbers.webp",
        "caption": "the trailer · 11k views"
      },
      {
        "src": "/caotic-cars.webp",
        "caption": "the cars"
      },
      {
        "src": "/caotic-bank.webp",
        "caption": "the bank"
      },
      {
        "src": "/caotic-train.webp",
        "caption": "the train"
      }
    ],
    "chapters": [
      {
        "type": "h",
        "text": "the spark"
      },
      {
        "type": "p",
        "text": "i was obsessed with [[Jailbreak]]. at its peak it hit 530k players online at the same time. but for me it got repetitive fast, you robbed the same spots and did the same things over and over. i kept thinking: what if i built my own version, but better?"
      },
      {
        "type": "h",
        "text": "step 1: building the team"
      },
      {
        "type": "p",
        "text": "i found a few people on a discord server who liked the idea, pitched them, and put together a small team: coders, a designer, a modeler. i was 9, paying each of them in roblox currency, a tiny entrepreneurship project before i even knew the word."
      },
      {
        "type": "h",
        "text": "step 2: a beta in silence"
      },
      {
        "type": "p",
        "text": "we built quietly for a few months. no announcements, no hype, just a beta we kept polishing until the game actually felt fun. i added way more robberies than jailbreak had, and a brand-new role: the citizen. instead of only cops and robbers, you could roam the city, feed criminals clues, or team up with the police. it made the world feel alive instead of a loop."
      },
      {
        "type": "h",
        "text": "step 3: getting the youtubers"
      },
      {
        "type": "p",
        "text": "then i started reaching out to jailbreak content creators to show off the game. it worked, across all their videos, caotic robbers pulled in **223k combined views**, and our own trailer hit **11k views**. for a game made by a 10-year-old and his discord friends, that felt unreal."
      },
      {
        "type": "h",
        "text": "step 4: someone deleted everything"
      },
      {
        "type": "quote",
        "text": "one year of work. one month to rebuild it."
      },
      {
        "type": "p",
        "text": "a month before release, one of the developers decided he wanted to be the leader. i said no. he wouldn't accept it, and because everyone had full access in roblox studio, he deleted the entire map. a year of work gone in seconds, and we had no backups."
      },
      {
        "type": "p",
        "text": "so we rebuilt the whole thing in one month, scrambling, cutting corners, prioritizing what mattered and skipping the rest."
      },
      {
        "type": "h",
        "text": "step 5: the launch (a disaster)"
      },
      {
        "type": "p",
        "text": "here's the cruel part: the youtubers had filmed the old game, the polished version from before the deletion. so players showed up expecting that, and got our rushed one-month rebuild instead. it didn't match, and it showed."
      },
      {
        "type": "p",
        "text": "we still hit a peak of **20k players**. but the game wasn't ready, and a few days after launch we had to take it down."
      },
      {
        "type": "h",
        "text": "what it taught me"
      },
      {
        "type": "p",
        "text": "two technical lessons i never forgot: give people access to only what they actually need, and always keep backups. but the bigger one was about ownership, i told the team “this was my mistake,” because it was my fault for giving everyone permissions. owning that, instead of blaming him, was the most valuable thing i took from the whole project."
      }
    ],
    "glossary": {
      "Jailbreak": "one of roblox's biggest games ever, a cops-and-robbers world where you either pull off heists or try to stop them."
    }
  }
};

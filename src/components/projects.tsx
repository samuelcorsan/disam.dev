import Link from "next/link";
import { LaddaCard } from "./ladda-card";

export default function Projects() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-8 tracking-tight">PROJECTS</h2>

      <div className="relative border-l border-neutral-200 dark:border-neutral-800 ml-3 space-y-12">
        <div className="relative pl-8">
          <div className="absolute top-1.5 left-[-5px] h-2.5 w-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700 ring-4 ring-white dark:ring-black" />
          <span className="text-xs font-mono text-neutral-500 mb-1 block">
            15 years old · 2025
          </span>
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-semibold text-lg">
              <Link
                href="https://codestep-xi.vercel.app"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                CodeStep
              </Link>
            </h3>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
            looking to bring vibe coding to schools. empowering students to
            shape their ideas and build real projects, even if they don&apos;t
            know how to code
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <TechBadge iconSrc="https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png">
              Next.js
            </TechBadge>
            <TechBadge iconSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png">
              Python
            </TechBadge>
            <TechBadge
              iconSrc="https://registry.npmmirror.com/@lobehub/icons-static-png/1.74.0/files/dark/groq.png"
              iconClassName="bg-black rounded-full"
            >
              Groq
            </TechBadge>
          </div>
        </div>

        <div className="relative pl-8">
          <div className="absolute top-1.5 left-[-5px] h-2.5 w-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700 ring-4 ring-white dark:ring-black" />
          <span className="text-xs font-mono text-neutral-500 mb-1 block">
            15 years old · 2025
          </span>
          <div className="flex items-center gap-2 mb-2">
            <div className="font-semibold text-lg">
              <LaddaCard />
            </div>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
            reimagining fashion e-commerce. swipe through clothes like social
            media, try them on instantly with AI, checkout in one tap. shopping
            should feel personal and effortless, not like work
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <TechBadge iconSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png">
              React Native
            </TechBadge>
            <TechBadge iconSrc="https://www.eu-startups.com/wp-content/uploads/2021/12/logo-4.png">
              Qdrant
            </TechBadge>
            <TechBadge iconSrc="https://storage.googleapis.com/mailersend-website/integrations/supabase-logo-icon.png">
              Supabase
            </TechBadge>
            <TechBadge iconSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png">
              Nano Banana
            </TechBadge>
            <TechBadge
              iconSrc="https://registry.npmmirror.com/@lobehub/icons-static-png/1.74.0/files/dark/groq.png"
              iconClassName="bg-black rounded-full"
            >
              Groq
            </TechBadge>
          </div>
        </div>

        <div className="relative pl-8">
          <div className="absolute top-1.5 left-[-5px] h-2.5 w-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700 ring-4 ring-white dark:ring-black" />
          <span className="text-xs font-mono text-neutral-500 mb-1 block">
            14 years old · 2024
          </span>
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-semibold text-lg">
              <Link
                href="https://fellows.best/"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                fellows.best
              </Link>
            </h3>
            <GitHubIcon href="https://github.com/samuelcorsan/fellows.best" />
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
            got tired of hunting down tech fellowships across random websites.
            built a single place to find all the best ones. now other people use
            it too
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <TechBadge iconSrc="https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png">
              Next.js
            </TechBadge>
          </div>
        </div>

        <div className="relative pl-8">
          <div className="absolute top-1.5 left-[-5px] h-2.5 w-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700 ring-4 ring-white dark:ring-black" />
          <span className="text-xs font-mono text-neutral-500 mb-1 block">
            14 years old · 2024
          </span>
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-semibold text-lg">
              <Link
                href="https://github.com/samuelcorsan/syntara-ai"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                syntara ai
              </Link>
            </h3>
            <GitHubIcon href="https://github.com/samuelcorsan/syntara-ai" />
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
            tried to match o1's reasoning using gpt-4o without fine-tuning.
            built iterative chain of thought that refined answers over multiple
            passes. didn't continue—field was advancing too fast to keep up
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <TechBadge iconSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png">
              Python
            </TechBadge>
          </div>
        </div>

        <div className="relative pl-8">
          <div className="absolute top-1.5 left-[-5px] h-2.5 w-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700 ring-4 ring-white dark:ring-black" />
          <span className="text-xs font-mono text-neutral-500 mb-1 block">
            9-11 years old · 2020-2022
          </span>
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-semibold text-lg">
              <Link
                href="https://www.youtube.com/watch?v=loQrByYbWZw"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                caotic robbers
              </Link>
            </h3>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
            my first real project. built a roblox game that somehow got
            thousands of players, even though i couldn't spell "chaotic"
            correctly. the trailer ended up with 11k+ views. not bad for a 9
            year old
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <TechBadge iconSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Lua-Logo.svg/1200px-Lua-Logo.svg.png">
              Lua
            </TechBadge>
            <TechBadge iconSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Roblox_Studio_logo_-_2017-2021.svg/2048px-Roblox_Studio_logo_-_2017-2021.svg.png">
              Roblox Studio
            </TechBadge>
          </div>
        </div>
      </div>
    </section>
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
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405 1.02 0 2.04.135 3 .405 2.28-1.56 3.285-1.23 3.285-1.23.675 1.65.255 2.895.135 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.285 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    </a>
  );
}

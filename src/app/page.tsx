import Link from "next/link";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-black font-mono">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-6 md:px-12">
        <Link href="/" className="text-blue-600 hover:underline text-lg">
          Samuel
        </Link>
        <nav className="flex gap-6">
          <Link
            href="mailto:your@email.com"
            className="text-blue-600 hover:underline"
          >
            mail
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            linkedin
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            twitter
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-6 py-16 md:px-12">
        {/* Hero Section */}
        <section className="mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            HI, I'M SAMUEL
          </h1>
          <p className="text-base leading-relaxed">
            I'm a 15 y/o from Spain. Been building things since I was 9—started
            with Roblox games, now doing full stack. Planning to move to the US
            for college and looking to land my first internship next summer when
            I turn 16.
          </p>
        </section>

        {/* About Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 tracking-tight">ABOUT ME</h2>
          <div className="space-y-6 text-base leading-relaxed">
            <p>
              I'm a hustler. Every day I'm either learning something new,
              building something, or figuring out what's next. My goal is to
              build a big company—the kind that actually matters.
            </p>
            <p>
              When I'm not coding, I'm training or playing football. I also like
              to debate with friends about current world issues and geopolitics
              to enrich my knowledge.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6 tracking-tight">PROJECTS</h2>
          <ul className="space-y-3 text-base">
            <li>
              (15) graft - building trust infrastructure for prediction markets.
              connecting traders and liquidity providers where reputation and
              reliability are everything
            </li>
            <li>
              (15) ladda - reimagining fashion e-commerce. swipe through clothes
              like social media, try them on instantly with AI, checkout in one
              tap. shopping should feel personal and effortless, not like work
            </li>
            <li>
              (14){" "}
              <Link
                href="https://fellows.best/"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                fellows.best
              </Link>{" "}
              - got tired of hunting down tech fellowships across random
              websites. built a single place to find all the best ones. now
              other people use it too
            </li>
            <li>
              (9-11){" "}
              <Link
                href="https://www.youtube.com/watch?v=loQrByYbWZw"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                caotic robbers
              </Link>{" "}
              - my first real project. built a roblox game that somehow got
              thousands of players, even though i couldn't spell "chaotic"
              correctly. the trailer ended up with 11k+ views. not bad for a 9
              year old
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

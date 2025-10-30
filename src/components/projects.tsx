import Link from "next/link";
import { LaddaCard } from "./ladda-card";

export default function Projects() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6 tracking-tight">PROJECTS</h2>
      <ul className="space-y-3 text-base">
        <li>
          (15) graft - building trust infrastructure for prediction markets.
          connecting traders and liquidity providers where reputation and
          reliability are everything
        </li>
        <li>
          (15) <LaddaCard />
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
          (14){" "}
          <Link
            href="https://github.com/samuelcorsan/syntara-ai"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            syntara ai
          </Link>{" "}
          - tried to match o1's reasoning using gpt-4o without fine-tuning.
          built iterative chain of thought that refined answers over multiple
          passes. didn't continue—field was advancing too fast to keep up
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
  );
}

import Link from "next/link";
import ThemeToggle from "./theme-toggle";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-6 md:px-12 gap-4">
      <Link href="/" className="text-blue-600 hover:underline text-lg shrink-0">
        Samuel
      </Link>
      <nav className="flex gap-2 md:gap-6 items-center shrink-0">
        <Link
          href="mailto:samuel@disam.dev"
          className="text-blue-600 hover:underline text-sm md:text-base"
        >
          mail
        </Link>
        <Link
          href="https://x.com/disamdev"
          target="_blank"
          className="text-blue-600 hover:underline text-sm md:text-base"
        >
          twitter
        </Link>
        <Link
          href="https://github.com/samuelcorsan"
          target="_blank"
          className="text-blue-600 hover:underline text-sm md:text-base"
        >
          github
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  );
}

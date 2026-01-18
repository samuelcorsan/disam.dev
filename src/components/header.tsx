import Link from "next/link";
import ThemeToggle from "./theme-toggle";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-6 md:px-12">
      <Link href="/" className="text-blue-600 hover:underline text-lg">
        Samuel
      </Link>
      <nav className="flex gap-6 items-center">
        <Link
          href="mailto:samuel@disam.dev"
          className="text-blue-600 hover:underline"
        >
          mail
        </Link>
        <Link
          href="https://x.com/disamdev"
          target="_blank"
          className="text-blue-600 hover:underline"
        >
          twitter
        </Link>
        <Link
          href="https://github.com/samuelcorsan"
          target="_blank"
          className="text-blue-600 hover:underline"
        >
          github
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  );
}

import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-6 md:px-12">
      <Link href="/" className="text-blue-600 hover:underline text-lg">
        Samuel
      </Link>
      <nav className="flex gap-6">
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
      </nav>
    </header>
  );
}

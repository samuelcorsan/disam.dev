import Link from "next/link";
import { HiOutlineDocumentText } from "react-icons/hi";
import { FiTwitter, FiMail } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="w-fit grid grid-cols-3 gap-4 pt-4 tracking-tight md:flex md:flex-row md:items-start">
      <Link
        href="https://x.com/disamdev"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center underline-offset-4 transition duration-150 ease-in-out md:hover:text-accent md:hover:underline"
      >
        <FiTwitter className="mr-1 h-4 w-4" />
        <span className="text-sm text-primary">Twitter</span>
      </Link>

      <Link
        href="https://github.com/samuelcorsan"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center underline-offset-4 transition duration-150 ease-in-out md:hover:text-accent md:hover:underline"
      >
        <FaGithub className="mr-1 h-4 w-4" />
        <span className="text-sm text-primary">GitHub</span>
      </Link>

      <Link
        href="mailto:samuel@disam.dev"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center underline-offset-4 transition duration-150 ease-in-out md:hover:text-accent md:hover:underline"
      >
        <FiMail className="mr-1 h-4 w-4" />
        <span className="text-sm text-primary">Email</span>
      </Link>
    </div>
  );
}

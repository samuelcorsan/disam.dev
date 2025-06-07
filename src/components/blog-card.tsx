import Link from "next/link";

interface BlogCardProps {
  blog: {
    id: number;
    title: string;
    date: string;
    link: string;
  };
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <div className="flex flex-col items-start pt-2">
      <Link
        href={blog.link}
        className="group relative -mx-3 w-full transform rounded-lg px-3 py-2 transition-all duration-300 ease-in-out md:hover:scale-[1.02] md:hover:bg-hoverColor"
      >
        <div className="flex items-center justify-between text-sm font-medium tracking-tight text-foreground md:group-hover:text-accent">
          <div className="flex items-center">
            <h3 className="text-primary">{blog.title}</h3>
          </div>
          <div className="text-xs text-foreground/50">{blog.date}</div>
        </div>
      </Link>
    </div>
  );
}

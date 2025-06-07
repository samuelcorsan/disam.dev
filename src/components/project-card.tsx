import Link from 'next/link'

interface ProjectCardProps {
  project: {
    id: number
    title: string
    description: string
    link: string
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex flex-col items-start pt-2">
      <Link
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className="group relative -mx-3 w-full transform rounded-lg px-3 py-2 transition-all duration-300 ease-in-out md:hover:scale-[1.02] md:hover:bg-hoverColor"
      >
        <div className="flex items-center justify-between text-sm font-medium tracking-tight text-foreground md:group-hover:text-accent">
          <div className="flex items-center">
            <h3 className="text-primary">{project.title}</h3>
          </div>
        </div>
        <p className="text-sm text-foreground">{project.description}</p>
      </Link>
    </div>
  )
}

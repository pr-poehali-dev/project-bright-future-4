import type { Project } from "./projects-data"

type Props = {
  project: Project
  slideIndexes: Record<number, number>
}

export default function ProjectCardMobile({ project, slideIndexes }: Props) {
  const images = project.images || ["/placeholder.svg"]
  const currentSlide = slideIndexes[project.id] || 0

  return (
    <article className="shrink-0 w-[80vw]">
      <div className="relative overflow-hidden aspect-[4/3] mb-4">
        <img
          src={images[currentSlide]}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h3 className="text-lg font-medium mb-1">{project.title}</h3>
        <p className="text-sm text-muted-foreground">{project.category}</p>
        {project.link && (
          <a href={project.link} className="inline-block mt-1 text-xs font-semibold text-orange-500 hover:underline">
            Подробнее →
          </a>
        )}
      </div>
    </article>
  )
}

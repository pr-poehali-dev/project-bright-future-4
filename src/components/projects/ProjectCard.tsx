import { ChevronLeft, ChevronRight } from "lucide-react"
import type { Project } from "./projects-data"

type Props = {
  project: Project
  index: number
  current: number
  hoveredId: number | null
  slideIndexes: Record<number, number>
  onHoverEnter: (id: number) => void
  onHoverLeave: () => void
  onSlide: (projectId: number, direction: number, totalImages: number) => void
}

export default function ProjectCard({
  project,
  index,
  current,
  hoveredId,
  slideIndexes,
  onHoverEnter,
  onHoverLeave,
  onSlide,
}: Props) {
  const images = project.images || ["/placeholder.svg"]
  const currentSlide = slideIndexes[project.id] || 0
  const hasMultiple = images.length > 1

  return (
    <article
      key={`${current}-${index}`}
      className="group cursor-pointer"
      onMouseEnter={() => onHoverEnter(project.id)}
      onMouseLeave={onHoverLeave}
    >
      <div className="relative overflow-hidden aspect-[4/3] mb-6">
        <img
          src={images[currentSlide]}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className={`w-full h-full object-cover transition-all duration-700 ${
            hoveredId === project.id ? "scale-105" : "scale-100"
          }`}
        />
        {hasMultiple && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); onSlide(project.id, -1, images.length) }}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); onSlide(project.id, 1, images.length) }}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, i) => (
                <div
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${i === currentSlide ? "bg-white" : "bg-white/50"}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div>
        <h3 className="text-xl font-medium mb-1">{project.title}</h3>
        <p className="text-sm text-muted-foreground">{project.category}</p>
        {project.location && (
          <p className="text-sm text-muted-foreground mt-0.5">{project.location}</p>
        )}
        {project.link && (
          <a
            href={project.link}
            className="inline-block mt-2 text-xs font-semibold text-orange-500 hover:underline"
          >
            Подробнее о проекте →
          </a>
        )}
      </div>
    </article>
  )
}
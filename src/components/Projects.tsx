import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { projects } from "./projects/projects-data"
import ProjectCard from "./projects/ProjectCard"
import ProjectCardMobile from "./projects/ProjectCardMobile"

export function Projects() {
  const [current, setCurrent] = useState(0)
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [slideIndexes, setSlideIndexes] = useState<Record<number, number>>({})
  const scrollRef = useRef<HTMLDivElement>(null)

  const perPage = 2
  const total = Math.ceil(projects.length / perPage)
  const visible = projects.slice(current * perPage, current * perPage + perPage)

  const prev = () => setCurrent((c) => Math.max(0, c - 1))
  const next = () => setCurrent((c) => Math.min(total - 1, c + 1))

  const scrollLeft = () => scrollRef.current?.scrollBy({ left: -320, behavior: "smooth" })
  const scrollRight = () => scrollRef.current?.scrollBy({ left: 320, behavior: "smooth" })

  const goSlide = (projectId: number, direction: number, totalImages: number) => {
    setSlideIndexes((prev) => {
      const cur = prev[projectId] || 0
      const next = (cur + direction + totalImages) % totalImages
      return { ...prev, [projectId]: next }
    })
  }

  return (
    <section id="projects" className="py-32 md:py-29 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/a70ed155-b6af-463b-8401-6e36d49cbd81.jpg"
          alt="Готовые каркасные дома"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-white/70" />
      </div>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p className="text-foreground text-base md:text-lg font-bold tracking-[0.25em] uppercase mb-6">Построенные дома</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">Наши работы</h2>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={prev}
              disabled={current === 0}
              className="w-12 h-12 border border-border flex items-center justify-center hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={18} />
            </button>
            <span className="text-sm text-muted-foreground">{current + 1} / {total}</span>
            <button
              onClick={next}
              disabled={current === total - 1}
              className="w-12 h-12 border border-border flex items-center justify-center hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Десктоп: постраничный грид */}
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          {visible.map((project, index) => (
            <ProjectCard
              key={`${current}-${index}`}
              project={project}
              index={index}
              current={current}
              hoveredId={hoveredId}
              slideIndexes={slideIndexes}
              onHoverEnter={setHoveredId}
              onHoverLeave={() => setHoveredId(null)}
              onSlide={goSlide}
            />
          ))}
        </div>

        {/* Мобильный: горизонтальный скролл со стрелками по бокам */}
        <div className="md:hidden relative flex items-center">
          <button
            onClick={scrollLeft}
            className="absolute -left-4 z-10 w-10 h-10 flex items-center justify-center shrink-0"
          >
            <ChevronLeft className="w-6 h-6 text-orange-500" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth px-8"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {projects.map((project) => (
              <ProjectCardMobile
                key={project.id}
                project={project}
                slideIndexes={slideIndexes}
              />
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="absolute -right-4 z-10 w-10 h-10 flex items-center justify-center shrink-0"
          >
            <ChevronRight className="w-6 h-6 text-orange-500" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects
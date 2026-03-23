import { useState, useEffect, useRef } from "react"
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "А-фрейм дом 9×9",
    category: "Каркасный дом 81 м²",
    location: "",
    year: "2024",
    images: [
      "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/55ab852f-7edf-419a-a144-216b0db6505b.jpg",
      "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/f1a6c2d4-717d-4f7a-8e1b-4368eac1c2d5.jpg",
      "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/31d01514-9e06-49b3-aacd-ec4fbe887f58.jpg",
    ],
  },
  {
    id: 2,
    title: "Каркасный дом 9×12",
    category: "Каркасный дом 216 м²",
    location: "",
    year: "2023",
    images: [
      "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/7a6f32c1-a10b-4899-9a6c-e3cd69991c13.jpg",
    ],
  },
  {
    id: 3,
    title: "Дом «Тихая гавань»",
    category: "Каркасный дом 8×6, 2 этажа · Фасад GrandLine антрацит",
    location: "",
    year: "2023",
    images: [
      "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/1c112150-5572-4103-b24f-c9979e93f076.jpg",
    ],
  },
  {
    id: 4,
    title: "Усадьба «Северная»",
    category: "Каркасный дом 240 м²",
    location: "Карелия",
    year: "2024",
    images: [
      "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/9e66a153-da16-44d0-826b-d98c881b7c69.jpg",
    ],
  },
  {
    id: 5,
    title: "Каркасная баня",
    category: "Баня под ключ 6×6",
    location: "",
    year: "2024",
    images: [
      "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/e4ab6219-7cb4-4808-b5c3-8d9537204194.jpg",
    ],
  },
  {
    id: 7,
    title: "Каркасный дом 9×9",
    category: "Каркасный дом · Сайдинг GrandLine",
    location: "",
    year: "2025",
    images: [
      "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/6cef447f-ec66-4a48-8d3d-eaf3ffdd8df2.jpg",
    ],
  },
  {
    id: 9,
    title: "Дача у озера 11×8",
    category: "Каркасная дача 2 этажа · Терраса",
    location: "",
    year: "2025",
    images: [
      "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/fbe39a78-c2be-4a1c-81a0-4169e556d25b.jpg",
    ],
  },
  {
    id: 11,
    title: "Дача 2 этажа 8×8",
    category: "Каркасная дача · Профлист жёлтый",
    location: "",
    year: "2025",
    images: [
      "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/14e88435-0238-4183-b8ae-47d93640ed43.jpg",
    ],
  },
  {
    id: 13,
    title: "Баня с террасой",
    category: "Каркасная баня · Терраса · Металлочерепица бежевая",
    location: "",
    year: "2025",
    images: [
      "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/e33121cd-892b-4742-a088-51174c5bde96.jpg",
    ],
  },
  {
    id: 12,
    title: "Баня с террасой и купелью",
    category: "Каркасная баня · Терраса · Металлочерепица",
    location: "",
    year: "2025",
    images: [
      "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/b3d37642-ef03-4d6e-9d9b-a7e496e9c3a8.jpg",
    ],
  },
  {
    id: 10,
    title: "Дача из профлиста",
    category: "Каркасная дача · Профлист коричневый",
    location: "",
    year: "2025",
    images: [
      "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/0973e31d-c52a-4852-94ee-77af2ec39b0e.jpg",
    ],
  },
  {
    id: 6,
    title: "Баня в лесу с купелью",
    category: "Каркасная баня под ключ",
    location: "",
    year: "2025",
    images: [
      "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/cf189aaf-d379-44fc-83f2-6f814611de47.jpg",
    ],
  },
]

export function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [revealedImages, setRevealedImages] = useState<Set<number>>(new Set())
  const [slideIndexes, setSlideIndexes] = useState<Record<number, number>>({})
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])

  const goSlide = (projectId: number, direction: number, totalImages: number) => {
    setSlideIndexes((prev) => {
      const current = prev[projectId] || 0
      const next = (current + direction + totalImages) % totalImages
      return { ...prev, [projectId]: next }
    })
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = imageRefs.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1) {
              setRevealedImages((prev) => new Set(prev).add(projects[index].id))
            }
          }
        })
      },
      { threshold: 0.2 },
    )

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-32 md:py-29 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/a70ed155-b6af-463b-8401-6e36d49cbd81.jpg"
          alt="Готовые каркасные дома"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-white/70" />
      </div>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Построенные дома</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">Наши работы</h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            Смотреть все проекты
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => {
            const images = project.images || (project.image ? [project.image] : ["/placeholder.svg"])
            const currentSlide = slideIndexes[project.id] || 0
            const hasMultiple = images.length > 1

            return (
              <article
                key={project.id}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div ref={(el) => (imageRefs.current[index] = el)} className="relative overflow-hidden aspect-[4/3] mb-6">
                  <img
                    src={images[currentSlide]}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      hoveredId === project.id ? "scale-105" : "scale-100"
                    }`}
                  />
                  <div
                    className="absolute inset-0 bg-primary origin-top"
                    style={{
                      transform: revealedImages.has(project.id) ? "scaleY(0)" : "scaleY(1)",
                      transition: "transform 1.5s cubic-bezier(0.76, 0, 0.24, 1)",
                    }}
                  />
                  {hasMultiple && (
                    <>
                      <button
                        onClick={(e) => { e.stopPropagation(); goSlide(project.id, -1, images.length) }}
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); goSlide(project.id, 1, images.length) }}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {images.map((_, i) => (
                          <button
                            key={i}
                            onClick={(e) => { e.stopPropagation(); setSlideIndexes((prev) => ({ ...prev, [project.id]: i })) }}
                            className={`w-2 h-2 rounded-full transition-all ${i === currentSlide ? "bg-white w-5" : "bg-white/60"}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-medium mb-2 group-hover:underline underline-offset-4">{project.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {project.category}{project.location ? ` · ${project.location}` : ""}
                    </p>
                  </div>
                  <span className="text-muted-foreground/60 text-sm">{project.year}</span>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
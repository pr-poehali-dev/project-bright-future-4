import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    id: 23,
    title: "Каркасный дом «Дача 68»",
    category: "Каркасный дом 68 м² · Планкен · Парная · Две террасы 19,84 м²",
    location: "Тульская область",
    year: "2026",
    images: [
      "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/7c9c495f-ea33-449f-a092-c6c441b285cb.jpg",
      "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/9910a57e-e9a3-486f-8cd0-550ccb2c11b1.jpg",
      "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/85c9bf74-1548-42a0-aedc-5a2154f2fa7f.jpg",
      "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/557d76ce-df99-4c89-9eb6-2aafa78be1c8.jpg",
      "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/9c110775-6519-4a00-8824-951d16babb5a.jpg",
    ],
    link: "/projects/dacha-68",
  },
  {
    id: 22,
    title: "Каркасный дом «Модерн 63»",
    category: "Каркасный дом 74 м² · Металлочерепица · Терраса 13 м² · Сауна",
    location: "Тульская область",
    year: "2026",
    images: [
      "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/1bb104b3-1678-4e54-80bd-fb79ae42161b.png",
      "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/9b024708-25cc-423c-b674-ea19f0888b68.png",
      "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/e90cad2f-aedf-4ac8-97bb-f8bce810f3fe.png",
      "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/3ca6bea4-8b83-485c-9260-614829c4692e.png",
    ],
    link: "/projects/house-modern-63",
  },
  {
    id: 4,
    title: "Усадьба «Северная»",
    category: "Каркасный дом 240 м²",
    location: "Карелия",
    year: "2025",
    images: [
      "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/9e66a153-da16-44d0-826b-d98c881b7c69.jpg",
    ],
  },
  {
    id: 7,
    title: "Каркасный дом 9×9",
    category: "Каркасный дом · Сайдинг GrandLine",
    location: "",
    year: "2025",
    images: [
      "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/602f1d91-8439-4cd5-ba13-8b5596547ac5.jpg",
    ],
  },
  {
    id: 9,
    title: "Дача «Тихое место» 11×8",
    category: "Каркасная дача 2 этажа · Терраса · Металлочерепица GrandLine",
    location: "",
    year: "2025",
    images: [
      "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/fbe39a78-c2be-4a1c-81a0-4169e556d25b.jpg",
    ],
  },
  {
    id: 13,
    title: "Компактная банька с террасой",
    category: "Каркасная баня · Терраса",
    location: "",
    year: "2025",
    images: [
      "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/e33121cd-892b-4742-a088-51174c5bde96.jpg",
    ],
  },
  {
    id: 12,
    title: "Баня с террасой и купелью",
    category: "Каркасная баня · Терраса",
    location: "",
    year: "2025",
    images: [
      "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/b3d37642-ef03-4d6e-9d9b-a7e496e9c3a8.jpg",
    ],
  },
  {
    id: 16,
    title: "А-фрейм дом в лесу",
    category: "Каркасный дом · А-фрейм",
    location: "",
    year: "2025",
    images: [
      "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/9e9a6b39-d698-4e09-83bb-a7eb062fad40.jpg",
    ],
  },
  {
    id: 15,
    title: "Барнхаус «Тёмный лес»",
    category: "Каркасный дом · Барнхаус · Фасад антрацит",
    location: "",
    year: "2025",
    images: [
      "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/1e5ca22f-2f9f-4cf3-bf93-a91d6555ec97.jpg",
    ],
  },
  {
    id: 6,
    title: "Баня «Лесная поляна»",
    category: "Каркасная баня под ключ",
    location: "",
    year: "2025",
    images: [
      "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/cf189aaf-d379-44fc-83f2-6f814611de47.jpg",
    ],
  },
  {
    id: 14,
    title: "Каркасный дом с верандой",
    category: "Каркасный дом · Веранда · Гибкая черепица ТЕХНОНИКОЛЬ",
    location: "",
    year: "2024",
    images: [
      "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/56d74da9-b326-4a51-905c-a89d487e62c0.jpg",
    ],
  },
  {
    id: 18,
    title: "Баня с верандой",
    category: "Баня · Веранда · Профлист GrandLine",
    location: "",
    year: "2024",
    images: [
      "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/a8eadf07-30d9-4187-aa91-152f429dce7e.jpg",
    ],
  },
  {
    id: 17,
    title: "Одноэтажный дом с верандой",
    category: "Каркасный дом · Веранда · Профлист GrandLine",
    location: "",
    year: "2024",
    images: [
      "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/1a7ebd95-de31-4fc9-a7f2-9cfb0dfe977d.jpg",
    ],
  },
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
    id: 10,
    title: "Дача 6×6",
    category: "Каркасная дача · Сайдинг · Кровля профлист GrandLine",
    location: "",
    year: "2023",
    images: [
      "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/0973e31d-c52a-4852-94ee-77af2ec39b0e.jpg",
    ],
  },
  {
    id: 11,
    title: "Дача 2 этажа 8×8",
    category: "Каркасная дача · Сайдинг GrandLine",
    location: "",
    year: "2023",
    images: [
      "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/14e88435-0238-4183-b8ae-47d93640ed43.jpg",
    ],
  },
  {
    id: 21,
    title: "Каркасный дом с террасой 10×10",
    category: "Каркасный дом 100 м² · Крыша металл · Терраса 17 м²",
    location: "Тульская область",
    year: "2023",
    images: [
      "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/eefe6c97-35f2-4174-8455-5490e23dec07.png",
      "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/bf9301d1-b706-4dc6-bf48-c962d5ce86c7.png",
      "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/668bc9a9-d71f-44ff-942c-2feda6a5ffe1.png",
      "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/7808b7f9-971e-45db-9b52-7d0c91b70be2.png",
    ],
    description: "Двухэтажный каркасный дом 10×10 м с большой террасой 17 м². 3 спальни, гостиная-кухня 28,5 м², кабинет, 2 санузла. Под ключ за 120 дней.",
    link: "/projects/house-frame-terrace",
  },
  {
    id: 19,
    title: "Двухэтажный дом с верандой",
    category: "Каркасный дом 9х8 · Веранда · Гибкая черепица ТЕХНОНИКОЛЬ",
    location: "",
    year: "2022",
    images: [
      "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/014ed807-ab79-4540-88c0-40b72b26661e.jpg",
    ],
  },
]

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
          {visible.map((project, index) => {
            const images = project.images || ["/placeholder.svg"]
            const currentSlide = slideIndexes[project.id] || 0
            const hasMultiple = images.length > 1

            return (
              <article
                key={`${current}-${index}`}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative overflow-hidden aspect-[4/3] mb-6">
                  <img
                    src={images[currentSlide]}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      hoveredId === project.id ? "scale-105" : "scale-100"
                    }`}
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
          })}
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
            {projects.map((project) => {
              const images = project.images || ["/placeholder.svg"]
              const currentSlide = slideIndexes[project.id] || 0

              return (
                <article key={project.id} className="shrink-0 w-[80vw]">
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
            })}
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
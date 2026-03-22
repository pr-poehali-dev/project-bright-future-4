import { useEffect, useRef, useState } from "react"
import { HighlightedText } from "./HighlightedText"

const philosophyItems = [
  {
    title: "Скорость без потери качества",
    description:
      "Каркасная технология позволяет возвести дом за 2–4 месяца. Мы не жертвуем ни одним этапом — от фундамента до финишной отделки.",
  },
  {
    title: "Тепло и энергоэффективность",
    description:
      "Многослойные стены с современными утеплителями обеспечивают низкие расходы на отопление даже в сильные морозы.",
  },
  {
    title: "Любой проект — под ваш бюджет",
    description:
      "Небольшой дачный домик или просторный коттедж на несколько поколений — мы подбираем решение под ваши задачи и финансовые возможности.",
  },
  {
    title: "Честный договор и гарантия",
    description: "Фиксированная цена в договоре, прозрачная смета и гарантия на конструктив. Никаких доплат после подписания.",
  },
]

export function Philosophy() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.3 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-32 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left column - Title and image */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Наш подход</p>
            <h2 className="text-6xl md:text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-8xl">
              Строим качественно
              <br />
              <HighlightedText>и с душой</HighlightedText>
            </h2>

            <div className="relative hidden lg:block">
              <img
                src="/images/exterior.png"
                alt="Архитектурный эскиз рабочего пространства"
                className="opacity-90 relative z-10 w-auto"
              />
            </div>
          </div>

          {/* Right column - Description and Philosophy items */}
          <div className="space-y-6 lg:pt-48">
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md mb-12">
              Каркасный дом — это не просто технология. Это возможность жить в тёплом, надёжном и красивом доме, построенном точно в срок и без лишних затрат.
            </p>

            {philosophyItems.map((item, index) => (
              <div
                key={item.title}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                data-index={index}
                className={`transition-all duration-700 ${
                  visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-6">
                  <div>
                    <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
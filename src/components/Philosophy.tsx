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
  {
    title: "Опытная команда",
    description:
      "Наши мастера строят каркасные дома более 10 лет. Каждый специалист знает своё дело — от плотника до электрика. Мы не нанимаем случайных людей.",
  },
  {
    title: "Контроль на каждом этапе",
    description:
      "Прораб ведёт объект от начала до сдачи. Фотоотчёты с площадки, открытая коммуникация и никаких сюрпризов — вы всегда знаете, что происходит на стройке.",
  },
  {
    title: "Качественные материалы",
    description:
      "Используем только проверенные материалы от надёжных поставщиков. Древесина камерной сушки, современные утеплители и влагостойкие плиты — всё для долговечности вашего дома.",
  },
  {
    title: "Работаем по всей Тульской области",
    description:
      "Выезжаем на участок в любой район области. Бесплатная консультация и замер — без обязательств. Просто позвоните, и мы приедем.",
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
      { threshold: 0.2 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-32 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-20">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Наш подход</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-8xl">
            Строим качественно
            <br />
            <HighlightedText>и с душой</HighlightedText>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Каркасный дом — это не просто технология. Это возможность жить в тёплом, надёжном и красивом доме, построенном точно в срок и без лишних затрат.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {philosophyItems.map((item, index) => (
            <div
              key={item.title}
              ref={(el) => { itemRefs.current[index] = el }}
              data-index={index}
              className={`relative pl-8 border-l border-border transition-all duration-700 ${
                visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <h3 className="text-xl font-medium mb-4">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

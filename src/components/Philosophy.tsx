import { useEffect, useRef, useState } from "react"
import { HighlightedText } from "./HighlightedText"
import Icon from "@/components/ui/icon"

const philosophyItems = [
  {
    title: "Скорость без потери качества",
    description:
      "Каркасная технология позволяет возвести дом за 2–4 месяца. Мы не жертвуем ни одним этапом — от фундамента до финишной отделки.",
    icon: "Zap",
  },
  {
    title: "Тепло и энергоэффективность",
    description:
      "Многослойные стены с современными утеплителями обеспечивают низкие расходы на отопление даже в сильные морозы.",
    icon: "Flame",
  },
  {
    title: "Любой проект — под ваш бюджет",
    description:
      "Небольшой дачный домик или просторный коттедж на несколько поколений — мы подбираем решение под ваши задачи и финансовые возможности.",
    icon: "Wallet",
  },
  {
    title: "Честный договор и гарантия",
    description: "Фиксированная цена в договоре, прозрачная смета и гарантия на конструктив. Никаких доплат после подписания.",
    icon: "ShieldCheck",
  },
  {
    title: "Опытная команда",
    description:
      "Наши мастера строят каркасные дома более 10 лет. Каждый специалист знает своё дело — от плотника до электрика. Мы не нанимаем случайных людей.",
    icon: "HardHat",
  },
  {
    title: "Контроль на каждом этапе",
    description:
      "Прораб ведёт объект от начала до сдачи. Фотоотчёты с площадки, открытая коммуникация и никаких сюрпризов — вы всегда знаете, что происходит на стройке.",
    icon: "ClipboardCheck",
  },
  {
    title: "Качественные материалы",
    description:
      "Используем только проверенные материалы от надёжных поставщиков. Древесина камерной сушки, современные утеплители и влагостойкие плиты — всё для долговечности вашего дома.",
    icon: "Package",
  },
  {
    title: "Работаем по всей Тульской области",
    description:
      "Выезжаем на участок в любой район области. Бесплатная консультация и замер — без обязательств. Просто позвоните, и мы приедем.",
    icon: "MapPin",
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
    <section id="about" className="py-32 md:py-29 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/d7026362-ecf3-411c-b3ab-8cdc8c610cd8.jpg"
          alt="Команда профессионалов каркасного домостроения"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-white/60" />
      </div>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mb-20">
          <p className="text-foreground text-base md:text-lg font-bold tracking-[0.25em] uppercase mb-6">Наш подход</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-8xl">
            Строим качественно
            <br />
            <HighlightedText>и с душой</HighlightedText>
          </h2>
          <p className="text-foreground text-lg leading-relaxed font-semibold">
            Каркасный дом — это не просто технология. Это возможность жить в тёплом, надёжном и красивом доме, построенном точно в срок и без лишних затрат.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 relative z-10">
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
              <Icon name={item.icon} size={40} className="mb-4 text-foreground" strokeWidth={1.25} />
              <h3 className="text-xl font-bold mb-4 text-foreground">{item.title}</h3>
              <p className="text-foreground/80 leading-relaxed font-medium">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
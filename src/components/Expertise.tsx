import { useEffect, useRef, useState } from "react"
import { Home, Building, Armchair, Trees, Wrench, Thermometer, PaintBucket, FileText, Truck, Layers } from "lucide-react"
import { HighlightedText } from "./HighlightedText"

const expertiseAreas = [
  {
    title: "Проектирование",
    description: "Разрабатываем индивидуальный проект под ваш участок, образ жизни и бюджет. Готовая документация для строительства.",
    icon: Home,
  },
  {
    title: "Строительство под ключ",
    description:
      "Возводим дом от фундамента до отделки. Одна бригада — полная ответственность за результат без субподрядчиков.",
    icon: Building,
  },
  {
    title: "Внутренняя отделка",
    description:
      "Чистовая или черновая отделка, разводка коммуникаций, установка окон и дверей. Заезжайте сразу после сдачи.",
    icon: Armchair,
  },
  {
    title: "Участок и фундамент",
    description:
      "Анализ грунта, выбор типа фундамента, привязка к участку. Правильное основание — залог долговечности дома.",
    icon: Trees,
  },
  {
    title: "Инженерные коммуникации",
    description:
      "Монтаж электрики, водоснабжения, канализации и отопления. Всё по нормам и с гарантией — готово к заселению с первого дня.",
    icon: Wrench,
  },
  {
    title: "Утепление и звукоизоляция",
    description:
      "Подбираем оптимальный пирог стен для вашего региона. Дом будет тёплым зимой, прохладным летом и тихим круглый год.",
    icon: Thermometer,
  },
  {
    title: "Фасадные работы",
    description:
      "Обшивка фасада сайдингом, имитацией бруса или другими материалами. Защищаем дом от влаги и придаём ему красивый внешний вид.",
    icon: PaintBucket,
  },
  {
    title: "Гарантия и обслуживание",
    description:
      "После сдачи объекта остаёмся на связи. Устраняем любые замечания бесплатно в течение гарантийного срока.",
    icon: FileText,
  },
  {
    title: "Доставка до объекта",
    description:
      "Привозим все материалы и инструменты прямо на ваш участок. Работаем по всей Тульской области — никаких лишних забот с логистикой.",
    icon: Truck,
  },
  {
    title: "Кровельные работы",
    description:
      "Монтаж кровли любой сложности: двускатная, вальмовая, мансардная. Металлочерепица, профнастил, мягкая кровля — подберём под ваш проект и бюджет.",
    icon: Layers,
  },
]

export function Expertise() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)
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
    <section id="services" ref={sectionRef} className="py-32 md:py-29 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/cfac98c8-a2e0-4fe6-a4a3-9031bda7a211.jpg"
          alt="Строительные инструменты и процесс строительства"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-white/75" />
      </div>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mb-20">
          <p className="text-foreground text-base md:text-lg font-bold tracking-[0.25em] uppercase mb-6">Наши услуги</p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-8xl">
            <HighlightedText>Услуги</HighlightedText>, которые
            <br />
            решают всё
          </h2>
          <p className="text-foreground text-base sm:text-lg leading-relaxed font-semibold">
            От первого эскиза до ключей в руках — берём на себя все этапы строительства, чтобы вы могли просто ждать результат.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-6 gap-y-10 md:gap-x-12 md:gap-y-16">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon
            return (
              <div
                key={area.title}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                data-index={index}
                className={`relative pl-4 sm:pl-8 border-l border-border transition-all duration-700 ${
                  visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div
                  className={`transition-all duration-1000 ${
                    visibleItems.includes(index) ? "animate-draw-stroke" : ""
                  }`}
                  style={{
                    transitionDelay: `${index * 150}ms`,
                  }}
                >
                  <Icon className="w-10 h-10 mb-4 text-foreground" strokeWidth={1.25} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">{area.title}</h3>
                <p className="text-foreground/80 leading-relaxed font-medium">{area.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
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

  return (
    <section id="services" className="py-32 md:py-29 relative overflow-hidden">
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

        {/* Мобильная версия — два столбца */}
        <div className="grid grid-cols-2 gap-3 md:hidden">
          {expertiseAreas.map((area) => {
            const Icon = area.icon
            return (
              <div key={area.title} className="bg-foreground text-white p-4 flex flex-col gap-2">
                <Icon className="w-5 h-5 text-orange-400" strokeWidth={1.25} />
                <h3 className="text-xs font-bold text-white leading-snug">{area.title}</h3>
                <p className="text-white/70 text-[11px] leading-relaxed">{area.description}</p>
              </div>
            )
          })}
        </div>

        {/* Десктопная версия */}
        <div className="hidden md:grid md:grid-cols-2 gap-6">
          {expertiseAreas.map((area) => {
            const Icon = area.icon
            return (
              <div key={area.title} className="bg-foreground text-white p-8 flex flex-col gap-4">
                <Icon className="w-9 h-9 text-orange-400" strokeWidth={1.25} />
                <h3 className="text-xl font-bold text-white">{area.title}</h3>
                <p className="text-white/70 leading-relaxed">{area.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
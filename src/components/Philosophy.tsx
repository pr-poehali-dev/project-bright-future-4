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
    title: "Индивидуальный проект для каждого",
    description:
      "Не используем типовые шаблоны — каждый дом проектируем под конкретный участок, образ жизни и пожелания заказчика. Вы получаете именно тот дом, о котором мечтали.",
    icon: "Pencil",
  },
  {
    title: "Работаем по всей Тульской области",
    description:
      "Выезжаем на участок в любой район области. Бесплатная консультация и замер — без обязательств. Просто позвоните, и мы приедем.",
    icon: "MapPin",
  },
]

export function Philosophy() {

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
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-8xl">
            Строим качественно
            <br />
            <HighlightedText>и с душой</HighlightedText>
          </h2>
          <p className="text-foreground text-base sm:text-lg leading-relaxed font-semibold">
            Каркасный дом — это не просто технология. Это возможность жить в тёплом, надёжном и красивом доме, построенном точно в срок и без лишних затрат.
          </p>
        </div>

        {/* Мобильная версия — два столбца, компактно */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 md:hidden relative z-10">
          {philosophyItems.map((item) => (
            <div key={item.title} className="relative pl-3 border-l border-border">
              <Icon name={item.icon} size={24} className="mb-2 text-black" strokeWidth={1.25} />
              <h3 className="text-sm font-extrabold mb-1 text-black leading-snug">{item.title}</h3>
              <p className="text-black/80 text-xs leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Десктопная версия */}
        <div className="hidden md:grid md:grid-cols-2 gap-x-12 gap-y-16 relative z-10">
          {philosophyItems.map((item) => (
            <div key={item.title} className="relative pl-8 border-l border-border">
              <Icon name={item.icon} size={40} className="mb-4 text-black" strokeWidth={1.25} />
              <h3 className="text-xl font-bold mb-4 text-black">{item.title}</h3>
              <p className="text-black/80 leading-relaxed font-medium">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
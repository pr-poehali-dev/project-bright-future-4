import { useState } from "react"
import { HighlightedText } from "./HighlightedText"
import Icon from "@/components/ui/icon"

const options = [
  {
    icon: "Banknote",
    title: "100% оплата",
    description: "Оплачиваете всю сумму сразу и получаете скидку 10% на строительство.",
    badge: "Скидка 10%",
    details: [
      "Максимальная скидка 10% на весь объём работ",
      "Фиксированная стоимость в договоре",
      "Приоритетный старт строительства",
      "Персональный менеджер на весь срок",
    ],
  },
  {
    icon: "Split",
    title: "50/50",
    description: "50% аванс при подписании договора, остаток — при сдаче готового объекта.",
    badge: "Скидка 5%",
    details: [
      "50% при подписании договора",
      "50% при сдаче готового объекта",
      "Скидка 5% на строительство",
      "Прозрачная смета без скрытых платежей",
    ],
  },
  {
    icon: "CalendarDays",
    title: "Рассрочка",
    description: "Разбиваем оплату на этапы строительства: фундамент, каркас, кровля, отделка.",
    badge: "Без %",
    details: [
      "Оплата по этапам: фундамент, каркас, кровля, отделка",
      "Без процентов и переплат",
      "Индивидуальный график платежей",
      "Старт строительства с первого взноса",
    ],
  },
]

export function Financing() {
  const [active, setActive] = useState(0)

  return (
    <section id="financing" className="py-32 md:py-29 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/ff1f5213-dbd6-4d56-83bb-8adcfcd22743.jpg"
          alt="Финансирование строительства дома"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-white/80" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mb-20">
          <p className="text-foreground text-base md:text-lg font-bold tracking-[0.25em] uppercase mb-6">Оплата</p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-8xl">
            Рассрочка и <HighlightedText>финансирование</HighlightedText>
          </h2>
          <p className="text-foreground text-base sm:text-lg leading-relaxed font-semibold">
            Выберите удобный способ оплаты — строим для всех, вне зависимости от бюджета прямо сейчас.
          </p>
        </div>

        {/* Вкладки */}
        <div className="flex flex-col sm:flex-row gap-0 mb-0">
          {options.map((option, index) => (
            <button
              key={option.title}
              onClick={() => setActive(index)}
              className={`flex-1 flex items-center justify-between px-6 py-5 text-left transition-all duration-300 border-b-2 ${
                active === index
                  ? "bg-foreground text-white border-orange-400"
                  : "bg-foreground/80 text-white/60 border-transparent hover:bg-foreground hover:text-white/90"
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon name={option.icon as Parameters<typeof Icon>[0]["name"]} size={20} className={active === index ? "text-orange-400" : "text-white/40"} />
                <span className="font-semibold tracking-wide">{option.title}</span>
              </div>
              <span className={`text-xs font-bold px-2 py-1 ${active === index ? "bg-orange-400 text-white" : "bg-white/10 text-white/50"}`}>
                {option.badge}
              </span>
            </button>
          ))}
        </div>

        {/* Контент активной вкладки */}
        <div className="bg-foreground text-white p-8 sm:p-12">
          <div className="flex items-start gap-6 mb-8">
            <div className="w-14 h-14 border border-white/20 flex items-center justify-center flex-shrink-0">
              <Icon name={options[active].icon as Parameters<typeof Icon>[0]["name"]} size={26} className="text-orange-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">{options[active].title}</h3>
              <p className="text-white/60 leading-relaxed">{options[active].description}</p>
            </div>
          </div>
          <ul className="grid sm:grid-cols-2 gap-4">
            {options[active].details.map((detail) => (
              <li key={detail} className="flex items-start gap-3">
                <Icon name="Check" size={16} className="text-orange-400 mt-1 flex-shrink-0" />
                <span className="text-white/80 text-sm leading-relaxed">{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

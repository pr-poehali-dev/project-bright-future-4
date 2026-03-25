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
        <div className="max-w-3xl mb-16">
          <p className="text-foreground text-base md:text-lg font-bold tracking-[0.25em] uppercase mb-6">Оплата</p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-8xl">
            Рассрочка и <HighlightedText>финансирование</HighlightedText>
          </h2>
          <p className="text-foreground text-base sm:text-lg leading-relaxed font-semibold">
            Выберите удобный способ оплаты — строим для всех, вне зависимости от бюджета прямо сейчас.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
          {options.map((option) => (
            <div key={option.title} className="bg-foreground text-white flex flex-col p-6 md:p-8">
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-14 md:h-14 border border-white/20 flex items-center justify-center flex-shrink-0">
                  <Icon name={option.icon as Parameters<typeof Icon>[0]["name"]} size={22} className="text-orange-400" />
                </div>
                <span className="text-xs font-bold px-2 py-1 bg-orange-400 text-white">
                  {option.badge}
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">{option.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4 md:mb-6">{option.description}</p>
              <ul className="flex flex-col gap-2 mt-auto">
                {option.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-2">
                    <Icon name="Check" size={14} className="text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80 text-sm leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
import { HighlightedText } from "./HighlightedText"
import Icon from "@/components/ui/icon"

const options = [
  {
    icon: "Banknote",
    title: "100% оплата",
    description: "Оплачиваете всю сумму сразу и получаете скидку 10% на строительство.",
    badge: "Скидка 10%",
  },
  {
    icon: "Split",
    title: "50/50",
    description: "50% аванс при подписании договора, остаток — при сдаче готового объекта.",
    badge: "Скидка 5%",
  },
  {
    icon: "CalendarDays",
    title: "Рассрочка",
    description: "Разбиваем оплату на этапы строительства: фундамент, каркас, кровля, отделка.",
    badge: "Без %",
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
        <div className="max-w-3xl mb-20">
          <p className="text-foreground text-base md:text-lg font-bold tracking-[0.25em] uppercase mb-6">Оплата</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-8xl">
            Рассрочка и <HighlightedText>финансирование</HighlightedText>
          </h2>
          <p className="text-foreground text-lg leading-relaxed font-semibold">
            Выберите удобный способ оплаты — строим для всех, вне зависимости от бюджета прямо сейчас.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {options.map((option) => (
            <div
              key={option.title}
              className="bg-white border border-border p-8 flex flex-col gap-5 hover:border-foreground transition-colors duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="w-11 h-11 border border-border flex items-center justify-center">
                  <Icon name={option.icon as Parameters<typeof Icon>[0]["name"]} size={20} />
                </div>
                <span className="text-xs font-bold tracking-wide bg-foreground text-background px-3 py-1">
                  {option.badge}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{option.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{option.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
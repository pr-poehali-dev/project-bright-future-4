import { HighlightedText } from "./HighlightedText"
import Icon from "@/components/ui/icon"

const steps = [
  {
    number: "1",
    title: "Заявка и консультация",
    description: "Вы оставляете заявку или звоните нам. Мы обсуждаем ваш проект, пожелания и бюджет. Это бесплатно и ни к чему не обязывает.",
    icon: "Phone",
    duration: "1 день",
  },
  {
    number: "2",
    title: "Выезд на участок",
    description: "Наш специалист приезжает на ваш участок, оценивает грунт, рельеф и расположение. Делаем замеры и фотофиксацию.",
    icon: "MapPin",
    duration: "1–2 дня",
  },
  {
    number: "3",
    title: "Проект и смета",
    description: "Разрабатываем индивидуальный проект под ваши требования. Готовим подробную смету со стоимостью всех материалов и работ.",
    icon: "FileText",
    duration: "3–7 дней",
  },
  {
    number: "4",
    title: "Договор и аванс",
    description: "Подписываем договор с чёткими сроками и фиксированной стоимостью. Вносите аванс — и мы приступаем к работе.",
    icon: "ClipboardCheck",
    duration: "1 день",
  },
  {
    number: "5",
    title: "Строительство",
    description: "Возводим дом по проекту: фундамент, каркас, кровля, утепление, отделка. Вы можете наблюдать за процессом онлайн или приезжать на объект.",
    icon: "HardHat",
    duration: "2–4 месяца",
  },
  {
    number: "6",
    title: "Сдача объекта",
    description: "Принимаете готовый дом. Подписываем акт выполненных работ. Выдаём гарантийный паспорт и инструкции по обслуживанию.",
    icon: "KeyRound",
    duration: "1 день",
  },
]

export function Process() {

  return (
    <section id="process" className="py-32 md:py-29 bg-foreground text-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-20">
          <p className="text-background/60 text-base md:text-lg font-bold tracking-[0.25em] uppercase mb-6">Как мы работаем</p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-8xl text-background">
            Этапы <HighlightedText>работы</HighlightedText>
          </h2>
          <p className="text-background/70 text-base sm:text-lg leading-relaxed font-semibold">
            От первого звонка до ключей в руках — прозрачный процесс без сюрпризов.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-background/10">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="bg-foreground p-5 sm:p-8 flex flex-col gap-5"
            >
              <div className="flex items-start justify-between">
                <span className="text-5xl font-black text-background/10 leading-none">{step.number}</span>
                <div className="w-10 h-10 border border-background/20 flex items-center justify-center">
                  <Icon name={step.icon as Parameters<typeof Icon>[0]["name"]} size={18} className="text-background/70" />
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-semibold text-background mb-3 leading-snug">{step.title}</h3>
                <p className="text-background/60 text-sm leading-relaxed">{step.description}</p>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-background/10">
                <Icon name="Clock" size={13} className="text-background/40" />
                <span className="text-background/40 text-xs tracking-wide">{step.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
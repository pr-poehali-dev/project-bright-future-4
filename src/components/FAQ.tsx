import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "Какой выбрать фундамент?",
    answer:
      "Выбор фундамента зависит от типа грунта, нагрузки дома и бюджета. Для каркасных домов чаще всего используют свайно-винтовой — быстрый и доступный вариант. Мы проводим анализ участка и рекомендуем оптимальное решение под ваш проект.",
  },
  {
    question: "Как долго строится каркасный дом?",
    answer:
      "Дом площадью до 150 м² возводится за 2–4 месяца при хорошей погоде. Это в 2–3 раза быстрее, чем кирпич или газобетон. После подписания договора мы согласовываем чёткий график и строго его соблюдаем.",
  },
  {
    question: "Насколько тёплым будет каркасный дом?",
    answer:
      "Очень тёплым. Стены с утеплителем 200 мм соответствуют нормам для постоянного проживания в любом регионе России. Правильно построенный каркасный дом по теплопотерям не уступает кирпичному при значительно меньшем весе и стоимости.",
  },
  {
    question: "Сколько прослужит каркасный дом?",
    answer:
      "При качественном строительстве и правильной эксплуатации — 50–100 лет. Деревянный каркас обрабатывается антисептиком, все узлы продуманы для долговечности.",
  },
  {
    question: "Можно ли строить зимой?",
    answer:
      "Да, каркасные дома строятся круглый год. Зимой даже есть преимущества: древесина меньше деформируется при низкой влажности. Фундаментные работы лучше проводить до сильных морозов, остальное — без ограничений по сезону.",
  },
  {
    question: "Как начать строительство?",
    answer:
      "Позвоните нам или оставьте заявку. Мы приедем на участок, оценим условия, обсудим ваши пожелания и подготовим смету бесплатно. После согласования проекта подписываем договор с фиксированной ценой и начинаем стройку.",
  },
  {
    question: "Включена ли доставка материалов в стоимость?",
    answer:
      "Да, доставка всех строительных материалов на объект включена в стоимость договора. Мы самостоятельно организуем логистику и контролируем сроки поставок, чтобы стройка шла без простоев. Вам не нужно беспокоиться о поиске транспорта или дополнительных расходах.",
  },
  {
    question: "Какие материалы используются при строительстве?",
    answer:
      "Мы работаем только с проверенными поставщиками и используем сертифицированные материалы. Каркас — сухая строганая доска камерной сушки, утеплитель — базальтовая вата или эковата, паро- и ветрозащитные мембраны ведущих производителей. На каждый материал имеются сертификаты качества, которые мы предоставляем по запросу.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-4xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-5xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
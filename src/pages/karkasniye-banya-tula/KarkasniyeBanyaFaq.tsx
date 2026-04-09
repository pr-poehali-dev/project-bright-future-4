import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    q: "Сколько стоит каркасная баня под ключ в Туле?",
    a: "Стоимость зависит от размера и комплектации. Баня 4×6 м под ключ — от 650 000 ₽, баня 6×6 м с террасой — от 950 000 ₽. Точную цену рассчитаем бесплатно после осмотра участка.",
  },
  {
    q: "Сколько строится каркасная баня?",
    a: "Каркасная баня строится за 30–45 дней. Это в 3–4 раза быстрее, чем баня из бруса или кирпича.",
  },
  {
    q: "Хорошо ли держит тепло каркасная баня?",
    a: "Да. Лёгкие стены с утеплением 150 мм прогреваются за 40–60 минут — в 2 раза быстрее сруба. Пар держится хорошо. Расход дров меньше.",
  },
  {
    q: "Нужен ли мощный фундамент под каркасную баню?",
    a: "Нет. Каркасная баня весит значительно меньше бревенчатой или кирпичной. Достаточно фундамента на винтовых сваях или мелкозаглублённой ленты.",
  },
  {
    q: "Можно ли добавить террасу или купель?",
    a: "Конечно. Мы строим бани с открытыми и закрытыми террасами, местом под купель, зоной барбекю. Любой вариант обсуждаем на этапе проекта.",
  },
  {
    q: "Работаете ли по всей Тульской области?",
    a: "Да. Строим в Туле, Алексине, Щёкино, Узловой, Новомосковске, Ефремове и по всему региону. Выезд специалиста в радиусе 100 км — бесплатно.",
  },
]

export default function KarkasniyeBanyaFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <section className="py-16">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl">
        <div className="text-center mb-12">
          <p className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3">Вопросы и ответы</p>
          <h2 className="text-3xl md:text-4xl font-medium">Часто спрашивают о банях в Туле</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-200">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-[#1a0f0f] text-sm md:text-base">{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-orange-500 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                />
              </button>
              {openFaq === i && (
                <div className="px-5 pb-5">
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

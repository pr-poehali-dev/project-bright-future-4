import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    q: "Сколько стоит построить дачу под ключ в Туле?",
    a: "Стоимость зависит от площади и планировки. Дача 6×6 м — от 750 000 ₽, двухэтажная 8×8 м — от 1 400 000 ₽, дача 11×8 м с террасой — от 2 000 000 ₽. Точную цену рассчитаем бесплатно после осмотра участка.",
  },
  {
    q: "За сколько дней строится каркасная дача?",
    a: "Каркасная дача строится за 45–60 дней. Это значительно быстрее дачи из бруса или кирпича — вы успеете к дачному сезону.",
  },
  {
    q: "Можно ли жить в каркасной даче зимой?",
    a: "Стандартная дача рассчитана на три сезона. Если нужно жить зимой — делаем утепление 200 мм и устанавливаем нормальное отопление. Уточните при заказе.",
  },
  {
    q: "Какой фундамент нужен под каркасную дачу?",
    a: "Чаще всего хватает фундамента на винтовых сваях — это быстро, недорого и надёжно. На пучинистых грунтах рекомендуем мелкозаглублённую ленту.",
  },
  {
    q: "Можно ли добавить баню или летнюю кухню на участок?",
    a: "Да, строим комплексы: дача + баня, дача + гараж, дача + летняя кухня. Всё по одному договору с фиксированной ценой.",
  },
  {
    q: "Работаете ли по всей Тульской области?",
    a: "Да. Строим в Туле, Алексине, Щёкино, Узловой, Новомосковске, Ефремове и по всему региону. Выезд специалиста в радиусе 100 км — бесплатно.",
  },
]

export default function DachiTulaFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <section className="py-16">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl">
        <div className="text-center mb-12">
          <p className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3">Вопросы и ответы</p>
          <h2 className="text-3xl md:text-4xl font-medium">Часто спрашивают о дачах в Туле</h2>
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

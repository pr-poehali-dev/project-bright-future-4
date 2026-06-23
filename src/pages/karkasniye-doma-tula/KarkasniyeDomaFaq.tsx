import { useState } from "react"
import { ChevronDown } from "lucide-react"

export const faqs = [
  {
    q: "Сколько стоит каркасный дом под ключ в Туле?",
    a: "Стоимость зависит от площади и комплектации. Дом 100 м² под ключ — от 2 800 000 ₽. Цена включает фундамент, каркас, утепление, кровлю, фасад, окна, двери и черновую отделку. Точную стоимость рассчитаем бесплатно после осмотра участка.",
  },
  {
    q: "Сколько времени строится каркасный дом?",
    a: "Каркасный дом 100 м² строится за 90–120 дней с момента подписания договора. Это в 2–3 раза быстрее, чем из кирпича или бетонных блоков.",
  },
  {
    q: "Тёплый ли каркасный дом зимой в Туле?",
    a: "Да. Мы используем утепление минватой 200 мм + ветробарьер. При -25°С снаружи достаточно котла мощностью 10–12 кВт. Расход газа — в среднем 20–30% ниже, чем в кирпичном доме той же площади.",
  },
  {
    q: "Работаете ли вы за пределами Тулы?",
    a: "Да, работаем по всей Тульской области: Алексин, Щёкино, Узловая, Новомосковск, Ефремов, Богородицк и другие города. Выезд специалиста — бесплатно в радиусе 100 км от Тулы.",
  },
  {
    q: "Можно ли изменить планировку под себя?",
    a: "Конечно. Любой проект мы адаптируем под ваш участок и пожелания. Также делаем дома полностью по индивидуальному проекту.",
  },
  {
    q: "Даёте ли вы гарантию на дом?",
    a: "Да. Гарантия на каркас и несущие конструкции — 5 лет, на кровлю — 3 года, на фасадную отделку — 2 года. Все условия прописываются в договоре.",
  },
]

export default function KarkasniyeDomaFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <section className="py-16">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl">
        <div className="text-center mb-12">
          <p className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3">Вопросы и ответы</p>
          <h2 className="text-3xl md:text-4xl font-medium">Часто спрашивают о каркасных домах в Туле</h2>
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

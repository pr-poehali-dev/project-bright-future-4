import { Check } from "lucide-react"

const whyList = [
  "Каркасная технология — дача готова за 45–60 дней",
  "Белый сайдинг с крытой террасой — светлый современный облик",
  "Просторные 64 м² — комфортно для семьи на всё лето",
  "Крытая терраса с балюстрадой — полноценная уличная гостиная",
  "Металлочерепица — надёжная кровля без протечек на годы вперёд",
  "Винтовые сваи — подходят для любого типа грунта",
  "Фиксированная цена в договоре — без сюрпризов и доплат",
  "Собственная бригада — работаем без субподрядчиков",
]

const included = [
  "Фундамент на винтовых сваях",
  "Силовой каркас из камерной сушки",
  "Утепление минватой 150–200 мм + ветробарьер",
  "Кровля из металлочерепицы",
  "Фасадная отделка — белый сайдинг",
  "Крытая терраса с балюстрадой",
  "Окна ПВХ двойной стеклопакет",
  "Входная дверь металлическая утеплённая",
  "Черновая внутренняя отделка",
  "Разводка электрики",
]

export default function Dacha64Details() {
  return (
    <>
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <p className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-4">Почему этот проект</p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-8">
                Уютная дача<br />для всей семьи
              </h2>
              <ul className="space-y-4">
                {whyList.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 shrink-0 w-5 h-5 bg-orange-500 flex items-center justify-center">
                      <Check size={12} className="text-white" />
                    </span>
                    <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-4">Комплектация</p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-8">
                Строим дачу<br />под ключ
              </h2>
              <ul className="space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 shrink-0 w-5 h-5 border border-orange-500 flex items-center justify-center">
                      <Check size={12} className="text-orange-500" />
                    </span>
                    <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#1a0f0f] text-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <p className="text-orange-400 text-sm font-bold tracking-widest uppercase mb-4">Отзыв клиента</p>
          <blockquote className="max-w-2xl mx-auto text-xl md:text-2xl font-medium leading-relaxed mb-6">
            «Построили быстро, в срок, без лишних вопросов и доплат. Дом тёплый, всё сделано качественно. Мама счастлива! Компания надёжная, люди отвечают за своё слово.»
          </blockquote>
          <p className="text-gray-400 text-sm">— Вячеслав, Тульская область, 2026</p>
        </div>
      </section>
    </>
  )
}
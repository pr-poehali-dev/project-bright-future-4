import { Check } from "lucide-react"

const whyList = [
  "Каркасная технология — баня готова за 30–45 дней",
  "Стены 200 мм минваты — баня быстро прогревается и долго держит жар",
  "Натуральный деревянный фасад — тёплый природный вид",
  "Парилка с дровяной печью — настоящий банный жар",
  "Терраса на сваях — комфортный отдых после парилки",
  "Компактные 25 м² — минимум затрат, максимум удовольствия",
  "Работаем по договору с фиксированной ценой — без сюрпризов",
]

const included = [
  "Фундамент на винтовых сваях",
  "Силовой каркас из камерной сушки",
  "Утепление минватой 200 мм + ветробарьер",
  "Кровля из металлочерепицы",
  "Фасадная отделка из натурального дерева",
  "Терраса с настилом из доски",
  "Окна ПВХ двойной стеклопакет",
  "Входная дверь металлическая утеплённая",
  "Внутренняя отделка парилки вагонкой из липы или осины",
  "Разводка электрики",
]

export default function Banya25Details() {
  return (
    <>
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <p className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-4">Почему этот проект</p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-8">
                Всё для настоящего<br />банного дня
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
              <p className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-4">Что входит в стоимость</p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-8">
                Строим баню<br />под ключ
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
            «Баня быстро прогревается, держит жар хорошо. Терраса небольшая, но очень удобная — посидеть после парилки самое то. Ребята работали чисто и в срок, проблем не было.»
          </blockquote>
          <p className="text-gray-400 text-sm">— Илья Михайлович, Тульская область, 2026</p>
        </div>
      </section>
    </>
  )
}
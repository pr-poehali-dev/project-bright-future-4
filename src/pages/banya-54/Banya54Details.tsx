import { Check } from "lucide-react"

const rooms = [
  { name: "Парилка", area: "—" },
  { name: "Душевая", area: "—" },
  { name: "Комната отдыха", area: "—" },
  { name: "Раздевалка / тамбур", area: "—" },
  { name: "Открытая терраса", area: "—" },
]

const whyList = [
  "Квадратные габариты 6×6 — удобно вписывается в любой участок",
  "Каркасная технология — баня готова за 60–90 дней",
  "Тёплые стены 200 мм минваты — быстро прогревается и долго держит жар",
  "Настоящая парилка с классической дровяной или электрической печью",
  "Душевая — смыть жар сразу после парилки, не выходя на улицу",
  "Просторная комната отдыха — места хватит на всю компанию",
  "Открытая терраса — выход на воздух прямо из предбанника",
  "Фиксированная цена в договоре — никаких доплат по ходу стройки",
]

const included = [
  "Фундамент на винтовых сваях или ленточный",
  "Силовой каркас из камерной сушки",
  "Утепление минватой 200 мм + ветробарьер",
  "Кровля из металлочерепицы / профлиста",
  "Фасадная отделка — планкен или сайдинг",
  "Открытая терраса с деревянным настилом",
  "Окна ПВХ двойной стеклопакет",
  "Входная дверь металлическая утеплённая",
  "Внутренняя отделка парилки вагонкой из липы или осины",
  "Полки, полог, печь (по выбору заказчика)",
  "Разводка электрики, водопровода, канализации",
]

export default function Banya54Details() {
  return (
    <>
      <section className="border-t border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {[
              { value: "54 м²", label: "Площадь бани", sub: "Просторно для парилки, душевой и большой комнаты отдыха" },
              { value: "6 × 6 м", label: "Квадратные габариты", sub: "Удобно встаёт на участке — не надо вытягивать длинную полосу земли" },
              { value: "60 дней", label: "Срок постройки", sub: "Каркасная технология — первый пар уже этим летом", orange: true },
            ].map((s) => (
              <div key={s.label} className="py-10 px-8">
                <p className={`text-4xl md:text-5xl font-medium mb-2 ${s.orange ? "text-orange-500" : ""}`}>
                  {s.value}
                </p>
                <p className="font-semibold mb-1">{s.label}</p>
                <p className="text-sm text-gray-500">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3">О проекте</p>
              <h2 className="text-2xl md:text-3xl font-medium mb-6">«Сосновая пара» — баня без лишнего</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                54 квадратных метра, которые умещают всё нужное: жаркую{" "}
                <span className="text-orange-500 font-medium">парилку</span> с полатями и печью,
                отдельную <span className="text-orange-500 font-medium">душевую</span>,
                просторную <span className="text-orange-500 font-medium">комнату отдыха</span> для
                компании и <span className="text-orange-500 font-medium">открытую террасу</span> — место
                остыть после пара на свежем воздухе.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Квадратная форма 6×6 — один из самых практичных вариантов для бани: нет тупиковых
                углов, все помещения рядом, фундамент обходится дешевле, чем у вытянутых проектов.
              </p>
              <div className="bg-gray-50 p-6">
                <p className="text-sm font-semibold mb-4">Состав помещений</p>
                <div className="space-y-2">
                  {rooms.map((r) => (
                    <div key={r.name} className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">{r.name}</span>
                      <span className="font-medium text-[#1a0f0f]">{r.area === "—" ? "входит в проект" : r.area}</span>
                    </div>
                  ))}
                  <div className="border-t border-gray-200 pt-2 flex items-center justify-between text-sm font-semibold">
                    <span>Итого</span>
                    <span className="text-orange-500">54 м²</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/0d8abc6b-9765-46db-bab2-b736e58c8b93.jpg"
                alt="3D-модель бани «Сосновая пара» 54 м²"
                className="w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3">Преимущества</p>
              <h2 className="text-2xl md:text-3xl font-medium mb-6">Почему выбирают этот проект</h2>
              <ul className="space-y-3">
                {whyList.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                    <Check size={18} className="text-orange-500 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src="https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/44c61d2e-57e1-4905-b935-87d86e799e8f.jpg"
                alt="Баня «Сосновая пара» — вид сзади"
                className="w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3">Комплектация</p>
              <h2 className="text-2xl md:text-3xl font-medium mb-2">Что входит в стоимость</h2>
              <p className="text-gray-500 mb-8">Цена фиксируется в договоре до начала работ. Никаких скрытых доплат.</p>
              <ul className="space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                    <Check size={18} className="text-orange-500 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src="https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/eb6d3fe2-b926-4754-b19d-902e64b0b437.jpg"
                alt="Баня «Сосновая пара» — фасад с террасой"
                className="w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

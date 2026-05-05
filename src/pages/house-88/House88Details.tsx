import { Check } from "lucide-react"

const rooms = [
  { name: "Гостиная", area: "20,16 м²" },
  { name: "Спальня 1", area: "11,16 м²" },
  { name: "Спальня 2", area: "12,24 м²" },
  { name: "Кухня", area: "11,22 м²" },
  { name: "Сан. узел", area: "4,75 м²" },
  { name: "Холл", area: "6,31 м²" },
  { name: "Тамбур", area: "2,38 м²" },
  { name: "Терраса", area: "11,48 м²" },
]

const whyList = [
  "Тёмный графитовый фасад из планкена — современный стиль, который выделяется",
  "Деревянные акценты на окнах и карнизах — тепло и уют без лишних деталей",
  "Просторная гостиная 20,16 м² — центр семейной жизни с большими окнами",
  "Две отдельные спальни — комфорт для семьи или гостей",
  "Терраса 11,48 м² с деревянным настилом и балюстрадой — отдых на свежем воздухе",
  "Одноэтажная планировка — удобно для всех возрастов, без лестниц",
  "Свайный фундамент — быстро, надёжно, без земляных работ",
  "Фиксированная цена в договоре — никаких доплат по ходу стройки",
]

const included = [
  "Фундамент на винтовых сваях",
  "Силовой каркас из камерной сушки",
  "Утепление минватой 200 мм + ветробарьер",
  "Кровля из металлочерепицы чёрного цвета",
  "Фасадная отделка — планкен графит с деревянными наличниками",
  "Терраса 11,48 м² с деревянным настилом и балюстрадой",
  "Окна ПВХ двойной стеклопакет в деревянных обрамлениях",
  "Входная дверь металлическая утеплённая",
  "Внутренняя черновая отделка",
  "Разводка электрики, водопровода, канализации",
]

export default function House88Details() {
  return (
    <>
      <section className="border-t border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {[
              { value: "88 м²", label: "Общая площадь", sub: "Одноэтажный дом — всё необходимое на одном уровне" },
              { value: "2 спальни", label: "Спальные комнаты", sub: "Плюс просторная гостиная 20 м² для всей семьи" },
              { value: "40–60 дней", label: "Срок постройки", sub: "Каркасная технология — заезжайте уже этим летом", orange: true },
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
          <p className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3">Планировка</p>
          <h2 className="text-2xl md:text-3xl font-medium mb-10">План этажа</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Всё продуманно и без лишнего. Центр дома —
                <span className="text-orange-500 font-medium"> просторная гостиная (20,16 м²)</span> с большими окнами,
                плавно переходящая в зону отдыха. Рядом —
                <span className="text-orange-500 font-medium"> кухня (11,22 м²)</span> с удобным расположением
                относительно выхода на террасу.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <span className="text-orange-500 font-medium">Спальня 1 (11,16 м²)</span> и
                <span className="text-orange-500 font-medium"> Спальня 2 (12,24 м²)</span> — изолированные,
                тихие, с окнами в сад. Санузел (4,75 м²) расположен в центре — удобен для всех комнат.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                <span className="text-orange-500 font-medium">Терраса (11,48 м²)</span> с деревянным настилом
                и балюстрадой — уличная гостиная для тёплых вечеров. Тамбур на входе защищает тепло зимой.
              </p>
              <div className="bg-gray-50 p-6">
                <p className="text-sm font-semibold mb-4">Ведомость помещений</p>
                <div className="space-y-2">
                  {rooms.map((r) => (
                    <div key={r.name} className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">{r.name}</span>
                      <span className="font-medium text-[#1a0f0f]">{r.area}</span>
                    </div>
                  ))}
                  <div className="border-t border-gray-200 pt-2 flex items-center justify-between text-sm font-semibold">
                    <span>Итого</span>
                    <span className="text-orange-500">79,70 м²</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/4d2ebc35-b514-4a30-a6df-fbdd64e0c10b.jpg"
                alt="План этажа дома «Графит» 88 м²"
                className="w-full object-contain"
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
                src="https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/c61506d1-af54-4cc2-b2ea-b9f041a7d6bb.jpg"
                alt="Дом «Графит» — боковой фасад"
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
                src="https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/ee7e2204-d0ce-4a08-97fd-71d2d7c71998.jpg"
                alt="Дом «Графит» — главный фасад с террасой"
                className="w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

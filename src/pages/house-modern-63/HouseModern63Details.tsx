import { Check } from "lucide-react"

const rooms = [
  { name: "Кухня-Гостиная", area: "22,57 м²" },
  { name: "Спальня 1", area: "8,21 м²" },
  { name: "Спальня 2", area: "9,97 м²" },
  { name: "Холл", area: "5,13 м²" },
  { name: "С/У", area: "4,16 м²" },
  { name: "Сауна", area: "3,10 м²" },
  { name: "Тамбур", area: "4,88 м²" },
  { name: "Терраса", area: "13,13 м²" },
  { name: "Крыльцо", area: "2,81 м²" },
]

const whyList = [
  "Каркасная технология — дом готов за 90–120 дней",
  "Тёплые стены 200 мм минваты, расход тепла минимальный",
  "Тёмный планкен + термодерево — стильный фасад без лишнего ухода",
  "Сауна прямо в доме — удобство для всей семьи",
  "Просторная терраса 13 м² — летняя гостиная под открытым небом",
  "Одноэтажная планировка — удобна для пожилых и детей",
  "Работаем по договору с фиксированной ценой — без сюрпризов",
  "Гарантия на каркас 5 лет, на кровлю 3 года",
]

const included = [
  "Фундамент на винтовых сваях или ленточный",
  "Силовой каркас из камерной сушки",
  "Утепление минватой 200 мм + ветробарьер",
  "Кровля из металлочерепицы / профлиста",
  "Фасадная отделка (планкен + деревянные акценты)",
  "Терраса с деревянными перилами",
  "Окна ПВХ двойной стеклопакет",
  "Входная дверь металлическая утеплённая",
  "Черновая внутренняя отделка (ГКЛ / ОСБ)",
  "Разводка электрики, водопровода, канализации",
]

export default function HouseModern63Details() {
  return (
    <>
      {/* Статистика */}
      <section className="border-t border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {[
              { value: "74 м²", label: "Общая площадь", sub: "Одноэтажный дом с продуманной планировкой" },
              { value: "13 м²", label: "Терраса", sub: "Открытая летняя гостиная с деревянными перилами" },
              { value: "120 дней", label: "Срок постройки", sub: "Каркасная технология позволяет заселиться уже этим сезоном", orange: true },
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

      {/* Планировка */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3">Планировка</p>
              <h2 className="text-2xl md:text-3xl font-medium mb-6">Поэтажный план</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                На первом (и единственном) этаже расположена просторная{" "}
                <span className="text-orange-500 font-medium">кухня-гостиная (22,57 м²)</span> —
                сердце дома, где собирается вся семья. Из неё прямой выход на{" "}
                <span className="text-orange-500 font-medium">террасу (13,13 м²)</span>.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                В спальном крыле — две изолированные спальни:{" "}
                <span className="text-orange-500 font-medium">спальня 1 (8,21 м²)</span> и{" "}
                <span className="text-orange-500 font-medium">спальня 2 (9,97 м²)</span>.
                Между ними — холл (5,13 м²) и санузел (4,16 м²).
              </p>
              <p className="text-gray-600 leading-relaxed">
                Со стороны входа — тамбур (4,88 м²),{" "}
                <span className="text-orange-500 font-medium">сауна (3,10 м²)</span> и крыльцо (2,81 м²).
                Высота потолков 2,8 м, большие окна обеспечивают естественное освещение.
              </p>
            </div>

            <div>
              <img
                src="https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/e90cad2f-aedf-4ac8-97bb-f8bce810f3fe.png"
                alt="Планировка дома Модерн 63"
                className="w-full object-contain mb-6"
              />
              <div className="bg-gray-50 p-6">
                <p className="text-sm font-semibold mb-4">Состав помещений</p>
                <div className="space-y-2">
                  {rooms.map((r) => (
                    <div key={r.name} className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">{r.name}</span>
                      <span className="font-medium text-[#1a0f0f]">{r.area}</span>
                    </div>
                  ))}
                  <div className="border-t border-gray-200 pt-2 flex items-center justify-between text-sm font-semibold">
                    <span>Итого</span>
                    <span className="text-orange-500">73,96 м²</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Почему этот проект */}
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
                src="https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/1bb104b3-1678-4e54-80bd-fb79ae42161b.png"
                alt="Каркасный дом Модерн 63 вечером"
                className="w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Комплектация */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3">Комплектация</p>
              <h2 className="text-2xl md:text-3xl font-medium mb-2">Что входит в стоимость</h2>
              <p className="text-gray-500 mb-8">Никаких скрытых доплат. Цена фиксируется в договоре до начала работ.</p>
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
                src="https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/3ca6bea4-8b83-485c-9260-614829c4692e.png"
                alt="Каркасный дом Модерн 63 — вид сбоку"
                className="w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

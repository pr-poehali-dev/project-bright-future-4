import { Check } from "lucide-react"

const roomsFloor1 = [
  { name: "Терраса", area: "39,67 м²" },
  { name: "Гостиная", area: "16,00 м²" },
  { name: "Кухня", area: "12,46 м²" },
  { name: "Комната (спальня)", area: "10,75 м²" },
  { name: "Холл", area: "8,32 м²" },
  { name: "С/У", area: "5,56 м²" },
  { name: "Котельная", area: "3,76 м²" },
  { name: "Тамбур", area: "2,18 м²" },
]

const roomsFloor2 = [
  { name: "Комната 1 (спальня)", area: "15,19 м²" },
  { name: "Комната 2 (спальня)", area: "13,64 м²" },
  { name: "Комната 3 (спальня)", area: "10,73 м²" },
  { name: "Балкон", area: "9,00 м²" },
  { name: "Холл", area: "7,84 м²" },
  { name: "Гардеробная", area: "3,57 м²" },
  { name: "Кабинет", area: "4,55 м²" },
]

const whyList = [
  "Большая крытая терраса 39,67 м² — отдых на природе в любую погоду",
  "5 спален — просторно для большой семьи или гостевого дома",
  "Балкон 9 м² на втором этаже с выходом из холла",
  "Свайный фундамент — надёжно на любом грунте, быстрый монтаж",
  "Деревянные балюстрады и имитация бруса — уютный загородный стиль",
  "Каркасная технология — дом готов за 90–120 дней",
  "Утепление 200 мм минваты — тепло зимой, прохладно летом",
  "Фиксированная цена в договоре — никаких доплат по ходу стройки",
]

const included = [
  "Фундамент на винтовых сваях",
  "Силовой каркас из камерной сушки",
  "Утепление минватой 200 мм + ветробарьер",
  "Кровля из металлочерепицы",
  "Фасадная отделка — имитация бруса с деревянными акцентами",
  "Крытая терраса 39,67 м² с деревянным настилом и балюстрадой",
  "Балкон 9 м² с деревянным ограждением",
  "Окна ПВХ двойной стеклопакет",
  "Входная дверь металлическая утеплённая",
  "Внутренняя черновая отделка",
  "Лестница на второй этаж",
  "Разводка электрики, водопровода, канализации",
]

export default function House190Details() {
  return (
    <>
      <section className="border-t border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {[
              { value: "190 м²", label: "Общая площадь", sub: "Просторный двухэтажный дом для большой семьи" },
              { value: "5 спален", label: "Спальные комнаты", sub: "На двух этажах — места хватит всем" },
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
          <h2 className="text-2xl md:text-3xl font-medium mb-10">Планы этажей</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <h3 className="font-semibold text-lg mb-4">Первый этаж</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Главная изюминка — <span className="text-orange-500 font-medium">огромная крытая терраса 39,67 м²</span> —
                идеальное место для летнего отдыха всей семьёй. Внутри: просторная
                <span className="text-orange-500 font-medium"> гостиная (16 м²)</span> с выходом в кухню,
                отдельная <span className="text-orange-500 font-medium">спальня (10,75 м²)</span> на первом этаже,
                санузел, котельная и тамбур.
              </p>
              <div className="bg-gray-50 p-6 mb-8">
                <p className="text-sm font-semibold mb-4">Ведомость помещений · 1 этаж</p>
                <div className="space-y-2">
                  {roomsFloor1.map((r) => (
                    <div key={r.name} className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">{r.name}</span>
                      <span className="font-medium text-[#1a0f0f]">{r.area}</span>
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="font-semibold text-lg mb-4">Второй этаж</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                На втором этаже — <span className="text-orange-500 font-medium">три просторные спальни</span> (15,19 / 13,64 / 10,73 м²),
                уютный <span className="text-orange-500 font-medium">кабинет (4,55 м²)</span> и гардеробная.
                Из холла — выход на <span className="text-orange-500 font-medium">балкон 9 м²</span> с видом на участок.
              </p>
              <div className="bg-gray-50 p-6">
                <p className="text-sm font-semibold mb-4">Ведомость помещений · 2 этаж</p>
                <div className="space-y-2">
                  {roomsFloor2.map((r) => (
                    <div key={r.name} className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">{r.name}</span>
                      <span className="font-medium text-[#1a0f0f]">{r.area}</span>
                    </div>
                  ))}
                  <div className="border-t border-gray-200 pt-2 flex items-center justify-between text-sm font-semibold">
                    <span>Общая площадь</span>
                    <span className="text-orange-500">190 м²</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-500 mb-2 font-medium">1 этаж</p>
                <img
                  src="https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/1e8fbf6e-b8b1-427d-bc34-65cba05ad098.jpg"
                  alt="План 1 этажа — Дом «Берёзка» 190 м²"
                  className="w-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2 font-medium">2 этаж</p>
                <img
                  src="https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/cb8e2818-2326-4082-9e64-c01406e24f57.jpg"
                  alt="План 2 этажа — Дом «Берёзка» 190 м²"
                  className="w-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
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
                src="https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/70faef60-8126-4ba7-9184-3a4ac85244d7.jpg"
                alt="Дом «Дубрава» — боковой фасад с террасой"
                className="w-full object-cover aspect-[4/3]"
                loading="lazy"
                decoding="async"
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
                src="https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/d5cb2f75-14f3-4a9e-b7c7-6433e1c8b9aa.jpg"
                alt="Дом «Дубрава» — главный фасад"
                className="w-full object-cover aspect-[4/3]"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
import { Check } from "lucide-react"

const rooms = [
  { name: "Кухня-гостиная", area: "26,30 м²" },
  { name: "Терраса", area: "24,69 м²" },
  { name: "Спальня 1", area: "10,25 м²" },
  { name: "Спальня 2", area: "10,88 м²" },
  { name: "Спальня 3", area: "10,11 м²" },
  { name: "Гардеробная", area: "4,93 м²" },
  { name: "Холл", area: "7,54 м²" },
  { name: "Прихожая", area: "4,14 м²" },
  { name: "С/У", area: "4,76 м²" },
  { name: "Котельная", area: "5,75 м²" },
]

const whyList = [
  "Огромная крытая терраса 24,69 м² с гирляндами — место для вечернего отдыха в любую погоду",
  "Тёмный графитовый планкен с деревянными акцентами — современный лесной стиль",
  "Кухня-гостиная 26,30 м² — открытое пространство для всей семьи",
  "Три изолированные спальни — достаточно для семьи с детьми или гостей",
  "Гардеробная 4,93 м² — удобное хранение без лишней мебели в спальнях",
  "Одноэтажная планировка — доступно для всех возрастов, без лестниц",
  "Свайный фундамент — надёжно и быстро на любом грунте",
  "Фиксированная цена в договоре — никаких доплат по ходу стройки",
]

const included = [
  "Фундамент на винтовых сваях",
  "Силовой каркас из камерной сушки",
  "Утепление минватой 200 мм + ветробарьер",
  "Кровля из металлочерепицы тёмного цвета",
  "Фасадная отделка — планкен графит с деревянными вставками и карнизами",
  "Крытая терраса 24,69 м² с деревянным настилом и горизонтальной балюстрадой",
  "Окна ПВХ двойной стеклопакет",
  "Входная дверь металлическая утеплённая",
  "Внутренняя черновая отделка",
  "Разводка электрики, водопровода, канализации",
]

export default function House130Details() {
  return (
    <>
      <section className="border-t border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {[
              { value: "130 м²", label: "Общая площадь", sub: "Одноэтажный дом с тремя спальнями и большой гостиной" },
              { value: "24,69 м²", label: "Крытая терраса", sub: "Зона отдыха с гирляндами — уют в любую погоду" },
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
                Сердце дома — <span className="text-orange-500 font-medium">кухня-гостиная (26,30 м²)</span> —
                открытое пространство с выходом на крытую террасу. Просторно, светло, с большими окнами
                и видом в сосновый лес.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Три отдельные спальни: <span className="text-orange-500 font-medium">10,25 / 10,88 / 10,11 м²</span> —
                каждая изолирована, есть окно и выход к холлу. Рядом —
                <span className="text-orange-500 font-medium"> гардеробная (4,93 м²)</span> для удобного хранения.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                <span className="text-orange-500 font-medium">Терраса 24,69 м²</span> — крытая, с деревянным
                настилом и горизонтальными перилами. Здесь хорошо и днём, и вечером при свете гирлянд.
                Прихожая, холл, котельная и санузел продуманы так, чтобы не мешать друг другу.
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
                    <span className="text-orange-500">109,35 м²</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/e95e67b9-eced-401f-9504-cbfe020d5a3c.jpg"
                alt="План этажа дома «Тайга» 130 м²"
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
                src="https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/2f1f244b-677b-412c-a7f9-d930672b3b52.jpg"
                alt="Дом «Тайга» — терраса с подсветкой"
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
                src="https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/f7ba6f46-2c4f-4693-8128-5ef593af6380.jpg"
                alt="Дом «Тайга» — боковой фасад"
                className="w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

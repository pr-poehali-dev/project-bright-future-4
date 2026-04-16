import { Check } from "lucide-react"

const rooms = [
  { name: "Зал-кухня", area: "16,05 м²" },
  { name: "Спальня", area: "6,47 м²" },
  { name: "Холл", area: "3,08 м²" },
  { name: "С/У", area: "4,36 м²" },
  { name: "Тамбур", area: "1,57 м²" },
  { name: "Открытая терраса", area: "—" },
]

const whyList = [
  "Каркасная технология — дача готова за 45–60 дней",
  "Белый сайдинг с деревянными акцентами — стильный современный вид",
  "Острая крыша с металлочерепицей — надёжная защита от снега и дождя",
  "Зал-кухня 16 м² — просторно для семьи и гостей",
  "Свой санузел — не нужны уличные удобства",
  "Винтовые сваи — можно ставить на любом типе грунта, даже на болотистом",
  "Открытая деревянная терраса — уличная гостиная под открытым небом",
  "Фиксированная цена в договоре — без сюрпризов в процессе",
]

const included = [
  "Фундамент на винтовых сваях",
  "Силовой каркас из камерной сушки",
  "Утепление минватой 150 мм + ветробарьер",
  "Кровля из металлочерепицы",
  "Фасадная отделка: сайдинг белый + деревянные акценты",
  "Открытая деревянная терраса",
  "Окна ПВХ двойной стеклопакет",
  "Входная дверь металлическая утеплённая",
  "Внутренняя чистовая отделка под ключ",
  "Разводка электрики, водопровода, канализации, отопления",
]

export default function Dacha36Details() {
  return (
    <>
      <section className="border-t border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {[
              { value: "36 м²", label: "Площадь дачи", sub: "Продуманная планировка — всё необходимое на одном этаже" },
              { value: "1 спальня", label: "Жилые комнаты", sub: "Плюс просторный зал-кухня — отличный вариант для пары или небольшой семьи" },
              { value: "60 дней", label: "Срок постройки", sub: "Каркасная технология — переедете на дачу уже этим летом", orange: true },
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
                Сердце дачи — <span className="text-orange-500 font-medium">зал-кухня (16,05 м²)</span> —
                светлое открытое пространство с зоной гостиной и кухней. Большие окна наполняют комнату
                естественным светом весь день.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Отдельная <span className="text-orange-500 font-medium">спальня (6,47 м²)</span> —
                уютное личное пространство, изолированное от основной зоны. Небольшой, но достаточный
                размер для полноценного отдыха.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Полноценный <span className="text-orange-500 font-medium">санузел (4,36 м²)</span> с
                душевой кабиной или ванной, тамбур на входе и холл для связи всех зон.
                Из зала прямой выход на открытую деревянную <span className="text-orange-500 font-medium">террасу</span>.
              </p>
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
                    <span className="text-orange-500">36 м²</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/d234f9bf-8e2b-4ce0-99bd-59d1e7e950fb.jpg"
                alt="План этажа дачи «Берёзка» 36 м²"
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
                src="https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/ba3f4a22-635b-46db-bead-cd7fc6e58a38.jpg"
                alt="Дача «Берёзка» — вид с террасой"
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
                src="https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/456f13cb-34f1-4f19-9423-311eb02cfd98.jpg"
                alt="Дача «Берёзка» — фасад"
                className="w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

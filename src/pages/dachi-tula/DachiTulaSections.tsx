import { Check } from "lucide-react"

const advantages = [
  { title: "Дача за 45–60 дней", desc: "Каркасная технология — быстрее любой другой. Готово к дачному сезону" },
  { title: "Фиксированная цена", desc: "Стоимость прописывается в договоре до начала работ — никаких доплат" },
  { title: "Лёгкий фундамент", desc: "Каркасная дача лёгкая — хватит свайного фундамента. Экономия на основании" },
  { title: "Тепло весной и осенью", desc: "Утепление 150 мм — дача прогревается быстро, подходит для трёх сезонов" },
  { title: "Собственная бригада", desc: "Работаем без субподрядчиков — контролируем качество на каждом этапе" },
  { title: "Гарантия 3–5 лет", desc: "На каркас — 5 лет, на кровлю — 3 года. Все условия в договоре" },
]

const dachaTypes = [
  {
    title: "Дача 6×6 м",
    price: "от 750 000 ₽",
    desc: "Компактная дача для отдыха на выходных. Кухня-гостиная, спальня, санузел. Быстрый монтаж.",
    image: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/0973e31d-c52a-4852-94ee-77af2ec39b0e.jpg",
  },
  {
    title: "Дача 8×8 м, 2 этажа",
    price: "от 1 400 000 ₽",
    desc: "Двухэтажная дача для большой семьи. 2–3 спальни, гостиная, кухня, санузел, терраса.",
    image: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/14e88435-0238-4183-b8ae-47d93640ed43.jpg",
  },
  {
    title: "Дача 11×8 м с террасой",
    price: "от 2 000 000 ₽",
    desc: "Просторная дача с большой террасой. Для тех, кто хочет полноценный загородный дом.",
    image: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/fbe39a78-c2be-4a1c-81a0-4169e556d25b.jpg",
  },
]

const included = [
  "Фундамент на винтовых сваях",
  "Силовой каркас из камерной сушки",
  "Утепление минватой 150 мм + ветробарьер",
  "Кровля из металлочерепицы или профлиста",
  "Наружная отделка (сайдинг на выбор)",
  "Окна ПВХ, входная дверь утеплённая",
  "Черновая внутренняя отделка",
  "Терраса или крыльцо (по проекту)",
  "Разводка электрики",
]

const projects = [
  {
    title: "Дача «Тихое место» 11×8",
    area: "2 этажа · Терраса",
    image: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/fbe39a78-c2be-4a1c-81a0-4169e556d25b.jpg",
  },
  {
    title: "Дача 6×6",
    area: "Сайдинг · Профлист",
    image: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/0973e31d-c52a-4852-94ee-77af2ec39b0e.jpg",
  },
  {
    title: "Дача 2 этажа 8×8",
    area: "Сайдинг GrandLine",
    image: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/14e88435-0238-4183-b8ae-47d93640ed43.jpg",
  },
  {
    title: "Каркасный дом с верандой",
    area: "Гибкая черепица",
    image: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/56d74da9-b326-4a51-905c-a89d487e62c0.jpg",
  },
]

const process = [
  { num: "01", title: "Заявка", desc: "Звоните или пишите — отвечаем в тот же день" },
  { num: "02", title: "Выезд на участок", desc: "Приезжаем, смотрим, предлагаем проект. Бесплатно." },
  { num: "03", title: "Договор", desc: "Фиксируем цену, сроки, планировку. Без скрытых платежей." },
  { num: "04", title: "Строительство", desc: "45–60 дней — и дача готова. Работаем 6 дней в неделю." },
  { num: "05", title: "Сдача", desc: "Принимаете дачу по акту, получаете документы и гарантию." },
]

export default function DachiTulaSections() {
  return (
    <>
      {/* Преимущества */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <p className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3">Почему выбирают нас</p>
            <h2 className="text-3xl md:text-4xl font-medium">Каркасная дача — лучший выбор</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((adv) => (
              <div key={adv.title} className="bg-white p-6 border-l-4 border-orange-500">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={13} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-[#1a0f0f]">{adv.title}</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed pl-9">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Варианты и цены */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <p className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3">Варианты и цены</p>
            <h2 className="text-3xl md:text-4xl font-medium">Дачи в Туле — цены 2025</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">Выберите подходящий вариант или закажите дачу по индивидуальному проекту</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dachaTypes.map((d) => (
              <div key={d.title} className="group">
                <div className="overflow-hidden aspect-[4/3] mb-5">
                  <img
                    src={d.image}
                    alt={d.title + " под ключ в Туле"}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{d.title}</h3>
                <p className="text-orange-500 font-bold text-lg mb-3">{d.price}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{d.desc}</p>
                <a
                  href="#order"
                  className="inline-block border border-[#1a0f0f] text-[#1a0f0f] hover:bg-[#1a0f0f] hover:text-white text-sm font-medium px-5 py-2.5 transition-colors"
                >
                  Получить расчёт
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Что входит */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3">Комплектация</p>
              <h2 className="text-3xl md:text-4xl font-medium mb-2">Что входит в стоимость</h2>
              <p className="text-gray-500 mb-6">Цена фиксируется в договоре — никаких доплат в процессе</p>
              <ul className="space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={12} className="text-white" />
                    </div>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src="https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/14e88435-0238-4183-b8ae-47d93640ed43.jpg"
                alt="Двухэтажная каркасная дача в Туле под ключ"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Наши работы */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <p className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3">Портфолио</p>
            <h2 className="text-3xl md:text-4xl font-medium">Построенные дачи в Тульской области</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {projects.map((p) => (
              <div key={p.title} className="group">
                <div className="overflow-hidden aspect-[4/3] mb-3">
                  <img
                    src={p.image}
                    alt={p.title + " — Тула"}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-medium text-sm mb-0.5">{p.title}</h3>
                <p className="text-xs text-gray-500">{p.area}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="/#projects"
              className="inline-block border-2 border-[#1a0f0f] text-[#1a0f0f] hover:bg-[#1a0f0f] hover:text-white font-semibold px-8 py-3 transition-colors"
            >
              Смотреть все работы
            </a>
          </div>
        </div>
      </section>

      {/* Процесс */}
      <section className="py-16 bg-[#1a0f0f] text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <p className="text-orange-400 text-sm font-bold tracking-widest uppercase mb-3">Как мы работаем</p>
            <h2 className="text-3xl md:text-4xl font-medium">От заявки до готовой дачи</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {process.map((step, i) => (
              <div key={step.num} className="relative">
                <div className="text-orange-400 font-bold text-2xl mb-3">{step.num}</div>
                <h3 className="font-semibold mb-2 text-white">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                {i < process.length - 1 && (
                  <div className="hidden md:block absolute top-3 right-0 w-px h-full border-r border-white/10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

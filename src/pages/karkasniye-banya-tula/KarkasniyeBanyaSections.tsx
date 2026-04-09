import { Check } from "lucide-react"

const advantages = [
  { title: "Баня за 30–45 дней", desc: "Каркасная технология — самая быстрая. Готовы топить уже этим летом" },
  { title: "Фиксированная цена", desc: "Стоимость прописывается в договоре до начала работ. Никаких доплат" },
  { title: "Тёплая с первой топки", desc: "Лёгкие стены быстро прогреваются — расход дров в 2 раза меньше, чем в срубе" },
  { title: "Не нужен мощный фундамент", desc: "Каркасная баня лёгкая — хватит свайного или ленточного фундамента" },
  { title: "Гарантия 3–5 лет", desc: "На каркас и несущие конструкции — 5 лет. На кровлю — 3 года" },
  { title: "Собственная бригада", desc: "Без субподрядчиков — контролируем качество на каждом этапе" },
]

const banyaTypes = [
  {
    title: "Баня 4×6 м",
    price: "от 650 000 ₽",
    desc: "Компактная баня для дачи. Парная, мойка, предбанник. Идеально для небольшого участка.",
    image: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/e4ab6219-7cb4-4808-b5c3-8d9537204194.jpg",
  },
  {
    title: "Баня 6×6 м с террасой",
    price: "от 950 000 ₽",
    desc: "Баня с открытой террасой и зоной отдыха. Парная, мойка, комната отдыха, терраса.",
    image: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/cf189aaf-d379-44fc-83f2-6f814611de47.jpg",
  },
  {
    title: "Баня с верандой и купелью",
    price: "от 1 300 000 ₽",
    desc: "Просторная баня с верандой, зоной отдыха и местом для купели. Под ключ.",
    image: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/b3d37642-ef03-4d6e-9d9b-a7e496e9c3a8.jpg",
  },
]

const included = [
  "Фундамент на винтовых сваях или ленточный",
  "Силовой каркас из камерной сушки",
  "Утепление минватой 150 мм + пароизоляция",
  "Кровля из металлочерепицы / профлиста",
  "Наружная отделка (сайдинг или имитация бруса)",
  "Окна ПВХ, входная дверь",
  "Внутренняя вагонка в парной (липа / осина)",
  "Печь-каменка (на выбор)",
  "Полки и полок в парной",
  "Разводка электрики",
]

const projects = [
  {
    title: "Компактная банька с террасой",
    area: "Каркасная баня · Терраса",
    image: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/e33121cd-892b-4742-a088-51174c5bde96.jpg",
  },
  {
    title: "Баня с верандой и купелью",
    area: "Каркасная баня · Терраса",
    image: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/b3d37642-ef03-4d6e-9d9b-a7e496e9c3a8.jpg",
  },
  {
    title: "Баня «Лесная поляна»",
    area: "Каркасная баня под ключ",
    image: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/cf189aaf-d379-44fc-83f2-6f814611de47.jpg",
  },
  {
    title: "Баня с верандой",
    area: "Баня · Веранда · Профлист GrandLine",
    image: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/a8eadf07-30d9-4187-aa91-152f429dce7e.jpg",
  },
  {
    title: "Каркасная баня 6×6",
    area: "Баня под ключ 6×6",
    image: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/e4ab6219-7cb4-4808-b5c3-8d9537204194.jpg",
  },
]

const process = [
  { num: "01", title: "Заявка", desc: "Звоните или пишите — отвечаем в тот же день" },
  { num: "02", title: "Выезд на участок", desc: "Специалист оценивает место, грунт и предлагает проект. Бесплатно." },
  { num: "03", title: "Договор", desc: "Фиксируем цену, сроки и планировку. Без скрытых платежей" },
  { num: "04", title: "Строительство", desc: "30–45 дней — и баня готова. Работаем 6 дней в неделю" },
  { num: "05", title: "Сдача", desc: "Принимаете баню, получаете документы и гарантию" },
]

export default function KarkasniyeBanyaSections() {
  return (
    <>
      {/* Преимущества */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <p className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3">Почему каркас</p>
            <h2 className="text-3xl md:text-4xl font-medium">Преимущества каркасной бани</h2>
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

      {/* Типы бань и цены */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <p className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3">Варианты и цены</p>
            <h2 className="text-3xl md:text-4xl font-medium">Каркасные бани в Туле — цены</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">Выберите подходящий вариант или закажите баню по индивидуальному проекту</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {banyaTypes.map((b) => (
              <div key={b.title} className="group">
                <div className="overflow-hidden aspect-[4/3] mb-5">
                  <img
                    src={b.image}
                    alt={b.title + " в Туле под ключ"}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{b.title}</h3>
                <p className="text-orange-500 font-bold text-lg mb-3">{b.price}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{b.desc}</p>
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
                src="https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/b3d37642-ef03-4d6e-9d9b-a7e496e9c3a8.jpg"
                alt="Каркасная баня с купелью и террасой — TOYSTROY Тула"
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
            <h2 className="text-3xl md:text-4xl font-medium">Построенные бани в Тульской области</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {projects.map((p) => (
              <div key={p.title} className="group">
                <div className="overflow-hidden aspect-square mb-3">
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
            <h2 className="text-3xl md:text-4xl font-medium">От заявки до готовой бани</h2>
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

import { useState } from "react"
import { Check, Phone, MessageCircle, ChevronDown } from "lucide-react"
import { PrivacyModal } from "@/components/PrivacyModal"
import { TermsModal } from "@/components/TermsModal"

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

const process = [
  { num: "01", title: "Заявка", desc: "Звоните или пишите — отвечаем в тот же день" },
  { num: "02", title: "Выезд на участок", desc: "Специалист оценивает место, грунт и предлагает проект. Бесплатно." },
  { num: "03", title: "Договор", desc: "Фиксируем цену, сроки и планировку. Без скрытых платежей" },
  { num: "04", title: "Строительство", desc: "30–45 дней — и баня готова. Работаем 6 дней в неделю" },
  { num: "05", title: "Сдача", desc: "Принимаете баню, получаете документы и гарантию" },
]

const faqs = [
  {
    q: "Сколько стоит каркасная баня под ключ в Туле?",
    a: "Стоимость зависит от размера и комплектации. Баня 4×6 м под ключ — от 650 000 ₽, баня 6×6 м с террасой — от 950 000 ₽. Точную цену рассчитаем бесплатно после осмотра участка.",
  },
  {
    q: "Сколько строится каркасная баня?",
    a: "Каркасная баня строится за 30–45 дней. Это в 3–4 раза быстрее, чем баня из бруса или кирпича.",
  },
  {
    q: "Хорошо ли держит тепло каркасная баня?",
    a: "Да. Лёгкие стены с утеплением 150 мм прогреваются за 40–60 минут — в 2 раза быстрее сруба. Пар держится хорошо. Расход дров меньше.",
  },
  {
    q: "Нужен ли мощный фундамент под каркасную баню?",
    a: "Нет. Каркасная баня весит значительно меньше бревенчатой или кирпичной. Достаточно фундамента на винтовых сваях или мелкозаглублённой ленты.",
  },
  {
    q: "Можно ли добавить террасу или купель?",
    a: "Конечно. Мы строим бани с открытыми и закрытыми террасами, местом под купель, зоной барбекю. Любой вариант обсуждаем на этапе проекта.",
  },
  {
    q: "Работаете ли по всей Тульской области?",
    a: "Да. Строим в Туле, Алексине, Щёкино, Узловой, Новомосковске, Ефремове и по всему региону. Выезд специалиста в радиусе 100 км — бесплатно.",
  },
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

export default function KarkasniyeBanyaTula() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    try {
      await fetch("https://functions.poehali.dev/47abad41-4ccf-413e-9fab-2c7da189c73c", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          comment: "Заявка со страницы: Каркасные бани Тула",
          buildingType: "Баня",
        }),
      })
      setStatus("success")
    } catch {
      setStatus("error")
    }
  }

  return (
    <div className="min-h-screen bg-white text-[#1a0f0f]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-6 md:px-12 py-4 flex items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-3">
            <img
              src="https://cdn.poehali.dev/files/81218afd-c0f8-4ab8-8954-5409def67550.jpg"
              alt="TOYSTROY"
              className="w-9 h-9 rounded object-cover"
            />
            <span className="text-lg font-semibold tracking-widest uppercase text-[#1a0f0f]">TOYSTROY</span>
          </a>
          <div className="flex items-center gap-3">
            <a
              href="tel:+78001234567"
              className="hidden md:flex items-center gap-2 text-sm font-medium text-[#1a0f0f] hover:text-orange-500 transition-colors"
            >
              <Phone size={16} />
              8 (800) 123-45-67
            </a>
            <a
              href="#order"
              className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-4 py-2 transition-colors"
            >
              Получить расчёт
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/cf189aaf-d379-44fc-83f2-6f814611de47.jpg"
            alt="Каркасные бани в Туле под ключ"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#1a0f0f]/65" />
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-2xl">
            <p className="text-orange-400 text-sm font-bold tracking-widest uppercase mb-4">
              Тула и Тульская область
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight leading-tight mb-6">
              Каркасные бани<br />
              <span className="text-orange-400">под ключ в Туле</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
              Строим каркасные бани за 30–45 дней. Фиксированная цена в договоре,
              собственная бригада, гарантия 5 лет. Более 50 бань в Тульской области.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#order"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 text-center transition-colors"
              >
                Получить бесплатный расчёт
              </a>
              <a
                href="tel:+78001234567"
                className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-4 text-center transition-colors flex items-center justify-center gap-2"
              >
                <Phone size={18} />
                Позвонить
              </a>
            </div>
            <div className="flex flex-wrap gap-6 mt-10">
              {["50+ бань построено", "30–45 дней срок", "Гарантия 5 лет"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-white/80 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <div className="text-center mb-12">
            <p className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3">Вопросы и ответы</p>
            <h2 className="text-3xl md:text-4xl font-medium">Часто спрашивают о банях в Туле</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-[#1a0f0f] text-sm md:text-base">{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-orange-500 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5">
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Форма */}
      <section id="order" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3">Бесплатный расчёт</p>
              <h2 className="text-3xl md:text-4xl font-medium mb-4">
                Узнайте стоимость бани в Туле
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Оставьте заявку — перезвоним в течение 30 минут, ответим на вопросы
                и назовём точную стоимость. Выезд специалиста на участок — бесплатно.
              </p>
              <div className="space-y-4">
                {[
                  "Расчёт стоимости — бесплатно",
                  "Выезд специалиста на участок — бесплатно",
                  "Проект бани — в подарок",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center shrink-0">
                      <Check size={12} className="text-white" />
                    </div>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex items-center gap-4">
                <a
                  href="https://wa.me/78001234567"
                  className="flex items-center gap-2 text-sm font-medium text-[#1a0f0f] hover:text-orange-500 transition-colors"
                >
                  <MessageCircle size={20} />
                  Написать в WhatsApp
                </a>
                <span className="text-gray-300">|</span>
                <a
                  href="tel:+78001234567"
                  className="flex items-center gap-2 text-sm font-medium text-[#1a0f0f] hover:text-orange-500 transition-colors"
                >
                  <Phone size={20} />
                  8 (800) 123-45-67
                </a>
              </div>
            </div>

            <div>
              {status === "success" ? (
                <div className="bg-green-50 border border-green-200 text-green-700 p-8 text-center">
                  <div className="text-4xl mb-3">✓</div>
                  <p className="font-semibold text-lg mb-1">Заявка отправлена!</p>
                  <p className="text-sm">Мы свяжемся с вами в ближайшее время.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white p-8 shadow-sm">
                  <h3 className="text-xl font-semibold mb-6">Получить бесплатный расчёт</h3>
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Иван Петров"
                      required
                      className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">Номер телефона</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+7 (___) ___-__-__"
                      required
                      className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white font-semibold py-4 transition-colors"
                  >
                    {status === "loading" ? "Отправляем..." : "Получить расчёт бесплатно"}
                  </button>
                  {status === "error" && (
                    <p className="text-red-500 text-sm mt-3 text-center">
                      Ошибка. Позвоните нам: 8 (800) 123-45-67
                    </p>
                  )}
                  <p className="text-xs text-gray-400 mt-3 text-center">
                    Нажимая кнопку, вы соглашаетесь с{" "}
                    <a href="/" className="underline hover:text-gray-600">политикой конфиденциальности</a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <a href="/" className="flex items-center gap-3">
              <img
                src="https://cdn.poehali.dev/files/81218afd-c0f8-4ab8-8954-5409def67550.jpg"
                alt="TOYSTROY"
                className="w-9 h-9 rounded object-cover"
              />
              <span className="text-lg font-semibold tracking-widest uppercase">TOYSTROY</span>
            </a>
            <p className="text-sm text-gray-400 text-center">
              Строим каркасные бани по Тульской области · Тепло · Надёжно · С гарантией
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <a href="/" className="hover:text-orange-500 transition-colors">На главную</a>
              <a href="/#projects" className="hover:text-orange-500 transition-colors">Проекты</a>
              <a href="tel:+78001234567" className="hover:text-orange-500 transition-colors">Позвонить</a>
            </div>
          </div>
          <div className="flex gap-4 justify-center mt-6">
            <PrivacyModal />
            <TermsModal />
          </div>
        </div>
      </footer>
    </div>
  )
}

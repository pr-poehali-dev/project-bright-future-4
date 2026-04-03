import { useState } from "react"
import { Check, Phone, MessageCircle, ChevronDown } from "lucide-react"
import { PrivacyModal } from "@/components/PrivacyModal"
import { TermsModal } from "@/components/TermsModal"

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

const process = [
  { num: "01", title: "Заявка", desc: "Звоните или пишите — отвечаем в тот же день" },
  { num: "02", title: "Выезд на участок", desc: "Приезжаем, смотрим, предлагаем проект. Бесплатно." },
  { num: "03", title: "Договор", desc: "Фиксируем цену, сроки, планировку. Без скрытых платежей." },
  { num: "04", title: "Строительство", desc: "45–60 дней — и дача готова. Работаем 6 дней в неделю." },
  { num: "05", title: "Сдача", desc: "Принимаете дачу по акту, получаете документы и гарантию." },
]

const faqs = [
  {
    q: "Сколько стоит построить дачу под ключ в Туле?",
    a: "Стоимость зависит от площади и планировки. Дача 6×6 м — от 750 000 ₽, двухэтажная 8×8 м — от 1 400 000 ₽, дача 11×8 м с террасой — от 2 000 000 ₽. Точную цену рассчитаем бесплатно после осмотра участка.",
  },
  {
    q: "За сколько дней строится каркасная дача?",
    a: "Каркасная дача строится за 45–60 дней. Это значительно быстрее дачи из бруса или кирпича — вы успеете к дачному сезону.",
  },
  {
    q: "Можно ли жить в каркасной даче зимой?",
    a: "Стандартная дача рассчитана на три сезона. Если нужно жить зимой — делаем утепление 200 мм и устанавливаем нормальное отопление. Уточните при заказе.",
  },
  {
    q: "Какой фундамент нужен под каркасную дачу?",
    a: "Чаще всего хватает фундамента на винтовых сваях — это быстро, недорого и надёжно. На пучинистых грунтах рекомендуем мелкозаглублённую ленту.",
  },
  {
    q: "Можно ли добавить баню или летнюю кухню на участок?",
    a: "Да, строим комплексы: дача + баня, дача + гараж, дача + летняя кухня. Всё по одному договору с фиксированной ценой.",
  },
  {
    q: "Работаете ли по всей Тульской области?",
    a: "Да. Строим в Туле, Алексине, Щёкино, Узловой, Новомосковске, Ефремове и по всему региону. Выезд специалиста в радиусе 100 км — бесплатно.",
  },
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

export default function DachiTula() {
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
          comment: "Заявка со страницы: Дачи под ключ Тула",
          buildingType: "Дача",
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
            src="https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/fbe39a78-c2be-4a1c-81a0-4169e556d25b.jpg"
            alt="Дачи под ключ в Туле"
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
              Дачи под ключ<br />
              <span className="text-orange-400">в Туле и области</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
              Строим каркасные дачи за 45–60 дней. Фиксированная цена в договоре,
              собственная бригада, гарантия 5 лет. Готово к дачному сезону.
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
              {["45–60 дней срок", "Фиксированная цена", "Гарантия 5 лет"].map((item) => (
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

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <div className="text-center mb-12">
            <p className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3">Вопросы и ответы</p>
            <h2 className="text-3xl md:text-4xl font-medium">Часто спрашивают о дачах в Туле</h2>
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
                Узнайте стоимость дачи в Туле
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Оставьте заявку — перезвоним в течение 30 минут, ответим на все вопросы
                и назовём точную стоимость под ваш участок. Выезд специалиста — бесплатно.
              </p>
              <div className="space-y-4">
                {[
                  "Расчёт стоимости — бесплатно",
                  "Выезд специалиста на участок — бесплатно",
                  "Проект дачи — в подарок",
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
              Строим дачи и каркасные дома по Тульской области · Тепло · Надёжно · С гарантией
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

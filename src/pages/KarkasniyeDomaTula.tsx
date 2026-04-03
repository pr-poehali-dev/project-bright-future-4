import { useState } from "react"
import { Check, Phone, MessageCircle, ChevronDown } from "lucide-react"
import { PrivacyModal } from "@/components/PrivacyModal"
import { TermsModal } from "@/components/TermsModal"

const advantages = [
  { title: "Строим с 2015 года", desc: "Более 200 построенных объектов в Туле и Тульской области" },
  { title: "Фиксированная цена", desc: "Стоимость прописывается в договоре и не меняется в процессе стройки" },
  { title: "Готов за 90–120 дней", desc: "Каркасная технология позволяет заселиться уже в этом сезоне" },
  { title: "Собственная бригада", desc: "Работаем без субподрядчиков — контролируем каждый этап сами" },
  { title: "Гарантия 5 лет", desc: "На каркас и несущие конструкции. Кровля — 3 года" },
  { title: "Бесплатный выезд", desc: "Замер и консультация специалиста на вашем участке — бесплатно" },
]

const houseTypes = [
  {
    title: "Каркасный дом до 100 м²",
    price: "от 2 800 000 ₽",
    desc: "Одноэтажный или мансардный дом для семьи из 3–4 человек. 2–3 спальни, санузел, кухня-гостиная.",
    image: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/eefe6c97-35f2-4174-8455-5490e23dec07.png",
  },
  {
    title: "Каркасный дом 100–150 м²",
    price: "от 3 900 000 ₽",
    desc: "Двухэтажный дом с террасой для семьи из 4–5 человек. 3 спальни, 2 санузла, кабинет.",
    image: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/bf9301d1-b706-4dc6-bf48-c962d5ce86c7.png",
  },
  {
    title: "Каркасный дом от 150 м²",
    price: "от 5 200 000 ₽",
    desc: "Просторный дом для большой семьи. Индивидуальный проект, любая планировка.",
    image: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/9e66a153-da16-44d0-826b-d98c881b7c69.jpg",
  },
]

const process = [
  { num: "01", title: "Заявка и консультация", desc: "Звоните или оставляете заявку — в тот же день перезваниваем и обсуждаем детали" },
  { num: "02", title: "Выезд на участок", desc: "Специалист приезжает бесплатно, оценивает участок и предлагает оптимальный проект" },
  { num: "03", title: "Договор и проект", desc: "Фиксируем стоимость, сроки и планировку в договоре. Никаких сюрпризов." },
  { num: "04", title: "Строительство", desc: "Наша бригада работает 6 дней в неделю. Вы следите за прогрессом онлайн или лично" },
  { num: "05", title: "Сдача под ключ", desc: "Принимаете дом по акту. Передаём все документы и гарантийные обязательства" },
]

const faqs = [
  {
    q: "Сколько стоит каркасный дом под ключ в Туле?",
    a: "Стоимость зависит от площади и комплектации. Дом 100 м² под ключ — от 2 800 000 ₽. Цена включает фундамент, каркас, утепление, кровлю, фасад, окна, двери и черновую отделку. Точную стоимость рассчитаем бесплатно после осмотра участка.",
  },
  {
    q: "Сколько времени строится каркасный дом?",
    a: "Каркасный дом 100 м² строится за 90–120 дней с момента подписания договора. Это в 2–3 раза быстрее, чем из кирпича или бетонных блоков.",
  },
  {
    q: "Тёплый ли каркасный дом зимой в Туле?",
    a: "Да. Мы используем утепление минватой 200 мм + ветробарьер. При -25°С снаружи достаточно котла мощностью 10–12 кВт. Расход газа — в среднем 20–30% ниже, чем в кирпичном доме той же площади.",
  },
  {
    q: "Работаете ли вы за пределами Тулы?",
    a: "Да, работаем по всей Тульской области: Алексин, Щёкино, Узловая, Новомосковск, Ефремов, Богородицк и другие города. Выезд специалиста — бесплатно в радиусе 100 км от Тулы.",
  },
  {
    q: "Можно ли изменить планировку под себя?",
    a: "Конечно. Любой проект мы адаптируем под ваш участок и пожелания. Также делаем дома полностью по индивидуальному проекту.",
  },
  {
    q: "Даёте ли вы гарантию на дом?",
    a: "Да. Гарантия на каркас и несущие конструкции — 5 лет, на кровлю — 3 года, на фасадную отделку — 2 года. Все условия прописываются в договоре.",
  },
]

const projects = [
  {
    title: "Каркасный дом с террасой 10×10",
    area: "100 м²",
    location: "Тульская область",
    image: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/eefe6c97-35f2-4174-8455-5490e23dec07.png",
    link: "/projects/house-frame-terrace",
  },
  {
    title: "Каркасный дом 9×9",
    area: "81 м²",
    location: "Тульская область",
    image: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/602f1d91-8439-4cd5-ba13-8b5596547ac5.jpg",
    link: "/#projects",
  },
  {
    title: "Одноэтажный дом с верандой",
    area: "90 м²",
    location: "Тульская область",
    image: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/1a7ebd95-de31-4fc9-a7f2-9cfb0dfe977d.jpg",
    link: "/#projects",
  },
]

export default function KarkasniyeDomaTula() {
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
          comment: "Заявка со страницы: Каркасные дома Тула",
          buildingType: "Жилой дом",
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
            src="https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/eefe6c97-35f2-4174-8455-5490e23dec07.png"
            alt="Каркасные дома в Туле под ключ"
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
              Каркасные дома<br />
              <span className="text-orange-400">под ключ в Туле</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
              Строим каркасные дома от 100 м² за 90–120 дней. Фиксированная цена в договоре,
              собственная бригада, гарантия 5 лет. Более 200 объектов в Тульской области.
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
              {["200+ домов построено", "С 2015 года", "Гарантия 5 лет"].map((item) => (
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
            <h2 className="text-3xl md:text-4xl font-medium">TOYSTROY — строительная компания в Туле</h2>
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

      {/* Типы домов */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <p className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3">Варианты домов</p>
            <h2 className="text-3xl md:text-4xl font-medium">Каркасные дома в Туле — цены</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">Выберите подходящий вариант или закажите индивидуальный проект под ваш участок</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {houseTypes.map((house) => (
              <div key={house.title} className="group">
                <div className="overflow-hidden aspect-[4/3] mb-5">
                  <img
                    src={house.image}
                    alt={house.title + " в Туле"}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{house.title}</h3>
                <p className="text-orange-500 font-bold text-lg mb-3">{house.price}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{house.desc}</p>
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

      {/* Наши работы */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <p className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3">Портфолио</p>
            <h2 className="text-3xl md:text-4xl font-medium">Построенные дома в Тульской области</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <a key={p.title} href={p.link} className="group block">
                <div className="overflow-hidden aspect-[4/3] mb-4">
                  <img
                    src={p.image}
                    alt={p.title + " — " + p.location}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-semibold mb-1">{p.title}</h3>
                <p className="text-sm text-gray-500">{p.area} · {p.location}</p>
              </a>
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
            <h2 className="text-3xl md:text-4xl font-medium">От заявки до готового дома</h2>
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
            <h2 className="text-3xl md:text-4xl font-medium">Часто спрашивают о каркасных домах в Туле</h2>
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

      {/* CTA + Форма */}
      <section id="order" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3">Бесплатный расчёт</p>
              <h2 className="text-3xl md:text-4xl font-medium mb-4">
                Узнайте стоимость каркасного дома в Туле
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Оставьте заявку — наш специалист перезвонит в течение 30 минут,
                ответит на вопросы и назовёт точную стоимость под ваш участок.
                Выезд на участок бесплатно.
              </p>
              <div className="space-y-4">
                {[
                  "Расчёт стоимости — бесплатно",
                  "Выезд специалиста на участок — бесплатно",
                  "Проект и планировка — в подарок",
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
              Строим каркасные дома по Тульской области · Тепло · Надёжно · С гарантией
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

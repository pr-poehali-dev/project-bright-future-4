import { useState } from "react"
import { ChevronLeft, ChevronRight, Check, Phone, MessageCircle, ArrowLeft } from "lucide-react"
import { PrivacyModal } from "@/components/PrivacyModal"
import { TermsModal } from "@/components/TermsModal"

const images = [
  {
    src: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/eefe6c97-35f2-4174-8455-5490e23dec07.png",
    alt: "Каркасный дом с террасой 10×10 — вид в лесу",
  },
  {
    src: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/bf9301d1-b706-4dc6-bf48-c962d5ce86c7.png",
    alt: "Каркасный дом с террасой 10×10 — 3D визуализация",
  },
  {
    src: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/668bc9a9-d71f-44ff-942c-2feda6a5ffe1.png",
    alt: "Каркасный дом с террасой 10×10 — план первого этажа",
  },
  {
    src: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/7808b7f9-971e-45db-9b52-7d0c91b70be2.png",
    alt: "Каркасный дом с террасой 10×10 — план второго этажа",
  },
]

const roomsFloor1 = [
  { name: "Кухня-Гостиная", area: "28,52 м²" },
  { name: "Терраса", area: "17,70 м²" },
  { name: "Холл", area: "7,50 м²" },
  { name: "Прихожая", area: "2,88 м²" },
  { name: "Тех. Помещение", area: "4,36 м²" },
  { name: "С/У", area: "3,53 м²" },
  { name: "Постирочная", area: "2,60 м²" },
  { name: "Кабинет", area: "5,04 м²" },
  { name: "Крыльцо", area: "3,60 м²" },
]

const roomsFloor2 = [
  { name: "Спальня 1", area: "12,74 м²" },
  { name: "Спальня 2", area: "9,67 м²" },
  { name: "Спальня 3", area: "9,70 м²" },
  { name: "Холл", area: "6,25 м²" },
  { name: "Гардеробная", area: "3,02 м²" },
  { name: "С/У", area: "3,88 м²" },
  { name: "Кладовая", area: "5,03 м²" },
]

const whyList = [
  "Каркасная технология — дом готов за 90–120 дней",
  "Тёплые стены 200 мм минваты, расход тепла минимальный",
  "Металлическая кровля с уклоном — без застоя снега и воды",
  "Большая терраса 17,7 м² — летняя гостиная под открытым небом",
  "Планировка под семью из 4–5 человек: 3 спальни + 2 санузла",
  "Работаем по договору с фиксированной ценой — без сюрпризов",
  "Гарантия на каркас 5 лет, на кровлю 3 года",
  "Собственная бригада, без субподрядчиков",
]

const specs = [
  { label: "Размер", value: "10 × 10 м" },
  { label: "Площадь", value: "≈ 100 м²" },
  { label: "Этажей", value: "2" },
  { label: "Спален", value: "3" },
  { label: "Санузлов", value: "2" },
  { label: "Высота потолков", value: "2,7 м" },
  { label: "Терраса", value: "17,70 м²" },
  { label: "Кабинет", value: "5,04 м²" },
  { label: "Фасад", value: "Сайдинг светлый + акценты дерева" },
  { label: "Кровля", value: "Металл (тёмно-серый)" },
  { label: "Технология стен", value: "Каркас + минвата 200 мм" },
  { label: "Срок строительства", value: "90–120 дней" },
]

const included = [
  "Фундамент на винтовых сваях или ленточный",
  "Силовой каркас из камерной сушки",
  "Утепление минватой 200 мм + ветробарьер",
  "Кровля из металлочерепицы / профлиста",
  "Фасадная отделка (сайдинг + деревянные акценты)",
  "Терраса с деревянными перилами и навесом",
  "Окна ПВХ двойной стеклопакет",
  "Входная дверь металлическая утеплённая",
  "Черновая внутренняя отделка (ГКЛ / ОСБ)",
  "Разводка электрики, водопровода, канализации",
]

export default function HouseFrameTerrace() {
  const [currentImg, setCurrentImg] = useState(0)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const prev = () => setCurrentImg((i) => (i - 1 + images.length) % images.length)
  const next = () => setCurrentImg((i) => (i + 1) % images.length)

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
          comment: "Заявка со страницы: Каркасный дом с террасой 10×10",
          buildingType: "Жилой дом",
          area: 100,
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
          <a href="/" className="flex items-center gap-3 group">
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
              href="/#calculator"
              className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-4 py-2 transition-colors"
            >
              Рассчитать стоимость
            </a>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-12 py-3 flex items-center gap-2 text-sm text-gray-500">
          <a href="/" className="hover:text-orange-500 transition-colors flex items-center gap-1">
            <ArrowLeft size={14} />
            Главная
          </a>
          <span>/</span>
          <a href="/#projects" className="hover:text-orange-500 transition-colors">
            Проекты
          </a>
          <span>/</span>
          <span className="text-[#1a0f0f] font-medium">Каркасный дом с террасой 10×10</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Gallery */}
            <div>
              <div className="relative overflow-hidden aspect-[4/3] bg-gray-100 mb-3">
                <img
                  src={images[currentImg].src}
                  alt={images[currentImg].alt}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <button
                  onClick={prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/85 backdrop-blur flex items-center justify-center hover:bg-white shadow transition"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/85 backdrop-blur flex items-center justify-center hover:bg-white shadow transition"
                >
                  <ChevronRight size={20} />
                </button>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentImg(i)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        i === currentImg ? "bg-orange-500" : "bg-white/70"
                      }`}
                    />
                  ))}
                </div>
                <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-semibold px-3 py-1">
                  Новый проект · 2025
                </span>
              </div>
              {/* Thumbnails */}
              <div className="flex gap-2 overflow-x-auto">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImg(i)}
                    className={`shrink-0 w-16 h-12 overflow-hidden border-2 transition-all ${
                      i === currentImg ? "border-orange-500" : "border-transparent opacity-60 hover:opacity-90"
                    }`}
                  >
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Info */}
            <div>
              <p className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3">
                Каркасный дом · Тульская область
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-4 leading-tight">
                Дом с террасой<br />
                <span className="text-orange-500">10 × 10 м</span>
              </h1>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                Двухэтажный каркасный дом площадью <strong>≈ 100 м²</strong> с просторной террасой 17,7 м²
                и деревянными акцентами в фасаде. Три спальни, два санузла, кухня-гостиная 28,5 м² и кабинет —
                идеально для семьи из 4–5 человек. Строим под ключ по всей Тульской области.
              </p>

              {/* Specs grid */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {specs.slice(0, 8).map((s) => (
                  <div key={s.label} className="bg-gray-50 px-4 py-3">
                    <p className="text-xs text-gray-500 mb-0.5">{s.label}</p>
                    <p className="text-sm font-semibold text-[#1a0f0f]">{s.value}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#order"
                  className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-center py-4 px-6 transition-colors"
                >
                  Заказать этот проект
                </a>
                <a
                  href="tel:+78001234567"
                  className="flex-1 border-2 border-[#1a0f0f] text-[#1a0f0f] hover:bg-[#1a0f0f] hover:text-white font-semibold text-center py-4 px-6 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone size={18} />
                  Позвонить
                </a>
              </div>
              <p className="text-xs text-gray-400 mt-3 text-center">
                Бесплатная консультация и выезд специалиста на участок
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* О проекте */}
      <section className="py-14 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3">Описание проекта</p>
            <h2 className="text-2xl md:text-3xl font-medium mb-5">Простор и уют в каждом уголке</h2>
            <p className="text-gray-600 leading-relaxed">
              Двухэтажный дом с открытой террасой — это современный взгляд на загородную жизнь. Светлый сайдинговый
              фасад с деревянными акцентами, тёмная металлическая кровля и большая терраса 17,7 м² создают
              привлекательный и жилой образ. Дом спроектирован для комфортного круглогодичного проживания.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-6 border-t-4 border-orange-500">
              <div className="text-3xl font-bold text-orange-500 mb-1">100 м²</div>
              <div className="font-semibold mb-2">Жилая площадь</div>
              <p className="text-sm text-gray-500">Два полноценных этажа с продуманной планировкой</p>
            </div>
            <div className="bg-white p-6 border-t-4 border-[#1a0f0f]">
              <div className="text-3xl font-bold text-[#1a0f0f] mb-1">17,7 м²</div>
              <div className="font-semibold mb-2">Терраса</div>
              <p className="text-sm text-gray-500">Открытая летняя гостиная с навесом из дерева</p>
            </div>
            <div className="bg-white p-6 border-t-4 border-orange-500">
              <div className="text-3xl font-bold text-orange-500 mb-1">120 дней</div>
              <div className="font-semibold mb-2">Срок постройки</div>
              <p className="text-sm text-gray-500">Каркасная технология позволяет заселиться уже этим сезоном</p>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Планировка</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              На первом этаже расположена большая кухня-гостиная (<strong>28,52 м²</strong>) с прямым выходом на террасу —
              сердце дома, где собирается вся семья. Рядом — кабинет (<strong>5,04 м²</strong>), идеальный для работы из дома.
              Из прихожей удобный доступ к техническому помещению, постирочной и санузлу.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              На втором этаже — три спальни: главная (<strong>12,74 м²</strong>), спальня 2 (<strong>9,67 м²</strong>)
              и спальня 3 (<strong>9,70 м²</strong>). Все спальни объединены просторным холлом (<strong>6,25 м²</strong>).
              На этаже также находятся гардеробная, санузел с ванной и кладовая.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Высота потолков 2,7 м, большие окна обеспечивают естественное освещение. Терраса с деревянными
              перилами и навесом — отдельная зона отдыха на свежем воздухе.
            </p>
          </div>
        </div>
      </section>

      {/* Состав помещений */}
      <section className="py-14">
        <div className="container mx-auto px-6 md:px-12">
          <p className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3 text-center">Планировка</p>
          <h2 className="text-2xl md:text-3xl font-medium mb-10 text-center">Состав помещений</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-14">
            {/* Floor 1 rooms */}
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-orange-500 text-white text-xs font-bold flex items-center justify-center">1</span>
                Первый этаж
              </h3>
              <div className="space-y-2">
                {roomsFloor1.map((room) => (
                  <div key={room.name} className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-700 text-sm">{room.name}</span>
                    <span className="font-semibold text-sm text-[#1a0f0f] shrink-0 ml-4">{room.area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floor 2 rooms */}
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-[#1a0f0f] text-white text-xs font-bold flex items-center justify-center">2</span>
                Второй этаж
              </h3>
              <div className="space-y-2">
                {roomsFloor2.map((room) => (
                  <div key={room.name} className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-700 text-sm">{room.name}</span>
                    <span className="font-semibold text-sm text-[#1a0f0f] shrink-0 ml-4">{room.area}</span>
                  </div>
                ))}
                <div className="flex items-center justify-between py-3 border-t-2 border-[#1a0f0f]">
                  <span className="font-semibold">Итого (без террасы)</span>
                  <span className="font-bold text-orange-500">≈ 100 м²</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floor plans images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div>
              <img
                src="https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/668bc9a9-d71f-44ff-942c-2feda6a5ffe1.png"
                alt="План первого этажа каркасного дома с террасой"
                className="w-full border border-gray-200"
              />
              <p className="text-xs text-gray-400 mt-2 text-center">Первый этаж</p>
            </div>
            <div>
              <img
                src="https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/7808b7f9-971e-45db-9b52-7d0c91b70be2.png"
                alt="План второго этажа каркасного дома с террасой"
                className="w-full border border-gray-200"
              />
              <p className="text-xs text-gray-400 mt-2 text-center">Второй этаж</p>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-3 text-center">
            Планировочное решение. Возможна корректировка под ваш участок.
          </p>
        </div>
      </section>

      {/* Технические характеристики */}
      <section className="py-14 bg-[#1a0f0f] text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-orange-400 text-sm font-bold tracking-widest uppercase mb-3">Спецификация</p>
            <h2 className="text-2xl md:text-3xl font-medium mb-4">Технические характеристики</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {specs.map((s) => (
              <div key={s.label} className="border border-white/10 p-4 hover:border-orange-500 transition-colors">
                <p className="text-gray-400 text-xs mb-1">{s.label}</p>
                <p className="text-white font-semibold text-sm">{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Что входит в комплектацию */}
      <section className="py-14 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3">Комплектация</p>
              <h2 className="text-2xl md:text-3xl font-medium mb-2">Что входит в стоимость</h2>
              <p className="text-gray-500 mb-6">
                Никаких скрытых доплат. Цена фиксируется в договоре до начала работ.
              </p>
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
                src="https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/bf9301d1-b706-4dc6-bf48-c962d5ce86c7.png"
                alt="3D визуализация каркасного дома с террасой"
                className="w-full border border-gray-200 bg-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Почему TOYSTROY */}
      <section className="py-14">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-10">
            <p className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3">Наши преимущества</p>
            <h2 className="text-2xl md:text-3xl font-medium">Почему заказывают у TOYSTROY</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whyList.map((item, i) => (
              <div key={i} className="flex gap-3 p-5 bg-gray-50 hover:bg-orange-50 transition-colors">
                <div className="text-orange-500 font-bold text-lg shrink-0 w-6">{String(i + 1).padStart(2, "0")}</div>
                <p className="text-sm text-gray-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-orange-500">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white mb-4">
            Хотите такой же дом?
          </h2>
          <p className="text-orange-100 text-lg mb-8 max-w-xl mx-auto">
            Оставьте заявку — наш специалист свяжется с вами в течение 30 минут, ответит на вопросы
            и назовёт точную стоимость под ваш участок.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#order"
              className="bg-white text-orange-500 font-semibold px-8 py-4 hover:bg-orange-50 transition-colors"
            >
              Оставить заявку
            </a>
            <a
              href="https://wa.me/78001234567"
              className="border-2 border-white text-white font-semibold px-8 py-4 hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              Написать в WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Форма заявки */}
      <section id="order" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3">Обратная связь</p>
              <h2 className="text-2xl md:text-3xl font-medium mb-2">Заказать этот проект</h2>
              <p className="text-gray-500">
                Заполните форму — перезвоним в течение 30 минут и проконсультируем бесплатно.
              </p>
            </div>

            {status === "success" ? (
              <div className="bg-green-50 border border-green-200 text-green-700 p-8 text-center">
                <div className="text-4xl mb-3">✓</div>
                <p className="font-semibold text-lg mb-1">Заявка отправлена!</p>
                <p className="text-sm">Мы свяжемся с вами в ближайшее время.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white p-8 shadow-sm">
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
                <div className="mb-4">
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
                <div className="bg-orange-50 border border-orange-100 rounded px-4 py-3 mb-6 text-sm text-orange-700">
                  <strong>Проект:</strong> Каркасный дом с террасой 10×10 м
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white font-semibold py-4 transition-colors"
                >
                  {status === "loading" ? "Отправляем..." : "Отправить заявку"}
                </button>
                {status === "error" && (
                  <p className="text-red-500 text-sm mt-3 text-center">
                    Ошибка отправки. Позвоните нам: 8 (800) 123-45-67
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
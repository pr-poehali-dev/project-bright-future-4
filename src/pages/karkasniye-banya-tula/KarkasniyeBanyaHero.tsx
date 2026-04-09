import { Phone } from "lucide-react"

export default function KarkasniyeBanyaHero() {
  return (
    <>
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
    </>
  )
}

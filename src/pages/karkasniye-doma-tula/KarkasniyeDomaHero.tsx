import { Phone } from "lucide-react"

export default function KarkasniyeDomaHero() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-[#2b2b2b] backdrop-blur border-b border-black/40 shadow-sm">
        <div className="container mx-auto px-6 md:px-12 py-4 flex items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-sm bg-[#3a3a3a] flex items-center justify-center overflow-hidden p-1 flex-shrink-0">
              <img
                src="/toystroy-logo.png"
                alt="TOYSTROY"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-lg font-semibold tracking-widest uppercase" style={{color: '#E9A662'}}>TOYSTROY</span>
          </a>
          <div className="flex items-center gap-3">
            <div className="hidden md:flex flex-col items-start gap-0.5 text-sm font-medium">
              <a href="tel:+79509170974" className="flex items-center gap-2 hover:text-orange-400 transition-colors" style={{color: '#E9A662'}}>
                <Phone size={14} />
                +7 (950) 917-09-74
              </a>
              <a href="tel:+79509170972" className="flex items-center gap-2 hover:text-orange-400 transition-colors" style={{color: '#E9A662'}}>
                <Phone size={14} />
                +7 (950) 917-09-72
              </a>
            </div>
            <a
              href="#order"
              className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-4 py-2 transition-colors"
            >
              Получить расчёт
            </a>
          </div>
        </div>
      </header>

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/eefe6c97-35f2-4174-8455-5490e23dec07.png"
            alt="Каркасные дома в Туле под ключ"
            loading="lazy"
            decoding="async"
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
    </>
  )
}
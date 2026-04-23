import { useState } from "react"
import { ChevronLeft, ChevronRight, Phone, ArrowLeft } from "lucide-react"

const images = [
  {
    src: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/63c85357-f998-4090-b271-f70fec4753f3.jpg",
    alt: "Каркасный дом с террасой 10×10 — вид спереди",
  },
  {
    src: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/ac83e35b-466e-47e6-a078-01833d92adbd.jpg",
    alt: "Каркасный дом с террасой 10×10 — 3D визуализация",
  },
  {
    src: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/9c2e61df-2edf-4e26-9248-f297f95f0d07.jpg",
    alt: "Каркасный дом с террасой 10×10 — план первого этажа",
  },
  {
    src: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/2304a9a5-6812-46d7-a725-20ec7ac0f5f7.jpg",
    alt: "Каркасный дом с террасой 10×10 — план второго этажа",
  },
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
]

export default function HouseFrameTerraceHero() {
  const [currentImg, setCurrentImg] = useState(0)

  const prev = () => setCurrentImg((i) => (i - 1 + images.length) % images.length)
  const next = () => setCurrentImg((i) => (i + 1) % images.length)

  return (
    <>
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
                      i === currentImg ? "border-orange-500" : "border-transparent opacity-60 hover:opacity-100"
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
    </>
  )
}
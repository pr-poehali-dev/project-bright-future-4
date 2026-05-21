import { useState } from "react"
import { ChevronLeft, ChevronRight, Phone, ArrowLeft } from "lucide-react"

const images = [
  {
    src: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/729b80bb-9226-4229-93c5-1bdaae07747c.jpg",
    alt: "Одноэтажный дом 13×10 м — фасад с имитацией бруса и террасой",
  },
  {
    src: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/35fce8e3-a9ab-4cb3-b009-5fbd9b9d3c26.jpg",
    alt: "Открытая терраса 20 м² с панорамными окнами",
  },
  {
    src: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/342dcc4f-cde0-4a3d-bd42-5aff83af57f5.jpg",
    alt: "Кухня-гостиная 50 м² с панорамными окнами",
  },
  {
    src: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/6ff183db-49ca-43b2-843c-f1567963f505.jpg",
    alt: "Мастер-спальня с гардеробной",
  },
  {
    src: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/15c8fe41-b614-4b6a-98df-c01397fa4a64.jpg",
    alt: "Гостевая спальня 11 м²",
  },
  {
    src: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/99f43b09-0e7d-4c5a-a8fd-976f830d9da8.jpg",
    alt: "Спальня 10 м²",
  },
  {
    src: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/9a0575d7-745d-44e8-8a28-56c0fbd60035.jpg",
    alt: "Сауна 4,6 м² с натуральной вагонкой",
  },
  {
    src: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/79c307e4-4aa7-47f1-a3be-8114fe442a72.jpg",
    alt: "Санузел с душевой кабиной",
  },
  {
    src: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/1fdf1805-e1b6-4a29-8ca9-06a9b20b1d61.png",
    alt: "План дома 13×10 м с террасой",
  },
]

const specs = [
  { label: "Габариты", value: "13,0 × 10,0 м" },
  { label: "Площадь дома", value: "130 м²" },
  { label: "Терраса", value: "20 м²" },
  { label: "Этажей", value: "1" },
  { label: "Фундамент", value: "Винтовые сваи" },
  { label: "Фасад", value: "Имитация бруса" },
  { label: "Кровля", value: "Металлочерепица" },
  { label: "Высота потолков", value: "2,7 м" },
]

export default function House130PremiumHero() {
  const [currentImg, setCurrentImg] = useState(0)

  const prev = () => setCurrentImg((i) => (i - 1 + images.length) % images.length)
  const next = () => setCurrentImg((i) => (i + 1) % images.length)

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-6 md:px-12 py-4 flex items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-3 group">
            <img
              src="https://cdn.poehali.dev/files/81218afd-c0f8-4ab8-8954-5409def67550.jpg"
              alt="TOYSTROY"
              className="w-9 h-9 rounded object-cover"
              loading="eager"
            />
            <span className="text-lg font-semibold tracking-widest uppercase text-[#1a0f0f]">TOYSTROY</span>
          </a>
          <div className="flex items-center gap-3">
            <a
              href="tel:+79509170974"
              className="hidden md:flex items-center gap-2 text-sm font-medium text-[#1a0f0f] hover:text-orange-500 transition-colors"
            >
              <Phone size={16} />
              +7 (950) 917-09-74
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

      <div className="bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-12 py-3 flex items-center gap-2 text-sm text-gray-500">
          <a href="/" className="hover:text-orange-500 transition-colors flex items-center gap-1">
            <ArrowLeft size={14} />
            Главная
          </a>
          <span>/</span>
          <a href="/#projects" className="hover:text-orange-500 transition-colors">Наши работы</a>
          <span>/</span>
          <span className="text-[#1a0f0f] font-medium">Дом «Премиум» 130 м²</span>
        </div>
      </div>

      <section className="py-10 md:py-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <p className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3">Наши работы · 2026</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-2">
                Дом «Премиум»
              </h1>
              <p className="text-2xl md:text-3xl text-orange-500 font-medium mb-6">13,0 × 10,0 м · 130 м² + терраса 20 м²</p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Просторный одноэтажный дом <strong>130 м²</strong> на винтовых сваях с большой террасой 20 м².
                Три спальни, кухня-гостиная 50 м² с панорамными окнами, мастер-спальня с гардеробной,
                встроенная сауна с душевой и два санузла. Фасад — имитация бруса, кровля — тёмно-серая металлочерепица.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {specs.map((s) => (
                  <div key={s.label} className="bg-gray-50 p-4">
                    <p className="text-xs text-gray-400 mb-1">{s.label}</p>
                    <p className="font-semibold text-sm text-[#1a0f0f]">{s.value}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#order"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 text-center transition-colors"
                >
                  Хочу такой же дом
                </a>
                <a
                  href="tel:+79509170974"
                  className="border-2 border-[#1a0f0f] text-[#1a0f0f] font-semibold px-8 py-4 text-center hover:bg-[#1a0f0f] hover:text-white transition-colors"
                >
                  Позвонить
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden aspect-[4/3] bg-gray-100">
                <img
                  src={images[currentImg].src}
                  alt={images[currentImg].alt}
                  className="w-full h-full object-cover transition-opacity duration-300"
                  loading="eager"
                />
                <button
                  onClick={prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white flex items-center justify-center shadow-md transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white flex items-center justify-center shadow-md transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 bg-black/30 px-3 py-1.5 rounded-full">
                  <span className="text-white text-xs font-medium">{currentImg + 1} / {images.length}</span>
                </div>
              </div>
              <div className="grid grid-cols-5 gap-2 mt-2">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImg(i)}
                    className={`overflow-hidden aspect-square border-2 transition-colors ${i === currentImg ? "border-orange-500" : "border-transparent"}`}
                  >
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
                  </button>
                ))}
              </div>
              <p className="text-xs text-gray-400 text-center mt-3">
                Фасад · Терраса · Кухня-гостиная · Спальни · Сауна · Санузел · План
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
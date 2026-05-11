import { useState } from "react"
import { ChevronLeft, ChevronRight, Phone, ArrowLeft } from "lucide-react"

const images = [
  {
    src: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/c18ec5f4-dcfd-416d-a1d4-14ceda87620a.png",
    alt: "Дача 6×8 с террасой — вид снаружи",
  },
  {
    src: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/2be785fe-3f2f-4f10-9783-276b3842b0f7.png",
    alt: "Дача 6×8 — вид с другого ракурса",
  },
  {
    src: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/2bad074b-cbcb-40ea-86bd-62da5bee0e3b.jpg",
    alt: "Дача 6×8 — интерьер кухни-гостиной",
  },
]

const specs = [
  { label: "Габариты", value: "6,0 × 8,0 м" },
  { label: "Общая площадь", value: "48 м²" },
  { label: "Этажей", value: "1" },
  { label: "Фундамент", value: "Винтовые сваи" },
  { label: "Фасад", value: "Имитация бруса" },
  { label: "Терраса", value: "Открытая" },
  { label: "Кровля", value: "Металлочерепица" },
  { label: "Год постройки", value: "2026" },
]

export default function Dacha48Hero() {
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
          <span className="text-[#1a0f0f] font-medium">Дача «Уютная» 6×8</span>
        </div>
      </div>

      <section className="py-10 md:py-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <p className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3">Наши работы · 2026</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-2">
                Дача «Уютная»
              </h1>
              <p className="text-2xl md:text-3xl text-orange-500 font-medium mb-6">6,0 × 8,0 м</p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Одноэтажная каркасная дача <strong>48 м²</strong> на винтовых сваях —
                имитация бруса, уютная открытая терраса и светлый интерьер с деревянной вагонкой.
                Построена под ключ в Тульской области в срок и без доплат.
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
                  Хочу такую же дачу
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
                {images.length > 1 && (
                  <>
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
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                      {images.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentImg(i)}
                          className={`w-2 h-2 rounded-full transition-colors ${i === currentImg ? "bg-orange-500" : "bg-white/70"}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
              <div className="grid grid-cols-3 gap-2 mt-2">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImg(i)}
                    className={`overflow-hidden aspect-[4/3] border-2 transition-colors ${i === currentImg ? "border-orange-500" : "border-transparent"}`}
                  >
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

import { useState } from "react"
import { ChevronLeft, ChevronRight, Phone, ArrowLeft } from "lucide-react"

const images = [
  {
    src: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/648bc39b-0fb1-4d1b-b56b-1065feb9e5ef.jpg",
    alt: "Баня «Рябина» 54 м² — вид спереди с террасой и мангалом",
  },
  {
    src: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/59efaeea-c797-477f-a056-d96cb5373df3.jpg",
    alt: "Баня «Рябина» 54 м² — боковой фасад",
  },
  {
    src: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/4d129597-3175-49f6-920b-70bc9b1edbfc.jpg",
    alt: "Баня «Рябина» 54 м² — фасадный чертёж",
  },
  {
    src: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/59dc09ef-a3c8-4827-90c9-2e2597a2c190.jpg",
    alt: "Баня «Рябина» 54 м² — боковой чертёж",
  },
  {
    src: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/70d32287-babb-4e44-98b9-d605aed274c3.jpg",
    alt: "Баня «Рябина» 54 м² — план этажа",
  },
]

const specs = [
  { label: "Габариты", value: "6,00 × 9,00 м" },
  { label: "Общая площадь", value: "54 м²" },
  { label: "Этажей", value: "1" },
  { label: "Спальни", value: "Нет" },
  { label: "Парная", value: "5,90 м²" },
  { label: "Комната отдыха", value: "15,85 м²" },
  { label: "Моечная + С/У", value: "5,99 м²" },
  { label: "Терраса с мангалом", value: "18,42 м²" },
]

export default function Banya54Hero() {
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
          <a href="/#projects" className="hover:text-orange-500 transition-colors">
            Проекты
          </a>
          <span>/</span>
          <span className="text-[#1a0f0f] font-medium">Баня «Рябина» 54 м²</span>
        </div>
      </div>

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
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
                  Новый проект · 2026
                </span>
              </div>
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

            <div>
              <p className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3">
                Каркасная баня · Тульская область
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-4 leading-tight">
                Баня «Рябина»<br />
                <span className="text-orange-500">6,00 × 9,00 м</span>
              </h1>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                Каркасная баня <strong>54 м²</strong> с тёплым кирпично-красным фасадом и белыми акцентами.
                Главная изюминка — крытая <strong>терраса 18,42 м²</strong> с кирпичным мангалом:
                после жаркой парной сразу к шашлыку, не выходя под дождь. Парная, моечная,
                просторная комната отдыха — всё для настоящего банного дня.
                Строим под ключ по всей Тульской области.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {specs.map((s) => (
                  <div key={s.label} className="bg-gray-50 px-4 py-3">
                    <p className="text-xs text-gray-500 mb-0.5">{s.label}</p>
                    <p className="text-sm font-semibold text-[#1a0f0f]">{s.value}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#order"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-4 text-center transition-colors"
                >
                  Заказать этот проект
                </a>
                <a
                  href="tel:+79509170974"
                  className="border-2 border-[#1a0f0f] text-[#1a0f0f] font-semibold px-6 py-4 text-center hover:bg-[#1a0f0f] hover:text-white transition-colors flex items-center justify-center gap-2"
                >
                  <Phone size={18} />
                  Позвонить
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

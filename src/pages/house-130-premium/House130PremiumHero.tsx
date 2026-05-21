import { useState } from "react"
import { ChevronLeft, ChevronRight, Phone, ArrowLeft } from "lucide-react"

const images = [
  {
    src: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/3fa8e446-8e0c-4c9f-be71-67b46474cc0f.jpg",
    alt: "Одноэтажный дом 13×10 м — имитация бруса, антрацитовые окна, второй свет",
  },
  {
    src: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/da5b371a-4e15-4946-ab38-c91830122179.jpg",
    alt: "Вид с террасы — второй свет и панорамное остекление",
  },
  {
    src: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/554fe155-a849-4582-b3d3-daf8e2452000.jpg",
    alt: "Открытая терраса 20 м² с мебелью",
  },
  {
    src: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/12b93839-f3df-40c8-8dae-de71b45df831.jpg",
    alt: "Кухня-гостиная 50 м² со вторым светом",
  },
  {
    src: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/0f293ac3-2b0c-4d86-bd17-7941be0d6de5.jpg",
    alt: "Мастер-спальня с гардеробной",
  },
  {
    src: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/e2398154-98c9-4e64-83f4-3f8374be2a5f.jpg",
    alt: "Спальня 11 м²",
  },
  {
    src: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/d2108b23-6d11-4a78-abd3-745e3ddfe409.jpg",
    alt: "Спальня 10 м²",
  },
  {
    src: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/67eaf59b-6a1d-4ea4-ad92-911d81d0bd46.jpg",
    alt: "Сауна 4,6 м² с натуральной вагонкой",
  },
  {
    src: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/c1129423-3bfa-482a-b928-a13e145f914d.jpg",
    alt: "Санузел с душевой кабиной",
  },
  {
    src: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/661547ed-54fc-4088-b1f3-c1c3a463e541.png",
    alt: "3D-план дома 13×10 м",
  },
  {
    src: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/f5a6ca13-8d6b-4c4b-bcca-361b596ec008.png",
    alt: "Архитектурный план дома 13×10 м с террасой",
  },
]

const specs = [
  { label: "Габариты", value: "13,0 × 10,0 м" },
  { label: "Площадь дома", value: "130 м²" },
  { label: "Терраса", value: "20 м²" },
  { label: "Этажей", value: "1" },
  { label: "Особенность", value: "Второй свет" },
  { label: "Фундамент", value: "Винтовые сваи" },
  { label: "Фасад", value: "Имитация бруса" },
  { label: "Кровля", value: "Металлочерепица серая" },
  { label: "Окна", value: "Антрацит" },
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
                Просторный одноэтажный дом <strong>130 м²</strong> на винтовых сваях с террасой 20 м² сбоку.
                Кухня-гостиная 50 м² со <strong>вторым светом</strong> и панорамными окнами на террасу,
                три спальни, мастер-спальня с гардеробной, встроенная сауна с душевой и два санузла.
                Фасад — имитация бруса, кровля — серая металлочерепица, окна антрацит.
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
              <div className="grid grid-cols-6 gap-2 mt-2">
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
                Фасад · Второй свет · Терраса · Кухня-гостиная · Спальни · Сауна · Санузел · План
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
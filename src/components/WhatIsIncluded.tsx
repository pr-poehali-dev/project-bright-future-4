import { HighlightedText } from "./HighlightedText"
import Icon from "@/components/ui/icon"

const included = [
  {
    icon: "MapPin",
    title: "Выезд на участок",
    description: "Бесплатно приедем в любой район Тульской области, оценим условия и дадим рекомендации",
  },
  {
    icon: "FileText",
    title: "Проект и смета",
    description: "Индивидуальный архитектурный проект и подробная смета с ценами на все материалы и работы",
  },
  {
    icon: "Building2",
    title: "Фундамент и каркас",
    description: "Закладка фундамента под ваш тип грунта и возведение каркаса из сухой строганной доски",
  },
  {
    icon: "Home",
    title: "Кровля под ключ",
    description: "Монтаж стропильной системы и покрытие кровельным материалом — металлочерепица или профнастил",
  },
  {
    icon: "Thermometer",
    title: "Утепление и отделка",
    description: "Утепление стен, пола и потолка. Фасадная и внутренняя обшивка согласно проекту",
  },
  {
    icon: "DoorOpen",
    title: "Окна и двери",
    description: "Установка металлопластиковых окон и входных дверей — всё в комплекте без доплат",
  },
  {
    icon: "Zap",
    title: "Электрика",
    description: "Полная разводка электропроводки, установка розеток, выключателей и щита управления",
  },
  {
    icon: "Droplets",
    title: "Водоснабжение и отопление",
    description: "Подключение водопровода, монтаж системы отопления и канализации по проекту",
  },
  {
    icon: "Truck",
    title: "Доставка материалов",
    description: "Доставляем все строительные материалы на объект за наш счёт — без дополнительных расходов",
  },
  {
    icon: "ShieldCheck",
    title: "Гарантийный паспорт",
    description: "При сдаче объекта выдаём гарантийный паспорт с официальными обязательствами на 5 лет",
  },
]

const notIncluded = [
  "Благоустройство территории (по желанию)",
  "Подключение к центральным коммуникациям",
  "Мебель и бытовая техника",
  "Отделочные работы «под чистовую» (опционально)",
]

export function WhatIsIncluded() {
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Декоративный фон */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-stone-50 hidden lg:block" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Заголовок */}
        <div className="max-w-3xl mb-16">
          <p className="text-foreground text-base md:text-lg font-bold tracking-[0.25em] uppercase mb-6">Прозрачность</p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Что входит <HighlightedText>в стоимость</HighlightedText>
          </h2>
          <p className="text-foreground text-base sm:text-lg leading-relaxed font-semibold max-w-xl">
            Никаких скрытых платежей — цена в договоре окончательная. Вот что вы получаете за фиксированную стоимость.
          </p>
        </div>

        {/* Основная сетка */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4 mb-12">
          {included.map((item, index) => (
            <div
              key={item.title}
              className={`group relative flex flex-col p-5 md:p-6 border border-stone-200 bg-white hover:border-orange-400 hover:shadow-md transition-all duration-200 ${
                index === 0 ? "lg:col-span-2" : ""
              } ${index === 3 ? "lg:col-span-2" : ""}`}
            >
              {/* Номер */}
              <span className="text-[10px] font-bold tracking-[0.2em] text-stone-300 uppercase mb-4">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Иконка */}
              <div className="w-10 h-10 bg-orange-50 flex items-center justify-center mb-4 group-hover:bg-orange-100 transition-colors">
                <Icon name={item.icon as Parameters<typeof Icon>[0]["name"]} size={18} className="text-orange-500" />
              </div>

              {/* Контент */}
              <h3 className="text-sm md:text-base font-bold text-foreground mb-2 leading-snug">{item.title}</h3>
              <p className="text-stone-500 text-xs md:text-sm leading-relaxed">{item.description}</p>

              {/* Метка включено */}
              <div className="flex items-center gap-1.5 mt-4">
                <Icon name="Check" size={12} className="text-orange-500 flex-shrink-0" />
                <span className="text-[10px] font-bold text-orange-500 uppercase tracking-wide">Включено</span>
              </div>
            </div>
          ))}
        </div>

        {/* Нижний блок: не входит + итог */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {/* Что не входит */}
          <div className="bg-stone-50 border border-stone-200 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="Info" size={18} className="text-stone-400 flex-shrink-0" />
              <h3 className="text-sm font-bold text-stone-600 uppercase tracking-[0.15em]">Не входит в базовую стоимость</h3>
            </div>
            <ul className="flex flex-col gap-3">
              {notIncluded.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Icon name="Minus" size={12} className="text-stone-300 mt-1 flex-shrink-0" />
                  <span className="text-stone-500 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-stone-400 mt-5 leading-relaxed">
              * Дополнительные опции обсуждаются отдельно и фиксируются в договоре
            </p>
          </div>

          {/* Итоговый блок с акцентом */}
          <div className="bg-foreground text-white p-6 md:p-8 flex flex-col justify-between">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-orange-400 mb-4">Наше обещание</p>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-snug">
                Цена зафиксирована в договоре — никаких сюрпризов
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Стоимость строительства прописана в договоре до начала работ. Мы не повышаем цены в процессе и не придумываем «доплаты по ходу».
              </p>
            </div>

            {/* Статистика */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
              <div>
                <p className="text-2xl md:text-3xl font-bold text-orange-400">5 лет</p>
                <p className="text-white/50 text-xs mt-1 leading-tight">гарантия на все работы</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-orange-400">0%</p>
                <p className="text-white/50 text-xs mt-1 leading-tight">скрытых платежей</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-orange-400">Под ключ</p>
                <p className="text-white/50 text-xs mt-1 leading-tight">всё включено</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Check } from "lucide-react"

const whyList = [
  "130 м² жилой площади + 20 м² террасы — простор для большой семьи",
  "Одноэтажный — без лестниц, удобно для детей и пожилых",
  "Второй свет в кухне-гостиной перед террасой — много воздуха и света",
  "Кухня-гостиная 50 м² с панорамными окнами на террасу",
  "Мастер-спальня с собственной гардеробной и санузлом",
  "Встроенная сауна с душевой — баня не нужна",
  "Два санузла — никаких очередей утром",
  "Имитация бруса — натуральный тёплый фасад",
  "Серая металлочерепица + окна антрацит — современный экстерьер",
  "Винтовые сваи — фундамент за 1 день на любом грунте",
]

const included = [
  "Фундамент на винтовых сваях с обвязкой",
  "Силовой каркас из камерной сушки 150×50",
  "Утепление минватой 200 мм + ветрозащита + пароизоляция",
  "Кровля — серая металлочерепица с водостоками",
  "Фасад — имитация бруса с покраской",
  "Зона второго света над кухней-гостиной",
  "Открытая терраса 20 м² с деревянным настилом сбоку",
  "Панорамные окна ПВХ профиль антрацит на кухню-гостиную",
  "Окна ПВХ с двойным стеклопакетом, цвет антрацит",
  "Входная дверь металлическая утеплённая",
  "Межкомнатные двери",
  "Внутренняя отделка — вагонка / гипсокартон под чистовую",
  "Разводка электрики по проекту",
  "Сауна с печью и комплектом полок",
]

export default function House130PremiumDetails() {
  return (
    <>
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <p className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-4">Почему этот проект</p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-8">
                Премиум-планировка<br />для большой семьи
              </h2>
              <ul className="space-y-4">
                {whyList.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 shrink-0 w-5 h-5 bg-orange-500 flex items-center justify-center">
                      <Check size={12} className="text-white" />
                    </span>
                    <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-4">Комплектация</p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-8">
                Строим под ключ<br />с гарантией
              </h2>
              <ul className="space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 shrink-0 w-5 h-5 border border-orange-500 flex items-center justify-center">
                      <Check size={12} className="text-orange-500" />
                    </span>
                    <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#1a0f0f] text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-orange-400 text-sm font-bold tracking-widest uppercase mb-4">План проекта</p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight">
                Архитектурный план и 3D-визуализация
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="bg-white p-3 md:p-4">
                  <img
                    src="https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/661547ed-54fc-4088-b1f3-c1c3a463e541.png"
                    alt="3D-план дома 13×10 м с расстановкой мебели"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
                <p className="text-gray-400 text-xs text-center mt-3">3D-план с расстановкой мебели</p>
              </div>
              <div>
                <div className="bg-white p-3 md:p-4">
                  <img
                    src="https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/f5a6ca13-8d6b-4c4b-bcca-361b596ec008.png"
                    alt="Архитектурный план дома 13×10 м с размерами"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
                <p className="text-gray-400 text-xs text-center mt-3">Архитектурный чертёж с размерами</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-8 text-center">
              Размеры в миллиметрах · Высота потолков 2,7 м · Окна и двери с указанием габаритов
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
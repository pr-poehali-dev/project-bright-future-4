import { Check } from "lucide-react"

const rooms = [
  { name: "Гостиная-кухня (кухня-столовая)", area: "23,56 м²" },
  { name: "Главная спальня", area: "16,88 м²" },
  { name: "Спальня 2", area: "10,23 м²" },
  { name: "Спальня 3", area: "9,96 м²" },
  { name: "Санузел 1 (главный)", area: "3,49 м²" },
  { name: "Санузел 2 (детский)", area: "5,35 м²" },
  { name: "Холл / прихожая", area: "7,22 м²" },
  { name: "Тамбур 1", area: "5,88 м²" },
  { name: "Тамбур 2", area: "2,49 м²" },
  { name: "Котельная / кладовая", area: "4,45 м²" },
  { name: "Крыльцо", area: "5,31 м²" },
]

const whyList = [
  "Каркасная технология — дом готов за 40–60 дней при хороших погодных условиях",
  "Тёплые стены 200 мм минваты, расход тепла минимальный",
  "Крыша из металла с уклоном 22° — без застоя снега",
  "Облицовка под кирпич — выглядит солидно, весит вдвое меньше",
  "Планировка под семью из 4–5 человек: 3 спальни + 2 санузла",
  "Работаем по договору с фиксированной ценой — без сюрпризов",
  "Гарантия на каркас 5 лет, на кровлю 3 года",
  "Собственная бригада, без субподрядчиков",
]

const specs = [
  { label: "Размер", value: "10 × 10 м" },
  { label: "Площадь", value: "≈ 92–100 м²" },
  { label: "Этажей", value: "1" },
  { label: "Спален", value: "3" },
  { label: "Санузлов", value: "2" },
  { label: "Высота потолков", value: "2,7 м" },
  { label: "Уклон кровли", value: "22°" },
  { label: "Конёк кровли", value: "5,323 м" },
  { label: "Фасад", value: "Облицовочный кирпич (имитация)" },
  { label: "Кровля", value: "Металл (тёмно-серый)" },
  { label: "Технология стен", value: "Каркас + минвата 200 мм" },
  { label: "Срок строительства", value: "40–60 дней при хороших погодных условиях" },
]

const included = [
  "Фундамент на винтовых сваях или ленточный",
  "Силовой каркас из камерной сушки",
  "Утепление минватой 200 мм + ветробарьер",
  "Кровля из металлочерепицы / профлиста",
  "Фасадная отделка (облицовка под кирпич)",
  "Окна ПВХ двойной стеклопакет",
  "Входная дверь металлическая утеплённая",
  "Черновая внутренняя отделка (ГКЛ / ОСБ)",
  "Разводка электрики, водопровода, канализации",
  "Лестница на чердак (при необходимости)",
]

export default function House10x10Details() {
  return (
    <>
      {/* О проекте */}
      <section className="py-14 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3">Описание проекта</p>
            <h2 className="text-2xl md:text-3xl font-medium mb-5">Всё продумано для комфортной жизни</h2>
            <p className="text-gray-600 leading-relaxed">
              Проект «Кирпичный стиль» — это современный одноэтажный каркасный дом с продуманной планировкой,
              в котором удачно сочетается практичность и эстетика. Строгий тёмный фасад под облицовочный кирпич,
              металлическая кровля с уклоном 22° и лаконичное оформление входной группы создают облик
              добротного загородного дома без лишней помпезности.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-6 border-t-4 border-orange-500">
              <div className="text-3xl font-bold text-orange-500 mb-1">100 м²</div>
              <div className="font-semibold mb-2">Жилая площадь</div>
              <p className="text-sm text-gray-500">Рационально спланированное пространство без «мёртвых» зон</p>
            </div>
            <div className="bg-white p-6 border-t-4 border-[#1a0f0f]">
              <div className="text-3xl font-bold text-[#1a0f0f] mb-1">3 / 2</div>
              <div className="font-semibold mb-2">Спальни / Санузла</div>
              <p className="text-sm text-gray-500">Отдельные санузлы — главная спальня имеет собственный</p>
            </div>
            <div className="bg-white p-6 border-t-4 border-orange-500">
              <div className="text-3xl font-bold text-orange-500 mb-1">40–60 дней</div>
              <div className="font-semibold mb-2">Срок постройки</div>
              <p className="text-sm text-gray-500">Каркасная технология позволяет заселиться уже этим сезоном</p>
            </div>
          </div>

          {/* Description text */}
          <div className="bg-white p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Планировка</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Дом спланирован по принципу «всё под рукой». С крыльца вы попадаете в тамбур, отделяющий
              улицу от жилой зоны, затем — в просторную прихожую с гардеробной зоной. Центр дома —
              объединённая кухня-гостиная площадью <strong>23,56 м²</strong> с обеденной зоной и выходом к котельной.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Спальный блок отделён коридором. Главная спальня (<strong>16,88 м²</strong>) имеет собственный санузел.
              Две дополнительные спальни (<strong>10,23 м²</strong> и <strong>9,96 м²</strong>) обслуживаются
              вторым санузлом с душевой. Все спальни ориентированы на тихую сторону участка.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Высота потолков 2,7 м, окна увеличенного формата обеспечивают хорошее естественное освещение.
              Котельная вынесена в отдельное помещение — чисто и безопасно.
            </p>
          </div>
        </div>
      </section>

      {/* Состав помещений */}
      <section className="py-14">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3">Планировка</p>
              <h2 className="text-2xl md:text-3xl font-medium mb-6">Состав помещений</h2>
              <div className="space-y-2">
                {rooms.map((room) => (
                  <div key={room.name} className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-700 text-sm">{room.name}</span>
                    <span className="font-semibold text-sm text-[#1a0f0f] shrink-0 ml-4">{room.area}</span>
                  </div>
                ))}
                <div className="flex items-center justify-between py-3 border-t-2 border-[#1a0f0f]">
                  <span className="font-semibold">Итого (без крыльца)</span>
                  <span className="font-bold text-orange-500">≈ 100 м²</span>
                </div>
              </div>
            </div>

            <div>
              <img
                src="https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/6d7fcef7-b856-48cf-bea0-045b7f1fc0ce.png"
                alt="План помещений каркасного дома 10x10"
                className="w-full border border-gray-200"
              />
              <p className="text-xs text-gray-400 mt-2 text-center">
                Планировочное решение. Возможна корректировка под ваш участок.
              </p>
            </div>
          </div>
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
                src="https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/5e3b7b6e-fc25-4e83-a8e3-7d2fee782749.png"
                alt="Чертёж фасада каркасного дома 10x10"
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
    </>
  )
}
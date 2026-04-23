import { Check } from "lucide-react"

const roomsFloor1 = [
  { name: "Кухня-Гостиная", area: "28,52 м²" },
  { name: "Терраса", area: "17,70 м²" },
  { name: "Холл", area: "7,50 м²" },
  { name: "Прихожая", area: "2,88 м²" },
  { name: "Тех. Помещение", area: "4,36 м²" },
  { name: "С/У", area: "3,53 м²" },
  { name: "Постирочная", area: "2,60 м²" },
  { name: "Кабинет", area: "5,04 м²" },
  { name: "Крыльцо", area: "3,60 м²" },
]

const roomsFloor2 = [
  { name: "Спальня 1", area: "12,74 м²" },
  { name: "Спальня 2", area: "9,67 м²" },
  { name: "Спальня 3", area: "9,70 м²" },
  { name: "Холл", area: "6,25 м²" },
  { name: "Гардеробная", area: "3,02 м²" },
  { name: "С/У", area: "3,88 м²" },
  { name: "Кладовая", area: "5,03 м²" },
]

const whyList = [
  "Каркасная технология — дом готов за 40–60 дней при хороших погодных условиях",
  "Тёплые стены 200 мм минваты, расход тепла минимальный",
  "Металлическая кровля с уклоном — без застоя снега и воды",
  "Большая терраса 17,7 м² — летняя гостиная под открытым небом",
  "Планировка под семью из 4–5 человек: 3 спальни + 2 санузла",
  "Работаем по договору с фиксированной ценой — без сюрпризов",
  "Гарантия на каркас 5 лет, на кровлю 3 года",
  "Собственная бригада, без субподрядчиков",
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
  { label: "Фасад", value: "Сайдинг светлый + акценты дерева" },
  { label: "Кровля", value: "Металл (тёмно-серый)" },
  { label: "Технология стен", value: "Каркас + минвата 200 мм" },
  { label: "Срок строительства", value: "40–60 дней при хороших погодных условиях" },
]

const included = [
  "Фундамент на винтовых сваях или ленточный",
  "Силовой каркас из камерной сушки",
  "Утепление минватой 200 мм + ветробарьер",
  "Кровля из металлочерепицы / профлиста",
  "Фасадная отделка (сайдинг + деревянные акценты)",
  "Терраса с деревянными перилами и навесом",
  "Окна ПВХ двойной стеклопакет",
  "Входная дверь металлическая утеплённая",
  "Черновая внутренняя отделка (ГКЛ / ОСБ)",
  "Разводка электрики, водопровода, канализации",
]

export default function HouseFrameTerraceDetails() {
  return (
    <>
      {/* О проекте */}
      <section className="py-14 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3">Описание проекта</p>
            <h2 className="text-2xl md:text-3xl font-medium mb-5">Простор и уют в каждом уголке</h2>
            <p className="text-gray-600 leading-relaxed">
              Двухэтажный дом с открытой террасой — это современный взгляд на загородную жизнь. Светлый сайдинговый
              фасад с деревянными акцентами, тёмная металлическая кровля и большая терраса 17,7 м² создают
              привлекательный и жилой образ. Дом спроектирован для комфортного круглогодичного проживания.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-6 border-t-4 border-orange-500">
              <div className="text-3xl font-bold text-orange-500 mb-1">100 м²</div>
              <div className="font-semibold mb-2">Жилая площадь</div>
              <p className="text-sm text-gray-500">Два полноценных этажа с продуманной планировкой</p>
            </div>
            <div className="bg-white p-6 border-t-4 border-[#1a0f0f]">
              <div className="text-3xl font-bold text-[#1a0f0f] mb-1">17,7 м²</div>
              <div className="font-semibold mb-2">Терраса</div>
              <p className="text-sm text-gray-500">Открытая летняя гостиная с навесом из дерева</p>
            </div>
            <div className="bg-white p-6 border-t-4 border-orange-500">
              <div className="text-3xl font-bold text-orange-500 mb-1">40–60 дней</div>
              <div className="font-semibold mb-2">Срок постройки</div>
              <p className="text-sm text-gray-500">Каркасная технология позволяет заселиться уже этим сезоном</p>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Планировка</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              На первом этаже расположена большая кухня-гостиная (<strong>28,52 м²</strong>) с прямым выходом на террасу —
              сердце дома, где собирается вся семья. Рядом — кабинет (<strong>5,04 м²</strong>), идеальный для работы из дома.
              Из прихожей удобный доступ к техническому помещению, постирочной и санузлу.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              На втором этаже — три спальни: главная (<strong>12,74 м²</strong>), спальня 2 (<strong>9,67 м²</strong>)
              и спальня 3 (<strong>9,70 м²</strong>). Все спальни объединены просторным холлом (<strong>6,25 м²</strong>).
              На этаже также находятся гардеробная, санузел с ванной и кладовая.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Высота потолков 2,7 м, большие окна обеспечивают естественное освещение. Терраса с деревянными
              перилами и навесом — отдельная зона отдыха на свежем воздухе.
            </p>
          </div>
        </div>
      </section>

      {/* Состав помещений */}
      <section className="py-14">
        <div className="container mx-auto px-6 md:px-12">
          <p className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3 text-center">Планировка</p>
          <h2 className="text-2xl md:text-3xl font-medium mb-10 text-center">Состав помещений</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-14">
            {/* Floor 1 rooms */}
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-orange-500 text-white text-xs font-bold flex items-center justify-center">1</span>
                Первый этаж
              </h3>
              <div className="space-y-2">
                {roomsFloor1.map((room) => (
                  <div key={room.name} className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-700 text-sm">{room.name}</span>
                    <span className="font-semibold text-sm text-[#1a0f0f] shrink-0 ml-4">{room.area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floor 2 rooms */}
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-[#1a0f0f] text-white text-xs font-bold flex items-center justify-center">2</span>
                Второй этаж
              </h3>
              <div className="space-y-2">
                {roomsFloor2.map((room) => (
                  <div key={room.name} className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-700 text-sm">{room.name}</span>
                    <span className="font-semibold text-sm text-[#1a0f0f] shrink-0 ml-4">{room.area}</span>
                  </div>
                ))}
                <div className="flex items-center justify-between py-3 border-t-2 border-[#1a0f0f]">
                  <span className="font-semibold">Итого (без террасы)</span>
                  <span className="font-bold text-orange-500">≈ 100 м²</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floor plans images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div>
              <img
                src="https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/d002b47c-8e76-4763-b259-8af450a38dae.jpg"
                alt="План первого этажа каркасного дома с террасой"
                className="w-full border border-gray-200"
              />
              <p className="text-xs text-gray-400 mt-2 text-center">Первый этаж</p>
            </div>
            <div>
              <img
                src="https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/e15ce637-3eaa-4120-8ba0-0b31941930ce.jpg"
                alt="План второго этажа каркасного дома с террасой"
                className="w-full border border-gray-200"
              />
              <p className="text-xs text-gray-400 mt-2 text-center">Второй этаж</p>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-3 text-center">
            Планировочное решение. Возможна корректировка под ваш участок.
          </p>
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
                src="https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/bf9301d1-b706-4dc6-bf48-c962d5ce86c7.png"
                alt="3D визуализация каркасного дома с террасой"
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
import { Check } from "lucide-react"

const roomsFloor1 = [
  { name: "Гостиная (второй свет)", area: "19,43 м²" },
  { name: "Кухня", area: "11,32 м²" },
  { name: "Кабинет", area: "11,32 м²" },
  { name: "Сауна", area: "3,31 м²" },
  { name: "С/У", area: "3,70 м²" },
  { name: "Тамбур", area: "5,49 м²" },
  { name: "Котельная", area: "2,71 м²" },
  { name: "Терраса", area: "32,08 м²" },
]

const roomsFloor2 = [
  { name: "Спальня 1 (мастер)", area: "12,14 м²" },
  { name: "Спальня 2", area: "11,24 м²" },
  { name: "Спальня 3", area: "10,12 м²" },
  { name: "Спальня 4", area: "— м²" },
  { name: "Холл", area: "5,51 м²" },
  { name: "С/У", area: "3,70 м²" },
  { name: "Балкон", area: "6,13 м²" },
]

const whyList = [
  "Каркасная технология — дом готов за 40–60 дней при хороших погодных условиях",
  "Тёмный планкен с деревянными акцентами — современный стиль без лишних затрат",
  "Второй свет в гостиной — ощущение пространства и воздуха",
  "Четыре спальни — хватит для всей большой семьи",
  "Собственная сауна прямо в доме — удобно в любое время года",
  "Терраса 32 м² с навесом — полноценная летняя гостиная",
  "Балкон второго этажа с видом на участок",
  "Работаем по договору с фиксированной ценой — без сюрпризов",
]

const included = [
  "Фундамент на винтовых сваях или ленточный",
  "Силовой каркас из камерной сушки",
  "Утепление минватой 200 мм + ветробарьер",
  "Кровля из металлочерепицы / гибкой черепицы",
  "Фасадная отделка (планкен тёмный + деревянные акценты)",
  "Терраса с настилом и навесом, балкон",
  "Окна ПВХ двойной стеклопакет, панорамное остекление",
  "Входная дверь металлическая утеплённая",
  "Внутренняя чистовая отделка под ключ",
  "Разводка электрики, водопровода, канализации, отопления",
]

export default function House193Details() {
  return (
    <>
      <section className="border-t border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {[
              { value: "193 м²", label: "Площадь дома", sub: "Два полноценных этажа с продуманной планировкой для большой семьи" },
              { value: "4 спальни", label: "Жилые комнаты", sub: "Три спальни на втором этаже и кабинет на первом — место для каждого" },
              { value: "40–60 дней", label: "Срок постройки", sub: "Каркасная технология — переедете в новый дом уже в этом году", orange: true },
            ].map((s) => (
              <div key={s.label} className="py-10 px-8">
                <p className={`text-4xl md:text-5xl font-medium mb-2 ${s.orange ? "text-orange-500" : ""}`}>
                  {s.value}
                </p>
                <p className="font-semibold mb-1">{s.label}</p>
                <p className="text-sm text-gray-500">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <p className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3">Планировка</p>
          <h2 className="text-2xl md:text-3xl font-medium mb-10">Поэтажный план</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16">
            <div>
              <h3 className="text-lg font-semibold mb-4">Первый этаж</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Центр первого этажа — <span className="text-orange-500 font-medium">гостиная с вторым светом (19,43 м²)</span>,
                которая визуально объединяет оба этажа и наполняет дом светом.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Рядом — <span className="text-orange-500 font-medium">кухня (11,32 м²)</span> с выходом в зону столовой
                и <span className="text-orange-500 font-medium">кабинет (11,32 м²)</span> — отдельное тихое рабочее пространство.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                В функциональной зоне: <span className="text-orange-500 font-medium">сауна (3,31 м²)</span>, санузел,
                тамбур и котельная. Из гостиной — прямой выход на{" "}
                <span className="text-orange-500 font-medium">террасу (32,08 м²)</span> с навесом и зоной отдыха.
              </p>
              <div className="bg-gray-50 p-6">
                <p className="text-sm font-semibold mb-4">Состав помещений · 1 этаж</p>
                <div className="space-y-2">
                  {roomsFloor1.map((r) => (
                    <div key={r.name} className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">{r.name}</span>
                      <span className="font-medium text-[#1a0f0f]">{r.area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/eefcab28-e932-4c98-9188-ad6f0b6fb60b.jpg"
                alt="План первого этажа дома 193 м²"
                className="w-full object-contain"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="order-2 lg:order-1">
              <img
                src="https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/f874f6dc-3b54-4389-8776-a5800a7a4d97.jpg"
                alt="План второго этажа дома 193 м²"
                className="w-full object-contain"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-lg font-semibold mb-4">Второй этаж</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                На втором этаже — три полноценные спальни:
                мастер-спальня <span className="text-orange-500 font-medium">(12,14 м²)</span>,
                вторая <span className="text-orange-500 font-medium">(11,24 м²)</span> и
                третья <span className="text-orange-500 font-medium">(10,12 м²)</span>.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Общий <span className="text-orange-500 font-medium">холл (5,51 м²)</span>, санузел и
                открытый <span className="text-orange-500 font-medium">балкон (6,13 м²)</span> с видом на
                участок и террасу первого этажа.
              </p>
              <div className="bg-gray-50 p-6">
                <p className="text-sm font-semibold mb-4">Состав помещений · 2 этаж</p>
                <div className="space-y-2">
                  {roomsFloor2.map((r) => (
                    <div key={r.name} className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">{r.name}</span>
                      <span className="font-medium text-[#1a0f0f]">{r.area}</span>
                    </div>
                  ))}
                  <div className="border-t border-gray-200 pt-2 flex items-center justify-between text-sm font-semibold">
                    <span>Итого</span>
                    <span className="text-orange-500">193 м²</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3">Преимущества</p>
              <h2 className="text-2xl md:text-3xl font-medium mb-6">Почему выбирают этот проект</h2>
              <ul className="space-y-3">
                {whyList.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                    <Check size={18} className="text-orange-500 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src="https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/03469584-99ad-43b9-8554-36f4adfe490c.jpg"
                alt="Усадьба «Тёмный бор» — вид с участка"
                className="w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3">Комплектация</p>
              <h2 className="text-2xl md:text-3xl font-medium mb-2">Что входит в стоимость</h2>
              <p className="text-gray-500 mb-8">Никаких скрытых доплат. Цена фиксируется в договоре до начала работ.</p>
              <ul className="space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                    <Check size={18} className="text-orange-500 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src="https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/45fc0cb8-7c4f-4522-b9ed-ca713f349c20.jpg"
                alt="Усадьба «Тёмный бор» — вид сзади"
                className="w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
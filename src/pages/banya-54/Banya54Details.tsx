import { Check } from "lucide-react"

const rooms = [
  { name: "Терраса с мангалом", area: "18,42 м²" },
  { name: "Комната отдыха", area: "15,85 м²" },
  { name: "Парная", area: "5,90 м²" },
  { name: "Моечная", area: "4,68 м²" },
  { name: "С/У", area: "1,31 м²" },
  { name: "Тамбур", area: "1,51 м²" },
]

const whyList = [
  "Крытая терраса 18 м² с кирпичным мангалом — баня и шашлык в одном месте",
  "Тёплый красно-кирпичный фасад — баня выглядит как настоящий деревенский шедевр",
  "Парная 5,90 м² — классический банный жар с дровяной печью",
  "Просторная комната отдыха 15 м² — места хватит на всю компанию",
  "Каркасная технология — баня готова за 60–90 дней",
  "Утепление 200 мм минваты — быстро прогревается, долго держит тепло",
  "Отдельная моечная и санузел — удобно и гигиенично",
  "Фиксированная цена в договоре — никаких доплат по ходу стройки",
]

const included = [
  "Фундамент на винтовых сваях или ленточный",
  "Силовой каркас из камерной сушки",
  "Утепление минватой 200 мм + ветробарьер",
  "Кровля из металлочерепицы",
  "Фасадная отделка — имитация бруса тёмно-красная + белые наличники",
  "Крытая терраса с настилом и кирпичным мангалом",
  "Окна ПВХ двойной стеклопакет",
  "Входная дверь металлическая утеплённая",
  "Внутренняя отделка парной вагонкой из липы или осины",
  "Полки, полог, печь (по выбору заказчика)",
  "Разводка электрики, водопровода, канализации",
]

export default function Banya54Details() {
  return (
    <>
      <section className="border-t border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {[
              { value: "54 м²", label: "Площадь бани", sub: "Парная, моечная, комната отдыха и огромная терраса с мангалом" },
              { value: "18,42 м²", label: "Терраса с мангалом", sub: "Крытая — банный день не зависит от погоды" },
              { value: "60 дней", label: "Срок постройки", sub: "Каркасная технология — первый пар уже этим летом", orange: true },
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
          <h2 className="text-2xl md:text-3xl font-medium mb-10">План этажа</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Сердце бани — <span className="text-orange-500 font-medium">крытая терраса с мангалом (18,42 м²)</span> —
                вынесена вперёд и занимает почти треть всей площади. Здесь можно посидеть компанией,
                пожарить шашлык и остыть после парной в любую погоду.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Внутри: <span className="text-orange-500 font-medium">комната отдыха (15,85 м²)</span> —
                тёплое место с диваном и столом, откуда прямой выход на террасу.
                Рядом — <span className="text-orange-500 font-medium">парная (5,90 м²)</span> с
                полноценным полком и печью.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Отдельная <span className="text-orange-500 font-medium">моечная (4,68 м²)</span> и
                санузел (1,31 м²) — удобство и гигиена. Тамбур на входе защищает тепло зимой.
              </p>
              <div className="bg-gray-50 p-6">
                <p className="text-sm font-semibold mb-4">Ведомость помещений</p>
                <div className="space-y-2">
                  {rooms.map((r) => (
                    <div key={r.name} className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">{r.name}</span>
                      <span className="font-medium text-[#1a0f0f]">{r.area}</span>
                    </div>
                  ))}
                  <div className="border-t border-gray-200 pt-2 flex items-center justify-between text-sm font-semibold">
                    <span>Итого</span>
                    <span className="text-orange-500">47,68 м²</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/70d32287-babb-4e44-98b9-d605aed274c3.jpg"
                alt="План этажа бани «Рябина» 54 м²"
                className="w-full object-contain"
              />
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
                src="https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/59efaeea-c797-477f-a056-d96cb5373df3.jpg"
                alt="Баня «Рябина» — боковой фасад"
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
              <p className="text-gray-500 mb-8">Цена фиксируется в договоре до начала работ. Никаких скрытых доплат.</p>
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
                src="https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/648bc39b-0fb1-4d1b-b56b-1065feb9e5ef.jpg"
                alt="Баня «Рябина» — фасад с террасой"
                className="w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

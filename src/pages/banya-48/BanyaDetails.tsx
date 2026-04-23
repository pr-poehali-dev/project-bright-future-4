import { Check } from "lucide-react"

const rooms = [
  { name: "Парилка", area: "8,04 м²" },
  { name: "Душевая", area: "6,58 м²" },
  { name: "Раздевалка", area: "2,82 м²" },
  { name: "С/У", area: "1,71 м²" },
  { name: "Комната отдыха", area: "13,47 м²" },
  { name: "Терраса", area: "7,52 м²" },
]

const whyList = [
  "Каркасная технология — баня готова за 40–60 дней при хороших погодных условиях",
  "Тёплые стены 200 мм минваты — баня быстро прогревается и держит тепло",
  "Натуральный планкен с тёмными акцентами — современный стильный фасад",
  "Полноценная парилка 8 м² с печью — классический банный жар",
  "Угловая ванна и душевая — максимум комфорта после пара",
  "Просторная комната отдыха 13 м² — место для компании и посиделок",
  "Терраса с настилом — продолжение отдыха на свежем воздухе",
  "Работаем по договору с фиксированной ценой — без сюрпризов",
]

const included = [
  "Фундамент на винтовых сваях или ленточный",
  "Силовой каркас из камерной сушки",
  "Утепление минватой 200 мм + ветробарьер",
  "Кровля из металлочерепицы / профлиста",
  "Фасадная отделка (планкен натуральный с тёмными акцентами)",
  "Терраса с настилом из доски",
  "Окна ПВХ двойной стеклопакет",
  "Входная дверь металлическая утеплённая",
  "Внутренняя отделка парилки вагонкой из липы или осины",
  "Разводка электрики, водопровода, канализации",
]

export default function BanyaDetails() {
  return (
    <>
      <section className="border-t border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {[
              { value: "48 м²", label: "Площадь бани", sub: "Продуманная планировка с парилкой, душевой и комнатой отдыха" },
              { value: "7,52 м²", label: "Терраса", sub: "Открытая терраса с деревянным настилом для отдыха на свежем воздухе" },
              { value: "40–60 дней", label: "Срок постройки", sub: "Каркасная технология позволяет запустить баню уже в этом сезоне", orange: true },
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3">Планировка</p>
              <h2 className="text-2xl md:text-3xl font-medium mb-6">Поэтажный план</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                В левой части бани расположена{" "}
                <span className="text-orange-500 font-medium">парилка (8,04 м²)</span> с кирпичной печью —
                просторная, с полноценными полками для 3–4 человек.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Рядом — <span className="text-orange-500 font-medium">душевая (6,58 м²)</span> с угловой ванной
                и отдельная{" "}
                <span className="text-orange-500 font-medium">раздевалка (2,82 м²)</span> с санузлом (1,71 м²).
                Все банные зоны компактно сгруппированы и удобно связаны между собой.
              </p>
              <p className="text-gray-600 leading-relaxed">
                В правой части — уютная{" "}
                <span className="text-orange-500 font-medium">комната отдыха (13,47 м²)</span> с мягкой мебелью
                и выходом на{" "}
                <span className="text-orange-500 font-medium">террасу (7,52 м²)</span> с деревянным настилом.
              </p>
            </div>

            <div>
              <img
                src="https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/b93f8806-b2bb-4768-b3ec-eef076cf43dd.jpg"
                alt="План помещений бани 48 м²"
                className="w-full object-contain mb-6"
              />
              <div className="bg-gray-50 p-6">
                <p className="text-sm font-semibold mb-4">Состав помещений</p>
                <div className="space-y-2">
                  {rooms.map((r) => (
                    <div key={r.name} className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">{r.name}</span>
                      <span className="font-medium text-[#1a0f0f]">{r.area}</span>
                    </div>
                  ))}
                  <div className="border-t border-gray-200 pt-2 flex items-center justify-between text-sm font-semibold">
                    <span>Итого</span>
                    <span className="text-orange-500">48 м²</span>
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
                src="https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/eb6d3fe2-b926-4754-b19d-902e64b0b437.jpg"
                alt="Каркасная баня 48 м² — вид с участка"
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
                src="https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/44c61d2e-57e1-4905-b935-87d86e799e8f.jpg"
                alt="Каркасная баня 48 м² — вид сзади"
                className="w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
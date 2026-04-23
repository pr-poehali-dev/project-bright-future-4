import { Check } from "lucide-react"

const rooms = [
  { name: "Спальня", area: "7,68 м²" },
  { name: "Кухня-гостиная", area: "17,77 м²" },
  { name: "С/У", area: "4,38 м²" },
  { name: "Терраса", area: "17,97 м²" },
]

const whyList = [
  "Каркасная технология — дача готова за 40–60 дней при хороших погодных условиях",
  "Тёплые стены 200 мм минваты — комфорт с весны до поздней осени",
  "Натуральный планкен с тёмными акцентами — современный стильный фасад",
  "Панорамные окна в пол — максимум света и ощущение природы внутри",
  "Просторная терраса 17,97 м² — летняя гостиная под открытым небом",
  "Кухня-гостиная 17,77 м² — удобное пространство для всей семьи",
  "Отдельная спальня с гардеробом — уединение и полноценный отдых",
  "Работаем по договору с фиксированной ценой — без сюрпризов",
]

const included = [
  "Фундамент на винтовых сваях или ленточный",
  "Силовой каркас из камерной сушки",
  "Утепление минватой 200 мм + ветробарьер",
  "Кровля из металлочерепицы / профлиста",
  "Фасадная отделка (планкен натуральный с тёмными акцентами)",
  "Терраса с настилом из доски",
  "Окна ПВХ двойной стеклопакет, панорамное остекление",
  "Входная дверь металлическая утеплённая",
  "Внутренняя чистовая отделка под ключ",
  "Разводка электрики, водопровода, канализации",
]

export default function DachaDetails() {
  return (
    <>
      <section className="border-t border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {[
              { value: "54 м²", label: "Площадь дачи", sub: "Продуманная планировка со спальней, кухней-гостиной, санузлом и террасой" },
              { value: "17,97 м²", label: "Терраса", sub: "Просторная открытая терраса с деревянным настилом для отдыха на свежем воздухе" },
              { value: "40–60 дней", label: "Срок постройки", sub: "Каркасная технология позволяет заехать в дачу уже в этом сезоне", orange: true },
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
                В задней части дома расположена{" "}
                <span className="text-orange-500 font-medium">спальня (7,68 м²)</span> с гардеробной зоной —
                тихое, уютное место для полноценного ночного отдыха.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Рядом — компактный{" "}
                <span className="text-orange-500 font-medium">санузел (4,38 м²)</span> со всем необходимым:
                душевой кабиной, унитазом и раковиной.
              </p>
              <p className="text-gray-600 leading-relaxed">
                В центре планировки — открытая{" "}
                <span className="text-orange-500 font-medium">кухня-гостиная (17,77 м²)</span> с панорамными
                окнами в пол и прямым выходом на{" "}
                <span className="text-orange-500 font-medium">террасу (17,97 м²)</span> — просторное место
                для семейного досуга и посиделок на природе.
              </p>
            </div>

            <div>
              <img
                src="https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/b5ae438b-ca9b-4807-a18f-663abcaa0313.jpg"
                alt="План помещений дачи 54 м²"
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
                    <span className="text-orange-500">54 м²</span>
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
                src="https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/37793eb2-d296-4c67-83ba-bec8889712e2.jpg"
                alt="Каркасная дача 54 м² — вид с участка"
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
                src="https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/7eb3359f-9fbc-4d94-b697-6cc652f0f8ce.jpg"
                alt="Каркасная дача 54 м² — вид сзади"
                className="w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
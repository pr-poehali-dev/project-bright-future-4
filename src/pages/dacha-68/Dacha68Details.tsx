import { Check } from "lucide-react"

const rooms = [
  { name: "Комната отдыха", area: "13,41 м²" },
  { name: "Парная", area: "5,65 м²" },
  { name: "С/У", area: "3,76 м²" },
  { name: "Туалет", area: "1,32 м²" },
  { name: "Терраса (главная)", area: "14,84 м²" },
  { name: "Терраса (вход)", area: "5,00 м²" },
]

const whyList = [
  "Каркасная технология — баня готова за 90–120 дней",
  "Тёплые стены 200 мм минваты, минимальный расход тепла",
  "Натуральный планкен — стильный фасад без лишнего ухода",
  "Парная прямо в бане — удобство для всей семьи",
  "Две террасы общей площадью почти 20 м² — летняя жизнь на природе",
  "Панорамное остекление — максимум света и вид на участок",
  "Работаем по договору с фиксированной ценой — без сюрпризов",
  "Гарантия на каркас 5 лет, на кровлю 3 года",
]

const included = [
  "Фундамент на винтовых сваях или ленточный",
  "Силовой каркас из камерной сушки",
  "Утепление минватой 200 мм + ветробарьер",
  "Кровля из металлочерепицы / профлиста",
  "Фасадная отделка (планкен натуральный)",
  "Две террасы с настилом из доски",
  "Окна ПВХ двойной стеклопакет, панорамное остекление",
  "Входная дверь металлическая утеплённая",
  "Черновая внутренняя отделка (ГКЛ / ОСБ)",
  "Разводка электрики, водопровода, канализации",
]

export default function Dacha68Details() {
  return (
    <>
      <section className="border-t border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {[
              { value: "68 м²", label: "Площадь бани", sub: "Одноэтажная баня с продуманной планировкой" },
              { value: "19,84 м²", label: "Две террасы", sub: "Главная открытая терраса и входное крыльцо" },
              { value: "120 дней", label: "Срок постройки", sub: "Каркасная технология позволяет заселиться уже этим сезоном", orange: true },
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
                В центре планировки — просторная{" "}
                <span className="text-orange-500 font-medium">комната отдыха (13,41 м²)</span> с выходом
                на{" "}
                <span className="text-orange-500 font-medium">главную террасу (14,84 м²)</span>.
                Большие панорамные окна обеспечивают максимальное освещение и вид на участок.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                В банном крыле расположена{" "}
                <span className="text-orange-500 font-medium">парная (5,65 м²)</span>,
                санузел (3,76 м²) и туалет (1,32 м²) — всё компактно и продуманно.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Со стороны входа — <span className="text-orange-500 font-medium">терраса-крыльцо (5,00 м²)</span>.
                Высота потолков 2,8 м, высокий конёк кровли создаёт ощущение простора внутри.
              </p>
            </div>

            <div>
              <img
                src="https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/9c110775-6519-4a00-8824-951d16babb5a.jpg"
                alt="План первого этажа Баня «Горизонт» 68"
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
                    <span className="text-orange-500">68 м²</span>
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
                src="https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/7c9c495f-ea33-449f-a092-c6c441b285cb.jpg"
                alt="Каркасная баня «Горизонт» 68 — вид с участка"
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
                src="https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/9910a57e-e9a3-486f-8cd0-550ccb2c11b1.jpg"
                alt="Каркасная баня «Горизонт» 68 — вид сзади"
                className="w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
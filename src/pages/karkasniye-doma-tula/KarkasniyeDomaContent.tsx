import { Check } from "lucide-react"

const advantages = [
  { title: "Строим с 2015 года", desc: "Более 200 построенных объектов в Туле и Тульской области" },
  { title: "Фиксированная цена", desc: "Стоимость прописывается в договоре и не меняется в процессе стройки" },
  { title: "Готов за 90–120 дней", desc: "Каркасная технология позволяет заселиться уже в этом сезоне" },
  { title: "Собственная бригада", desc: "Работаем без субподрядчиков — контролируем каждый этап сами" },
  { title: "Гарантия 5 лет", desc: "На каркас и несущие конструкции. Кровля — 3 года" },
  { title: "Бесплатный выезд", desc: "Замер и консультация специалиста на вашем участке — бесплатно" },
]

const houseTypes = [
  {
    title: "Каркасный дом до 100 м²",
    price: "от 2 800 000 ₽",
    desc: "Одноэтажный или мансардный дом для семьи из 3–4 человек. 2–3 спальни, санузел, кухня-гостиная.",
    image: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/eefe6c97-35f2-4174-8455-5490e23dec07.png",
  },
  {
    title: "Каркасный дом 100–150 м²",
    price: "от 3 900 000 ₽",
    desc: "Двухэтажный дом с террасой для семьи из 4–5 человек. 3 спальни, 2 санузла, кабинет.",
    image: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/bf9301d1-b706-4dc6-bf48-c962d5ce86c7.png",
  },
  {
    title: "Каркасный дом от 150 м²",
    price: "от 5 200 000 ₽",
    desc: "Просторный дом для большой семьи. Индивидуальный проект, любая планировка.",
    image: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/9e66a153-da16-44d0-826b-d98c881b7c69.jpg",
  },
]

const process = [
  { num: "01", title: "Заявка и консультация", desc: "Звоните или оставляете заявку — в тот же день перезваниваем и обсуждаем детали" },
  { num: "02", title: "Выезд на участок", desc: "Специалист приезжает бесплатно, оценивает участок и предлагает оптимальный проект" },
  { num: "03", title: "Договор и проект", desc: "Фиксируем стоимость, сроки и планировку в договоре. Никаких сюрпризов." },
  { num: "04", title: "Строительство", desc: "Наша бригада работает 6 дней в неделю. Вы следите за прогрессом онлайн или лично" },
  { num: "05", title: "Сдача под ключ", desc: "Принимаете дом по акту. Передаём все документы и гарантийные обязательства" },
]

const projects = [
  {
    title: "Каркасный дом с террасой 10×10",
    area: "100 м²",
    location: "Тульская область",
    image: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/eefe6c97-35f2-4174-8455-5490e23dec07.png",
    link: "/projects/house-frame-terrace",
  },
  {
    title: "Каркасный дом 9×9",
    area: "81 м²",
    location: "Тульская область",
    image: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/602f1d91-8439-4cd5-ba13-8b5596547ac5.jpg",
    link: "/#projects",
  },
  {
    title: "Одноэтажный дом с верандой",
    area: "90 м²",
    location: "Тульская область",
    image: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/1a7ebd95-de31-4fc9-a7f2-9cfb0dfe977d.jpg",
    link: "/#projects",
  },
]

export default function KarkasniyeDomaContent() {
  return (
    <>
      {/* Преимущества */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <p className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3">Почему выбирают нас</p>
            <h2 className="text-3xl md:text-4xl font-medium">TOYSTROY — строительная компания в Туле</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((adv) => (
              <div key={adv.title} className="bg-white p-6 border-l-4 border-orange-500">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={13} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-[#1a0f0f]">{adv.title}</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed pl-9">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Типы домов */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <p className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3">Варианты домов</p>
            <h2 className="text-3xl md:text-4xl font-medium">Каркасные дома в Туле — цены</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">Выберите подходящий вариант или закажите индивидуальный проект под ваш участок</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {houseTypes.map((house) => (
              <div key={house.title} className="group">
                <div className="overflow-hidden aspect-[4/3] mb-5">
                  <img
                    src={house.image}
                    alt={house.title + " в Туле"}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{house.title}</h3>
                <p className="text-orange-500 font-bold text-lg mb-3">{house.price}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{house.desc}</p>
                <a
                  href="#order"
                  className="inline-block border border-[#1a0f0f] text-[#1a0f0f] hover:bg-[#1a0f0f] hover:text-white text-sm font-medium px-5 py-2.5 transition-colors"
                >
                  Получить расчёт
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Наши работы */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <p className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3">Портфолио</p>
            <h2 className="text-3xl md:text-4xl font-medium">Построенные дома в Тульской области</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <a key={p.title} href={p.link} className="group block">
                <div className="overflow-hidden aspect-[4/3] mb-4">
                  <img
                    src={p.image}
                    alt={p.title + " — " + p.location}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-semibold mb-1">{p.title}</h3>
                <p className="text-sm text-gray-500">{p.area} · {p.location}</p>
              </a>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="/#projects"
              className="inline-block border-2 border-[#1a0f0f] text-[#1a0f0f] hover:bg-[#1a0f0f] hover:text-white font-semibold px-8 py-3 transition-colors"
            >
              Смотреть все работы
            </a>
          </div>
        </div>
      </section>

      {/* Процесс */}
      <section className="py-16 bg-[#1a0f0f] text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <p className="text-orange-400 text-sm font-bold tracking-widest uppercase mb-3">Как мы работаем</p>
            <h2 className="text-3xl md:text-4xl font-medium">От заявки до готового дома</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {process.map((step, i) => (
              <div key={step.num} className="relative">
                <div className="text-orange-400 font-bold text-2xl mb-3">{step.num}</div>
                <h3 className="font-semibold mb-2 text-white">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                {i < process.length - 1 && (
                  <div className="hidden md:block absolute top-3 right-0 w-px h-full border-r border-white/10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

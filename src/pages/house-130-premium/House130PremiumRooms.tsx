const rooms = [
  {
    name: "Кухня-гостиная",
    area: "50,5 м²",
    img: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/342dcc4f-cde0-4a3d-bd42-5aff83af57f5.jpg",
    description: "Просторное общественное пространство с панорамными окнами на террасу. Современная кухня с островом, мягкая зона с диваном и ТВ. Высота потолков 2,7 м.",
  },
  {
    name: "Мастер-спальня",
    area: "10,9 м²",
    img: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/6ff183db-49ca-43b2-843c-f1567963f505.jpg",
    description: "Главная спальня с отдельной гардеробной 2,3 м² и своим санузлом 2,6 м². Большая двуспальная кровать, окно в сад.",
  },
  {
    name: "Спальня",
    area: "11,1 м²",
    img: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/15c8fe41-b614-4b6a-98df-c01397fa4a64.jpg",
    description: "Светлая спальня с рабочим местом. Окно выходит на основной фасад. Достаточно места для двуспальной кровати и шкафа.",
  },
  {
    name: "Спальня",
    area: "9,9 м²",
    img: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/99f43b09-0e7d-4c5a-a8fd-976f830d9da8.jpg",
    description: "Уютная гостевая или детская спальня с большим окном и удобной планировкой. Светлые отделочные материалы.",
  },
  {
    name: "Сауна",
    area: "4,6 м²",
    img: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/9a0575d7-745d-44e8-8a28-56c0fbd60035.jpg",
    description: "Встроенная финская сауна с натуральной липовой вагонкой, двухуровневыми полками и каменкой. Рядом — душевая 4,4 м².",
  },
  {
    name: "Санузел",
    area: "2,6 м²",
    img: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/79c307e4-4aa7-47f1-a3be-8114fe442a72.jpg",
    description: "Современный санузел с душевой кабиной, подвесным унитазом, тумбой с раковиной и зеркалом с подсветкой. Тёплый пол.",
  },
  {
    name: "Терраса",
    area: "16,2 м²",
    img: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/35fce8e3-a9ab-4cb3-b009-5fbd9b9d3c26.jpg",
    description: "Открытая терраса с деревянным настилом, балюстрадой и крышей. Прямой выход из кухни-гостиной через панорамные двери.",
  },
  {
    name: "Бойлерная + гардеробная",
    area: "6,3 + 3,5 м²",
    img: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/1fdf1805-e1b6-4a29-8ca9-06a9b20b1d61.png",
    description: "Отдельная техническая комната под котёл и системы коммуникаций. Дополнительная общая гардеробная для хранения сезонных вещей.",
  },
]

export default function House130PremiumRooms() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <p className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3">Планировка</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-3">
            8 функциональных зон
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Продуманная планировка для семьи с детьми: три спальни, общая кухня-гостиная, своя сауна и две ванные комнаты.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rooms.map((room, i) => (
            <div key={i} className="bg-gray-50 overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={room.img}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="flex items-baseline justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-[#1a0f0f]">{room.name}</h3>
                  <span className="text-orange-500 text-sm font-medium shrink-0">{room.area}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{room.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
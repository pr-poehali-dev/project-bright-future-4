const rooms = [
  {
    name: "Кухня-гостиная (второй свет)",
    area: "50,5 м²",
    img: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/b6483cbd-5e6f-4462-9929-3f967daef9d6.jpg",
    description: "Просторное пространство со вторым светом — сводчатый потолок с деревянными балками и панорамным остеклением до конька крыши. Кухня с островом, обеденная зона, мягкая гостиная.",
  },
  {
    name: "Мастер-спальня",
    area: "10,9 м²",
    img: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/0f293ac3-2b0c-4d86-bd17-7941be0d6de5.jpg",
    description: "Главная спальня с отдельной гардеробной 2,3 м² и своим санузлом 2,6 м². Большая двуспальная кровать, окно с антрацитовым профилем.",
  },
  {
    name: "Спальня",
    area: "11,1 м²",
    img: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/e2398154-98c9-4e64-83f4-3f8374be2a5f.jpg",
    description: "Светлая спальня с большим окном и удобной планировкой. Достаточно места для двуспальной кровати и шкафа.",
  },
  {
    name: "Спальня",
    area: "9,9 м²",
    img: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/d2108b23-6d11-4a78-abd3-745e3ddfe409.jpg",
    description: "Уютная гостевая или детская спальня с большим окном и удобной планировкой. Светлые отделочные материалы.",
  },
  {
    name: "Сауна",
    area: "4,6 м²",
    img: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/67eaf59b-6a1d-4ea4-ad92-911d81d0bd46.jpg",
    description: "Встроенная финская сауна с натуральной липовой вагонкой, двухуровневыми полками и каменкой. Рядом — душевая 4,4 м².",
  },
  {
    name: "Санузел",
    area: "2,6 м²",
    img: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/c1129423-3bfa-482a-b928-a13e145f914d.jpg",
    description: "Современный санузел с душевой, подвесным унитазом, тумбой с раковиной и зеркалом с подсветкой. Светло-серая плитка.",
  },
  {
    name: "Терраса",
    area: "16,2 м²",
    img: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/de416346-f043-49b0-9253-e08b4fa80f67.jpg",
    description: "Открытая терраса 20 м² с деревянным настилом и крышей. Прямой выход из кухни-гостиной через панорамные двери второго света.",
  },
  {
    name: "Фасад / Второй свет",
    area: "13×10 м",
    img: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/44676584-71e2-42fd-8de2-735cb2426b53.jpg",
    description: "Одноэтажный дом с высокой частью крыши над кухней-гостиной — внутри второй свет. Антрацитовые окна, имитация бруса, серая металлочерепица, винтовые сваи.",
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
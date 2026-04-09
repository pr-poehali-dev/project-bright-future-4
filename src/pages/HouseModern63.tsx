import { useState } from "react";
import Icon from "@/components/ui/icon";

const images = [
  {
    url: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/9099bc73-d7a5-4e17-a095-8bf684e1908b.png",
    alt: "Вид сзади",
  },
  {
    url: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/0b3d57e1-3728-431a-9233-370f9d069812.png",
    alt: "Вид спереди — вечер",
  },
  {
    url: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/66ad165b-475e-40c1-adc5-cf00f3f6bc2a.png",
    alt: "Вид спереди — день",
  },
  {
    url: "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/eadb218e-bc8b-4b39-9edd-bf933b846228.png",
    alt: "Вид сбоку",
  },
];

const rooms = [
  { name: "Кухня-Гостиная", area: "22,57", color: "#d4a574", icon: "UtensilsCrossed" },
  { name: "Спальня 1", area: "8,21", color: "#a89080", icon: "BedDouble" },
  { name: "Спальня 2", area: "9,97", color: "#8a7a6a", icon: "BedDouble" },
  { name: "Холл", area: "5,13", color: "#b8a898", icon: "DoorOpen" },
  { name: "С/у", area: "4,16", color: "#7a9a9a", icon: "Droplets" },
  { name: "Сауна", area: "3,10", color: "#c49060", icon: "Flame" },
  { name: "Тамбур", area: "4,88", color: "#9a8878", icon: "LogIn" },
  { name: "Терраса", area: "13,13", color: "#6b8a6b", icon: "Trees" },
  { name: "Крыльцо", area: "2,81", color: "#8a9a7a", icon: "Home" },
];

const specs = [
  { label: "Общая площадь", value: "73,96 м²" },
  { label: "Площадь дома", value: "60,83 м²" },
  { label: "Терраса", value: "13,13 м²" },
  { label: "Размер по осям", value: "12×6 м" },
  { label: "Высота потолков", value: "2,8 м" },
  { label: "Технология", value: "Каркасный дом" },
  { label: "Кровля", value: "Металлочерепица" },
  { label: "Фасад", value: "Планкен / Термодерево" },
];

export default function HouseModern63() {
  const [activeImage, setActiveImage] = useState(0);
  const [form, setForm] = useState({ name: "", phone: "", comment: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-[#f5f2ee] text-[#1a1614] font-['Montserrat',sans-serif]">
      {/* Header */}
      <header className="bg-[#1a1614] text-white py-4 px-6 sticky top-0 z-50 shadow-lg">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <span className="text-[#c49060] font-['Rubik',sans-serif] font-bold text-lg tracking-widest uppercase">Каркасный дом</span>
            <span className="text-white/60 ml-3 text-sm">«Модерн 63»</span>
          </div>
          <a
            href="tel:+7"
            className="bg-[#c49060] text-white px-5 py-2 text-sm font-semibold hover:bg-[#b07d50] transition-colors"
          >
            Позвонить
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-6 pt-12 pb-6">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Gallery */}
            <div>
              <div className="relative overflow-hidden bg-black" style={{ aspectRatio: "16/9" }}>
                <img
                  src={images[activeImage].url}
                  alt={images[activeImage].alt}
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
                <div className="absolute top-3 left-3 bg-black/60 text-white text-xs px-3 py-1">
                  {images[activeImage].alt}
                </div>
              </div>
              <div className="grid grid-cols-4 gap-2 mt-2">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`overflow-hidden border-2 transition-all ${
                      activeImage === i ? "border-[#c49060]" : "border-transparent opacity-60 hover:opacity-90"
                    }`}
                  >
                    <img src={img.url} alt={img.alt} className="w-full h-16 object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Info */}
            <div>
              <div className="inline-block bg-[#c49060] text-white text-xs font-bold px-3 py-1 mb-4 tracking-widest uppercase">
                Готовый проект
              </div>
              <h1 className="font-['Rubik',sans-serif] text-3xl lg:text-4xl font-bold text-[#1a1614] mb-2 leading-tight">
                Каркасный дом<br /><span className="text-[#c49060]">«Модерн 63»</span>
              </h1>
              <p className="text-[#5a5250] mb-6 text-sm leading-relaxed">
                Одноэтажный дом в современном стиле с тёмным планкеном и акцентами из термодерева. 
                2 спальни, сауна, просторная кухня-гостиная и терраса 13 м².
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { icon: "Maximize", label: "Площадь", value: "73,96 м²" },
                  { icon: "BedDouble", label: "Спальни", value: "2 комнаты" },
                  { icon: "Flame", label: "Сауна", value: "3,10 м²" },
                  { icon: "Trees", label: "Терраса", value: "13,13 м²" },
                ].map((item) => (
                  <div key={item.label} className="bg-white border border-[#e0d8d0] p-3 flex items-center gap-3">
                    <div className="w-9 h-9 bg-[#f5f2ee] flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} size={18} className="text-[#c49060]" />
                    </div>
                    <div>
                      <div className="text-xs text-[#8a7a6a]">{item.label}</div>
                      <div className="font-bold text-sm">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-[#1a1614] text-white p-5 mb-4">
                <div className="text-[#c49060] text-xs uppercase tracking-widest mb-1">Стоимость под ключ</div>
                <div className="font-['Rubik',sans-serif] text-3xl font-bold">от 4 200 000 ₽</div>
                <div className="text-white/50 text-xs mt-1">Включая фундамент, инженерию и отделку</div>
              </div>

              <a
                href="#contact"
                className="block w-full text-center bg-[#c49060] text-white py-3 font-semibold hover:bg-[#b07d50] transition-colors"
              >
                Получить расчёт стоимости
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Floor plan */}
      <section className="bg-white py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-[#c49060] text-xs uppercase tracking-widest mb-2">Планировка</div>
            <h2 className="font-['Rubik',sans-serif] text-2xl lg:text-3xl font-bold">Поэтажный план</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/c9f75895-4ede-4d44-a22b-76235bb1552b.png"
                alt="Планировка дома Модерн 63"
                className="w-full object-contain"
              />
            </div>
            <div>
              <div className="grid grid-cols-1 gap-2">
                {rooms.map((room) => (
                  <div key={room.name} className="flex items-center gap-3 py-2.5 border-b border-[#f0ece6]">
                    <div className="w-3 h-3 flex-shrink-0 rounded-sm" style={{ backgroundColor: room.color }} />
                    <span className="flex-1 text-sm text-[#2a2220]">{room.name}</span>
                    <span className="font-bold text-sm text-[#1a1614]">{room.area} м²</span>
                  </div>
                ))}
                <div className="flex items-center gap-3 py-2.5 mt-1">
                  <div className="w-3 h-3 flex-shrink-0 rounded-sm bg-[#1a1614]" />
                  <span className="flex-1 text-sm font-bold">Итого</span>
                  <span className="font-bold text-[#c49060]">73,96 м²</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="py-14 px-6 bg-[#f5f2ee]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-[#c49060] text-xs uppercase tracking-widest mb-2">Характеристики</div>
            <h2 className="font-['Rubik',sans-serif] text-2xl lg:text-3xl font-bold">Технические данные</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {specs.map((s) => (
              <div key={s.label} className="bg-white border border-[#e0d8d0] p-4">
                <div className="text-xs text-[#8a7a6a] mb-1">{s.label}</div>
                <div className="font-bold text-sm">{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[#1a1614] text-white py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-[#c49060] text-xs uppercase tracking-widest mb-2">Преимущества</div>
            <h2 className="font-['Rubik',sans-serif] text-2xl lg:text-3xl font-bold">Почему выбирают нас</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "ShieldCheck", title: "Гарантия 5 лет", desc: "На конструктив дома и все инженерные системы" },
              { icon: "Clock", title: "Срок от 3 месяцев", desc: "Строим быстро без ущерба качеству" },
              { icon: "FileText", title: "Договор и смета", desc: "Фиксированная цена без неожиданных доплат" },
              { icon: "Hammer", title: "Под ключ", desc: "Фундамент, стены, кровля, инженерия, отделка" },
              { icon: "MapPin", title: "Тульская область", desc: "Работаем в Туле и области, выезжаем на участок" },
              { icon: "Headphones", title: "Поддержка", desc: "Ведём клиента на каждом этапе строительства" },
            ].map((b) => (
              <div key={b.title} className="border border-white/10 p-5 hover:border-[#c49060]/60 transition-colors">
                <Icon name={b.icon} size={28} className="text-[#c49060] mb-3" />
                <div className="font-bold mb-1">{b.title}</div>
                <div className="text-white/60 text-sm">{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section id="contact" className="py-14 px-6 bg-white">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-[#c49060] text-xs uppercase tracking-widest mb-2">Связаться</div>
            <h2 className="font-['Rubik',sans-serif] text-2xl lg:text-3xl font-bold">Получить расчёт</h2>
            <p className="text-[#5a5250] text-sm mt-2">Оставьте заявку — перезвоним в течение 30 минут</p>
          </div>

          {sent ? (
            <div className="bg-[#f5f2ee] border border-[#c49060]/40 p-8 text-center">
              <Icon name="CheckCircle" size={48} className="text-[#c49060] mx-auto mb-3" />
              <div className="font-bold text-lg mb-1">Заявка принята!</div>
              <div className="text-[#5a5250] text-sm">Мы свяжемся с вами в ближайшее время</div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs text-[#5a5250] mb-1 uppercase tracking-wide">Ваше имя</label>
                <input
                  type="text"
                  required
                  placeholder="Иван Иванов"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-[#e0d8d0] bg-[#f9f7f5] px-4 py-3 text-sm outline-none focus:border-[#c49060] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs text-[#5a5250] mb-1 uppercase tracking-wide">Телефон</label>
                <input
                  type="tel"
                  required
                  placeholder="+7 (___) ___-__-__"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full border border-[#e0d8d0] bg-[#f9f7f5] px-4 py-3 text-sm outline-none focus:border-[#c49060] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs text-[#5a5250] mb-1 uppercase tracking-wide">Комментарий</label>
                <textarea
                  rows={3}
                  placeholder="Укажите площадь участка, пожелания..."
                  value={form.comment}
                  onChange={(e) => setForm({ ...form, comment: e.target.value })}
                  className="w-full border border-[#e0d8d0] bg-[#f9f7f5] px-4 py-3 text-sm outline-none focus:border-[#c49060] transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#c49060] text-white py-3.5 font-semibold hover:bg-[#b07d50] transition-colors text-sm uppercase tracking-wider"
              >
                Отправить заявку
              </button>
              <p className="text-center text-xs text-[#8a7a6a]">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1614] text-white/50 py-6 px-6 text-center text-xs">
        © 2026 Каркасный дом «Модерн 63» · Тульская область
      </footer>
    </div>
  );
}
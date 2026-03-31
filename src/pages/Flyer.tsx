import { QRCodeSVG } from "qrcode.react";

export default function Flyer() {
  return (
    <div className="min-h-screen bg-white">
      {/* Кнопка печати — не печатается */}
      <div className="print:hidden fixed top-4 right-4 z-50 flex gap-2">
        <button
          onClick={() => window.print()}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded shadow-lg text-sm"
        >
          🖨️ Распечатать
        </button>
      </div>

      {/* Листовка */}
      <div className="max-w-[297mm] mx-auto px-4 py-10 text-black font-sans">

        {/* Шапка */}
        <div className="border-4 border-orange-500 mb-6 text-center relative overflow-hidden" style={{minHeight: 160}}>
          <img
            src="https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/fb966810-b800-4ef5-ae89-150e95c588d8.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            style={{opacity: 0.18}}
          />
          <div className="relative z-10 p-6">
            <div className="flex items-center justify-center gap-4 mb-2">
              <img src="https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/4ca54c58-aed3-4b4c-ac87-740a697a6637.png" alt="TOYSTROY" className="w-16 h-16 rounded-xl shadow-md" />
              <h1 className="text-4xl font-black uppercase tracking-widest text-orange-500 drop-shadow">TOYSTROY</h1>
            </div>
            <p className="text-lg font-bold uppercase tracking-wide text-gray-900">Каркасные дома, дачи и бани под ключ</p>
            <p className="text-sm font-semibold text-orange-600 mt-1">Тула · Работаем по всей Тульской области</p>
          </div>
        </div>

        {/* Девиз */}
        <div className="bg-black text-center py-3 mb-6">
          <p className="text-xl font-black uppercase tracking-widest text-orange-500">Тепло · Надёжно · С гарантией</p>
        </div>

        <p className="text-sm text-gray-900 mb-6 leading-relaxed text-center">
          Каркасный дом — это возможность жить в тёплом, надёжном и красивом доме, построенном точно в срок
          и без лишних затрат. Мы работаем по всей Тульской области и выезжаем на участок в любой район <strong>бесплатно</strong>.
        </p>

        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* Почему выбирают */}
          <div>
            <h2 className="text-base font-black uppercase border-b-2 border-orange-500 pb-1 mb-3">Почему выбирают TOYSTROY</h2>
            <ul className="text-sm space-y-1.5 text-gray-950">
              {[
                "От 25 000 ₽/м² — в 2 раза дешевле кирпича (55 000 ₽) и газобетона (40 000 ₽)",
                "Готов за 2–4 месяца — баня за 5 недель",
                "Строим круглый год, в том числе зимой",
                "Ремонт сразу после сдачи — без усадки 1–2 года",
                "Мастера строят каркасные дома более 10 лет",
                "Одна бригада — без субподрядчиков",
                "Фиксированная цена в договоре — никаких доплат",
                "Фотоотчёты с площадки каждый день",
                "Древесина камерной сушки, утеплитель базальтовая вата",
                "Партнёры: GrandLine, Технониколь, Твои Окна",
              ].map((item, i) => (
                <li key={i} className="flex gap-1.5">
                  <span className="text-orange-500 font-bold flex-shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Правая колонка */}
          <div className="space-y-5">
            {/* Что входит */}
            <div>
              <h2 className="text-base font-black uppercase border-b-2 border-orange-500 pb-1 mb-3">Что входит в стоимость</h2>
              <ul className="text-sm space-y-1 text-gray-950">
                {[
                  "Выезд на участок и консультация",
                  "Индивидуальный проект и смета",
                  "Фундамент, каркас, кровля",
                  "Утепление, окна, двери",
                  "Электрика, водоснабжение, отопление",
                  "Доставка всех материалов на объект",
                  "Гарантийный паспорт при сдаче",
                ].map((item, i) => (
                  <li key={i} className="flex gap-1.5">
                    <span className="text-orange-500 font-bold flex-shrink-0">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Оплата */}
            <div>
              <h2 className="text-base font-black uppercase border-b-2 border-orange-500 pb-1 mb-3">Варианты оплаты</h2>
              <ul className="text-sm space-y-1 text-gray-950">
                <li>💰 100% сразу — скидка <strong>10%</strong></li>
                <li>💰 50% аванс + 50% при сдаче — скидка <strong>5%</strong></li>
                <li>💰 Рассрочка по этапам — <strong>без процентов</strong></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Подарок */}
        <div className="border-2 border-orange-500 p-4 mb-6">
          <h2 className="text-base font-black uppercase text-center mb-3">🎁 Подарок при заказе (на выбор)</h2>
          <div className="grid grid-cols-3 gap-2 text-sm text-center">
            {[
              "Фундамент на винтовых сваях",
              "Полная электрика внутри дома",
              "Индивидуальный проект",
              "Все окна ПВХ в доме",
              "Огне-биозащита каркаса",
              "Кадастровый учёт дома",
            ].map((item, i) => (
              <div key={i} className="bg-black border border-orange-500 p-2 rounded text-sm font-bold text-orange-500">{item}</div>
            ))}
          </div>
        </div>

        {/* Гарантия */}
        <div className="bg-gray-100 p-4 mb-6">
          <h2 className="text-base font-black uppercase text-center border-b-2 border-orange-500 pb-1 mb-3">Наши гарантии</h2>
          <div className="grid grid-cols-2 gap-2 text-sm text-gray-950">
            {[
              { num: "1", text: "Бесплатный выезд на участок и консультация — без обязательств" },
              { num: "2", text: "Индивидуальный проект и подробная смета со стоимостью всех материалов и работ" },
              { num: "3", text: "Официальный договор с фиксированной ценой — никаких доплат после подписания" },
              { num: "4", text: "Прозрачная смета — вы знаете за что платите на каждом этапе" },
              { num: "5", text: "Гарантия на конструктив и все выполненные работы" },
              { num: "6", text: "Бесплатное устранение замечаний в течение гарантийного срока" },
              { num: "7", text: "Сертификаты качества на все используемые материалы" },
              { num: "8", text: "Гарантийный паспорт и инструкции по эксплуатации при сдаче дома" },
            ].map((item) => (
              <div key={item.num} className="flex gap-2 items-start">
                <span className="bg-orange-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">{item.num}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>


        {/* Контакты */}
        <div className="border-4 border-black p-5 text-center">
          <div className="flex items-center justify-between mb-3">
            <img src="https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/4ca54c58-aed3-4b4c-ac87-740a697a6637.png" alt="TOYSTROY" className="w-12 h-12 rounded-lg" />
            <p className="text-sm font-bold uppercase">Консультация и расчёт стоимости — БЕСПЛАТНО за 1 день</p>
            <img src="https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/4ca54c58-aed3-4b4c-ac87-740a697a6637.png" alt="TOYSTROY" className="w-12 h-12 rounded-lg" />
          </div>
          <div className="flex gap-4 items-center justify-between mb-3">
            <div className="text-left space-y-2 text-sm">
              <p>📞 <strong>+7 (950) 917-09-74</strong></p>
              <p>📱 WhatsApp: <strong>+7 (950) 917-09-74</strong></p>
              <p>📧 Toystroy71rus@mail.ru</p>
              <p>🌐 <strong>toystroy71.ru</strong></p>
            </div>
            <img src="https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/4ca54c58-aed3-4b4c-ac87-740a697a6637.png" alt="TOYSTROY" className="w-36 h-36 rounded-2xl shadow-lg mx-auto" />
            <div className="flex flex-col items-center gap-1">
              <QRCodeSVG value="https://toystroy71.ru" size={200} />
              <span className="text-sm font-bold text-gray-950">Сканируй — переходи на сайт</span>
            </div>
          </div>
          <p className="text-xs text-gray-900">ВКонтакте: vk.ru/toystroy71 · Работаем с 10:00 до 19:00</p>
          <div className="mt-3 text-xs text-gray-700 italic">Средняя оценка 5 звёзд</div>
        </div>

      </div>
    </div>
  );
}
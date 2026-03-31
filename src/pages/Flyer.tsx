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
      <div className="max-w-[210mm] mx-auto px-8 py-10 text-black font-sans">

        {/* Шапка */}
        <div className="border-4 border-orange-500 p-6 mb-6 text-center">
          <h1 className="text-4xl font-black uppercase tracking-widest text-orange-500 mb-1">TOYSTROY</h1>
          <p className="text-lg font-bold uppercase tracking-wide text-gray-800">Каркасные дома, дачи и бани под ключ</p>
          <p className="text-sm text-gray-500 mt-1">Тульская область · Работаем по всей области</p>
        </div>

        {/* Девиз */}
        <div className="bg-orange-500 text-white text-center py-3 mb-6">
          <p className="text-xl font-black uppercase tracking-widest">Строим быстро. Тепло. С гарантией.</p>
        </div>

        <p className="text-sm text-gray-700 mb-6 leading-relaxed text-center">
          Каркасный дом — это возможность жить в тёплом, надёжном и красивом доме, построенном точно в срок
          и без лишних затрат. Мы работаем по всей Тульской области и выезжаем на участок в любой район <strong>бесплатно</strong>.
        </p>

        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* Почему выбирают */}
          <div>
            <h2 className="text-base font-black uppercase border-b-2 border-orange-500 pb-1 mb-3">Почему выбирают TOYSTROY</h2>
            <ul className="text-xs space-y-1.5 text-gray-800">
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
              <ul className="text-xs space-y-1 text-gray-800">
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
              <ul className="text-xs space-y-1 text-gray-800">
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
          <div className="grid grid-cols-3 gap-2 text-xs text-center text-gray-800">
            {[
              "Фундамент на винтовых сваях",
              "Полная электрика внутри дома",
              "Индивидуальный проект",
              "Все окна ПВХ в доме",
              "Огне-биозащита каркаса",
              "Кадастровый учёт дома",
            ].map((item, i) => (
              <div key={i} className="bg-orange-50 border border-orange-200 p-2 rounded text-[11px]">{item}</div>
            ))}
          </div>
        </div>

        {/* Гарантия */}
        <div className="bg-gray-100 p-4 mb-6 text-xs text-center text-gray-700">
          <strong className="text-sm text-black">ГАРАНТИЯ:</strong> Официальный договор · Фиксированная цена · Гарантия на конструктив · Бесплатное устранение замечаний · Сертификаты на все материалы
        </div>

        {/* Контакты */}
        <div className="border-4 border-black p-5 text-center">
          <p className="text-sm font-bold uppercase mb-3">Консультация и расчёт стоимости — БЕСПЛАТНО за 1 день</p>
          <div className="grid grid-cols-2 gap-2 text-sm mb-3">
            <div className="text-left space-y-1">
              <p>📞 <strong>+7 (950) 917-09-74</strong></p>
              <p>📱 WhatsApp: <strong>+7 (950) 917-09-74</strong></p>
            </div>
            <div className="text-left space-y-1">
              <p>📧 Toystroy71rus@mail.ru</p>
              <p>🌐 <strong>toystroy71.ru</strong></p>
            </div>
          </div>
          <p className="text-xs text-gray-500">ВКонтакте: vk.ru/toystroy71 · Работаем с 10:00 до 19:00</p>
          <div className="mt-3 text-xs text-gray-400 italic">Средняя оценка 5 звёзд</div>
        </div>

      </div>
    </div>
  );
}
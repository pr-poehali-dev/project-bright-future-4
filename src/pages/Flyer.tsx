import { QRCodeSVG } from "qrcode.react";

const LOGO = "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/4ca54c58-aed3-4b4c-ac87-740a697a6637.png";
const BG = "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/fb966810-b800-4ef5-ae89-150e95c588d8.png";

export default function Flyer() {
  return (
    <div className="bg-white">
      <div className="print:hidden fixed top-4 right-4 z-50">
        <button onClick={() => window.print()} className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded shadow-lg text-sm">
          🖨️ Распечатать
        </button>
      </div>

      {/* A4 страница */}
      <div style={{width: "210mm", minHeight: "297mm", margin: "0 auto", padding: "6mm", boxSizing: "border-box", fontFamily: "sans-serif", fontSize: "11px", color: "#000"}}>

        {/* Шапка */}
        <div style={{border: "3px solid #f97316", marginBottom: "4mm", position: "relative", overflow: "hidden"}}>
          <img src={BG} alt="" style={{position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.15}} />
          <div style={{position: "relative", zIndex: 1, padding: "5mm", textAlign: "center"}}>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginBottom: "3px"}}>
              <img src={LOGO} alt="TS" style={{width: "48px", height: "48px", borderRadius: "8px"}} />
              <span style={{fontSize: "28px", fontWeight: 900, color: "#f97316", textTransform: "uppercase", letterSpacing: "4px"}}>TOYSTROY</span>
            </div>
            <div style={{fontSize: "13px", fontWeight: 700, textTransform: "uppercase", color: "#111"}}>Каркасные дома, дачи и бани под ключ</div>
            <div style={{fontSize: "11px", fontWeight: 600, color: "#ea580c", marginTop: "2px"}}>Тула · Работаем по всей Тульской области</div>
          </div>
        </div>

        {/* Девиз */}
        <div style={{background: "#000", textAlign: "center", padding: "5px 0", marginBottom: "4mm"}}>
          <span style={{fontSize: "14px", fontWeight: 900, color: "#f97316", textTransform: "uppercase", letterSpacing: "3px"}}>Тепло · Надёжно · С гарантией</span>
        </div>

        {/* Вводный текст */}
        <p style={{textAlign: "center", fontWeight: 700, fontSize: "11px", marginBottom: "4mm", lineHeight: 1.5}}>
          Каркасный дом — это возможность жить в тёплом, надёжном доме, построенном точно в срок и без лишних затрат.
          Выезжаем на участок в любой район <span style={{color: "#f97316"}}>бесплатно</span>.
        </p>

        <div style={{borderTop: "2px solid #f97316", marginBottom: "4mm"}} />

        {/* 3 колонки */}
        <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "4mm", marginBottom: "4mm"}}>
          {/* Почему выбирают */}
          <div>
            <div style={{fontSize: "10px", fontWeight: 900, textTransform: "uppercase", borderBottom: "2px solid #f97316", paddingBottom: "2px", marginBottom: "4px"}}>Почему выбирают</div>
            {[
              "От 25 000 ₽/м² — в 2 раза дешевле кирпича",
              "Готов за 2–4 месяца, баня за 5 недель",
              "Строим круглый год, в т.ч. зимой",
              "Ремонт сразу после сдачи",
              "Мастера строят более 10 лет",
              "Одна бригада — без субподрядчиков",
              "Фиксированная цена — никаких доплат",
              "Фотоотчёты с площадки каждый день",
              "Древесина камерной сушки",
              "Партнёры: GrandLine, Технониколь",
            ].map((item, i) => (
              <div key={i} style={{display: "flex", gap: "4px", marginBottom: "2px"}}>
                <span style={{color: "#f97316", fontWeight: 700, flexShrink: 0}}>✓</span>
                <span style={{fontWeight: 600}}>{item}</span>
              </div>
            ))}
          </div>

          {/* Что входит */}
          <div>
            <div style={{fontSize: "10px", fontWeight: 900, textTransform: "uppercase", borderBottom: "2px solid #f97316", paddingBottom: "2px", marginBottom: "4px"}}>Что входит в стоимость</div>
            {[
              "Выезд на участок и консультация",
              "Индивидуальный проект и смета",
              "Фундамент, каркас, кровля",
              "Утепление, окна, двери",
              "Электрика, водоснабжение, отопление",
              "Доставка материалов на объект",
              "Гарантийный паспорт при сдаче",
            ].map((item, i) => (
              <div key={i} style={{display: "flex", gap: "4px", marginBottom: "2px"}}>
                <span style={{color: "#f97316", fontWeight: 700, flexShrink: 0}}>—</span>
                <span style={{fontWeight: 600}}>{item}</span>
              </div>
            ))}
            <div style={{fontSize: "10px", fontWeight: 900, textTransform: "uppercase", borderBottom: "2px solid #f97316", paddingBottom: "2px", marginBottom: "4px", marginTop: "6px"}}>Варианты оплаты</div>
            {[
              "💰 100% сразу — скидка 10%",
              "💰 50%+50% при сдаче — скидка 5%",
              "💰 Рассрочка по этапам — без %",
            ].map((item, i) => (
              <div key={i} style={{fontWeight: 600, marginBottom: "2px"}}>{item}</div>
            ))}
          </div>

          {/* Гарантии */}
          <div>
            <div style={{fontSize: "10px", fontWeight: 900, textTransform: "uppercase", borderBottom: "2px solid #f97316", paddingBottom: "2px", marginBottom: "4px"}}>Наши гарантии</div>
            {[
              "Бесплатный выезд — без обязательств",
              "Индивидуальный проект и смета",
              "Договор с фиксированной ценой",
              "Прозрачная смета на каждом этапе",
              "Гарантия на конструктив",
              "Бесплатное устранение замечаний",
              "Сертификаты на все материалы",
              "Гарантийный паспорт при сдаче",
            ].map((item, i) => (
              <div key={i} style={{display: "flex", gap: "4px", alignItems: "flex-start", marginBottom: "2px"}}>
                <span style={{background: "#f97316", color: "#fff", fontSize: "8px", fontWeight: 700, width: "14px", height: "14px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0}}>{i + 1}</span>
                <span style={{fontWeight: 600}}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{borderTop: "2px solid #f97316", marginBottom: "4mm"}} />

        {/* Подарки */}
        <div style={{border: "2px solid #f97316", padding: "4px 6px", marginBottom: "4mm"}}>
          <div style={{textAlign: "center", fontWeight: 900, fontSize: "11px", textTransform: "uppercase", marginBottom: "4px"}}>🎁 Подарок при заказе (на выбор)</div>
          <div style={{display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "3px"}}>
            {["Фундамент на сваях", "Полная электрика", "Индивидуальный проект", "Все окна ПВХ", "Огне-биозащита", "Кадастровый учёт"].map((item, i) => (
              <div key={i} style={{background: "#000", border: "1px solid #f97316", borderRadius: "4px", padding: "4px", textAlign: "center", fontWeight: 700, color: "#f97316", fontSize: "9px"}}>{item}</div>
            ))}
          </div>
        </div>

        {/* Контакты */}
        <div style={{border: "3px solid #000", padding: "5px 6px", position: "relative", overflow: "hidden"}}>
          <img src={BG} alt="" style={{position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.07}} />
          <div style={{position: "relative", zIndex: 1}}>
            <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "5px"}}>
              <img src={LOGO} alt="TS" style={{width: "36px", height: "36px", borderRadius: "6px"}} />
              <div style={{fontSize: "12px", fontWeight: 900, textTransform: "uppercase", textAlign: "center"}}>Консультация и расчёт — БЕСПЛАТНО за 1 день</div>
              <img src={LOGO} alt="TS" style={{width: "36px", height: "36px", borderRadius: "6px"}} />
            </div>
            <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px"}}>
              <div style={{fontSize: "11px", fontWeight: 700, lineHeight: 1.8}}>
                <div>📍 г. Тула, ул. Пролетарская, 37</div>
                <div>📞 +7 (950) 917-09-74</div>
                <div>📱 WhatsApp: +7 (950) 917-09-74</div>
                <div>📧 Toystroy71rus@mail.ru</div>
                <div>🌐 toystroy71.ru</div>
                <div>📘 ВКонтакте: vk.ru/toystroy71</div>
              </div>
              <img src={LOGO} alt="TS" style={{width: "120px", height: "120px", borderRadius: "16px", boxShadow: "0 4px 12px rgba(0,0,0,0.2)"}} />
              <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "4px"}}>
                <QRCodeSVG value="https://toystroy71.ru" size={120} />
                <span style={{fontSize: "10px", fontWeight: 700}}>Сканируй — переходи на сайт</span>
              </div>
            </div>
            <div style={{textAlign: "center", fontSize: "10px", color: "#555", marginTop: "4px"}}>
              ⏰ Работаем с 10:00 до 19:00 · Средняя оценка 5 звёзд
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

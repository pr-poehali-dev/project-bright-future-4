import { QRCodeSVG } from "qrcode.react";

const LOGO = "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/4ca54c58-aed3-4b4c-ac87-740a697a6637.png";
const BG = "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/fb966810-b800-4ef5-ae89-150e95c588d8.png";

export default function Flyer() {
  return (
    <div style={{ background: "#e5e5e5", minHeight: "100vh", paddingTop: "16px", paddingBottom: "16px" }}>
      <div className="print:hidden" style={{ position: "fixed", top: "12px", right: "12px", zIndex: 999 }}>
        <button
          onClick={() => window.print()}
          style={{ background: "#f97316", color: "#fff", fontWeight: 700, padding: "10px 22px", border: "none", borderRadius: "6px", cursor: "pointer", fontSize: "15px" }}
        >
          🖨️ Распечатать
        </button>
      </div>

      {/* Лист A4 */}
      <div style={{
        width: "210mm", minHeight: "297mm", margin: "0 auto", background: "#fff",
        fontFamily: "Arial, sans-serif", color: "#111", boxSizing: "border-box",
        display: "flex", flexDirection: "column",
      }}>

        {/* ШАПКа */}
        <div style={{ background: "#111", position: "relative", overflow: "hidden" }}>
          <img src={BG} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.12 }} />
          <div style={{ position: "relative", zIndex: 1 }}>

            {/* Шапка по центру */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10mm 10mm 6mm", textAlign: "center" }}>
              <img src={LOGO} alt="TS" style={{ width: "90px", height: "90px", borderRadius: "14px", marginBottom: "10px" }} />
              <div style={{ fontSize: "56px", fontWeight: 900, color: "#f97316", letterSpacing: "10px", lineHeight: 1 }}>TOYSTROY</div>
              <div style={{ fontSize: "36px", fontWeight: 900, color: "#fff", letterSpacing: "4px", textTransform: "uppercase", marginTop: "10px" }}>Каркасные дома, дачи и бани под ключ</div>
              <div style={{ fontSize: "20px", fontWeight: 700, color: "#bbb", marginTop: "6px", letterSpacing: "2px" }}>Тула · Работаем по всей Тульской области</div>
            </div>



          </div>
        </div>

        {/* ВВОДНЫЙ ТЕКСТ */}
        <div style={{ padding: "6mm 10mm 4mm", textAlign: "center" }}>
          <p style={{ fontSize: "14px", fontWeight: 600, lineHeight: 1.6, color: "#333", margin: 0 }}>
            Каркасный дом — это быстро, практично и по фиксированной цене.
            Берём на себя всё: от фундамента до чистовой отделки.
            Выезжаем на участок в любой район <span style={{ color: "#f97316", fontWeight: 800 }}>бесплатно</span>.
          </p>
        </div>

        <div style={{ height: "2px", background: "#f97316", margin: "0 10mm" }} />

        {/* 3 КОЛОНКИ */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "6mm", padding: "6mm 10mm", flex: 1 }}>

          {/* Почему TOYSTROY */}
          <div>
            <div style={{ fontSize: "11px", fontWeight: 900, textTransform: "uppercase", borderBottom: "2px solid #f97316", paddingBottom: "3px", marginBottom: "8px", letterSpacing: "0.5px" }}>
              Почему выбирают нас
            </div>
            {[
              "В 2 раза дешевле кирпича",
              "Готов за 90–120 дней",
              "Строим круглый год",
              "Одна бригада без субподрядчиков",
              "Фотоотчёты с площадки каждый день",
              "Древесина камерной сушки",
              "Партнёры: GrandLine, Технониколь",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "6px", marginBottom: "6px", alignItems: "flex-start" }}>
                <span style={{ color: "#f97316", fontWeight: 900, fontSize: "14px", lineHeight: 1.3, flexShrink: 0 }}>✓</span>
                <span style={{ fontSize: "12px", fontWeight: 600, lineHeight: 1.4 }}>{item}</span>
              </div>
            ))}
          </div>

          {/* Что входит */}
          <div>
            <div style={{ fontSize: "11px", fontWeight: 900, textTransform: "uppercase", borderBottom: "2px solid #f97316", paddingBottom: "3px", marginBottom: "8px", letterSpacing: "0.5px" }}>
              Что входит в стоимость
            </div>
            {[
              "Выезд на участок и консультация",
              "Индивидуальный проект и смета",
              "Фундамент, каркас, кровля",
              "Утепление, окна, двери",
              "Электрика, водопровод, отопление",
              "Доставка материалов на объект",
              "Гарантийный паспорт при сдаче",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "6px", marginBottom: "6px", alignItems: "flex-start" }}>
                <span style={{ color: "#f97316", fontWeight: 900, fontSize: "14px", lineHeight: 1.3, flexShrink: 0 }}>—</span>
                <span style={{ fontSize: "12px", fontWeight: 600, lineHeight: 1.4 }}>{item}</span>
              </div>
            ))}
          </div>

          {/* Гарантии */}
          <div>
            <div style={{ fontSize: "11px", fontWeight: 900, textTransform: "uppercase", borderBottom: "2px solid #f97316", paddingBottom: "3px", marginBottom: "8px", letterSpacing: "0.5px" }}>
              Наши гарантии
            </div>
            {[
              "Договор с фиксированной ценой",
              "Гарантия на каркас 5 лет",
              "Сертификаты на все материалы",
              "Гарантийный паспорт при сдаче",
              "Соблюдение сроков или компенсация",
              "Бесплатное устранение замечаний",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "6px", marginBottom: "6px", alignItems: "flex-start" }}>
                <span style={{ background: "#f97316", color: "#fff", fontSize: "9px", fontWeight: 700, width: "17px", height: "17px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, lineHeight: 1 }}>{i + 1}</span>
                <span style={{ fontSize: "12px", fontWeight: 600, lineHeight: 1.4 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ height: "2px", background: "#f97316", margin: "0 10mm" }} />

        {/* ПОДАРОК */}
        <div style={{ margin: "5mm 10mm", border: "2px solid #f97316", padding: "5px 8px" }}>
          <div style={{ textAlign: "center", fontWeight: 900, fontSize: "14px", textTransform: "uppercase", marginBottom: "6px" }}>
            🎁 Подарок при заказе (на выбор)
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "5px" }}>
            {["Проект бесплатно", "Все окна ПВХ", "Полная электрика", "Огне-биозащита", "Фундамент на сваях"].map((item, i) => (
              <div key={i} style={{ background: "#111", border: "1px solid #f97316", borderRadius: "4px", padding: "7px 4px", textAlign: "center", fontWeight: 700, color: "#f97316", fontSize: "11px", lineHeight: 1.3 }}>{item}</div>
            ))}
          </div>
        </div>

        {/* КОНТАКТЫ */}
        <div style={{ background: "#111", margin: "0 10mm 10mm", position: "relative", overflow: "hidden", padding: "6mm 8mm" }}>
          <img src={BG} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.08 }} />
          <div style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", gap: "8mm", justifyContent: "space-between" }}>

            <div style={{ color: "#fff", lineHeight: 1.9 }}>
              <div style={{ fontSize: "16px", fontWeight: 900, color: "#f97316", marginBottom: "4px" }}>Свяжитесь с нами</div>
              <div style={{ fontSize: "13px", fontWeight: 700 }}>📞 +7 (950) 917-09-74</div>
              <div style={{ fontSize: "12px" }}>📱 WhatsApp: +7 (950) 917-09-74</div>
              <div style={{ fontSize: "12px" }}>📧 Toystroy71rus@mail.ru</div>
              <div style={{ fontSize: "12px" }}>🌐 toystroy71.ru</div>
              <div style={{ fontSize: "12px" }}>📍 г. Тула, ул. Пролетарская, 37</div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
              <div style={{ background: "#fff", padding: "6px", borderRadius: "8px" }}>
                <QRCodeSVG value="https://toystroy71.ru" size={90} />
              </div>
              <div style={{ color: "#fff", fontSize: "10px", fontWeight: 600, textAlign: "center" }}>Сайт</div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
              <div style={{ background: "#fff", padding: "6px", borderRadius: "8px" }}>
                <QRCodeSVG value="https://vk.com/toystroy71" size={90} />
              </div>
              <div style={{ color: "#fff", fontSize: "10px", fontWeight: 600, textAlign: "center" }}>ВКонтакте</div>
            </div>

            <div style={{ textAlign: "right", color: "#fff" }}>
              <div style={{ fontSize: "13px", fontWeight: 900, color: "#f97316", marginBottom: "6px", textTransform: "uppercase" }}>Консультация бесплатно</div>
              <div style={{ fontSize: "12px", opacity: 0.85, lineHeight: 1.6 }}>
                Пн–Пт: 9:00 – 19:00<br />
                Сб–Вс: 10:00 – 17:00<br />
                Выезд на участок<br />
                в любой район
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
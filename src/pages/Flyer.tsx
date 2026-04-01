import { QRCodeSVG } from "qrcode.react";

const LOGO = "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/4ca54c58-aed3-4b4c-ac87-740a697a6637.png";
const BG = "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/fb966810-b800-4ef5-ae89-150e95c588d8.png";

export default function Flyer() {
  return (
    <div style={{ background: "#f5f5f5", paddingTop: "10px" }}>
      <div className="print:hidden" style={{ position: "fixed", top: "10px", right: "10px", zIndex: 999 }}>
        <button
          onClick={() => window.print()}
          style={{ background: "#f97316", color: "#fff", fontWeight: 700, padding: "10px 20px", border: "none", borderRadius: "6px", cursor: "pointer", fontSize: "14px" }}
        >
          🖨️ Распечатать
        </button>
      </div>

      <div style={{ width: "210mm", minHeight: "297mm", margin: "0 auto", padding: "7mm", boxSizing: "border-box", fontFamily: "Arial, sans-serif", fontSize: "11px", color: "#000", background: "#fff" }}>

        {/* ШАПКА */}
        <div style={{ border: "3px solid #f97316", marginBottom: "5mm", position: "relative", overflow: "hidden" }}>
          <img src={BG} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.18 }} />
          <div style={{ position: "relative", zIndex: 1, padding: "5mm 7mm", textAlign: "center" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "14px", marginBottom: "5px" }}>
              <img src={LOGO} alt="TS" style={{ width: "60px", height: "60px", borderRadius: "8px" }} />
              <span style={{ fontSize: "36px", fontWeight: 900, color: "#f97316", letterSpacing: "4px", fontFamily: "Arial Black, Arial, sans-serif" }}>TOYSTROY</span>
            </div>
            <div style={{ fontSize: "14px", fontWeight: 800, color: "#222", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px" }}>
              КАРКАСНЫЕ ДОМА, ДАЧИ И БАНИ ПОД КЛЮЧ
            </div>
            <div style={{ fontSize: "11px", fontWeight: 700, color: "#f97316" }}>
              Тула · Работаем по всей Тульской области
            </div>
          </div>
        </div>

        {/* СЛОГАН */}
        <div style={{ textAlign: "center", marginBottom: "5mm", padding: "3mm 0" }}>
          <div style={{ fontSize: "17px", fontWeight: 900, color: "#f97316", letterSpacing: "3px", textTransform: "uppercase" }}>
            ТЕПЛО · НАДЁЖНО · С ГАРАНТИЕЙ
          </div>
        </div>

        {/* ОПИСАНИЕ */}
        <div style={{ textAlign: "center", fontSize: "11px", fontWeight: 600, lineHeight: 1.6, marginBottom: "5mm", borderBottom: "1px solid #eee", paddingBottom: "4mm" }}>
          Каркасный дом — это возможность жить в тёплом, надёжном доме, построенном точно в срок и без лишних затрат.&nbsp;
          <span style={{ color: "#f97316", fontWeight: 700 }}>Выезжаем на участок в любой район бесплатно.</span>
        </div>

        {/* 3 КОЛОНКИ */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "5mm", marginBottom: "5mm" }}>

          {/* ПОЧЕМУ ВЫБИРАЮТ */}
          <div>
            <div style={{ fontSize: "10px", fontWeight: 900, textTransform: "uppercase" as const, borderBottom: "2px solid #f97316", paddingBottom: "3px", marginBottom: "6px" }}>
              Почему выбирают Toystroy
            </div>
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
              <div key={i} style={{ display: "flex", gap: "4px", marginBottom: "3px", alignItems: "flex-start" }}>
                <span style={{ color: "#f97316", fontWeight: 800, flexShrink: 0, fontSize: "11px" }}>✓</span>
                <span style={{ fontWeight: 600, lineHeight: 1.35, fontSize: "10px" }}>{item}</span>
              </div>
            ))}
          </div>

          {/* ЧТО ВХОДИТ */}
          <div>
            <div style={{ fontSize: "10px", fontWeight: 900, textTransform: "uppercase" as const, borderBottom: "2px solid #f97316", paddingBottom: "3px", marginBottom: "6px" }}>
              Что входит в стоимость
            </div>
            {[
              "Выезд на участок и консультация",
              "Индивидуальный проект и смета",
              "Фундамент, каркас, кровля",
              "Утепление, окна, двери",
              "Электрика, водоснабжение, отопление",
              "Доставка материалов на объект",
              "Гарантийный паспорт при сдаче",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "4px", marginBottom: "3px", alignItems: "flex-start" }}>
                <span style={{ color: "#333", fontWeight: 800, flexShrink: 0, fontSize: "11px" }}>—</span>
                <span style={{ fontWeight: 600, lineHeight: 1.35, fontSize: "10px" }}>{item}</span>
              </div>
            ))}

            <div style={{ fontSize: "10px", fontWeight: 900, textTransform: "uppercase" as const, borderBottom: "2px solid #f97316", paddingBottom: "3px", marginBottom: "6px", marginTop: "8px" }}>
              Варианты оплаты
            </div>
            {[
              { icon: "🏅", text: "100% сразу — скидка 10%" },
              { icon: "🏅", text: "50% + 50% при сдаче — скидка 5%" },
              { icon: "🏅", text: "Рассрочка по этапам — без %" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "4px", marginBottom: "3px", alignItems: "flex-start" }}>
                <span style={{ flexShrink: 0, fontSize: "11px" }}>{item.icon}</span>
                <span style={{ fontWeight: 600, lineHeight: 1.35, fontSize: "10px" }}>{item.text}</span>
              </div>
            ))}
          </div>

          {/* ГАРАНТИИ */}
          <div>
            <div style={{ fontSize: "10px", fontWeight: 900, textTransform: "uppercase" as const, borderBottom: "2px solid #f97316", paddingBottom: "3px", marginBottom: "6px" }}>
              Наши гарантии
            </div>
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
              <div key={i} style={{ display: "flex", gap: "4px", marginBottom: "3px", alignItems: "flex-start" }}>
                <span style={{ color: "#333", fontWeight: 800, flexShrink: 0, fontSize: "11px", minWidth: "14px" }}>{i + 1}.</span>
                <span style={{ fontWeight: 600, lineHeight: 1.35, fontSize: "10px" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ПОДАРОК ПРИ ЗАКАЗЕ */}
        <div style={{ border: "2px solid #f97316", borderRadius: "4px", marginBottom: "5mm", overflow: "hidden" }}>
          <div style={{ background: "#f97316", color: "#fff", textAlign: "center", padding: "3px 6mm", fontSize: "12px", fontWeight: 900, textTransform: "uppercase" as const, letterSpacing: "1px" }}>
            🎁 ПОДАРОК ПРИ ЗАКАЗЕ (НА ВЫБОР)
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "0" }}>
            {[
              "Фундамент на сваях",
              "Полная электрика",
              "Проект в подарок",
              "Все окна ПВХ",
              "Огне-биозащита",
              "Кадастровый учёт",
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  textAlign: "center",
                  padding: "5px 3px",
                  fontSize: "9px",
                  fontWeight: 700,
                  lineHeight: 1.3,
                  borderRight: i < 5 ? "1px solid #f97316" : "none",
                  color: "#f97316",
                  background: "#fff"
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* НИЖНЯЯ ПОЛОСА */}
        <div style={{ borderTop: "2px solid #f97316", paddingTop: "4mm", display: "flex", gap: "8mm", alignItems: "center" }}>
          <div style={{ flexShrink: 0, background: "#fff", padding: "4px", border: "1px solid #eee", borderRadius: "6px" }}>
            <QRCodeSVG value="https://toystroy71.ru" size={80} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: "11px", fontWeight: 900, marginBottom: "4px" }}>TOYSTROY — Строим каркасные дома в Туле и области</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px 8mm" }}>
              {[
                { icon: "📞", val: "+7 (950) 917-09-74" },
                { icon: "📱", val: "WhatsApp: +7 (950) 917-09-74" },
                { icon: "🌐", val: "toystroy71.ru" },
                { icon: "📘", val: "vk.ru/toystroy71" },
                { icon: "📧", val: "Toystroy71rus@mail.ru" },
                { icon: "📍", val: "ул. Пролетарская, 37, Тула" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "4px", fontSize: "10px", fontWeight: 600 }}>
                  <span>{item.icon}</span>
                  <span>{item.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

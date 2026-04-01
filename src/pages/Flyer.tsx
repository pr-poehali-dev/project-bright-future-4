import { QRCodeSVG } from "qrcode.react";

const LOGO = "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/4ca54c58-aed3-4b4c-ac87-740a697a6637.png";

export default function Flyer() {
  return (
    <div style={{ background: "#1a1a1a", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px", fontFamily: "'Arial Black', Arial, sans-serif" }}>
      {/* Кнопка печати */}
      <div className="print:hidden" style={{ position: "fixed", top: "16px", right: "16px", zIndex: 999 }}>
        <button
          onClick={() => window.print()}
          style={{ background: "#f97316", color: "#fff", fontWeight: 800, padding: "12px 24px", border: "none", borderRadius: "8px", cursor: "pointer", fontSize: "14px", letterSpacing: "1px", textTransform: "uppercase" }}
        >
          🖨️ Распечатать
        </button>
      </div>

      {/* Лист A4 */}
      <div style={{ width: "210mm", minHeight: "297mm", background: "#0d0d0d", color: "#fff", position: "relative", overflow: "hidden", boxSizing: "border-box" }}>

        {/* Декоративные полосы фона */}
        <div style={{ position: "absolute", top: 0, right: 0, width: "45%", height: "100%", background: "linear-gradient(135deg, #f97316 0%, #ea580c 50%, transparent 100%)", opacity: 0.08, pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-60px", left: "-60px", width: "300px", height: "300px", borderRadius: "50%", background: "#f97316", opacity: 0.05, pointerEvents: "none" }} />

        {/* ===== ВЕРХНЯЯ ПОЛОСА ===== */}
        <div style={{ background: "#f97316", padding: "10px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img src={LOGO} alt="logo" style={{ width: "36px", height: "36px", borderRadius: "6px" }} />
            <span style={{ fontSize: "22px", fontWeight: 900, color: "#000", letterSpacing: "4px", textTransform: "uppercase" }}>TOYSTROY</span>
          </div>
          <div style={{ fontSize: "11px", fontWeight: 800, color: "#000", textTransform: "uppercase", letterSpacing: "1px", textAlign: "right" }}>
            <div>г. Тула · toystroy71.ru</div>
            <div>+7 (950) 917-09-74</div>
          </div>
        </div>

        {/* ===== HERO БЛОК ===== */}
        <div style={{ padding: "28px 24px 20px", borderBottom: "1px solid #2a2a2a" }}>
          <div style={{ fontSize: "9px", fontWeight: 800, letterSpacing: "5px", color: "#f97316", textTransform: "uppercase", marginBottom: "10px" }}>
            ▸ Каркасное строительство под ключ
          </div>
          <div style={{ fontSize: "38px", fontWeight: 900, lineHeight: 1.05, textTransform: "uppercase", marginBottom: "14px" }}>
            <span style={{ color: "#fff" }}>СТРОИМ </span>
            <span style={{ color: "#f97316" }}>ДОМ</span>
            <br />
            <span style={{ color: "#fff" }}>ВАШЕЙ </span>
            <span style={{ color: "#f97316" }}>МЕЧТЫ</span>
          </div>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {[
              { icon: "⚡", text: "За 2–4 месяца" },
              { icon: "💰", text: "От 25 000 ₽/м²" },
              { icon: "🛡️", text: "Гарантия 3 года" },
            ].map((item, i) => (
              <div key={i} style={{ background: "#1c1c1c", border: "1px solid #f97316", borderRadius: "6px", padding: "6px 14px", display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ fontSize: "16px" }}>{item.icon}</span>
                <span style={{ fontSize: "13px", fontWeight: 800, color: "#fff" }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ===== 2 КОЛОНКИ ===== */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "#2a2a2a", borderBottom: "1px solid #2a2a2a" }}>

          {/* Левая колонка — ЧТО СТРОИМ */}
          <div style={{ background: "#0d0d0d", padding: "18px 20px" }}>
            <div style={{ fontSize: "9px", letterSpacing: "3px", color: "#f97316", textTransform: "uppercase", fontWeight: 800, marginBottom: "14px" }}>▸ Что мы строим</div>
            {[
              { title: "Каркасные дома", sub: "от 1 900 000 ₽ · от 3 мес." },
              { title: "Дачные домики", sub: "от 900 000 ₽ · от 6 нед." },
              { title: "Бани и сауны", sub: "от 350 000 ₽ · от 5 нед." },
              { title: "Гаражи и хозпостройки", sub: "по запросу" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px", paddingBottom: "12px", borderBottom: i < 3 ? "1px solid #1e1e1e" : "none" }}>
                <div style={{ width: "4px", height: "36px", background: "#f97316", borderRadius: "2px", flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: "13px", fontWeight: 900, color: "#fff", textTransform: "uppercase" }}>{item.title}</div>
                  <div style={{ fontSize: "10px", fontWeight: 600, color: "#f97316", marginTop: "2px" }}>{item.sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Правая колонка — ПРЕИМУЩЕСТВА */}
          <div style={{ background: "#0d0d0d", padding: "18px 20px" }}>
            <div style={{ fontSize: "9px", letterSpacing: "3px", color: "#f97316", textTransform: "uppercase", fontWeight: 800, marginBottom: "14px" }}>▸ Почему выбирают нас</div>
            {[
              "Одна бригада без субподрядчиков",
              "Строим круглый год",
              "Древесина камерной сушки",
              "Фото с площадки каждый день",
              "Фиксированная цена в договоре",
              "Материалы: GrandLine, Технониколь",
              "Выезд на участок БЕСПЛАТНО",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "8px", alignItems: "flex-start", marginBottom: "8px" }}>
                <div style={{ width: "18px", height: "18px", background: "#f97316", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "9px", fontWeight: 900, color: "#000", marginTop: "1px" }}>
                  {i + 1}
                </div>
                <div style={{ fontSize: "11px", fontWeight: 700, color: "#ccc", lineHeight: 1.4 }}>{item}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== АКЦИЯ / CTA ===== */}
        <div style={{ background: "#f97316", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
          <div>
            <div style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "3px", textTransform: "uppercase", color: "#7c2d12", marginBottom: "3px" }}>Специальное предложение</div>
            <div style={{ fontSize: "20px", fontWeight: 900, color: "#000", textTransform: "uppercase", lineHeight: 1.1 }}>Скидка 10% при<br />100% оплате</div>
          </div>
          <div style={{ width: "1px", height: "50px", background: "rgba(0,0,0,0.2)" }} />
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "3px", textTransform: "uppercase", color: "#7c2d12", marginBottom: "3px" }}>Также доступно</div>
            <div style={{ fontSize: "13px", fontWeight: 800, color: "#000" }}>50% + 50% при сдаче</div>
            <div style={{ fontSize: "13px", fontWeight: 800, color: "#000" }}>Рассрочка по этапам без %</div>
          </div>
          <div style={{ width: "1px", height: "50px", background: "rgba(0,0,0,0.2)" }} />
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "3px", textTransform: "uppercase", color: "#7c2d12", marginBottom: "3px" }}>Подарок при заказе</div>
            <div style={{ fontSize: "13px", fontWeight: 800, color: "#000" }}>Проект + смета</div>
            <div style={{ fontSize: "13px", fontWeight: 800, color: "#000" }}>в подарок</div>
          </div>
        </div>

        {/* ===== НИЖНИЙ БЛОК — КОНТАКТЫ ===== */}
        <div style={{ padding: "18px 24px", display: "flex", alignItems: "center", gap: "20px" }}>

          {/* QR */}
          <div style={{ flexShrink: 0, background: "#fff", padding: "8px", borderRadius: "10px" }}>
            <QRCodeSVG value="https://toystroy71.ru" size={100} />
          </div>

          {/* Контакты */}
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: "9px", letterSpacing: "3px", color: "#f97316", textTransform: "uppercase", fontWeight: 800, marginBottom: "10px" }}>▸ Свяжитесь с нами</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5px 20px" }}>
              {[
                { icon: "📞", val: "+7 (950) 917-09-74" },
                { icon: "📍", val: "ул. Пролетарская, 37, Тула" },
                { icon: "📱", val: "WhatsApp: +7 (950) 917-09-74" },
                { icon: "🌐", val: "toystroy71.ru" },
                { icon: "📧", val: "Toystroy71rus@mail.ru" },
                { icon: "📘", val: "vk.ru/toystroy71" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                  <span style={{ fontSize: "13px" }}>{item.icon}</span>
                  <span style={{ fontSize: "10px", fontWeight: 700, color: "#aaa" }}>{item.val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Лого */}
          <div style={{ flexShrink: 0, textAlign: "center" }}>
            <img src={LOGO} alt="logo" style={{ width: "90px", height: "90px", borderRadius: "14px", display: "block", marginBottom: "6px" }} />
            <div style={{ fontSize: "8px", letterSpacing: "2px", color: "#f97316", fontWeight: 800, textTransform: "uppercase" }}>Toystroy</div>
          </div>
        </div>

        {/* ===== ПОДВАЛ ===== */}
        <div style={{ background: "#f97316", padding: "7px 24px", display: "flex", alignItems: "center", justifyContent: "center", gap: "30px" }}>
          {["Тепло", "Надёжно", "С гарантией", "Точно в срок"].map((item, i) => (
            <span key={i} style={{ fontSize: "11px", fontWeight: 900, color: "#000", textTransform: "uppercase", letterSpacing: "2px" }}>
              {i > 0 && <span style={{ marginRight: "30px", opacity: 0.4 }}>·</span>}
              {item}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
}

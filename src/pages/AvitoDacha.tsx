const LOGO = "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/4ca54c58-aed3-4b4c-ac87-740a697a6637.png";

const printStyle = `
  @media print {
    * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; color-adjust: exact !important; }
    body { margin: 0; }
    .print-hidden { display: none !important; }
  }
`;

export default function AvitoDacha() {
  return (
    <div style={{ background: "#f4f4f4", minHeight: "100vh", padding: "20px 0" }}>
      <style>{printStyle}</style>

      <div className="print-hidden" style={{ position: "fixed", top: "12px", right: "12px", zIndex: 999 }}>
        <button
          onClick={() => window.print()}
          style={{ background: "#f97316", color: "#fff", fontWeight: 700, padding: "10px 22px", border: "none", borderRadius: "6px", cursor: "pointer", fontSize: "15px" }}
        >
          🖨️ Распечатать
        </button>
      </div>

      {/* Контейнер объявления */}
      <div style={{
        maxWidth: "780px", margin: "0 auto", background: "#fff",
        borderRadius: "12px", overflow: "hidden",
        fontFamily: "Arial, sans-serif", color: "#111",
        boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
      }}>

        {/* ШАПКА */}
        <div style={{ background: "#111", padding: "22px 28px 18px", display: "flex", alignItems: "center", gap: "18px" }}>
          <img src={LOGO} alt="TOYSTROY" style={{ width: "70px", height: "70px", borderRadius: "10px", flexShrink: 0 }} />
          <div>
            <div style={{ fontSize: "13px", color: "#f97316", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "4px" }}>Официальный аккаунт</div>
            <div style={{ fontSize: "32px", fontWeight: 900, color: "#f97316", letterSpacing: "4px", lineHeight: 1 }}>TOYSTROY</div>
            <div style={{ fontSize: "14px", color: "#bbb", marginTop: "5px", fontWeight: 600 }}>Строительство каркасных домов, дач и бань · Тула и Тульская область</div>
          </div>
        </div>

        {/* ЗАГОЛОВОК */}
        <div style={{ padding: "24px 28px 0" }}>
          <h1 style={{ fontSize: "28px", fontWeight: 900, color: "#111", margin: "0 0 6px", lineHeight: 1.2 }}>
            Дача под ключ в Туле и Тульской области
          </h1>
          <div style={{ fontSize: "15px", color: "#555", lineHeight: 1.6 }}>
            Строим каркасные дачи под ключ — быстро, с фиксированной ценой и гарантией. 
            Компания <strong>TOYSTROY71</strong> работает на рынке строительства с опытными бригадами собственного состава. 
            Более <strong>100 построенных объектов</strong> в Тульской области.
          </div>
        </div>

        <div style={{ height: "3px", background: "linear-gradient(90deg, #f97316, #ff6b00)", margin: "20px 28px" }} />

        {/* 2 КОЛОНКИ */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0", padding: "0 28px 0" }}>

          {/* Почему выбирают нас */}
          <div style={{ paddingRight: "20px", borderRight: "1px solid #eee" }}>
            <div style={{ fontSize: "15px", fontWeight: 900, textTransform: "uppercase", color: "#f97316", letterSpacing: "0.5px", marginBottom: "14px", paddingBottom: "8px", borderBottom: "2px solid #f97316" }}>
              Почему выбирают нас
            </div>
            {[
              ["Дача готова за 20–45 дней", "Быстрее большинства конкурентов"],
              ["Фиксированная цена в договоре", "Никаких доплат и сюрпризов"],
              ["Лёгкий фундамент", "Подходит для любого участка"],
              ["Собственная бригада", "Без субподрядчиков — контроль качества"],
              ["Гарантия на все виды работ", "Письменно, в договоре"],
            ].map(([title, sub], i) => (
              <div key={i} style={{ display: "flex", gap: "10px", marginBottom: "14px", alignItems: "flex-start" }}>
                <span style={{ color: "#f97316", fontWeight: 900, fontSize: "20px", lineHeight: 1.2, flexShrink: 0, marginTop: "1px" }}>✓</span>
                <div>
                  <div style={{ fontSize: "15px", fontWeight: 700, lineHeight: 1.3 }}>{title}</div>
                  <div style={{ fontSize: "12px", color: "#777", marginTop: "2px" }}>{sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Что входит в стоимость */}
          <div style={{ paddingLeft: "20px" }}>
            <div style={{ fontSize: "15px", fontWeight: 900, textTransform: "uppercase", color: "#f97316", letterSpacing: "0.5px", marginBottom: "14px", paddingBottom: "8px", borderBottom: "2px solid #f97316" }}>
              Что входит в стоимость
            </div>
            {[
              "Фундамент на сваях или ленточный",
              "Силовой каркас из камерной сушки",
              "Утепление минватой 150 мм + ветробарьер",
              "Кровля из металлочерепицы или профлиста",
              "Наружная отделка (сайдинг или имитация бруса)",
              "Окна ПВХ, входная дверь",
              "Черновая внутренняя отделка",
              "Разводка электрики",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "10px", marginBottom: "10px", alignItems: "flex-start" }}>
                <span style={{ color: "#f97316", fontWeight: 900, fontSize: "16px", lineHeight: 1.4, flexShrink: 0 }}>—</span>
                <span style={{ fontSize: "14px", fontWeight: 600, lineHeight: 1.4 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ height: "3px", background: "linear-gradient(90deg, #f97316, #ff6b00)", margin: "20px 28px" }} />

        {/* КАК МЫ РАБОТАЕМ */}
        <div style={{ padding: "0 28px" }}>
          <div style={{ fontSize: "15px", fontWeight: 900, textTransform: "uppercase", color: "#111", letterSpacing: "0.5px", marginBottom: "16px" }}>
            Как мы работаем
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px" }}>
            {[
              ["1", "Заявка или звонок", "Выезд на участок бесплатно"],
              ["2", "Замер и проект", "Фиксируем цену в договоре"],
              ["3", "Строительство", "20–45 дней, ежедневный отчёт"],
              ["4", "Сдача объекта", "С гарантией и актом приёма"],
            ].map(([num, title, sub]) => (
              <div key={num} style={{ background: "#fff8f3", border: "2px solid #f97316", borderRadius: "10px", padding: "14px 12px", textAlign: "center" }}>
                <div style={{ fontSize: "28px", fontWeight: 900, color: "#f97316", lineHeight: 1 }}>{num}</div>
                <div style={{ fontSize: "13px", fontWeight: 800, marginTop: "6px", lineHeight: 1.3 }}>{title}</div>
                <div style={{ fontSize: "11px", color: "#777", marginTop: "4px", lineHeight: 1.4 }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ height: "3px", background: "linear-gradient(90deg, #f97316, #ff6b00)", margin: "20px 28px" }} />

        {/* О КОМПАНИИ */}
        <div style={{ padding: "0 28px" }}>
          <div style={{ fontSize: "15px", fontWeight: 900, textTransform: "uppercase", color: "#111", letterSpacing: "0.5px", marginBottom: "12px" }}>
            О компании TOYSTROY71
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px", marginBottom: "4px" }}>
            {[
              ["100+", "Построенных объектов"],
              ["10 лет", "Опыта строительства"],
              ["100 км", "Работаем по всей Тульской области"],
            ].map(([val, label]) => (
              <div key={val} style={{ background: "#111", borderRadius: "10px", padding: "14px 12px", textAlign: "center" }}>
                <div style={{ fontSize: "26px", fontWeight: 900, color: "#f97316" }}>{val}</div>
                <div style={{ fontSize: "12px", color: "#ccc", marginTop: "4px", lineHeight: 1.4 }}>{label}</div>
              </div>
            ))}
          </div>
          <div style={{ fontSize: "13px", color: "#555", lineHeight: 1.7, marginTop: "14px", background: "#f9f9f9", borderRadius: "8px", padding: "12px 16px", borderLeft: "4px solid #f97316" }}>
            Компания TOYSTROY71 специализируется на строительстве каркасных домов, дач и бань в Туле и Тульской области. 
            Мы работаем только своей бригадой, не привлекаем субподрядчиков — это гарантирует стабильное качество на каждом этапе. 
            Все проекты сдаём в срок, прописанный в договоре, с актом выполненных работ и письменной гарантией.
          </div>
        </div>

        {/* ПРИЗЫВ К ДЕЙСТВИЮ */}
        <div style={{ background: "#111", margin: "20px 0 0", padding: "22px 28px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <div style={{ fontSize: "20px", fontWeight: 900, color: "#f97316", marginBottom: "6px" }}>
                Расчёт стоимости и выезд специалиста — бесплатно
              </div>
              <div style={{ color: "#bbb", fontSize: "14px", lineHeight: 1.6 }}>
                📞 Звоните или пишите — отвечаем в день обращения<br />
                📍 г. Тула, ул. Пролетарская, 37 · Работаем Пн–Вс 10:00–19:00
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "30px", fontWeight: 900, color: "#fff", letterSpacing: "2px" }}>+7 (950) 917-09-74</div>
              <div style={{ fontSize: "13px", color: "#f97316", fontWeight: 700, marginTop: "4px" }}>toystroy71.ru · Toystroy71rus@mail.ru</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

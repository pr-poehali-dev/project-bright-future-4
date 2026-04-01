import { QRCodeSVG } from "qrcode.react";

const LOGO = "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/4ca54c58-aed3-4b4c-ac87-740a697a6637.png";
const BG = "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/fb966810-b800-4ef5-ae89-150e95c588d8.png";

const s = {
  page: {width:"210mm", minHeight:"297mm", margin:"0 auto", padding:"7mm", boxSizing:"border-box" as const, fontFamily:"Arial, sans-serif", fontSize:"12px", color:"#000", background:"#fff"},
  heading: {fontSize:"10px", fontWeight:900, textTransform:"uppercase" as const, borderBottom:"2px solid #f97316", paddingBottom:"2px", marginBottom:"5px"},
  row: {display:"flex", gap:"5px", marginBottom:"3px", alignItems:"flex-start" as const},
  check: {color:"#f97316", fontWeight:700, flexShrink:0},
  text: {fontWeight:600, lineHeight:1.4},
};

export default function Flyer() {
  return (
    <div style={{background:"#f5f5f5", paddingTop:"10px"}}>
      <div className="print:hidden" style={{position:"fixed", top:"10px", right:"10px", zIndex:999}}>
        <button onClick={() => window.print()} style={{background:"#f97316", color:"#fff", fontWeight:700, padding:"10px 20px", border:"none", borderRadius:"6px", cursor:"pointer", fontSize:"14px"}}>
          🖨️ Распечатать
        </button>
      </div>

      <div style={s.page}>

        {/* ШАПКА */}
        <div style={{border:"3px solid #f97316", marginBottom:"5mm", position:"relative", overflow:"hidden"}}>
          <img src={BG} alt="" style={{position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", opacity:0.15}} />
          <div style={{position:"relative", zIndex:1, padding:"6mm", textAlign:"center"}}>
            <div style={{display:"flex", alignItems:"center", justifyContent:"center", gap:"12px", marginBottom:"4px"}}>
              <img src={LOGO} alt="TS" style={{width:"60px", height:"60px", borderRadius:"10px"}} />
              <span style={{fontSize:"34px", fontWeight:900, color:"#f97316", textTransform:"uppercase", letterSpacing:"5px"}}>TOYSTROY</span>
            </div>
            <div style={{fontSize:"16px", fontWeight:800, textTransform:"uppercase", color:"#111", letterSpacing:"1px"}}>Каркасные дома, дачи и бани под ключ</div>
            <div style={{fontSize:"13px", fontWeight:700, color:"#ea580c", marginTop:"3px"}}>Тула · Работаем по всей Тульской области</div>
          </div>
        </div>

        {/* ДЕВИЗ */}
        <div style={{background:"#000", textAlign:"center", padding:"7px 0", marginBottom:"5mm"}}>
          <span style={{fontSize:"16px", fontWeight:900, color:"#f97316", textTransform:"uppercase", letterSpacing:"4px"}}>Тепло · Надёжно · С гарантией</span>
        </div>

        {/* ВВОДНЫЙ ТЕКСТ */}
        <p style={{textAlign:"center", fontWeight:700, fontSize:"13px", marginBottom:"5mm", lineHeight:1.5, color:"#111"}}>
          Каркасный дом — это возможность жить в тёплом, надёжном доме, построенном точно в срок и без лишних затрат.
          Выезжаем на участок в любой район <span style={{color:"#f97316"}}>бесплатно</span>.
        </p>

        <div style={{borderTop:"2px solid #f97316", marginBottom:"5mm"}} />

        {/* 3 КОЛОНКИ */}
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:"5mm", marginBottom:"5mm"}}>

          {/* Почему выбирают */}
          <div>
            <div style={s.heading}>Почему выбирают TOYSTROY</div>
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
              <div key={i} style={s.row}>
                <span style={s.check}>✓</span>
                <span style={s.text}>{item}</span>
              </div>
            ))}
          </div>

          {/* Что входит + Оплата */}
          <div>
            <div style={s.heading}>Что входит в стоимость</div>
            {[
              "Выезд на участок и консультация",
              "Индивидуальный проект и смета",
              "Фундамент, каркас, кровля",
              "Утепление, окна, двери",
              "Электрика, водоснабжение, отопление",
              "Доставка материалов на объект",
              "Гарантийный паспорт при сдаче",
            ].map((item, i) => (
              <div key={i} style={s.row}>
                <span style={s.check}>—</span>
                <span style={s.text}>{item}</span>
              </div>
            ))}
          </div>

          {/* Гарантии */}
          <div>
            <div style={s.heading}>Наши гарантии</div>
            {[
              "Бесплатный выезд — без обязательств",
              "Индивидуальный проект и смета",
              "Договор с фиксированной ценой",
              "Прозрачная смета на каждом этапе",
              "Гарантия на конструктив — 3 года",
              "Бесплатное устранение замечаний",
              "Сертификаты на все материалы",
              "Гарантийный паспорт при сдаче",
            ].map((item, i) => (
              <div key={i} style={s.row}>
                <span style={{background:"#f97316", color:"#fff", fontSize:"9px", fontWeight:700, width:"16px", height:"16px", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0}}>{i + 1}</span>
                <span style={s.text}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{borderTop:"2px solid #f97316", marginBottom:"4mm"}} />

        {/* ВАРИАНТЫ ОПЛАТЫ */}
        <div style={{marginBottom:"4mm"}}>
          <div style={{textAlign:"center", fontWeight:900, fontSize:"12px", textTransform:"uppercase" as const, letterSpacing:"2px", borderBottom:"2px solid #f97316", paddingBottom:"3px", marginBottom:"5px"}}>
            💳 Варианты оплаты
          </div>
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:"5mm"}}>
            {/* Карточка 1 */}
            <div style={{background:"linear-gradient(135deg,#f0fdf4 0%,#dcfce7 100%)", border:"2px solid #16a34a", borderRadius:"6px", padding:"6px 8px", position:"relative" as const, overflow:"hidden"}}>
              <div style={{position:"absolute" as const, top:0, right:0, background:"#16a34a", color:"#fff", fontWeight:900, fontSize:"11px", padding:"2px 8px", borderBottomLeftRadius:"6px"}}>СКИДКА 10%</div>
              <div style={{fontSize:"13px", fontWeight:900, color:"#15803d", marginBottom:"2px", marginTop:"4px"}}>💰 100% при заключении</div>
              <div style={{fontSize:"10px", fontWeight:600, color:"#166534", lineHeight:1.4}}>
                Оплата полной суммы сразу.<br/>
                Максимальная экономия — фиксируем цену без изменений.
              </div>
            </div>
            {/* Карточка 2 */}
            <div style={{background:"linear-gradient(135deg,#eff6ff 0%,#dbeafe 100%)", border:"2px solid #2563eb", borderRadius:"6px", padding:"6px 8px", position:"relative" as const, overflow:"hidden"}}>
              <div style={{position:"absolute" as const, top:0, right:0, background:"#2563eb", color:"#fff", fontWeight:900, fontSize:"11px", padding:"2px 8px", borderBottomLeftRadius:"6px"}}>СКИДКА 5%</div>
              <div style={{fontSize:"13px", fontWeight:900, color:"#1d4ed8", marginBottom:"2px", marginTop:"4px"}}>💳 50% + 50% при сдаче</div>
              <div style={{fontSize:"10px", fontWeight:600, color:"#1e40af", lineHeight:1.4}}>
                Аванс 50% — начало работ.<br/>
                Остаток после приёмки объекта и подписания акта.
              </div>
            </div>
            {/* Карточка 3 */}
            <div style={{background:"linear-gradient(135deg,#fff7ed 0%,#ffedd5 100%)", border:"2px solid #f97316", borderRadius:"6px", padding:"6px 8px", position:"relative" as const, overflow:"hidden"}}>
              <div style={{position:"absolute" as const, top:0, right:0, background:"#f97316", color:"#fff", fontWeight:900, fontSize:"11px", padding:"2px 8px", borderBottomLeftRadius:"6px"}}>БЕЗ %</div>
              <div style={{fontSize:"13px", fontWeight:900, color:"#c2410c", marginBottom:"2px", marginTop:"4px"}}>📋 Рассрочка по этапам</div>
              <div style={{fontSize:"10px", fontWeight:600, color:"#9a3412", lineHeight:1.4}}>
                Оплата за каждый завершённый этап.<br/>
                Фундамент → Каркас → Кровля → Отделка.
              </div>
            </div>
          </div>
        </div>

        <div style={{borderTop:"2px solid #f97316", marginBottom:"4mm"}} />

        {/* ПОДАРКИ */}
        <div style={{border:"2px solid #f97316", padding:"5px 8px", marginBottom:"5mm"}}>
          <div style={{textAlign:"center", fontWeight:900, fontSize:"13px", textTransform:"uppercase", marginBottom:"5px"}}>🎁 Подарок при заказе (на выбор)</div>
          <div style={{display:"grid", gridTemplateColumns:"repeat(6, 1fr)", gap:"4px"}}>
            {["Фундамент на сваях", "Полная электрика", "Проект в подарок", "Все окна ПВХ", "Огне-биозащита", "Кадастровый учёт"].map((item, i) => (
              <div key={i} style={{background:"#000", border:"1px solid #f97316", borderRadius:"4px", padding:"6px 4px", textAlign:"center", fontWeight:700, color:"#f97316", fontSize:"11px", lineHeight:1.3}}>{item}</div>
            ))}
          </div>
        </div>

        {/* КОНТАКТЫ */}
        <div style={{border:"3px solid #000", padding:"6px 8px", position:"relative", overflow:"hidden"}}>
          <img src={BG} alt="" style={{position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", opacity:0.07}} />
          <div style={{position:"relative", zIndex:1}}>
            <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"6px"}}>
              <img src={LOGO} alt="TS" style={{width:"40px", height:"40px", borderRadius:"7px"}} />
              <div style={{textAlign:"center"}}>
                <div style={{fontSize:"14px", fontWeight:900, textTransform:"uppercase"}}>Консультация и расчёт — БЕСПЛАТНО за 1 день</div>

              </div>
              <img src={LOGO} alt="TS" style={{width:"40px", height:"40px", borderRadius:"7px"}} />
            </div>
            <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", gap:"8px"}}>
              <div style={{flex:1, fontSize:"13px", fontWeight:700, lineHeight:2}}>
                <div>📍 г. Тула, ул. Пролетарская, 37</div>
                <div>📞 +7 (950) 917-09-74</div>
                <div>📱 WhatsApp: +7 (950) 917-09-74</div>
                <div>📧 Toystroy71rus@mail.ru</div>
                <div>🌐 toystroy71.ru</div>
                <div>📘 ВКонтакте: vk.ru/toystroy71</div>
              </div>
              <div style={{flex:"0 0 130px", display:"flex", justifyContent:"center"}}>
                <img src={LOGO} alt="TS" style={{width:"130px", height:"130px", borderRadius:"16px", boxShadow:"0 4px 12px rgba(0,0,0,0.2)"}} />
              </div>
              <div style={{flex:1, display:"flex", flexDirection:"column", alignItems:"center", gap:"5px"}}>
                <QRCodeSVG value="https://toystroy71.ru" size={130} />
                <span style={{fontSize:"16px", fontWeight:900}}>Сканируй — переходи на сайт</span>
              </div>
            </div>
            <div style={{textAlign:"center", fontSize:"11px", color:"#444", marginTop:"5px", fontWeight:600}}>
              ⏰ Работаем с 10:00 до 19:00 · Средняя оценка 5 звёзд
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
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
              <span style={{fontSize:"34px", fontWeight:900, color:"#f97316", letterSpacing:"3px"}}>TOYSTROY</span>
            </div>
            <div style={{fontSize:"13px", fontWeight:700, color:"#333", marginBottom:"6px"}}>Каркасное строительство под ключ · г. Тула</div>
            <div style={{display:"flex", justifyContent:"center", gap:"20px", flexWrap:"wrap"}}>
              {[
                {icon:"📞", text:"+7 (950) 917-09-74"},
                {icon:"🌐", text:"toystroy71.ru"},
                {icon:"📍", text:"ул. Пролетарская, 37"},
              ].map((item,i) => (
                <span key={i} style={{fontSize:"11px", fontWeight:700}}>
                  {item.icon} {item.text}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* СЛОГАН */}
        <div style={{background:"#f97316", color:"#fff", padding:"4mm 6mm", textAlign:"center", marginBottom:"5mm"}}>
          <div style={{fontSize:"18px", fontWeight:900, textTransform:"uppercase", letterSpacing:"2px"}}>Строим дом вашей мечты</div>
          <div style={{fontSize:"11px", marginTop:"2px"}}>За 2–4 месяца · Гарантия 3 года · Фиксированная цена</div>
        </div>

        {/* 2 КОЛОНКИ */}
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:"5mm", marginBottom:"5mm"}}>

          {/* УСЛУГИ */}
          <div>
            <div style={s.heading}>Что мы строим</div>
            {[
              {name:"Каркасные дома", price:"от 1 900 000 ₽", term:"от 3 мес."},
              {name:"Дачные домики", price:"от 900 000 ₽", term:"от 6 нед."},
              {name:"Бани и сауны", price:"от 350 000 ₽", term:"от 5 нед."},
              {name:"Гаражи и хозпостройки", price:"по запросу", term:""},
            ].map((item,i) => (
              <div key={i} style={{display:"flex", justifyContent:"space-between", alignItems:"baseline", borderBottom:"1px solid #eee", padding:"3px 0"}}>
                <span style={{fontWeight:700, fontSize:"11px"}}>{item.name}</span>
                <span style={{fontSize:"10px", color:"#f97316", fontWeight:700, textAlign:"right"}}>
                  {item.price}{item.term ? ` · ${item.term}` : ""}
                </span>
              </div>
            ))}
          </div>

          {/* ПРЕИМУЩЕСТВА */}
          <div>
            <div style={s.heading}>Почему выбирают нас</div>
            {[
              "Одна бригада без субподрядчиков",
              "Строим круглый год",
              "Древесина камерной сушки",
              "Фото с площадки каждый день",
              "Фиксированная цена в договоре",
              "Материалы: GrandLine, Технониколь",
              "Выезд на участок БЕСПЛАТНО",
            ].map((item,i) => (
              <div key={i} style={s.row}>
                <span style={s.check}>✓</span>
                <span style={s.text}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* АКЦИЯ */}
        <div style={{border:"2px dashed #f97316", padding:"4mm 6mm", marginBottom:"5mm", display:"flex", gap:"10mm", alignItems:"center"}}>
          <div style={{flex:1}}>
            <div style={{fontSize:"11px", fontWeight:900, textTransform:"uppercase", color:"#f97316", marginBottom:"3px"}}>🔥 Специальное предложение</div>
            <div style={{fontSize:"16px", fontWeight:900}}>Скидка 10% при 100% оплате</div>
            <div style={{fontSize:"10px", color:"#666", marginTop:"2px"}}>Также доступно: 50% + 50% при сдаче · Рассрочка по этапам без %</div>
          </div>
          <div style={{textAlign:"center", flexShrink:0}}>
            <div style={{fontSize:"11px", fontWeight:900, color:"#f97316"}}>Подарок при заказе:</div>
            <div style={{fontSize:"13px", fontWeight:800}}>Проект + смета</div>
            <div style={{fontSize:"11px", color:"#666"}}>в подарок</div>
          </div>
        </div>

        {/* ЭТАПЫ */}
        <div style={{marginBottom:"5mm"}}>
          <div style={s.heading}>Как мы работаем</div>
          <div style={{display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:"3mm", marginTop:"3mm"}}>
            {[
              {n:"1", t:"Выезд на\nучасток"},
              {n:"2", t:"Договор и\nсмета"},
              {n:"3", t:"Закупка\nматериалов"},
              {n:"4", t:"Строительство\nпод ключ"},
              {n:"5", t:"Сдача и\nгарантия"},
            ].map((s,i) => (
              <div key={i} style={{textAlign:"center", border:"1px solid #eee", padding:"3mm", borderRadius:"4px"}}>
                <div style={{width:"24px", height:"24px", background:"#f97316", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 4px", color:"#fff", fontWeight:900, fontSize:"12px"}}>{s.n}</div>
                <div style={{fontSize:"9px", fontWeight:700, lineHeight:1.3, whiteSpace:"pre-line"}}>{s.t}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ГАРАНТИИ */}
        <div style={{marginBottom:"5mm"}}>
          <div style={s.heading}>Наши гарантии</div>
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:"3mm", marginTop:"3mm"}}>
            {[
              {title:"3 года", sub:"гарантия на конструктив"},
              {title:"1 год", sub:"гарантия на отделку"},
              {title:"100%", sub:"соответствие проекту"},
            ].map((item,i) => (
              <div key={i} style={{textAlign:"center", padding:"3mm", background:"#fff8f5", border:"1px solid #ffe0cc", borderRadius:"4px"}}>
                <div style={{fontSize:"18px", fontWeight:900, color:"#f97316"}}>{item.title}</div>
                <div style={{fontSize:"9px", fontWeight:600, color:"#666"}}>{item.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* НИЖНЯЯ ПОЛОСА */}
        <div style={{borderTop:"2px solid #f97316", paddingTop:"4mm", display:"flex", gap:"10mm", alignItems:"center"}}>
          <div style={{flexShrink:0, background:"#fff", padding:"5px", border:"1px solid #eee", borderRadius:"8px"}}>
            <QRCodeSVG value="https://toystroy71.ru" size={90} />
          </div>
          <div style={{flex:1}}>
            <div style={{fontSize:"11px", fontWeight:900, marginBottom:"4px"}}>TOYSTROY — Строим каркасные дома в Туле и области</div>
            <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:"2px 10mm"}}>
              {[
                {icon:"📞", val:"+7 (950) 917-09-74"},
                {icon:"📱", val:"WhatsApp: +7 (950) 917-09-74"},
                {icon:"🌐", val:"toystroy71.ru"},
                {icon:"📘", val:"vk.ru/toystroy71"},
                {icon:"📧", val:"Toystroy71rus@mail.ru"},
                {icon:"📍", val:"ул. Пролетарская, 37, Тула"},
              ].map((item,i) => (
                <div key={i} style={{display:"flex", gap:"4px", fontSize:"10px", fontWeight:600}}>
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

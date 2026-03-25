import { useState, useEffect } from "react"
import Icon from "@/components/ui/icon"

const gifts = [
  { icon: "Drill", title: "Сваи в подарок", description: "Фундамент на винтовых сваях" },
  { icon: "Zap", title: "Электрика в подарок", description: "Полная разводка электрики" },
  { icon: "FileText", title: "Проект в подарок", description: "Индивидуальный проект дома" },
  { icon: "AppWindow", title: "Окна в подарок", description: "Все окна ПВХ в доме" },
  { icon: "Shield", title: "Огне-биозащита", description: "Обработка всего каркаса" },
  { icon: "ClipboardList", title: "Кадастровый учёт", description: "Документы для постановки на учёт" },
]

export function PromoPopup() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<number | null>(null)

  useEffect(() => {
    const dismissed = sessionStorage.getItem("promo_dismissed")
    if (dismissed) return
    const timer = setTimeout(() => setOpen(true), 40000)
    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    sessionStorage.setItem("promo_dismissed", "1")
    setOpen(false)
  }

  const handleSubmit = () => {
    handleClose()
    const el = document.getElementById("calculator")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={handleClose} />
      <div className="relative bg-white w-full max-w-lg shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
        <div className="bg-orange-500 px-6 py-4">
          <p className="text-white text-xs tracking-[0.2em] uppercase font-medium">Подарок при заказе</p>
        </div>

        <button
          onClick={handleClose}
          className="absolute top-3 right-4 text-white/80 hover:text-white transition-colors"
        >
          <Icon name="X" size={18} />
        </button>

        <div className="p-6">
          <div className="flex items-center gap-2 mb-1">
            <Icon name="Gift" size={22} className="text-orange-500" />
            <h2 className="text-xl font-bold">Выберите подарок</h2>
          </div>
          <p className="text-muted-foreground text-sm mb-5">При заказе строительства под ключ — один подарок на выбор</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5">
            {gifts.map((gift, i) => (
              <button
                key={i}
                onClick={() => setSelected(i)}
                className={`flex flex-col items-center text-center p-4 border-2 transition-all duration-200 ${
                  selected === i ? "border-orange-500 bg-orange-50" : "border-border hover:border-orange-300"
                }`}
              >
                <Icon
                  name={gift.icon}
                  size={28}
                  className={`mb-2 ${selected === i ? "text-orange-500" : "text-foreground/50"}`}
                  strokeWidth={1.5}
                />
                <p className="font-semibold text-xs leading-tight mb-1">{gift.title}</p>
                <p className="text-[11px] text-muted-foreground leading-tight">{gift.description}</p>
                {selected === i && (
                  <div className="mt-2 flex items-center gap-1 text-orange-500 text-[11px] font-semibold">
                    <Icon name="CheckCircle" size={12} />
                    Выбрано
                  </div>
                )}
              </button>
            ))}
          </div>

          <button
            onClick={handleSubmit}
            disabled={selected === null}
            className="w-full bg-orange-500 text-white py-3 text-sm font-bold tracking-wide hover:bg-orange-600 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {selected !== null ? `Получить: ${gifts[selected].title} →` : "Выберите подарок"}
          </button>

          <button
            onClick={handleClose}
            className="w-full text-center text-xs text-muted-foreground mt-3 hover:text-foreground transition-colors"
          >
            Нет, спасибо
          </button>
        </div>
      </div>
    </div>
  )
}

export default PromoPopup
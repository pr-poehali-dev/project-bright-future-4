import { useState, useEffect } from "react"
import Icon from "@/components/ui/icon"

export function PromoPopup() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const dismissed = sessionStorage.getItem("promo_dismissed")
    if (dismissed) return
    const timer = setTimeout(() => setOpen(true), 30000)
    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    sessionStorage.setItem("promo_dismissed", "1")
    setOpen(false)
  }

  const handleClick = () => {
    handleClose()
    const el = document.getElementById("calculator")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={handleClose} />
      <div className="relative bg-white w-full max-w-sm shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
        <div className="bg-orange-500 px-6 py-4">
          <p className="text-white text-xs tracking-[0.2em] uppercase font-medium">Специальное предложение</p>
        </div>

        <button
          onClick={handleClose}
          className="absolute top-3 right-4 text-white/80 hover:text-white transition-colors"
        >
          <Icon name="X" size={18} />
        </button>

        <div className="p-6">
          <h2 className="text-xl font-bold mb-2 leading-snug">
            Бесплатный выезд на участок
          </h2>
          <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
            Оставьте заявку сейчас — наш специалист бесплатно выедет к вам и рассчитает точную смету без обязательств.
          </p>

          <div className="space-y-2 mb-6">
            <div className="flex items-center gap-2 text-sm">
              <Icon name="Check" size={15} className="text-orange-500 flex-shrink-0" />
              <span>Фиксированная цена в договоре</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Icon name="Check" size={15} className="text-orange-500 flex-shrink-0" />
              <span>Строим за 2–4 месяца</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Icon name="Check" size={15} className="text-orange-500 flex-shrink-0" />
              <span>Гарантия на конструктив</span>
            </div>
          </div>

          <button
            onClick={handleClick}
            className="w-full bg-orange-500 text-white py-3 text-sm font-bold tracking-wide hover:bg-orange-600 transition-colors"
          >
            Рассчитать стоимость →
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

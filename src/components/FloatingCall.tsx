import { useState, useEffect } from "react"
import Icon from "@/components/ui/icon"

export function FloatingCall() {
  const [visible, setVisible] = useState(false)
  const [open, setOpen] = useState(false)
  const [atBottom, setAtBottom] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const docHeight = document.documentElement.scrollHeight
      setVisible(scrollY > 300)
      setAtBottom(scrollY + windowHeight >= docHeight - 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })
  const scrollToBottom = () => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" })

  return (
    <>
      <div className={`md:hidden fixed bottom-6 left-4 z-50 flex flex-col gap-2 transition-all duration-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}>
        <button
          onClick={scrollToTop}
          aria-label="Наверх"
          className="w-11 h-11 flex items-center justify-center text-gray-400/70 active:scale-95 transition-transform"
        >
          <Icon name="ChevronUp" size={24} />
        </button>
        <button
          onClick={atBottom ? scrollToTop : scrollToBottom}
          aria-label={atBottom ? "Наверх" : "Вниз"}
          className="w-11 h-11 flex items-center justify-center text-gray-400/70 active:scale-95 transition-transform"
        >
          <Icon name={atBottom ? "ChevronUp" : "ChevronDown"} size={20} />
        </button>
      </div>

      <button
        onClick={() => setOpen(true)}
        aria-label="Наши контакты"
        className={`md:hidden fixed bottom-6 right-4 z-50 flex items-center gap-2 bg-orange-500 text-white px-4 py-3 shadow-lg transition-all duration-300 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <Icon name="Phone" size={18} />
        <span className="text-sm font-bold tracking-wide">Наши контакты</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center p-4 md:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="relative bg-white w-full max-w-md p-8 shadow-2xl mb-2">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-foreground/50 hover:text-foreground transition-colors"
            >
              <Icon name="X" size={20} />
            </button>

            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">TOYSTROY · Тула</p>
            <h2 className="text-2xl font-bold mb-4">Наши контакты</h2>
            <div className="flex items-center gap-2 mb-6 text-sm text-muted-foreground">
              <Icon name="Clock" size={14} />
              <span>Работаем с 10:00 до 19:00</span>
            </div>

            <div className="space-y-5">
              <a href="tel:+79509170974" className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-foreground/5 flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={18} className="text-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">Телефон</p>
                  <p className="font-semibold group-hover:text-orange-500 transition-colors">+7 (950) 917-09-74</p>
                </div>
              </a>

              <a href="mailto:Toystroy71rus@mail.ru" className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-foreground/5 flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={18} className="text-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">Email</p>
                  <p className="font-semibold group-hover:text-orange-500 transition-colors">Toystroy71rus@mail.ru</p>
                </div>
              </a>

              <a href="https://vk.ru/toystroy71" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-foreground/5 flex items-center justify-center flex-shrink-0">
                  <Icon name="Users" size={18} className="text-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">ВКонтакте</p>
                  <p className="font-semibold group-hover:text-orange-500 transition-colors">vk.ru/toystroy71</p>
                </div>
              </a>

              <a href="https://wa.me/79509170974" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-foreground/5 flex items-center justify-center flex-shrink-0">
                  <Icon name="MessageCircle" size={18} className="text-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">WhatsApp</p>
                  <p className="font-semibold group-hover:text-orange-500 transition-colors">+7 (950) 917-09-74</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
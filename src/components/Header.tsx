import { useState, useEffect, MouseEvent } from "react"
import { cn } from "../lib/utils"
import Icon from "@/components/ui/icon"
import { GiftModal } from "./GiftModal"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)
  const [giftOpen, setGiftOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <header
        className={cn(
          "fixed z-50 transition-all duration-500 top-0 left-0 right-0",
          scrolled
            ? "bg-primary backdrop-blur-md py-4"
            : "bg-transparent py-4",
        )}
      >
        <nav className="container mx-auto px-6 flex items-center justify-between md:px-[24]">
          <a href="/" className="flex items-center gap-3 group" onClick={scrollToTop}>
            <div className="w-10 h-10 bg-white flex items-center justify-center rounded-sm flex-shrink-0">
              <span className="text-foreground text-lg font-bold tracking-tight">TS</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white text-lg font-semibold tracking-widest uppercase leading-tight">TOYSTROY</span>
              <span className="text-white/60 text-[10px] tracking-wide leading-tight">Тула</span>
            </div>
          </a>

          <ul className="hidden md:flex items-center gap-6 text-xs tracking-wide">
            {[
              { label: "Главная", href: "#hero" },
              { label: "О нас", href: "#about" },
              { label: "Наши работы", href: "#projects" },
              { label: "Услуги", href: "#services" },
              { label: "Отзывы", href: "#reviews" },
              { label: "Вопросы", href: "#faq" },
              { label: "Партнёры", href: "#partners" },
            ].map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="hover:text-[rgb(251,146,60)] transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 hover:after:w-full after:bg-[rgb(251,146,60)] after:transition-all after:duration-300"
                  style={{color: '#F5E4A0', textShadow: '0 2px 4px rgba(0,0,0,0.8), 0 4px 10px rgba(0,0,0,0.5), 2px 2px 0px rgba(0,0,0,0.4)'}}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setContactOpen(true)}
              className="inline-flex items-center gap-2 text-sm px-5 py-2.5 transition-all duration-300 bg-white text-foreground border border-foreground/20 hover:bg-foreground hover:text-white"
            >
              Наши контакты
            </button>
            <button
              onClick={() => setGiftOpen(true)}
              title="Подарки на выбор"
              className="w-10 h-10 inline-flex items-center justify-center transition-all duration-300 bg-orange-500 text-white hover:bg-orange-600"
            >
              <Icon name="Gift" size={18} />
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setGiftOpen(true)}
              title="Подарки на выбор"
              className="w-9 h-9 inline-flex items-center justify-center bg-orange-500 text-white"
            >
              <Icon name="Gift" size={16} />
            </button>
          </div>
        </nav>

        {/* Горизонтальное меню на мобильном — всегда видно */}
        <div className="md:hidden mt-2 border-t border-white/10">
          <div className="overflow-x-auto scrollbar-hide">
            <ul className="flex items-center gap-1 px-4 py-2 min-w-max">
              {[
                { label: "Главная", href: "#hero" },
                { label: "О нас", href: "#about" },
                { label: "Работы", href: "#projects" },
                { label: "Услуги", href: "#services" },
                { label: "Отзывы", href: "#reviews" },
                { label: "Вопросы", href: "#faq" },
                { label: "Партнёры", href: "#partners" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="block px-3 py-1 text-xs font-medium whitespace-nowrap hover:text-orange-400 transition-colors duration-200"
                    style={{color: '#F5E4A0', textShadow: '0 1px 3px rgba(0,0,0,0.8)'}}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={() => setContactOpen(true)}
                  className="block px-3 py-1 text-xs font-medium whitespace-nowrap text-orange-300 hover:text-orange-400 transition-colors duration-200"
                >
                  Контакты
                </button>
              </li>
            </ul>
          </div>
        </div>


      </header>

      <GiftModal open={giftOpen} onClose={() => setGiftOpen(false)} />

      {/* Модальное окно с контактами */}
      {contactOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setContactOpen(false)} />
          <div className="relative bg-white w-full max-w-md p-8 shadow-2xl">
            <button
              onClick={() => setContactOpen(false)}
              className="absolute top-4 right-4 text-foreground/50 hover:text-foreground transition-colors"
            >
              <Icon name="X" size={20} />
            </button>

            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">TOYSTROY · Тула</p>
            <h2 className="text-2xl font-bold mb-8">Наши контакты</h2>

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

              <a href="https://t.me/+bl1G2_6xZLRmYTdi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-foreground/5 flex items-center justify-center flex-shrink-0">
                  <Icon name="Send" size={18} className="text-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">Телеграм</p>
                  <p className="font-semibold group-hover:text-orange-500 transition-colors">Написать в Telegram</p>
                </div>
              </a>

              <a href="https://max.ru/join/eBogWRUdUiahBG30wNhO0hpDgvUTSuTV1v0FxL9skhI" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-foreground/5 flex items-center justify-center flex-shrink-0">
                  <Icon name="MessageCircle" size={18} className="text-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">MAX</p>
                  <p className="font-semibold group-hover:text-orange-500 transition-colors">Написать в MAX</p>
                </div>
              </a>
            </div>

            <a
              href="tel:+79509170974"
              className="mt-8 w-full inline-flex items-center justify-center gap-2 bg-foreground text-white px-6 py-3 text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              <Icon name="Phone" size={16} />
              Позвонить сейчас
            </a>
          </div>
        </div>
      )}
    </>
  )
}
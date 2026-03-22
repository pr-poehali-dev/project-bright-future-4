import { useState, useEffect, MouseEvent } from "react"
import { cn } from "../lib/utils"
import Icon from "@/components/ui/icon"
import { GiftModal } from "./GiftModal"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)
  const [giftOpen, setGiftOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMobileMenu = () => setMobileMenuOpen(false)

  const scrollToTop = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <header
        className={cn(
          "fixed z-50 transition-all duration-500 my-0 py-0 rounded-none",
          scrolled || mobileMenuOpen
            ? "bg-primary backdrop-blur-md py-4 top-4 left-4 right-4 rounded-2xl"
            : "bg-transparent py-4 top-0 left-0 right-0",
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

          <ul className="hidden md:flex items-center gap-10 text-sm tracking-wide">
            {[
              { label: "Главная", href: "#hero" },
              { label: "О нас", href: "#about" },
              { label: "Проекты", href: "#projects" },
              { label: "Услуги", href: "#services" },
              { label: "Вопросы", href: "#faq" },
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
              onClick={() => setGiftOpen(true)}
              className="inline-flex items-center gap-2 text-sm px-4 py-2.5 transition-all duration-300 bg-orange-500 text-white hover:bg-orange-600"
            >
              <Icon name="Gift" size={15} />
              Подарки на выбор
            </button>
            <button
              onClick={() => setContactOpen(true)}
              className="inline-flex items-center gap-2 text-sm px-5 py-2.5 transition-all duration-300 bg-white text-foreground border border-foreground/20 hover:bg-foreground hover:text-white"
            >
              Наши контакты
            </button>
          </div>

          <button
            className="md:hidden z-50 transition-colors duration-300 text-white"
            aria-label={mobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="4" y1="8" x2="20" y2="8" />
                <line x1="4" y1="16" x2="20" y2="16" />
              </svg>
            )}
          </button>
        </nav>

        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            mobileMenuOpen ? "max-h-[600px] opacity-100 mt-8" : "max-h-0 opacity-0",
          )}
        >
          <div className="container mx-auto px-6">
            <ul className="flex flex-col gap-6 mb-8">
              {[
                { label: "Главная", href: "#hero" },
                { label: "О нас", href: "#about" },
                { label: "Проекты", href: "#projects" },
                { label: "Услуги", href: "#services" },
                { label: "Вопросы", href: "#faq" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-[rgb(251,146,60)] transition-colors duration-300 text-white text-4xl font-light block"
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <button
              onClick={() => { setContactOpen(true); closeMobileMenu() }}
              className="inline-flex items-center justify-center gap-2 text-sm px-5 py-2.5 bg-white text-foreground border border-foreground/20 hover:bg-foreground hover:text-white transition-all duration-300 mb-4"
            >
              Наши контакты
            </button>
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
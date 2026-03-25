import { useState, useEffect } from "react"
import Icon from "@/components/ui/icon"

export function FloatingCall() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <a
      href="tel:+79509170974"
      aria-label="Позвонить нам"
      className={`md:hidden fixed bottom-6 right-4 z-50 flex items-center gap-2 bg-orange-500 text-white px-4 py-3 shadow-lg transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <Icon name="Phone" size={18} />
      <span className="text-sm font-bold tracking-wide">Позвонить</span>
    </a>
  )
}

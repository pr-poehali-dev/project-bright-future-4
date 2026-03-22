import { useState } from "react"
import Icon from "@/components/ui/icon"

const gifts = [
  {
    icon: "Drill",
    title: "Сваи в подарок",
    description: "Фундамент на винтовых сваях при заказе дома под ключ",
  },
  {
    icon: "Zap",
    title: "Электрика в подарок",
    description: "Полная разводка электрики внутри дома",
  },
  {
    icon: "FileText",
    title: "Проект в подарок",
    description: "Индивидуальный проект дома с планировкой",
  },
  {
    icon: "AppWindow",
    title: "Окна в подарок",
    description: "Установка окон ПВХ во всём доме",
  },
  {
    icon: "Shield",
    title: "Огне-биозащита в подарок",
    description: "Обработка всего каркаса огне-биозащитным составом",
  },
]

interface GiftModalProps {
  open: boolean
  onClose: () => void
}

export function GiftModal({ open, onClose }: GiftModalProps) {
  const [selected, setSelected] = useState<number | null>(null)

  if (!open) return null

  const handleSubmit = () => {
    const gift = selected !== null ? gifts[selected].title : ""
    const anchor = document.getElementById("calculator")
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth" })
    }
    onClose()
    if (gift) {
      setTimeout(() => {
        const textarea = document.querySelector<HTMLTextAreaElement>("textarea")
        if (textarea) {
          textarea.value = `Хочу подарок: ${gift}`
          textarea.dispatchEvent(new Event("input", { bubbles: true }))
        }
      }, 800)
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white w-full max-w-2xl p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-foreground/50 hover:text-foreground transition-colors"
        >
          <Icon name="X" size={20} />
        </button>

        <div className="flex items-center gap-3 mb-2">
          <Icon name="Gift" size={28} className="text-orange-500" />
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Специальное предложение</p>
        </div>
        <h2 className="text-2xl font-bold mb-2">Подарки на выбор</h2>
        <p className="text-muted-foreground text-sm mb-8">Выберите один подарок при заказе строительства под ключ</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {gifts.map((gift, index) => (
            <button
              key={index}
              onClick={() => setSelected(index)}
              className={`flex flex-col items-center text-center p-6 border-2 transition-all duration-200 ${
                selected === index
                  ? "border-orange-500 bg-orange-50"
                  : "border-border hover:border-orange-300"
              }`}
            >
              <Icon
                name={gift.icon}
                size={36}
                className={`mb-3 ${selected === index ? "text-orange-500" : "text-foreground/60"}`}
                strokeWidth={1.5}
              />
              <p className="font-bold text-sm mb-1">{gift.title}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{gift.description}</p>
              {selected === index && (
                <div className="mt-3 flex items-center gap-1 text-orange-500 text-xs font-semibold">
                  <Icon name="CheckCircle" size={14} />
                  Выбрано
                </div>
              )}
            </button>
          ))}
        </div>

        <button
          onClick={handleSubmit}
          disabled={selected === null}
          className="w-full inline-flex items-center justify-center gap-2 bg-foreground text-white px-6 py-4 text-sm font-semibold hover:bg-foreground/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <Icon name="Gift" size={16} />
          {selected !== null ? `Получить: ${gifts[selected].title}` : "Выберите подарок"}
        </button>

        <p className="text-center text-xs text-muted-foreground mt-4">
          После выбора вы перейдёте к форме заявки
        </p>
      </div>
    </div>
  )
}

export default GiftModal

import { useState } from "react"
import { HighlightedText } from "./HighlightedText"
import Icon from "@/components/ui/icon"

const buildingTypes = ["Жилой дом", "Баня", "Дача"]

export function Calculator() {
  const [buildingType, setBuildingType] = useState("Жилой дом")
  const [area, setArea] = useState(80)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [comment, setComment] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const res = await fetch("https://functions.poehali.dev/47abad41-4ccf-413e-9fab-2c7da189c73c", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, buildingType, area, comment }),
      })
      if (res.ok) {
        setStatus("success")
        setName("")
        setPhone("")
        setComment("")
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="calculator" className="py-32 md:py-29 bg-secondary/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Оставить заявку</p>
          <h2 className="text-5xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Расскажите, что хотите <HighlightedText>построить</HighlightedText>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Заполните форму — мы свяжемся с вами, обсудим детали и подготовим смету бесплатно.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <form onSubmit={handleSubmit} className="space-y-8">

            <div>
              <p className="text-sm font-medium mb-4 tracking-wide uppercase text-muted-foreground">Тип постройки</p>
              <div className="flex flex-wrap gap-3">
                {buildingTypes.map((t) => (
                  <button
                    type="button"
                    key={t}
                    onClick={() => setBuildingType(t)}
                    className={`px-5 py-3 text-sm border transition-all duration-200 ${
                      buildingType === t
                        ? "bg-foreground text-background border-foreground"
                        : "border-border hover:border-foreground"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-medium mb-4 tracking-wide uppercase text-muted-foreground">
                Желаемая площадь — <span className="text-foreground">{area} м²</span>
              </p>
              <input
                type="range"
                min={20}
                max={400}
                step={10}
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full accent-foreground cursor-pointer"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>20 м²</span>
                <span>400 м²</span>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium mb-3 tracking-wide uppercase text-muted-foreground">Ваше имя</p>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Иван Иванов"
                className="w-full border border-border px-4 py-3 text-sm bg-background focus:outline-none focus:border-foreground transition-colors"
              />
            </div>

            <div>
              <p className="text-sm font-medium mb-3 tracking-wide uppercase text-muted-foreground">Телефон</p>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+7 (___) ___-__-__"
                className="w-full border border-border px-4 py-3 text-sm bg-background focus:outline-none focus:border-foreground transition-colors"
              />
            </div>

            <div>
              <p className="text-sm font-medium mb-3 tracking-wide uppercase text-muted-foreground">Пожелания</p>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Опишите, что вы хотите: этажность, планировка, сроки, бюджет..."
                rows={4}
                className="w-full border border-border px-4 py-3 text-sm bg-background focus:outline-none focus:border-foreground transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center justify-center gap-3 bg-foreground text-background px-8 py-4 text-sm tracking-wide hover:bg-foreground/90 transition-colors duration-300 w-full disabled:opacity-60"
            >
              {status === "loading" ? "Отправляем..." : "Отправить заявку"}
              {status !== "loading" && <Icon name="ArrowRight" size={16} />}
            </button>

            {status === "success" && (
              <div className="flex items-center gap-3 text-green-700 bg-green-50 border border-green-200 px-4 py-3 text-sm">
                <Icon name="CheckCircle" size={18} />
                Заявка отправлена! Мы свяжемся с вами в ближайшее время.
              </div>
            )}
            {status === "error" && (
              <div className="flex items-center gap-3 text-red-700 bg-red-50 border border-red-200 px-4 py-3 text-sm">
                <Icon name="AlertCircle" size={18} />
                Ошибка отправки. Позвоните нам: +7 (950) 917-09-74
              </div>
            )}
          </form>

          <div className="bg-foreground text-background p-10 flex flex-col gap-8 lg:sticky lg:top-32">
            <div>
              <p className="text-background/60 text-sm tracking-[0.2em] uppercase mb-6">Ваша заявка включает</p>
              <ul className="space-y-4">
                {[
                  { icon: "Home", text: `Тип: ${buildingType}` },
                  { icon: "Maximize", text: `Площадь: ${area} м²` },
                  { icon: "Car", text: "Бесплатный выезд на участок" },
                  { icon: "FileText", text: "Смета без обязательств" },
                  { icon: "Clock", text: "Ответ в течение 1 часа" },
                ].map((item) => (
                  <li key={item.text} className="flex items-center gap-4 text-sm text-background/80">
                    <Icon name={item.icon} size={18} className="text-background/50 flex-shrink-0" />
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-background/20 pt-8">
              <p className="text-background/50 text-xs leading-relaxed mb-4">
                Или свяжитесь с нами напрямую.
              </p>
              <a href="tel:+79509170974" className="flex items-center gap-3 text-background hover:text-background/80 transition-colors">
                <Icon name="Phone" size={16} />
                <span className="text-sm font-medium">+7 (950) 917-09-74</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Calculator
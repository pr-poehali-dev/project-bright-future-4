import { useState } from "react"
import { Check, Phone, Mail } from "lucide-react"
import { PrivacyModal } from "@/components/PrivacyModal"
import { TermsModal } from "@/components/TermsModal"

export default function KarkasniyeBanyaOrderForm() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    try {
      await fetch("https://functions.poehali.dev/47abad41-4ccf-413e-9fab-2c7da189c73c", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          comment: "Заявка со страницы: Каркасные бани Тула",
          buildingType: "Баня",
        }),
      })
      setStatus("success")
    } catch {
      setStatus("error")
    }
  }

  return (
    <>
      {/* Форма */}
      <section id="order" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3">Бесплатный расчёт</p>
              <h2 className="text-3xl md:text-4xl font-medium mb-4">
                Узнайте стоимость бани в Туле
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Оставьте заявку — перезвоним в течение 30 минут, ответим на вопросы
                и назовём точную стоимость. Выезд специалиста на участок — бесплатно.
              </p>
              <div className="space-y-4">
                {[
                  "Расчёт стоимости — бесплатно",
                  "Выезд специалиста на участок — бесплатно",
                  "Проект бани — в подарок",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center shrink-0">
                      <Check size={12} className="text-white" />
                    </div>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex items-center gap-4">
                <a
                  href="mailto:Toystroy71rus@mail.ru"
                  className="flex items-center gap-2 text-sm font-medium text-[#1a0f0f] hover:text-orange-500 transition-colors"
                >
                  <Mail size={20} />
                  Написать на почту
                </a>
                <span className="text-gray-300">|</span>
                <a
                  href="tel:+78001234567"
                  className="flex items-center gap-2 text-sm font-medium text-[#1a0f0f] hover:text-orange-500 transition-colors"
                >
                  <Phone size={20} />
                  8 (800) 123-45-67
                </a>
              </div>
            </div>

            <div>
              {status === "success" ? (
                <div className="bg-green-50 border border-green-200 text-green-700 p-8 text-center">
                  <div className="text-4xl mb-3">✓</div>
                  <p className="font-semibold text-lg mb-1">Заявка отправлена!</p>
                  <p className="text-sm">Мы свяжемся с вами в ближайшее время.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white p-8 shadow-sm">
                  <h3 className="text-xl font-semibold mb-6">Получить бесплатный расчёт</h3>
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Иван Петров"
                      required
                      className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">Номер телефона</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+7 (___) ___-__-__"
                      required
                      className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white font-semibold py-4 transition-colors"
                  >
                    {status === "loading" ? "Отправляем..." : "Получить расчёт бесплатно"}
                  </button>
                  {status === "error" && (
                    <p className="text-red-500 text-sm mt-3 text-center">
                      Ошибка. Позвоните нам: 8 (800) 123-45-67
                    </p>
                  )}
                  <p className="text-xs text-gray-400 mt-3 text-center">
                    Нажимая кнопку, вы соглашаетесь с{" "}
                    <a href="/" className="underline hover:text-gray-600">политикой конфиденциальности</a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <a href="/" className="flex items-center gap-3">
              <img
                src="https://cdn.poehali.dev/files/81218afd-c0f8-4ab8-8954-5409def67550.jpg"
                alt="TOYSTROY"
                className="w-9 h-9 rounded object-cover"
              />
              <span className="text-lg font-semibold tracking-widest uppercase">TOYSTROY</span>
            </a>
            <p className="text-sm text-gray-400 text-center">
              Строим каркасные бани по Тульской области · Тепло · Надёжно · С гарантией
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <a href="/" className="hover:text-orange-500 transition-colors">На главную</a>
              <a href="/#projects" className="hover:text-orange-500 transition-colors">Проекты</a>
              <a href="tel:+78001234567" className="hover:text-orange-500 transition-colors">Позвонить</a>
            </div>
          </div>
          <div className="flex gap-4 justify-center mt-6">
            <PrivacyModal />
            <TermsModal />
          </div>
        </div>
      </footer>
    </>
  )
}
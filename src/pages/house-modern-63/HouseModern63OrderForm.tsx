import { useState } from "react"
import { Mail } from "lucide-react"
import { PrivacyModal } from "@/components/PrivacyModal"
import { TermsModal } from "@/components/TermsModal"

export default function HouseModern63OrderForm() {
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
          comment: "Заявка со страницы: Каркасный дом «Модерн 63»",
          buildingType: "Жилой дом",
          area: 74,
        }),
      })
      setStatus("success")
    } catch {
      setStatus("error")
    }
  }

  return (
    <>
      {/* CTA Banner */}
      <section className="py-16 bg-orange-500">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white mb-4">
            Хотите такой же дом?
          </h2>
          <p className="text-orange-100 text-lg mb-8 max-w-xl mx-auto">
            Оставьте заявку — наш специалист свяжется с вами в течение 30 минут, ответит на вопросы
            и назовёт точную стоимость под ваш участок.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#order"
              className="bg-white text-orange-500 font-semibold px-8 py-4 hover:bg-orange-50 transition-colors"
            >
              Оставить заявку
            </a>
            <a
              href="mailto:Toystroy71rus@mail.ru"
              className="border-2 border-white text-white font-semibold px-8 py-4 hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              Написать на почту
            </a>
          </div>
        </div>
      </section>

      {/* Форма заявки */}
      <section id="order" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3">Обратная связь</p>
              <h2 className="text-2xl md:text-3xl font-medium mb-2">Заказать этот проект</h2>
              <p className="text-gray-500">
                Заполните форму — перезвоним в течение 30 минут и проконсультируем бесплатно.
              </p>
            </div>

            {status === "success" ? (
              <div className="bg-green-50 border border-green-200 text-green-700 p-8 text-center">
                <div className="text-4xl mb-3">✓</div>
                <p className="font-semibold text-lg mb-1">Заявка отправлена!</p>
                <p className="text-sm">Мы свяжемся с вами в ближайшее время.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white p-8 shadow-sm">
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
                <div className="mb-4">
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
                <div className="bg-orange-50 border border-orange-100 rounded px-4 py-3 mb-6 text-sm text-orange-700">
                  <strong>Проект:</strong> Каркасный дом «Модерн 63» 12 × 6 м
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white font-semibold py-4 transition-colors"
                >
                  {status === "loading" ? "Отправляем..." : "Отправить заявку"}
                </button>
                {status === "error" && (
                  <p className="text-red-500 text-sm mt-3 text-center">
                    Ошибка отправки. Позвоните нам: 8 (800) 123-45-67
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
              Строим каркасные дома по Тульской области · Тепло · Надёжно · С гарантией
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
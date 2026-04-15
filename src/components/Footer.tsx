import { PrivacyModal } from "@/components/PrivacyModal"
import { TermsModal } from "@/components/TermsModal"
import Icon from "@/components/ui/icon"

export function Footer() {
  return (
    <footer className="py-16 md:py-24 border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <a href="/" className="inline-flex items-center gap-3 mb-6">
              <img src="https://cdn.poehali.dev/files/81218afd-c0f8-4ab8-8954-5409def67550.jpg" alt="TS logo" className="w-9 h-9 rounded flex-shrink-0 object-cover" />
              <span className="text-foreground text-xl font-semibold tracking-widest uppercase">TOYSTROY</span>
            </a>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Строим каркасные дома под ключ. Быстро, тепло и с гарантией — от проекта до новоселья.
            </p>

          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-medium mb-4">Компания</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#projects" className="hover:text-foreground transition-colors">
                  Проекты
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-foreground transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-foreground transition-colors">
                  Услуги
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-foreground transition-colors">
                  Контакты
                </a>
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium mb-4">Связь</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="mailto:Toystroy71rus@mail.ru" className="hover:text-foreground transition-colors">
                  Toystroy71rus@mail.ru
                </a>
              </li>
              <li>
                <a href="tel:+79509170974" className="hover:text-foreground transition-colors">
                  +7 (950) 917-09-74
                </a>
              </li>

              <li>
                <a href="https://vk.ru/toystroy71" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  ВКонтакте
                </a>
              </li>
              <li>
                <a href="https://max.ru/join/eBogWRUdUiahBG30wNhO0hpDgvUTSuTV1v0FxL9skhI" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  MAX
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Реквизиты */}
        <div className="mb-8 text-base text-foreground font-medium space-y-1">
          <p>ИП Атлиханов Р. С.</p>
          <p>ИНН: 710710119119</p>
          <p>ОГРНИП: 326710000025923</p>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm text-muted-foreground">
          <p>© Каркасные дома. Все права защищены.</p>
          <div className="flex gap-6">
            <PrivacyModal />
            <TermsModal />
          </div>
        </div>
      </div>
    </footer>
  )
}
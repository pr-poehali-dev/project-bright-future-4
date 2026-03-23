import { PrivacyModal } from "@/components/PrivacyModal"
import { TermsModal } from "@/components/TermsModal"
import Icon from "@/components/ui/icon"

export function Footer() {
  return (
    <footer className="py-16 md:py-24 border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="/" className="inline-flex items-center gap-3 mb-6">
              <div className="w-9 h-9 bg-foreground rounded flex items-center justify-center flex-shrink-0">
                <span className="text-background text-sm font-bold tracking-tight">TS</span>
              </div>
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
                <a href="https://t.me/+bl1G2_6xZLRmYTdi" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  Телеграм
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

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row md:items-center justify-between gap-4 text-sm text-muted-foreground">
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
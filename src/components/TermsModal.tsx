import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function TermsModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="hover:text-foreground transition-colors text-left">
          Условия использования
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-medium">Условия использования</DialogTitle>
        </DialogHeader>
        <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
          <div>
            <p className="text-foreground font-medium mb-2">1. Общие условия</p>
            <p>Используя сайт компании TOYSTROY, вы подтверждаете, что ознакомились с настоящими Условиями использования и согласны с ними. Если вы не согласны с условиями, пожалуйста, прекратите использование сайта.</p>
          </div>

          <div>
            <p className="text-foreground font-medium mb-2">2. Использование сайта</p>
            <p>Сайт предназначен исключительно для информирования о деятельности компании и услугах по строительству каркасных домов. Запрещается:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Использовать сайт в незаконных целях</li>
              <li>Копировать и распространять материалы без разрешения</li>
              <li>Предпринимать действия, нарушающие работу сайта</li>
              <li>Размещать ложную или вводящую в заблуждение информацию</li>
            </ul>
          </div>

          <div>
            <p className="text-foreground font-medium mb-2">3. Интеллектуальная собственность</p>
            <p>Все материалы сайта — тексты, фотографии, логотипы, дизайн — являются собственностью TOYSTROY и защищены законодательством об интеллектуальной собственности. Любое использование материалов без письменного согласия компании запрещено.</p>
          </div>

          <div>
            <p className="text-foreground font-medium mb-2">4. Информация на сайте</p>
            <p>Компания стремится поддерживать актуальность информации на сайте, однако не гарантирует её абсолютную точность и полноту. Цены, сроки и условия строительства уточняются индивидуально при заключении договора.</p>
          </div>

          <div>
            <p className="text-foreground font-medium mb-2">5. Ограничение ответственности</p>
            <p>TOYSTROY не несёт ответственности за любые убытки или ущерб, возникшие в результате использования или невозможности использования сайта, а также за действия третьих лиц на сайте.</p>
          </div>

          <div>
            <p className="text-foreground font-medium mb-2">6. Ссылки на сторонние ресурсы</p>
            <p>Сайт может содержать ссылки на сторонние ресурсы. Компания не несёт ответственности за содержание и политику конфиденциальности таких сайтов.</p>
          </div>

          <div>
            <p className="text-foreground font-medium mb-2">7. Изменение условий</p>
            <p>Компания вправе в любое время изменять настоящие Условия использования без предварительного уведомления. Актуальная версия всегда размещена на данном сайте. Продолжение использования сайта после внесения изменений означает ваше согласие с новыми условиями.</p>
          </div>

          <div>
            <p className="text-foreground font-medium mb-2">8. Контакты</p>
            <p>По всем вопросам, связанным с условиями использования сайта:</p>
            <p className="mt-1">Email: <a href="mailto:Toystroy71rus@mail.ru" className="text-foreground hover:underline">Toystroy71rus@mail.ru</a></p>
            <p>Телефон: <a href="tel:+79509170974" className="text-foreground hover:underline">+7 (950) 917-09-74</a></p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default TermsModal

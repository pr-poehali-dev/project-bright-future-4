import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function PrivacyModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="hover:text-foreground transition-colors text-left">
          Политика конфиденциальности
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-medium">Политика конфиденциальности</DialogTitle>
        </DialogHeader>
        <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
          <div>
            <p className="text-foreground font-medium mb-2">1. Общие положения</p>
            <p>Настоящая Политика конфиденциальности регулирует порядок обработки и защиты персональных данных физических лиц, которые используют сайт компании TOYSTROY. Используя сайт, вы соглашаетесь с условиями настоящей Политики.</p>
          </div>

          <div>
            <p className="text-foreground font-medium mb-2">2. Сбор персональных данных</p>
            <p>Мы собираем следующие персональные данные, которые вы добровольно предоставляете при заполнении форм на сайте:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Фамилия, имя, отчество</li>
              <li>Номер телефона</li>
              <li>Адрес электронной почты</li>
              <li>Иные данные, указанные вами в форме обратной связи</li>
            </ul>
          </div>

          <div>
            <p className="text-foreground font-medium mb-2">3. Цели обработки данных</p>
            <p>Персональные данные обрабатываются исключительно в следующих целях:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Обработка заявок и обращений клиентов</li>
              <li>Консультирование по вопросам строительства</li>
              <li>Заключение и исполнение договоров</li>
              <li>Информирование о ходе выполнения работ</li>
            </ul>
          </div>

          <div>
            <p className="text-foreground font-medium mb-2">4. Защита данных</p>
            <p>Мы принимаем все необходимые организационные и технические меры для защиты ваших персональных данных от несанкционированного доступа, изменения, раскрытия или уничтожения. Доступ к персональным данным имеют только уполномоченные сотрудники компании.</p>
          </div>

          <div>
            <p className="text-foreground font-medium mb-2">5. Передача данных третьим лицам</p>
            <p>Мы не передаём ваши персональные данные третьим лицам без вашего согласия, за исключением случаев, предусмотренных законодательством Российской Федерации.</p>
          </div>

          <div>
            <p className="text-foreground font-medium mb-2">6. Права пользователя</p>
            <p>Вы имеете право в любой момент:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Запросить информацию об обрабатываемых персональных данных</li>
              <li>Потребовать исправления или удаления данных</li>
              <li>Отозвать согласие на обработку данных</li>
            </ul>
          </div>

          <div>
            <p className="text-foreground font-medium mb-2">7. Контакты</p>
            <p>По всем вопросам, связанным с обработкой персональных данных, вы можете обратиться к нам:</p>
            <p className="mt-1">Email: <a href="mailto:Toystroy71rus@mail.ru" className="text-foreground hover:underline">Toystroy71rus@mail.ru</a></p>
            <p>Телефон: <a href="tel:+79509170974" className="text-foreground hover:underline">+7 (950) 917-09-74</a></p>
          </div>

          <div>
            <p className="text-foreground font-medium mb-2">8. Изменения политики</p>
            <p>Компания оставляет за собой право вносить изменения в настоящую Политику конфиденциальности. Актуальная версия всегда доступна на данном сайте.</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default PrivacyModal

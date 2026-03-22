const reviews = [
  {
    name: "Андрей Соколов",
    location: "Тульская область",
    text: "Строили дом 130 м² — уложились в 3 месяца, как и обещали. Бригада аккуратная, мусор убирали каждый день. Перезимовали первую зиму — тепло, никаких продувов. Рекомендую без оговорок.",
    rating: 5,
    date: "Январь 2025",
  },
  {
    name: "Елена Громова",
    location: "Тульская область",
    text: "Долго выбирала компанию, остановилась на TOYSTROY — не пожалела. Всё по смете, никаких скрытых доплат. Менеджер на связи в любое время, все вопросы решались быстро. Дача получилась лучше, чем мечтала.",
    rating: 5,
    date: "Март 2025",
  },
  {
    name: "Игорь Васильев",
    location: "Тульская область",
    text: "Заказывал дом под ключ с отделкой. Работой доволен: качество материалов хорошее, стыки ровные, коммуникации разведены грамотно. Особенно понравилось, что договор с фиксированной ценой — это редкость.",
    rating: 5,
    date: "Февраль 2025",
  },
  {
    name: "Татьяна Морозова",
    location: "Тульская область",
    text: "Строили в суровых условиях — морозы, удалённый участок. Ребята справились отлично. Дом 160 м², тёплый, уютный. Уже прошла зима — ни одной претензии. Планируем заказывать баню у них же.",
    rating: 5,
    date: "Апрель 2025",
  },
]

export function Reviews() {
  return (
    <section id="reviews" className="py-32 md:py-29 bg-secondary/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Отзывы клиентов</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">Что говорят наши клиенты</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-background p-8 flex flex-col gap-6">
              <div className="flex gap-1">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i} className="text-orange-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-foreground leading-relaxed flex-1">"{review.text}"</p>
              <div className="flex items-end justify-between border-t border-border pt-6">
                <div>
                  <p className="font-medium text-sm">{review.name}</p>
                  <p className="text-muted-foreground text-sm">{review.location}</p>
                </div>
                <span className="text-muted-foreground/60 text-xs">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
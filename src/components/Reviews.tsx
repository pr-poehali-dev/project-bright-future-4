import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Icon from "@/components/ui/icon"

type TextReview = {
  type: "text"
  name: string
  location: string
  text: string
  rating: number
  date: string
  sortYear: number
  sortMonth: number
  photos?: string[]
}

type VideoReview = {
  type: "video"
  title: string
  text: string
  videoId: string
  date: string
  sortYear: number
  sortMonth: number
}

type Review = TextReview | VideoReview

const allReviews: Review[] = [
  {
    type: "video",
    title: "Видеоотзыв клиента",
    text: "Заказали каркасный дом 6×8 — результат превзошёл ожидания. Индивидуальный подход, учли все наши пожелания по планировке. Построили быстро, качество материалов отличное. Очень довольны, рекомендуем TOYSTROY!",
    videoId: "456239021",
    date: "2025",
    sortYear: 2025,
    sortMonth: 1,
  },
  {
    type: "text",
    name: "Елена Громова",
    location: "Тульская область",
    text: "Долго выбирала компанию, остановилась на TOYSTROY — не пожалела. Всё по смете, никаких скрытых доплат. Менеджер на связи в любое время, все вопросы решались быстро. Дача получилась лучше, чем мечтала.",
    rating: 5,
    date: "Март 2025",
    sortYear: 2025,
    sortMonth: 3,
  },
  {
    type: "text",
    name: "Игорь Васильев",
    location: "Тульская область",
    text: "Заказывал дом под ключ с отделкой. Работой доволен: качество материалов хорошее, стыки ровные, коммуникации разведены грамотно. Особенно понравилось, что договор с фиксированной ценой — это редкость.",
    rating: 5,
    date: "Февраль 2025",
    sortYear: 2025,
    sortMonth: 2,
  },
  {
    type: "text",
    name: "Андрей Соколов",
    location: "Тульская область",
    text: "Строили дом 130 м² — уложились в 3 месяца, как и обещали. Бригада аккуратная, мусор убирали каждый день. Перезимовали первую зиму — тепло, никаких продувов. Рекомендую без оговорок.",
    rating: 5,
    date: "Январь 2025",
    sortYear: 2025,
    sortMonth: 1,
  },
  {
    type: "video",
    title: "Видеоотзыв клиента",
    text: "Заказали каркасный дом 8×8 под ключ. Очень довольны результатом — качество строительства на высоте, работы выполнены точно в срок. Команда профессиональная, всё объяснили, учли все пожелания. Рекомендуем TOYSTROY всем!",
    videoId: "456239020",
    date: "2024",
    sortYear: 2024,
    sortMonth: 12,
  },
  {
    type: "text",
    name: "Михаил Захаров",
    location: "Тульская область",
    text: "Заказывали баню 6×4 под ключ. Построили за 5 недель — быстро и аккуратно. Парная держит жар отлично, даже в мороз -25 протапливается за час. Полки ровные, вагонка уложена красиво. Семья в восторге!",
    rating: 5,
    date: "Октябрь 2024",
    sortYear: 2024,
    sortMonth: 10,
  },
  {
    type: "text",
    name: "Светлана Борисова",
    location: "Тульская область",
    text: "Давно мечтала о своей бане — TOYSTROY воплотили мечту. Сделали проект, учли все пожелания: предбанник, комната отдыха, терраса. Качество материалов на высоте, швы проконопачены плотно. Теперь каждые выходные — баня!",
    rating: 5,
    date: "Август 2024",
    sortYear: 2024,
    sortMonth: 8,
  },
  {
    type: "text",
    name: "Сергей Лебедев",
    location: "Тульская область",
    text: "Обратился в TOYSTROY по совету соседа — и не прогадал. Построили дом 100 м² за 10 недель. Прораб постоянно на связи, фото с объекта присылали каждый день. Качество сборки отличное, всё ровно и аккуратно.",
    rating: 5,
    date: "Май 2024",
    sortYear: 2024,
    sortMonth: 5,
  },
  {
    type: "text",
    name: "Татьяна Морозова",
    location: "Тульская область",
    text: "Строили в суровых условиях — морозы, удалённый участок. Ребята справились отлично. Дом 160 м², тёплый, уютный. Уже прошла зима — ни одной претензии. Планируем заказывать баню у них же.",
    rating: 5,
    date: "Апрель 2024",
    sortYear: 2024,
    sortMonth: 4,
  },

  {
    type: "text",
    name: "Наталья Федорова",
    location: "Тульская область",
    text: "Очень довольна сотрудничеством. Команда профессионалов — видно, что любят своё дело. Предложили удачные решения по планировке, о которых я сама не подумала. Дом получился функциональным и красивым.",
    rating: 5,
    date: "Сентябрь 2023",
    sortYear: 2023,
    sortMonth: 9,
  },
  {
    type: "text",
    name: "Дмитрий Орлов",
    location: "Тульская область",
    text: "Давно мечтал о своём доме — наконец решился. TOYSTROY предложили хороший проект, объяснили все этапы, помогли выбрать материалы. Дом сдали точно в срок. Сейчас живём уже полгода — всё супер.",
    rating: 5,
    date: "Август 2023",
    sortYear: 2023,
    sortMonth: 8,
  },
  {
    type: "text",
    name: "Павел Кузнецов",
    location: "Тульская область",
    text: "Заказал баню 4×6 — результат превзошёл ожидания. Прораб лично контролировал каждый этап, присылал фото. Парная сделана по уму: правильный пирог, хорошая вентиляция. Первый пар был уже через 6 недель после начала стройки. Советую всем!",
    rating: 5,
    date: "Июль 2023",
    sortYear: 2023,
    sortMonth: 7,
  },
  {
    type: "text",
    name: "Ольга Никитина",
    location: "Тульская область",
    text: "Заказывали небольшой домик для родителей — 75 м², один этаж. Всё сделали быстро и чисто. Родители в восторге: тепло, светло, уютно. Цена оказалась ниже, чем у конкурентов при том же качестве.",
    rating: 5,
    date: "Июнь 2023",
    sortYear: 2023,
    sortMonth: 6,
  },
  {
    type: "text",
    name: "Виктор Степанов",
    location: "Тульская область",
    text: "Купил участок и сразу обратился в TOYSTROY — друзья посоветовали. Строили дачу 9×6 с верандой. Всё понравилось: приехали, замерили, через неделю уже стояли стены. Деньги переводил поэтапно, только за выполненные работы. Честно, прозрачно, без нервов.",
    rating: 5,
    date: "Февраль 2023",
    sortYear: 2023,
    sortMonth: 2,
  },
  {
    type: "text",
    name: "Илья Михайлович",
    location: "Тульская область",
    text: "Только недавно закончили строительство каркасной бани 5×5 с террасой. Уже успели попробовать — впечатления отличные! Баня быстро прогревается, держит жар хорошо. Терраса небольшая, но очень удобная — посидеть после парилки самое то. Ребята работали чисто и в срок, проблем не было, очень довольны результатом. Спасибо команде за свою работу!",
    rating: 5,
    date: "Май 2026",
    sortYear: 2026,
    sortMonth: 4,
    photos: [
      "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/e39f10f3-04a3-460e-88d9-b97ad3df9611.png",
      "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/bab266f6-de7e-4a73-9a63-8e79893bc4b8.jpg",
    ],
  },
  {
    type: "text",
    name: "Вячеслав",
    location: "Тульская область",
    text: "Заказывал в TOYSTROY каркасный дачный дом 8×8 для мамы. Остался доволен на все 100%! Построили быстро, в срок, без лишних вопросов и доплат. Дом тёплый, всё сделано качественно. Мама счастлива! Компания надёжная, люди отвечают за своё слово. Рекомендую!",
    rating: 5,
    date: "Май 2026",
    sortYear: 2026,
    sortMonth: 5,
    photos: [
      "https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/24b669fb-4ed8-41fe-88ae-83302e8894b9.png",
    ],
  },
]

const sorted = [...allReviews].sort(
  (a, b) => b.sortYear - a.sortYear || b.sortMonth - a.sortMonth,
)

export function Reviews() {
  const [current, setCurrent] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)
  const perPage = 2
  const total = Math.ceil(sorted.length / perPage)
  const visible = sorted.slice(current * perPage, current * perPage + perPage)

  const prev = () => setCurrent((c) => Math.max(0, c - 1))
  const next = () => setCurrent((c) => Math.min(total - 1, c + 1))
  const scrollLeft = () => scrollRef.current?.scrollBy({ left: -320, behavior: "smooth" })
  const scrollRight = () => scrollRef.current?.scrollBy({ left: 320, behavior: "smooth" })

  const renderReview = (review: Review, key: number, compact = false) => {
    if (review.type === "video") {
      return (
        <div key={key} className={`bg-background flex flex-col gap-4 ${compact ? "p-4" : "p-5 sm:p-8 gap-6 md:col-span-2"}`}>
          <div className={`flex flex-col gap-4 ${compact ? "" : "lg:flex-row gap-8"}`}>
            <div className={`w-full aspect-video ${compact ? "" : "lg:w-1/2"}`}>
              <iframe
                src={`https://vk.com/video_ext.php?oid=-230059674&id=${review.videoId}&hd=2`}
                width="100%"
                height="100%"
                allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className={`flex flex-col justify-between gap-4 ${compact ? "" : "lg:w-1/2 gap-6"}`}>
              <div>
                <div className="flex gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className={`text-orange-400 ${compact ? "text-sm" : "text-lg"}`}>★</span>
                  ))}
                </div>
                <p className={`text-foreground leading-relaxed ${compact ? "text-xs" : "text-base sm:text-lg"}`}>"{review.text}"</p>
              </div>
              <div className={`border-t border-border flex items-end justify-between ${compact ? "pt-3" : "pt-6"}`}>
                <div>
                  <p className={`font-medium ${compact ? "text-xs" : "text-sm"}`}>{review.title}</p>
                  <p className={`text-muted-foreground ${compact ? "text-xs" : "text-sm"}`}>Тульская область</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
    return (
      <div key={key} className={`bg-background flex flex-col ${compact ? "p-4 gap-3" : "p-5 sm:p-8 gap-6"}`}>
        <div className="flex gap-1">
          {Array.from({ length: review.rating }).map((_, i) => (
            <span key={i} className={`text-orange-400 ${compact ? "text-sm" : "text-lg"}`}>★</span>
          ))}
        </div>
        <p className={`text-foreground leading-relaxed flex-1 ${compact ? "text-xs" : ""}`}>"{review.text}"</p>
        {review.photos && review.photos.length > 0 && (
          <div className={`flex gap-2 flex-wrap ${compact ? "" : ""}`}>
            {review.photos.map((src, i) => (
              <img key={i} src={src} alt={`Фото ${i + 1}`} className={`object-cover rounded ${compact ? "h-20 w-20" : "h-32 w-32 sm:h-40 sm:w-40"}`} />
            ))}
          </div>
        )}
        <div className={`flex items-end justify-between border-t border-border ${compact ? "pt-3" : "pt-6"}`}>
          <div>
            <p className={`font-medium ${compact ? "text-xs" : "text-sm"}`}>{review.name}</p>
            <p className={`text-muted-foreground ${compact ? "text-xs" : "text-sm"}`}>{review.location}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section id="reviews" className="py-32 md:py-29 bg-secondary/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Отзывы клиентов</p>
            <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">Что говорят наши клиенты</h2>
          </div>

          {/* Кнопки навигации десктоп */}
          <div className="hidden md:flex items-center gap-4">
            <button onClick={prev} disabled={current === 0} className="w-12 h-12 border border-border flex items-center justify-center hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed">
              <Icon name="ArrowLeft" size={18} />
            </button>
            <span className="text-sm text-muted-foreground">{current + 1} / {total}</span>
            <button onClick={next} disabled={current === total - 1} className="w-12 h-12 border border-border flex items-center justify-center hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed">
              <Icon name="ArrowRight" size={18} />
            </button>
          </div>
        </div>

        {/* Мобильная версия — горизонтальный скролл со стрелками */}
        <div className="md:hidden relative flex items-center">
          <button
            onClick={scrollLeft}
            className="absolute -left-4 z-10 w-10 h-10 flex items-center justify-center shrink-0"
          >
            <ChevronLeft className="w-6 h-6 text-orange-500" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth px-8"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {sorted.map((review, index) => (
              <div key={index} className="shrink-0 w-[80vw]">
                {renderReview(review, index, true)}
              </div>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="absolute -right-4 z-10 w-10 h-10 flex items-center justify-center shrink-0"
          >
            <ChevronRight className="w-6 h-6 text-orange-500" />
          </button>
        </div>

        {/* Десктопная версия — 2 отзыва */}
        <div className="hidden md:grid md:grid-cols-2 gap-6 md:gap-8">
          {visible.map((review, index) => renderReview(review, current * perPage + index, false))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
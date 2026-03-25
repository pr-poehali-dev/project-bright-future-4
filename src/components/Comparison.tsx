import Icon from "@/components/ui/icon"

const rows = [
  {
    label: "Стоимость за м²",
    frame: "от 25 000 ₽",
    brick: "от 55 000 ₽",
    gas: "от 40 000 ₽",
    winner: "frame",
  },
  {
    label: "Срок строительства",
    frame: "2–4 месяца",
    brick: "12–18 месяцев",
    gas: "8–12 месяцев",
    winner: "frame",
  },
  {
    label: "Теплоэффективность",
    frame: "Высокая",
    brick: "Средняя",
    gas: "Средняя",
    winner: "frame",
  },
  {
    label: "Вес конструкции",
    frame: "Лёгкий",
    brick: "Очень тяжёлый",
    gas: "Тяжёлый",
    winner: "frame",
  },
  {
    label: "Усадка",
    frame: "Минимальная",
    brick: "Средняя",
    gas: "Значительная",
    winner: "frame",
  },
  {
    label: "Ремонт сразу после сдачи",
    frame: "Да",
    brick: "Нет (усадка 1–2 года)",
    gas: "Нет (усадка 6–12 мес)",
    winner: "frame",
  },
  {
    label: "Гарантия",
    frame: "Есть",
    brick: "Редко",
    gas: "Редко",
    winner: "frame",
  },
]

export function Comparison() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Сравнение материалов</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Почему каркас — <span className="text-orange-500">лучший выбор?</span>
        </h2>
        <p className="text-muted-foreground mb-12 max-w-xl">
          Сравниваем честно — по цене, срокам и качеству жизни в доме
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="text-left py-4 pr-4 text-muted-foreground font-medium w-1/4"></th>
                <th className="py-4 px-4 text-center w-1/4">
                  <div className="inline-flex flex-col items-center gap-1">
                    <div className="bg-orange-500 text-white text-xs font-bold px-3 py-1 tracking-wide">
                      КАРКАС
                    </div>
                    <span className="text-[10px] text-orange-500 font-semibold">TOYSTROY</span>
                  </div>
                </th>
                <th className="py-4 px-4 text-center w-1/4">
                  <div className="inline-flex flex-col items-center gap-1">
                    <div className="bg-gray-200 text-gray-600 text-xs font-bold px-3 py-1 tracking-wide">
                      КИРПИЧ
                    </div>
                  </div>
                </th>
                <th className="py-4 px-4 text-center w-1/4">
                  <div className="inline-flex flex-col items-center gap-1">
                    <div className="bg-gray-200 text-gray-600 text-xs font-bold px-3 py-1 tracking-wide">
                      ГАЗОБЕТОН
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="py-4 pr-4 font-medium text-foreground/80">{row.label}</td>
                  <td className="py-4 px-4 text-center">
                    <div className="flex items-center justify-center gap-1.5 text-orange-600 font-semibold">
                      <Icon name="Check" size={14} className="text-orange-500 flex-shrink-0" />
                      {row.frame}
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center text-muted-foreground">{row.brick}</td>
                  <td className="py-4 px-4 text-center text-muted-foreground">{row.gas}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 bg-orange-50 border border-orange-100 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Icon name="Lightbulb" size={28} className="text-orange-500 flex-shrink-0" />
          <p className="text-sm text-foreground/80 leading-relaxed">
            <strong>Вывод:</strong> каркасный дом обходится в 2 раза дешевле кирпичного, строится в 4 раза быстрее и готов к отделке сразу после сдачи — без ожидания усадки.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Comparison

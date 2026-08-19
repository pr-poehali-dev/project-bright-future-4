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
    frame: "1–3 месяца",
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
    <section className="py-20 relative overflow-hidden" style={{backgroundColor: '#2b2b2b'}}>
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{color: 'rgba(233, 166, 98, 0.7)'}}>Сравнение материалов</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
          Почему каркас — <span style={{color: '#E9A662'}}>лучший выбор?</span>
        </h2>
        <p className="text-gray-400 mb-12 max-w-xl">
          Сравниваем честно — по цене, срокам и качеству жизни в доме
        </p>

        {/* Десктоп: таблица */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="text-left py-4 pr-4 text-gray-400 font-medium w-1/4"></th>
                <th className="py-4 px-4 text-center w-1/4">
                  <div className="inline-flex flex-col items-center gap-1">
                    <div className="text-xs font-bold px-3 py-1 tracking-wide" style={{backgroundColor: '#E9A662', color: '#2b2b2b'}}>КАРКАС</div>
                    <span className="text-[10px] font-semibold" style={{color: '#E9A662'}}>TOYSTROY</span>
                  </div>
                </th>
                <th className="py-4 px-4 text-center w-1/4">
                  <div className="bg-gray-700 text-gray-300 text-xs font-bold px-3 py-1 tracking-wide inline-block">КИРПИЧ</div>
                </th>
                <th className="py-4 px-4 text-center w-1/4">
                  <div className="bg-gray-700 text-gray-300 text-xs font-bold px-3 py-1 tracking-wide inline-block">ГАЗОБЕТОН</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} style={{backgroundColor: i % 2 === 0 ? 'rgba(233, 166, 98, 0.06)' : 'transparent'}}>
                  <td className="py-4 pr-4 font-medium text-gray-200">{row.label}</td>
                  <td className="py-4 px-4 text-center">
                    <div className="flex items-center justify-center gap-1.5 font-semibold" style={{color: '#E9A662'}}>
                      <Icon name="Check" size={14} className="flex-shrink-0" style={{color: '#E9A662'}} />
                      {row.frame}
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center text-gray-400">{row.brick}</td>
                  <td className="py-4 px-4 text-center text-gray-400">{row.gas}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Мобильный: карточки */}
        <div className="md:hidden space-y-3">
          {/* Шапка */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            <div className="flex flex-col items-center gap-1">
              <div className="text-[10px] font-bold px-2 py-1 tracking-wide text-center w-full" style={{backgroundColor: '#E9A662', color: '#2b2b2b'}}>КАРКАС</div>
              <span className="text-[9px] font-semibold" style={{color: '#E9A662'}}>TOYSTROY</span>
            </div>
            <div className="bg-gray-700 text-gray-300 text-[10px] font-bold px-2 py-1 tracking-wide text-center">КИРПИЧ</div>
            <div className="bg-gray-700 text-gray-300 text-[10px] font-bold px-2 py-1 tracking-wide text-center">ГАЗОБЕТОН</div>
          </div>
          {rows.map((row, i) => (
            <div key={i} className="rounded-sm p-3" style={{backgroundColor: i % 2 === 0 ? 'rgba(233, 166, 98, 0.06)' : 'transparent'}}>
              <p className="text-gray-300 text-[11px] font-semibold mb-2 uppercase tracking-wide">{row.label}</p>
              <div className="grid grid-cols-3 gap-2">
                <div className="flex flex-col items-center gap-0.5">
                  <Icon name="Check" size={12} style={{color: '#E9A662'}} />
                  <span className="font-semibold text-[11px] text-center leading-tight" style={{color: '#E9A662'}}>{row.frame}</span>
                </div>
                <span className="text-gray-400 text-[11px] text-center leading-tight">{row.brick}</span>
                <span className="text-gray-400 text-[11px] text-center leading-tight">{row.gas}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 border p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4" style={{backgroundColor: 'rgba(233, 166, 98, 0.08)', borderColor: 'rgba(233, 166, 98, 0.3)'}}>
          <Icon name="Lightbulb" size={28} className="flex-shrink-0" style={{color: '#E9A662'}} />
          <p className="text-sm text-gray-200 leading-relaxed">
            <strong className="text-white">Вывод:</strong> каркасный дом обходится в 2 раза дешевле кирпичного, строится в 4 раза быстрее и готов к отделке сразу после сдачи — без ожидания усадки.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Comparison
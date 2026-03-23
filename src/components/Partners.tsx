const partners = [
  "GrandLine",
  "Кровля Изоляция",
  "Технониколь",
  'АО "Лесозавод 25"',
  "Воскресенский деревообрабатывающий завод",
  "ТЗСК",
  "Твои Окна",
  "Тульский Металлопрокатный завод",
]

export function Partners() {
  return (
    <section id="partners" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-14 text-center">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">Доверяют профессионалы</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">Наши партнёры</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {partners.map((name) => (
            <div
              key={name}
              className="flex items-center justify-center border border-border bg-background px-6 py-6 text-center text-sm font-semibold text-foreground hover:border-foreground transition-colors duration-200 min-h-[80px]"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners

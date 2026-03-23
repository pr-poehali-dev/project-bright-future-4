const partners = [
  { name: "GrandLine", bg: "#CC0000", color: "#ffffff" },
  { name: "Кровля Изоляция", bg: null, color: null },
  { name: "Технониколь", bg: null, color: null },
  { name: 'АО "Лесозавод 25"', bg: null, color: null },
  { name: "Воскресенский деревообрабатывающий завод", bg: null, color: null },
  { name: "ТЗСК", bg: null, color: null },
  { name: "Твои Окна", bg: null, color: null },
  { name: "Тульский Металлопрокатный завод", bg: null, color: null },
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
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center border px-6 py-6 text-center text-sm font-semibold transition-colors duration-200 min-h-[80px]"
              style={{
                backgroundColor: partner.bg ?? "var(--background)",
                color: partner.color ?? "var(--foreground)",
                borderColor: partner.bg ?? "var(--border)",
              }}
            >
              {partner.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners

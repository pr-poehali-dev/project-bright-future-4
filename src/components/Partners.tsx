const partners = [
  { name: "GrandLine", bg: "#CC0000", color: "#ffffff" },
  { name: "Кровля Изоляция", bg: "#1A5276", color: "#ffffff" },
  { name: "Технониколь", bg: "#E30613", color: "#ffffff" },
  { name: 'АО "Лесозавод 25"', bg: "#2D6A2D", color: "#ffffff" },
  { name: "Воскресенский деревообрабатывающий завод", bg: "#5D4037", color: "#ffffff" },
  { name: "ТЗСК", bg: "#1565C0", color: "#ffffff" },
  { name: "Твои Окна", bg: "#FF6F00", color: "#ffffff" },
  { name: "Тульский Металлопрокатный завод", bg: "#37474F", color: "#ffffff" },
]

export function Partners() {
  return (
    <section id="partners" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-14 text-center">
          <p className="text-foreground text-base md:text-lg font-bold tracking-[0.25em] uppercase mb-4">Доверяют профессионалы</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">Наши партнёры</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center border px-3 sm:px-6 py-4 sm:py-6 text-center font-semibold transition-colors duration-200 min-h-[70px] leading-tight"
              style={{
                backgroundColor: partner.bg ?? "var(--background)",
                color: partner.color ?? "var(--foreground)",
                borderColor: partner.bg ?? "var(--border)",
                fontSize: partner.name.length > 20 ? 'clamp(9px, 2vw, 12px)' : undefined,
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
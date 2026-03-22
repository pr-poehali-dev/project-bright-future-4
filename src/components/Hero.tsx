export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/b5582a93-0e3f-404d-b828-5f4586a070e0.jpg"
          alt="Строительство каркасного дома"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 pt-8 md:pt-0">
        <div className="mb-72 md:mb-60 lg:mb-80">
          <p className="text-sm tracking-[0.3em] uppercase text-center text-white/70 mb-4">{"Тульская область"}</p>

          <h1 className="text-4xl font-extrabold text-balance text-center text-white mb-6 tracking-tight leading-[1.1] lg:text-6xl drop-shadow-lg">
            {"Строим профессионально"}
            <br />
            <span className="text-orange-300">{"каркасные дома,"}
            <br />
            {"бани и дачи"}</span>
          </h1>
        </div>
      </div>
    </section>
  )
}
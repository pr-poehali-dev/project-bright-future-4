export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/0be34413-e927-4884-bcda-d62e83975329.jpg"
          alt="Строительство каркасного дома"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 pt-8 md:pt-0">
        <div className="mb-72 md:mb-60 lg:mb-80">
          <p className="text-sm tracking-[0.3em] uppercase text-center text-secondary mb-0">{"Строительство каркасных домов"}</p>

          <h1 className="text-7xl font-medium text-balance text-center text-white mb-0 tracking-tight leading-[0.9] lg:text-8xl">
            {"Ваш дом — наша"}
            <br />
            <span className="text-orange-200">{"работа"}</span>
          </h1>
        </div>
      </div>
    </section>
  )
}
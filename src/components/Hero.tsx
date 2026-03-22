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
        <div className="mb-72 md:mb-60 lg:mb-80 -mt-16 md:-mt-20">
          <p className="text-5xl md:text-7xl font-extrabold text-center tracking-widest drop-shadow-xl mb-4" style={{color: '#F5E4A0', textShadow: '2px 2px 8px rgba(0,0,0,0.5)'}}>TOYSTROY</p>

          <h1 className="text-xl md:text-3xl font-extrabold text-balance text-center mb-4 tracking-wide leading-snug" style={{color: '#F2DC8A', textShadow: '1px 1px 6px rgba(0,0,0,0.5)'}}>
            Каркасные дома, дачи и бани под ключ
          </h1>

          <p className="text-center text-lg md:text-xl font-extrabold tracking-widest uppercase" style={{color: '#EDD06A', textShadow: '1px 1px 6px rgba(0,0,0,0.5)'}}>
            Тепло · Надёжно · С гарантией
          </p>
        </div>
      </div>
    </section>
  )
}
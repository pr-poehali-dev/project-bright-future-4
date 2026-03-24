export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <img
        src="https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/files/b5582a93-0e3f-404d-b828-5f4586a070e0.jpg"
        alt="Строительство каркасного дома"
        className="w-full h-auto block"
      />
      <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%)'}} />

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center px-6 md:px-12 -mt-16 md:-mt-20">
          <p className="text-5xl md:text-7xl font-extrabold text-center tracking-widest mb-4" style={{color: '#F5E4A0', textShadow: '0 2px 4px rgba(0,0,0,0.8), 0 4px 12px rgba(0,0,0,0.6), 0 8px 24px rgba(0,0,0,0.4), 3px 3px 0px rgba(0,0,0,0.5)'}}>TOYSTROY</p>

          <h1 className="text-xl md:text-3xl font-extrabold text-balance text-center mb-4 tracking-wide leading-snug" style={{color: '#F2DC8A', textShadow: '0 2px 4px rgba(0,0,0,0.8), 0 4px 12px rgba(0,0,0,0.6), 2px 2px 0px rgba(0,0,0,0.5)'}}>
            Каркасные дома, дачи и бани под ключ
          </h1>

          <p className="text-center text-lg md:text-xl font-extrabold tracking-widest uppercase" style={{color: '#EDD06A', textShadow: '0 2px 4px rgba(0,0,0,0.8), 0 4px 12px rgba(0,0,0,0.6), 2px 2px 0px rgba(0,0,0,0.5)'}}>
            Тепло · Надёжно · С гарантией
          </p>
        </div>
      </div>
    </section>
  )
}
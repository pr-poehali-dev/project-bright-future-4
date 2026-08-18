export function Hero() {
  return (
    <section id="hero" className="relative h-[50vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          src="https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/5f512dc1-d74f-4683-abf3-619fb61c9af1.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center"
          aria-label="Строительство каркасного дома в Туле под ключ — Тойстрой71"
        />
        <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 100%)'}} />
      </div>

      <div className="container mx-auto px-4 md:px-12 relative z-10 pt-8 md:pt-0">
        <div className="mb-4 sm:mb-60 md:mb-60 lg:mb-80 mt-16 md:-mt-20">
          <p className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-center tracking-widest mb-3 sm:mb-4" style={{color: '#F5E4A0', textShadow: '0 2px 4px rgba(0,0,0,0.8), 0 4px 12px rgba(0,0,0,0.6), 0 8px 24px rgba(0,0,0,0.4), 3px 3px 0px rgba(0,0,0,0.5)'}}>TOYSTROY</p>

          <h1 className="text-base sm:text-xl md:text-3xl font-extrabold text-balance text-center mb-3 sm:mb-4 tracking-wide leading-snug px-2" style={{color: '#F2DC8A', textShadow: '0 2px 4px rgba(0,0,0,0.8), 0 4px 12px rgba(0,0,0,0.6), 2px 2px 0px rgba(0,0,0,0.5)'}}>
            Каркасные дома, дачи и бани под ключ
          </h1>

          <p className="text-center text-sm sm:text-lg md:text-xl font-extrabold tracking-widest uppercase" style={{color: '#EDD06A', textShadow: '0 2px 4px rgba(0,0,0,0.8), 0 4px 12px rgba(0,0,0,0.6), 2px 2px 0px rgba(0,0,0,0.5)'}}>
            Тепло · Надёжно · С гарантией
          </p>
        </div>
      </div>

    </section>
  )
}
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

      <h1 className="sr-only">TOYSTROY — каркасные дома, дачи и бани под ключ в Туле</h1>

      <div className="container mx-auto px-4 md:px-12 relative z-10 pt-8 md:pt-0">
        <div className="mt-24 md:mt-16">
          <p className="text-center text-sm sm:text-lg md:text-xl font-extrabold tracking-widest uppercase" style={{color: '#EDD06A', textShadow: '0 2px 4px rgba(0,0,0,0.8), 0 4px 12px rgba(0,0,0,0.6), 2px 2px 0px rgba(0,0,0,0.5)'}}>
            Тепло · Надёжно · С гарантией
          </p>
        </div>
      </div>

    </section>
  )
}
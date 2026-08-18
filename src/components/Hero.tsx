export function Hero() {
  return (
    <section id="hero" className="relative h-[50vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          src="/hero-video.mp4"
          poster="/hero-poster.jpg"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover object-center"
          aria-label="Строительство каркасного дома в Туле под ключ — Тойстрой71"
        />
        <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 100%)'}} />
      </div>

      <h1 className="sr-only">TOYSTROY — каркасные дома, дачи и бани под ключ в Туле</h1>

      <div className="container mx-auto px-4 md:px-12 relative z-10 pt-8 md:pt-0">
        <div className="mt-2 md:mt-4">
          <p className="text-center text-xs sm:text-sm md:text-base font-extrabold tracking-widest uppercase" style={{color: '#E9A662', textShadow: '0 2px 4px rgba(0,0,0,0.8), 0 4px 12px rgba(0,0,0,0.6), 2px 2px 0px rgba(0,0,0,0.5)'}}>
            Тепло · Надёжно · С гарантией
          </p>
        </div>
      </div>

    </section>
  )
}
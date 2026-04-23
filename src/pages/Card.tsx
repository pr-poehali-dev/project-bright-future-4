export default function Card() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center p-4">
      <div className="w-full max-w-sm mx-auto">

        {/* Карточка */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">

          {/* Фоновое изображение */}
          <div className="relative h-72">
            <img
              src="https://cdn.poehali.dev/projects/614242ea-a957-4915-8b40-2cdf0c2c40f1/bucket/af40b7c4-4e61-49d5-acfd-4ad82da6072f.jpg"
              alt="TOYSTROY"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/70" />

            {/* Логотип и название */}
            <div className="absolute top-5 left-5 flex items-center gap-3">
              <img
                src="https://cdn.poehali.dev/files/81218afd-c0f8-4ab8-8954-5409def67550.jpg"
                alt="TS"
                className="w-12 h-12 rounded-xl object-cover shadow-lg"
              />
              <div>
                <div className="text-white font-bold text-xl tracking-widest leading-none">TOYSTROY</div>
                <div className="text-yellow-400 text-xs tracking-wide mt-0.5">Тула</div>
              </div>
            </div>

            {/* Заголовок на фото */}
            <div className="absolute bottom-5 left-5 right-5 text-center">
              <div className="text-white text-sm font-medium leading-snug">
                Каркасные дома, дачи и бани под ключ
              </div>
              <div className="text-yellow-400 text-xs mt-1 tracking-widest font-semibold">
                ТЕПЛО · НАДЁЖНО · С ГАРАНТИЕЙ
              </div>
            </div>
          </div>

          {/* Контакты */}
          <div className="bg-[#111111] px-6 py-5 space-y-3">

            <a
              href="tel:+79509170974"
              className="flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-400 transition-colors">
                <svg width="18" height="18" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.22 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
              </div>
              <div>
                <div className="text-gray-400 text-xs">Позвонить</div>
                <div className="text-white font-semibold text-base group-hover:text-orange-400 transition-colors">+7 (950) 917-09-74</div>
              </div>
            </a>

            <div className="border-t border-white/10" />

            <a
              href="mailto:Toystroy71rus@mail.ru"
              className="flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-400 transition-colors">
                <svg width="18" height="18" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <div className="text-gray-400 text-xs">Написать на почту</div>
                <div className="text-white font-semibold text-sm group-hover:text-orange-400 transition-colors">Toystroy71rus@mail.ru</div>
              </div>
            </a>

            <div className="border-t border-white/10" />

            <a
              href="https://vk.ru/toystroy71"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-full bg-[#0077FF] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0066DD] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.779.678.864 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.253-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.762-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.491-.085.745-.576.745z"/>
                </svg>
              </div>
              <div>
                <div className="text-gray-400 text-xs">ВКонтакте</div>
                <div className="text-white font-semibold text-sm group-hover:text-[#0077FF] transition-colors">vk.ru/toystroy71</div>
              </div>
            </a>

            <div className="border-t border-white/10" />

            <a
              href="/"
              className="flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-400 transition-colors">
                <svg width="18" height="18" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
                </svg>
              </div>
              <div>
                <div className="text-gray-400 text-xs">Сайт</div>
                <div className="text-white font-semibold text-sm group-hover:text-orange-400 transition-colors">toystroy.ru</div>
              </div>
            </a>

          </div>

          {/* Кнопка звонка */}
          <div className="bg-[#111111] px-6 pb-6">
            <a
              href="tel:+79509170974"
              className="block w-full bg-orange-500 hover:bg-orange-400 text-white font-bold text-center py-4 rounded-xl transition-colors text-base tracking-wide shadow-lg"
            >
              Позвонить нам
            </a>
          </div>

        </div>

        <p className="text-center text-gray-600 text-xs mt-4">
          Тула · Тульская область
        </p>
      </div>
    </div>
  )
}

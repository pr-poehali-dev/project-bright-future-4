import { Helmet } from "react-helmet-async"
import KarkasniyeBanyaHero from "@/pages/karkasniye-banya-tula/KarkasniyeBanyaHero"
import KarkasniyeBanyaSections from "@/pages/karkasniye-banya-tula/KarkasniyeBanyaSections"
import KarkasniyeBanyaFaq from "@/pages/karkasniye-banya-tula/KarkasniyeBanyaFaq"
import KarkasniyeBanyaOrderForm from "@/pages/karkasniye-banya-tula/KarkasniyeBanyaOrderForm"

export default function KarkasniyeBanyaTula() {
  return (
    <div className="min-h-screen bg-white text-[#1a0f0f]">
      <Helmet>
        <title>Каркасные бани под ключ в Туле — от 650 000 ₽ | Тойстрой71</title>
        <meta name="description" content="Строим каркасные бани под ключ в Туле и Тульской области. От 650 000 ₽. Готовность 30–45 дней, гарантия 5 лет. Баня быстро прогревается и держит жар. Бесплатный выезд. Звоните!" />
        <meta name="keywords" content="каркасные бани Тула, баня под ключ Тула, строительство бани Тула, каркасная баня цена Тула, баня под ключ Тульская область, баня 5х5 Тула, баня 6х6 Тула, баня из бруса Тула, каркасная баня Алексин, каркасная баня Новомосковск" />
        <link rel="canonical" href="https://toystroy71.ru/karkasnye-bani-tula" />
        <meta property="og:title" content="Каркасные бани под ключ в Туле — от 650 000 ₽ | Тойстрой71" />
        <meta property="og:description" content="Строим каркасные бани под ключ в Туле и области. От 650 000 ₽, готовность 30–45 дней, гарантия 5 лет. Более 200 объектов с 2015 года." />
        <meta property="og:url" content="https://toystroy71.ru/karkasnye-bani-tula" />
      </Helmet>
      <KarkasniyeBanyaHero />
      <KarkasniyeBanyaSections />
      <KarkasniyeBanyaFaq />
      <KarkasniyeBanyaOrderForm />
    </div>
  )
}
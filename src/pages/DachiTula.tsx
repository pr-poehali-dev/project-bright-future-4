import { Helmet } from "react-helmet-async"
import DachiTulaHero from "@/pages/dachi-tula/DachiTulaHero"
import DachiTulaSections from "@/pages/dachi-tula/DachiTulaSections"
import DachiTulaFaq from "@/pages/dachi-tula/DachiTulaFaq"
import DachiTulaOrderForm from "@/pages/dachi-tula/DachiTulaOrderForm"

export default function DachiTula() {
  return (
    <div className="min-h-screen bg-white text-[#1a0f0f]">
      <Helmet>
        <title>Дачи под ключ в Туле — строительство дачных домов | Тойстрой71</title>
        <meta name="description" content="Строим дачи под ключ в Туле и Тульской области. Каркасные дачные дома по фиксированной цене. Быстро, тепло, надёжно. Бесплатный выезд специалиста. Звоните!" />
        <meta name="keywords" content="дачи под ключ Тула, строительство дачи Тула, дачный дом под ключ Тула, купить дачу Тула, дачные дома Тульская область" />
        <link rel="canonical" href="https://toystroy71.ru/dachi-tula" />
        <meta property="og:title" content="Дачи под ключ в Туле — Тойстрой71" />
        <meta property="og:description" content="Строим дачные дома под ключ в Туле и области. Фиксированная цена, гарантия, быстрые сроки." />
        <meta property="og:url" content="https://toystroy71.ru/dachi-tula" />
      </Helmet>
      <DachiTulaHero />
      <DachiTulaSections />
      <DachiTulaFaq />
      <DachiTulaOrderForm />
    </div>
  )
}
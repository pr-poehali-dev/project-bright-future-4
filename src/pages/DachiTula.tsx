import { Helmet } from "react-helmet-async"
import DachiTulaHero from "@/pages/dachi-tula/DachiTulaHero"
import DachiTulaSections from "@/pages/dachi-tula/DachiTulaSections"
import DachiTulaFaq from "@/pages/dachi-tula/DachiTulaFaq"
import DachiTulaOrderForm from "@/pages/dachi-tula/DachiTulaOrderForm"

export default function DachiTula() {
  return (
    <div className="min-h-screen bg-white text-[#1a0f0f]">
      <Helmet>
        <title>Дачи под ключ в Туле — каркасные дачные дома от 1 200 000 ₽ | Тойстрой71</title>
        <meta name="description" content="Строим каркасные дачи под ключ в Туле и Тульской области. От 1 200 000 ₽. Готовность 45–60 дней, гарантия 5 лет, фиксированная цена. Бесплатный выезд специалиста. Звоните!" />
        <meta name="keywords" content="дачи под ключ Тула, строительство дачи Тула, дачный дом под ключ Тула, каркасная дача Тула, дача под ключ Тульская область, купить дачу Тула, дача 6х6 Тула, дача 8х8 Тула, дачный дом Алексин, дачный дом Новомосковск" />
        <link rel="canonical" href="https://toystroy71.ru/dachi-tula" />
        <meta property="og:title" content="Дачи под ключ в Туле — от 1 200 000 ₽ | Тойстрой71" />
        <meta property="og:description" content="Строим каркасные дачи под ключ в Туле и области. От 1 200 000 ₽, готовность 45–60 дней, гарантия 5 лет. Более 200 объектов с 2015 года." />
        <meta property="og:url" content="https://toystroy71.ru/dachi-tula" />
      </Helmet>
      <DachiTulaHero />
      <DachiTulaSections />
      <DachiTulaFaq />
      <DachiTulaOrderForm />
    </div>
  )
}
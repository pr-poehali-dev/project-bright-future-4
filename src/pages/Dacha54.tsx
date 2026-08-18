import { Helmet } from "react-helmet-async"
import DachaHero from "@/pages/dacha-54/DachaHero"
import DachaDetails from "@/pages/dacha-54/DachaDetails"
import DachaOrderForm from "@/pages/dacha-54/DachaOrderForm"

export default function Dacha54() {
  return (
    <div className="min-h-screen bg-white text-[#1a0f0f]">
      <Helmet>
        <title>Дача «Сосновый дворик» 6×6 м, 54 м² — цена | Тойстрой71</title>
        <meta name="description" content="Уютная каркасная дача 54 м² с планкеном и панорамным остеклением. Спальня, кухня-гостиная, санузел и терраса 17,97 м². Строим под ключ в Туле." />
        <link rel="canonical" href="https://toystroy71.ru/projects/dacha-54" />
        <meta property="og:title" content="Дача «Сосновый дворик» 6×6 м, 54 м² — цена | Тойстрой71" />
        <meta property="og:description" content="Уютная каркасная дача 54 м² с планкеном и панорамным остеклением. Спальня, кухня-гостиная, санузел и терраса 17,97 м². Строим под ключ в Туле." />
        <meta property="og:url" content="https://toystroy71.ru/projects/dacha-54" />
      </Helmet>
      <DachaHero />
      <DachaDetails />
      <DachaOrderForm />
    </div>
  )
}
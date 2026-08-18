import { Helmet } from "react-helmet-async"
import Dacha36Hero from "@/pages/dacha-36/Dacha36Hero"
import Dacha36Details from "@/pages/dacha-36/Dacha36Details"
import Dacha36OrderForm from "@/pages/dacha-36/Dacha36OrderForm"

export default function Dacha36() {
  return (
    <div className="min-h-screen bg-white text-[#1a0f0f]">
      <Helmet>
        <title>Дача «Берёзка» 6×6 м, 36 м² — цена, планировка | Тойстрой71</title>
        <meta name="description" content="Компактная каркасная дача 36 м² на винтовых сваях с белым сайдингом. Спальня, зал-кухня, санузел и открытая терраса. Строим под ключ в Туле." />
        <link rel="canonical" href="https://toystroy71.ru/projects/dacha-36" />
        <meta property="og:title" content="Дача «Берёзка» 6×6 м, 36 м² — цена, планировка | Тойстрой71" />
        <meta property="og:description" content="Компактная каркасная дача 36 м² на винтовых сваях с белым сайдингом. Спальня, зал-кухня, санузел и открытая терраса. Строим под ключ в Туле." />
        <meta property="og:url" content="https://toystroy71.ru/projects/dacha-36" />
      </Helmet>
      <Dacha36Hero />
      <Dacha36Details />
      <Dacha36OrderForm />
    </div>
  )
}
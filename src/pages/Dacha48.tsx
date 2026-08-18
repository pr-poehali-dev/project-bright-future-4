import { Helmet } from "react-helmet-async"
import Dacha48Hero from "@/pages/dacha-48/Dacha48Hero"
import Dacha48Details from "@/pages/dacha-48/Dacha48Details"
import Dacha48OrderForm from "@/pages/dacha-48/Dacha48OrderForm"

export default function Dacha48() {
  return (
    <div className="min-h-screen bg-white text-[#1a0f0f]">
      <Helmet>
        <title>Дача «Уютная» 6×8 м, 48 м² — цена, планировка | Тойстрой71</title>
        <meta name="description" content="Одноэтажная каркасная дача 48 м² на винтовых сваях с имитацией бруса. Открытая терраса и светлый интерьер. Строим под ключ по всей Тульской области." />
        <link rel="canonical" href="https://toystroy71.ru/projects/dacha-48" />
        <meta property="og:title" content="Дача «Уютная» 6×8 м, 48 м² — цена, планировка | Тойстрой71" />
        <meta property="og:description" content="Одноэтажная каркасная дача 48 м² на винтовых сваях с имитацией бруса. Открытая терраса и светлый интерьер. Строим под ключ по всей Тульской области." />
        <meta property="og:url" content="https://toystroy71.ru/projects/dacha-48" />
      </Helmet>
      <Dacha48Hero />
      <Dacha48Details />
      <Dacha48OrderForm />
    </div>
  )
}
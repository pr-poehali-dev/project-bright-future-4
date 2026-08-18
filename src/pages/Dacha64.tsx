import { Helmet } from "react-helmet-async"
import Dacha64Hero from "@/pages/dacha-64/Dacha64Hero"
import Dacha64Details from "@/pages/dacha-64/Dacha64Details"
import Dacha64OrderForm from "@/pages/dacha-64/Dacha64OrderForm"

export default function Dacha64() {
  return (
    <div className="min-h-screen bg-white text-[#1a0f0f]">
      <Helmet>
        <title>Дача «Светлая» 8×8 м, 64 м² — цена, планировка | Тойстрой71</title>
        <meta name="description" content="Одноэтажная каркасная дача 64 м² на винтовых сваях со светлым фасадом. Крытая терраса с балюстрадой. Строим под ключ по всей Тульской области." />
        <link rel="canonical" href="https://toystroy71.ru/projects/dacha-64" />
        <meta property="og:title" content="Дача «Светлая» 8×8 м, 64 м² — цена, планировка | Тойстрой71" />
        <meta property="og:description" content="Одноэтажная каркасная дача 64 м² на винтовых сваях со светлым фасадом. Крытая терраса с балюстрадой. Строим под ключ по всей Тульской области." />
        <meta property="og:url" content="https://toystroy71.ru/projects/dacha-64" />
      </Helmet>
      <Dacha64Hero />
      <Dacha64Details />
      <Dacha64OrderForm />
    </div>
  )
}
import { Helmet } from "react-helmet-async"
import House190Hero from "@/pages/house-190/House190Hero"
import House190Details from "@/pages/house-190/House190Details"
import House190OrderForm from "@/pages/house-190/House190OrderForm"

export default function House190() {
  return (
    <div className="min-h-screen bg-white text-[#1a0f0f]">
      <Helmet>
        <title>Дом «Дубрава» 10×8 м, 190 м² — цена, планировка | Тойстрой71</title>
        <meta name="description" content="Двухэтажный каркасный дом 190 м² с фасадом из имитации бруса. Терраса 39,67 м², четыре спальни — идеален для большой семьи. Строим под ключ." />
        <link rel="canonical" href="https://toystroy71.ru/projects/house-190" />
        <meta property="og:title" content="Дом «Дубрава» 10×8 м, 190 м² — цена, планировка | Тойстрой71" />
        <meta property="og:description" content="Двухэтажный каркасный дом 190 м² с фасадом из имитации бруса. Терраса 39,67 м², четыре спальни — идеален для большой семьи. Строим под ключ." />
        <meta property="og:url" content="https://toystroy71.ru/projects/house-190" />
      </Helmet>
      <House190Hero />
      <House190Details />
      <House190OrderForm />
    </div>
  )
}
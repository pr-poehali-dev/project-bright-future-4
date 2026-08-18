import { Helmet } from "react-helmet-async"
import House10x10Hero from "@/pages/house-10x10/House10x10Hero"
import House10x10Details from "@/pages/house-10x10/House10x10Details"
import House10x10OrderForm from "@/pages/house-10x10/House10x10OrderForm"

export default function House10x10() {
  return (
    <div className="min-h-screen bg-white text-[#1a0f0f]">
      <Helmet>
        <title>Дом «Кирпичный стиль» 10×10 м, 100 м² — цена | Тойстрой71</title>
        <meta name="description" content="Одноэтажный каркасный дом ≈100 м² с фасадом под облицовочный кирпич. Три спальни, два санузла, просторная гостиная-кухня для семьи из 4–5 человек." />
        <link rel="canonical" href="https://toystroy71.ru/projects/house-10x10" />
        <meta property="og:title" content="Дом «Кирпичный стиль» 10×10 м, 100 м² — цена | Тойстрой71" />
        <meta property="og:description" content="Одноэтажный каркасный дом ≈100 м² с фасадом под облицовочный кирпич. Три спальни, два санузла, просторная гостиная-кухня для семьи из 4–5 человек." />
        <meta property="og:url" content="https://toystroy71.ru/projects/house-10x10" />
      </Helmet>
      <House10x10Hero />
      <House10x10Details />
      <House10x10OrderForm />
    </div>
  )
}
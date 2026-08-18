import { Helmet } from "react-helmet-async"
import HouseModern63Hero from "@/pages/house-modern-63/HouseModern63Hero"
import HouseModern63Details from "@/pages/house-modern-63/HouseModern63Details"
import HouseModern63OrderForm from "@/pages/house-modern-63/HouseModern63OrderForm"

export default function HouseModern63() {
  return (
    <div className="min-h-screen bg-white text-[#1a0f0f]">
      <Helmet>
        <title>Дом «Модерн 63» 12×6 м, 74 м² — цена, планировка | Тойстрой71</title>
        <meta name="description" content="Одноэтажный каркасный дом 74 м² в современном стиле с тёмным планкеном. Две спальни, сауна, кухня-гостиная 22,6 м² и терраса 13 м². Строим под ключ в Туле." />
        <link rel="canonical" href="https://toystroy71.ru/projects/house-modern-63" />
        <meta property="og:title" content="Дом «Модерн 63» 12×6 м, 74 м² — цена, планировка | Тойстрой71" />
        <meta property="og:description" content="Одноэтажный каркасный дом 74 м² в современном стиле с тёмным планкеном. Две спальни, сауна, кухня-гостиная 22,6 м² и терраса 13 м². Строим под ключ в Туле." />
        <meta property="og:url" content="https://toystroy71.ru/projects/house-modern-63" />
      </Helmet>
      <HouseModern63Hero />
      <HouseModern63Details />
      <HouseModern63OrderForm />
    </div>
  )
}
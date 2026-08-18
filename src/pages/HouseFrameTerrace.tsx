import { Helmet } from "react-helmet-async"
import HouseFrameTerraceHero from "@/pages/house-frame-terrace/HouseFrameTerraceHero"
import HouseFrameTerraceDetails from "@/pages/house-frame-terrace/HouseFrameTerraceDetails"
import HouseFrameTerraceOrderForm from "@/pages/house-frame-terrace/HouseFrameTerraceOrderForm"

export default function HouseFrameTerrace() {
  return (
    <div className="min-h-screen bg-white text-[#1a0f0f]">
      <Helmet>
        <title>Дом с террасой 10×10 м, 100 м² — цена, планировка | Тойстрой71</title>
        <meta name="description" content="Двухэтажный каркасный дом ≈100 м² с террасой 17,7 м². Три спальни, два санузла, кухня-гостиная 28,52 м² и кабинет. Строим под ключ в Туле." />
        <link rel="canonical" href="https://toystroy71.ru/projects/house-frame-terrace" />
        <meta property="og:title" content="Дом с террасой 10×10 м, 100 м² — цена, планировка | Тойстрой71" />
        <meta property="og:description" content="Двухэтажный каркасный дом ≈100 м² с террасой 17,7 м². Три спальни, два санузла, кухня-гостиная 28,52 м² и кабинет. Строим под ключ в Туле." />
        <meta property="og:url" content="https://toystroy71.ru/projects/house-frame-terrace" />
      </Helmet>
      <HouseFrameTerraceHero />
      <HouseFrameTerraceDetails />
      <HouseFrameTerraceOrderForm />
    </div>
  )
}
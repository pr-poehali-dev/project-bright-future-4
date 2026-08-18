import { Helmet } from "react-helmet-async"
import House130Hero from "@/pages/house-130/House130Hero"
import House130Details from "@/pages/house-130/House130Details"
import House130OrderForm from "@/pages/house-130/House130OrderForm"

export default function House130() {
  return (
    <div className="min-h-screen bg-white text-[#1a0f0f]">
      <Helmet>
        <title>Дом «Кедр 130» 13×8 м, 130 м² — цена, планировка | Тойстрой71</title>
        <meta name="description" content="Просторный каркасный дом 130 м² с графитовым фасадом и террасой 24,69 м². Три спальни, кухня-гостиная 26,3 м². Строим под ключ в Туле." />
        <link rel="canonical" href="https://toystroy71.ru/projects/house-130" />
        <meta property="og:title" content="Дом «Кедр 130» 13×8 м, 130 м² — цена, планировка | Тойстрой71" />
        <meta property="og:description" content="Просторный каркасный дом 130 м² с графитовым фасадом и террасой 24,69 м². Три спальни, кухня-гостиная 26,3 м². Строим под ключ в Туле." />
        <meta property="og:url" content="https://toystroy71.ru/projects/house-130" />
      </Helmet>
      <House130Hero />
      <House130Details />
      <House130OrderForm />
    </div>
  )
}
import { Helmet } from "react-helmet-async"
import House88Hero from "@/pages/house-88/House88Hero"
import House88Details from "@/pages/house-88/House88Details"
import House88OrderForm from "@/pages/house-88/House88OrderForm"

export default function House88() {
  return (
    <div className="min-h-screen bg-white text-[#1a0f0f]">
      <Helmet>
        <title>Дом «Графит» 10×9 м, 88 м² — цена, планировка | Тойстрой71</title>
        <meta name="description" content="Одноэтажный каркасный дом 88 м² с графитовым фасадом. Просторная гостиная 20,16 м², две спальни, кухня, терраса. Строим под ключ в Туле." />
        <link rel="canonical" href="https://toystroy71.ru/projects/house-88" />
        <meta property="og:title" content="Дом «Графит» 10×9 м, 88 м² — цена, планировка | Тойстрой71" />
        <meta property="og:description" content="Одноэтажный каркасный дом 88 м² с графитовым фасадом. Просторная гостиная 20,16 м², две спальни, кухня, терраса. Строим под ключ в Туле." />
        <meta property="og:url" content="https://toystroy71.ru/projects/house-88" />
      </Helmet>
      <House88Hero />
      <House88Details />
      <House88OrderForm />
    </div>
  )
}
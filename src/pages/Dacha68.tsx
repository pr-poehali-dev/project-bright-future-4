import { Helmet } from "react-helmet-async"
import Dacha68Hero from "@/pages/dacha-68/Dacha68Hero"
import Dacha68Details from "@/pages/dacha-68/Dacha68Details"
import Dacha68OrderForm from "@/pages/dacha-68/Dacha68OrderForm"

export default function Dacha68() {
  return (
    <div className="min-h-screen bg-white text-[#1a0f0f]">
      <Helmet>
        <title>Баня «Горизонт» 8,5×6,3 м, 68 м² — цена, планировка | Тойстрой71</title>
        <meta name="description" content="Каркасная баня 68 м² с просторной комнатой отдыха, встроенной парной и двумя террасами почти 20 м². Строим под ключ по всей Тульской области." />
        <link rel="canonical" href="https://toystroy71.ru/projects/dacha-68" />
        <meta property="og:title" content="Баня «Горизонт» 8,5×6,3 м, 68 м² — цена, планировка | Тойстрой71" />
        <meta property="og:description" content="Каркасная баня 68 м² с просторной комнатой отдыха, встроенной парной и двумя террасами почти 20 м². Строим под ключ по всей Тульской области." />
        <meta property="og:url" content="https://toystroy71.ru/projects/dacha-68" />
      </Helmet>
      <Dacha68Hero />
      <Dacha68Details />
      <Dacha68OrderForm />
    </div>
  )
}
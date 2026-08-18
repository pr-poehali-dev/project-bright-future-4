import { Helmet } from "react-helmet-async"
import House193Hero from "@/pages/house-193/House193Hero"
import House193Details from "@/pages/house-193/House193Details"
import House193OrderForm from "@/pages/house-193/House193OrderForm"

export default function House193() {
  return (
    <div className="min-h-screen bg-white text-[#1a0f0f]">
      <Helmet>
        <title>Усадьба «Тёмный бор» 193 м² — цена, планировка | Тойстрой71</title>
        <meta name="description" content="Двухэтажный каркасный дом 193 м² с тёмным планкеном, вторым светом, четырьмя спальнями и собственной сауной. Строим под ключ в Туле." />
        <link rel="canonical" href="https://toystroy71.ru/projects/house-193" />
        <meta property="og:title" content="Усадьба «Тёмный бор» 193 м² — цена, планировка | Тойстрой71" />
        <meta property="og:description" content="Двухэтажный каркасный дом 193 м² с тёмным планкеном, вторым светом, четырьмя спальнями и собственной сауной. Строим под ключ в Туле." />
        <meta property="og:url" content="https://toystroy71.ru/projects/house-193" />
      </Helmet>
      <House193Hero />
      <House193Details />
      <House193OrderForm />
    </div>
  )
}
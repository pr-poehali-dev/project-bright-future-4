import { Helmet } from "react-helmet-async"
import BanyaHero from "@/pages/banya-48/BanyaHero"
import BanyaDetails from "@/pages/banya-48/BanyaDetails"
import BanyaOrderForm from "@/pages/banya-48/BanyaOrderForm"

export default function Banya48() {
  return (
    <div className="min-h-screen bg-white text-[#1a0f0f]">
      <Helmet>
        <title>Баня «Кедровая» 12×4 м, 48 м² — цена, планировка | Тойстрой71</title>
        <meta name="description" content="Просторная каркасная баня 48 м² с планкеном. Парилка с печью, душевая, комната отдыха и открытая терраса. Строим под ключ в Туле." />
        <link rel="canonical" href="https://toystroy71.ru/projects/banya-48" />
        <meta property="og:title" content="Баня «Кедровая» 12×4 м, 48 м² — цена, планировка | Тойстрой71" />
        <meta property="og:description" content="Просторная каркасная баня 48 м² с планкеном. Парилка с печью, душевая, комната отдыха и открытая терраса. Строим под ключ в Туле." />
        <meta property="og:url" content="https://toystroy71.ru/projects/banya-48" />
      </Helmet>
      <BanyaHero />
      <BanyaDetails />
      <BanyaOrderForm />
    </div>
  )
}
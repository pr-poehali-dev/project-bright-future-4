import { Helmet } from "react-helmet-async"
import Banya54Hero from "@/pages/banya-54/Banya54Hero"
import Banya54Details from "@/pages/banya-54/Banya54Details"
import Banya54OrderForm from "@/pages/banya-54/Banya54OrderForm"

export default function Banya54() {
  return (
    <div className="min-h-screen bg-white text-[#1a0f0f]">
      <Helmet>
        <title>Баня «Рябина» 6×9 м, 54 м² — цена, планировка | Тойстрой71</title>
        <meta name="description" content="Каркасная баня 54 м² с кирпично-красным фасадом и террасой 18,42 м² с мангалом. Парная, моечная, комната отдыха. Строим под ключ в Туле." />
        <link rel="canonical" href="https://toystroy71.ru/projects/banya-54" />
        <meta property="og:title" content="Баня «Рябина» 6×9 м, 54 м² — цена, планировка | Тойстрой71" />
        <meta property="og:description" content="Каркасная баня 54 м² с кирпично-красным фасадом и террасой 18,42 м² с мангалом. Парная, моечная, комната отдыха. Строим под ключ в Туле." />
        <meta property="og:url" content="https://toystroy71.ru/projects/banya-54" />
      </Helmet>
      <Banya54Hero />
      <Banya54Details />
      <Banya54OrderForm />
    </div>
  )
}
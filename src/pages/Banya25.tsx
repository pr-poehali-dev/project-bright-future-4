import { Helmet } from "react-helmet-async"
import Banya25Hero from "@/pages/banya-25/Banya25Hero"
import Banya25Details from "@/pages/banya-25/Banya25Details"
import Banya25OrderForm from "@/pages/banya-25/Banya25OrderForm"

export default function Banya25() {
  return (
    <div className="min-h-screen bg-white text-[#1a0f0f]">
      <Helmet>
        <title>Баня «Парная 25» 5×5 м, 25 м² — цена, планировка | Тойстрой71</title>
        <meta name="description" content="Компактная каркасная баня 25 м² на свайном фундаменте. Тёплая парилка с печью и уютная терраса. Строим под ключ в Туле и Тульской области." />
        <link rel="canonical" href="https://toystroy71.ru/projects/banya-25" />
        <meta property="og:title" content="Баня «Парная 25» 5×5 м, 25 м² — цена, планировка | Тойстрой71" />
        <meta property="og:description" content="Компактная каркасная баня 25 м² на свайном фундаменте. Тёплая парилка с печью и уютная терраса. Строим под ключ в Туле и Тульской области." />
        <meta property="og:url" content="https://toystroy71.ru/projects/banya-25" />
      </Helmet>
      <Banya25Hero />
      <Banya25Details />
      <Banya25OrderForm />
    </div>
  )
}
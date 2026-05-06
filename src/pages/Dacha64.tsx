import Dacha64Hero from "@/pages/dacha-64/Dacha64Hero"
import Dacha64Details from "@/pages/dacha-64/Dacha64Details"
import Dacha64OrderForm from "@/pages/dacha-64/Dacha64OrderForm"

export default function Dacha64() {
  return (
    <div className="min-h-screen bg-white text-[#1a0f0f]">
      <Dacha64Hero />
      <Dacha64Details />
      <Dacha64OrderForm />
    </div>
  )
}

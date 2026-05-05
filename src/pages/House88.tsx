import House88Hero from "@/pages/house-88/House88Hero"
import House88Details from "@/pages/house-88/House88Details"
import House88OrderForm from "@/pages/house-88/House88OrderForm"

export default function House88() {
  return (
    <div className="min-h-screen bg-white text-[#1a0f0f]">
      <House88Hero />
      <House88Details />
      <House88OrderForm />
    </div>
  )
}

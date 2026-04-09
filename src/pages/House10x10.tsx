import House10x10Hero from "@/pages/house-10x10/House10x10Hero"
import House10x10Details from "@/pages/house-10x10/House10x10Details"
import House10x10OrderForm from "@/pages/house-10x10/House10x10OrderForm"

export default function House10x10() {
  return (
    <div className="min-h-screen bg-white text-[#1a0f0f]">
      <House10x10Hero />
      <House10x10Details />
      <House10x10OrderForm />
    </div>
  )
}

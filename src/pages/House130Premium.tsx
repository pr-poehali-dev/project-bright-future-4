import House130PremiumHero from "@/pages/house-130-premium/House130PremiumHero"
import House130PremiumRooms from "@/pages/house-130-premium/House130PremiumRooms"
import House130PremiumDetails from "@/pages/house-130-premium/House130PremiumDetails"
import House130PremiumOrderForm from "@/pages/house-130-premium/House130PremiumOrderForm"

export default function House130Premium() {
  return (
    <div className="min-h-screen bg-white text-[#1a0f0f]">
      <House130PremiumHero />
      <House130PremiumRooms />
      <House130PremiumDetails />
      <House130PremiumOrderForm />
    </div>
  )
}

import HouseFrameTerraceHero from "@/pages/house-frame-terrace/HouseFrameTerraceHero"
import HouseFrameTerraceDetails from "@/pages/house-frame-terrace/HouseFrameTerraceDetails"
import HouseFrameTerraceOrderForm from "@/pages/house-frame-terrace/HouseFrameTerraceOrderForm"

export default function HouseFrameTerrace() {
  return (
    <div className="min-h-screen bg-white text-[#1a0f0f]">
      <HouseFrameTerraceHero />
      <HouseFrameTerraceDetails />
      <HouseFrameTerraceOrderForm />
    </div>
  )
}

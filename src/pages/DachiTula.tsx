import DachiTulaHero from "@/pages/dachi-tula/DachiTulaHero"
import DachiTulaSections from "@/pages/dachi-tula/DachiTulaSections"
import DachiTulaFaq from "@/pages/dachi-tula/DachiTulaFaq"
import DachiTulaOrderForm from "@/pages/dachi-tula/DachiTulaOrderForm"

export default function DachiTula() {
  return (
    <div className="min-h-screen bg-white text-[#1a0f0f]">
      <DachiTulaHero />
      <DachiTulaSections />
      <DachiTulaFaq />
      <DachiTulaOrderForm />
    </div>
  )
}

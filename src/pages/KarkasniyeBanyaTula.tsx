import KarkasniyeBanyaHero from "@/pages/karkasniye-banya-tula/KarkasniyeBanyaHero"
import KarkasniyeBanyaSections from "@/pages/karkasniye-banya-tula/KarkasniyeBanyaSections"
import KarkasniyeBanyaFaq from "@/pages/karkasniye-banya-tula/KarkasniyeBanyaFaq"
import KarkasniyeBanyaOrderForm from "@/pages/karkasniye-banya-tula/KarkasniyeBanyaOrderForm"

export default function KarkasniyeBanyaTula() {
  return (
    <div className="min-h-screen bg-white text-[#1a0f0f]">
      <KarkasniyeBanyaHero />
      <KarkasniyeBanyaSections />
      <KarkasniyeBanyaFaq />
      <KarkasniyeBanyaOrderForm />
    </div>
  )
}

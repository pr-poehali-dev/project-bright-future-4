import { lazy, Suspense } from "react"
import { Header } from "../components/Header"
import { Hero } from "../components/Hero"

const Philosophy = lazy(() => import("../components/Philosophy").then((m) => ({ default: m.Philosophy })))
const Projects = lazy(() => import("../components/Projects").then((m) => ({ default: m.Projects })))
const Expertise = lazy(() => import("../components/Expertise").then((m) => ({ default: m.Expertise })))
const Calculator = lazy(() => import("../components/Calculator").then((m) => ({ default: m.Calculator })))
const FAQ = lazy(() => import("../components/FAQ").then((m) => ({ default: m.FAQ })))
const Reviews = lazy(() => import("../components/Reviews").then((m) => ({ default: m.Reviews })))
const Partners = lazy(() => import("../components/Partners").then((m) => ({ default: m.Partners })))
const Financing = lazy(() => import("../components/Financing").then((m) => ({ default: m.Financing })))
const Process = lazy(() => import("../components/Process").then((m) => ({ default: m.Process })))
const Footer = lazy(() => import("../components/Footer").then((m) => ({ default: m.Footer })))
const FloatingCall = lazy(() => import("../components/FloatingCall").then((m) => ({ default: m.FloatingCall })))
const PromoPopup = lazy(() => import("../components/PromoPopup").then((m) => ({ default: m.PromoPopup })))
const Comparison = lazy(() => import("../components/Comparison").then((m) => ({ default: m.Comparison })))
const SeoText = lazy(() => import("../components/SeoText").then((m) => ({ default: m.SeoText })))

export default function Index() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Suspense fallback={null}>
        <Philosophy />
        <Projects />
        <Expertise />
        <Financing />
        <Process />
        <Calculator />
        <Comparison />
        <FAQ />
        <Reviews />
        <Partners />
        <SeoText />
        <Footer />
        <FloatingCall />
        <PromoPopup />
      </Suspense>
    </main>
  )
}
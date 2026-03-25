import { Header } from "../components/Header"
import { Hero } from "../components/Hero"
import { Philosophy } from "../components/Philosophy"
import { Projects } from "../components/Projects"
import { Expertise } from "../components/Expertise"
import { Calculator } from "../components/Calculator"
import { FAQ } from "../components/FAQ"
import { Reviews } from "../components/Reviews"
import { Partners } from "../components/Partners"
import { Financing } from "../components/Financing"
import { Process } from "../components/Process"
import { Footer } from "../components/Footer"
import { FloatingCall } from "../components/FloatingCall"
import { CallToAction } from "../components/CallToAction"

export default function Index() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Philosophy />
      <Projects />
      <Expertise />
      <Financing />
      <Process />
      <Calculator />
      <FAQ />
      <Reviews />
      <Partners />
      <Footer />
      <FloatingCall />
    </main>
  )
}
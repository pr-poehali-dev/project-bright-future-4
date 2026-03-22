import { Header } from "../components/Header"
import { Hero } from "../components/Hero"
import { Projects } from "../components/Projects"
import { Expertise } from "../components/Expertise"
import { Calculator } from "../components/Calculator"
import { FAQ } from "../components/FAQ"
import { Reviews } from "../components/Reviews"
import { CallToAction } from "../components/CallToAction"
import { Footer } from "../components/Footer"

export default function Index() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Projects />
      <Expertise />
      <Calculator />
      <FAQ />
      <Reviews />
      <CallToAction />
      <Footer />
    </main>
  )
}
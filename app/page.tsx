import HeroSection from "@/components/HeroSection"
import HowToOrder from "@/components/HowToOrder"
import Services from "@/components/Services"
import RiderPolicy from "@/components/RiderPolicy"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import PickDropServices from "@/components/PickDropServices"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <HowToOrder />
      <Services />
      <PickDropServices />
      <RiderPolicy />
      <Contact />
      <Footer />
    </main>
  )
}

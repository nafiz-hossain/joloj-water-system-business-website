import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import ClientsSection from "@/components/clients-section"
import ContactSection from "@/components/contact-section"
import WhyChooseSection from "@/components/why-choose-section"
import System_breakdown from "@/components/system_breakdown"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <AboutSection />
      <System_breakdown />


      <ServicesSection />
      <WhyChooseSection />
      <ProjectsSection />

      <ClientsSection />
      <ContactSection />
    </main>
  )
}

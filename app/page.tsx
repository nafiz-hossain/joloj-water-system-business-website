import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import ClientsSection from "@/components/clients-section"
import ContactSection from "@/components/contact-section"
import AnimatedSection from "@/components/animated-section"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <div className="bg-sky-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">Why Choose JOLOJ</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Global Sourcing",
                content:
                  "As a designer, manufacturer and supplier of WTP and ETP systems worldwide, we have developed a global sourcing network that can deliver maximum value through the elimination of non-value-added expenses.",
              },
              {
                title: "Trusted Single Source Supplier",
                content:
                  "Our broad range of water and waste water treatment systems enables you to access one or multiple technologies for integration into a total water treatment solution specific to your feedwater source and application.",
              },
              {
                title: "OEM & ODM Service",
                content:
                  "We believe that standard products are not always able to meet our customer's demands. To best serve those needs, JOLOJ Water Systems has extensive OEM & ODM services where you can access our custom design services.",
              },
              {
                title: "Manufacturing Consultancy",
                content:
                  '"Bring your idea to us & get a product" following this motto we are providing manufacturing consultancy & production support of newly developed or existing products. We are expert in CNC machining, Plastic injection molding, 3D design & prototyping.',
              },
            ].map((item, index) => (
              <AnimatedSection key={item.title} delay={200 * index} direction={index % 2 === 0 ? "left" : "right"}>
                <Card className="bg-white h-full transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.content}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
      <ProjectsSection />
      <ClientsSection />
      <ContactSection />
    </main>
  )
}

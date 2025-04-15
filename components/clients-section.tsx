import Image from "next/image"
import AnimatedSection from "./animated-section"

export default function ClientsSection() {
  return (
    <section className="py-16 bg-sky-50">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Precious Clients</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We are proud to serve a diverse range of clients across various industries.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {/* First client with actual image */}
          <AnimatedSection delay={100} direction="left">
            <div className="bg-white p-4 rounded-lg flex items-center justify-center h-24 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="relative h-16 w-full">
                <Image
                  src="/images/clients/Government_Seal_of_Bangladesh.svg"
                  alt="Government of Bangladesh"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Remaining clients with placeholders */}
          {Array.from({ length: 5 }).map((_, index) => (
            <AnimatedSection
              key={index}
              delay={100 * (index + 1)}
              direction={index % 3 === 0 ? "left" : index % 3 === 1 ? "up" : "right"}
            >
              <div className="bg-white p-4 rounded-lg flex items-center justify-center h-24 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="relative h-16 w-full">
                  <Image
                    src={`/placeholder.svg?height=100&width=150&text=Client+${index + 2}`}
                    alt={`Client ${index + 2}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={400}>
          <div className="mt-16 bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-6 text-center">Customer Care Management</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  letter: "C",
                  title: "Customer's Need",
                  desc: "Care about customer's need and committed to deliver that",
                },
                {
                  letter: "A",
                  title: "Accountable",
                  desc: "Accountable for all of the projects quality and schedule issue",
                },
                {
                  letter: "R",
                  title: "Research",
                  desc: "Experienced Exports for any research and development challenges",
                },
                {
                  letter: "E",
                  title: "Enhancement",
                  desc: "Enhancement of features will make the product/project more successful",
                },
              ].map((item, index) => (
                <AnimatedSection key={item.letter} delay={500 + index * 100} direction="up">
                  <div className="text-center transform transition-all duration-300 hover:scale-105">
                    <div className="text-4xl font-bold text-sky-700 mb-2">{item.letter}</div>
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

import Image from "next/image"
import AnimatedSection from "./animated-section"

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left">
            <div>
              <h2 className="text-3xl font-bold mb-6">About JOLOJ</h2>
              <p className="text-muted-foreground mb-6">
                "JOLOJ Water Systems" is one of the leading solution providers in Bangladesh in the field of
                environment, water & waste water treatment sector. We have more than 10 years experienced Consultants,
                Engineers & Technical Experts on board. We provide solution on R&D basis & also on direct customer
                demand. We are not only expert in providing water treatment solution but also providing Manufacturing
                facility of any kind of water treatment products. We have provided 30+ drinking water, WTP & ETP
                solutions all over Bangladesh.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="bg-sky-50 p-6 rounded-lg transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <h3 className="text-xl font-bold mb-3 text-sky-700">Our Vision</h3>
                  <p className="text-muted-foreground">
                    Our vision is to maximize Eco-friendly industrialization and ensuring safe drinking water to support
                    sustainable development goal through innovation.
                  </p>
                </div>
                <div className="bg-sky-50 p-6 rounded-lg transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <h3 className="text-xl font-bold mb-3 text-sky-700">Our Mission</h3>
                  <p className="text-muted-foreground">
                    Our mission is to enhance business growth of our customers and delight them by providing best
                    solution in the field of wastewater management. We are working hard to stay forward as a complete
                    water treatment solution providing company by being innovative and cost effective.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={300}>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-[1.03] hover:shadow-xl">
              <Image
                src="images/mission.jpeg"
                alt="JOLOJ Water Systems Facility"
                fill
                className="object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

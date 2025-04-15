import AnimatedSection from "./animated-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Shield, Settings, PenToolIcon as Tool } from "lucide-react"

export default function WhyChooseSection() {
  const features = [
    {
      title: "Global Sourcing",
      description:
        "As a designer, manufacturer and supplier of WTP and ETP systems and services worldwide, we have developed a global sourcing network that can deliver maximum value through the elimination of non-value-added expenses.",
      icon: <Globe className="h-8 w-8 text-white" />,
    },
    {
      title: "Trusted Single Source Supplier",
      description:
        "Our broad range water and waste water treatment systems enables you to access one or multiple technologies for integration into a total water treatment solution specific to your feed-water source and application.",
      icon: <Shield className="h-8 w-8 text-white" />,
    },
    {
      title: "OEM & ODM Service",
      description:
        "We believe that standard products are not always able to meet our customer's demands. To best serve those needs, JOLOJ Water Systems has an extensive OEM & ODM services where you can access our custom design services.",
      icon: <Settings className="h-8 w-8 text-white" />,
    },
    {
      title: "Manufacturing Consultancy",
      description:
        '"Bring your idea to us & get a product" following this motto we are providing manufacturing consultancy & production support of a newly developed product or any existed product. We are expert in CNC machining, Plastic injection molding, 3D design & prototyping.',
      icon: <Tool className="h-8 w-8 text-white" />,
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-white to-sky-50">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="relative mb-12">
            <h2 className="text-3xl font-bold inline-block pr-4 bg-white relative z-10">
              WHY CHOOSE <span className="text-sky-600">JOLOJ</span>
            </h2>
            <div className="absolute top-1/2 left-0 w-full h-px bg-gray-200 -z-0"></div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection key={feature.title} delay={index * 100} direction={index % 2 === 0 ? "left" : "right"}>
              <Card className="overflow-hidden border-none shadow-md h-full bg-gradient-to-b from-sky-100 to-sky-200">
                <div className="relative">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="w-16 h-16 rounded-full bg-sky-700 flex items-center justify-center shadow-lg">
                      {feature.icon}
                    </div>
                  </div>
                </div>
                <CardHeader className="pt-12 pb-2 text-center">
                  <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                  <div className="w-12 h-0.5 bg-gray-800 mx-auto mt-1"></div>
                </CardHeader>
                <CardContent className="text-center px-6 pb-6">
                  <p className="text-sm text-gray-700">{feature.description}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

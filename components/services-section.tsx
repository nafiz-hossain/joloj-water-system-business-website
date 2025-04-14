"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AnimatedSection from "./animated-section"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState("drinking")

  // Service items for each category
  const serviceItems = {
    drinking: [
      {
        title: "Household & Domestic Water Purifier",
        description: "Compact and efficient water purifiers for home use, ensuring clean and safe drinking water.",
      },
      {
        title: "Central Drinking Water Purifier",
        description: "Centralized water purification systems for buildings, offices, and commercial spaces.",
      },
      {
        title: "Spare Parts & Components",
        description: "Quality spare parts including PP Cartridge Filters, Alkaline Filters, RO Membranes, and more.",
      },
    ],
    wtp: [
      {
        title: "Reverse Osmosis (RO) Plant",
        description: "Advanced RO systems for removing contaminants and providing pure water for various applications.",
      },
      {
        title: "Iron Removal Plant (IRP)",
        description: "Specialized systems for removing iron and related contaminants from water sources.",
      },
      {
        title: "Soft Water Plant (SF)",
        description: "Systems designed to remove hardness from water, making it suitable for various applications.",
      },
      {
        title: "Demineralized Plant (DM)",
        description: "Industrial-grade water purification systems removing mineral ions for specialized applications.",
      },
      {
        title: "Deionized Plant (DI)",
        description: "Advanced systems that produce ultra-pure water by removing all ionized minerals and salts.",
      },
      {
        title: "Salinity or Salt Removal Plant",
        description: "Specialized systems for removing salt and reducing salinity in water sources.",
      },
      {
        title: "Automatic Bottle Filling Plant",
        description: "Automated systems for efficient and hygienic filling of water bottles.",
      },
      {
        title: "Battery Water Plant",
        description: "Specialized systems producing purified water for battery maintenance and manufacturing.",
      },
      {
        title: "Dialysis Water Plant",
        description: "High-purity water treatment systems specifically designed for medical dialysis applications.",
      },
    ],
    etp: [
      {
        title: "Effluent Treatment Plant (ETP)",
        description:
          "Comprehensive systems for treating industrial wastewater before discharge, ensuring environmental compliance.",
      },
      {
        title: "Sewage Treatment Plant (STP)",
        description: "Systems designed to treat domestic and commercial sewage for safe disposal or reuse.",
      },
      {
        title: "Zero Liquid Discharge Plant (ZLDP)",
        description:
          "Advanced systems that eliminate liquid waste discharge, recovering water and valuable byproducts.",
      },
      {
        title: "Portable STP",
        description: "Compact, mobile sewage treatment solutions for temporary or remote locations.",
      },
    ],
    manufacturing: [
      {
        title: "3D CAD Design",
        description: "Professional 3D design services for product development and manufacturing.",
      },
      {
        title: "3D Printing & Prototyping",
        description: "Rapid prototyping services to bring your designs to life quickly and efficiently.",
      },
      {
        title: "CNC Machining",
        description: "Precision manufacturing services using computer-controlled cutting machines.",
      },
      {
        title: "Mold & Die",
        description: "Custom mold and die design and manufacturing for various industrial applications.",
      },
      {
        title: "Plastic Injection Molding",
        description: "Manufacturing services for plastic components with precision and quality.",
      },
    ],
    chemicals: [
      {
        title: "Anti-Scaling Chemical",
        description: "Specialized chemicals to prevent scale buildup in water treatment systems and pipelines.",
      },
      {
        title: "Anti-Silica Chemical",
        description: "Chemicals designed to control silica levels in water treatment processes.",
      },
      {
        title: "CIP Chemical",
        description: "Clean-in-place chemicals for efficient cleaning and maintenance of water treatment equipment.",
      },
      {
        title: "ETP Chemical",
        description: "Specialized chemicals for enhancing the efficiency of effluent treatment processes.",
      },
      {
        title: "Boiler Dosing Chemical",
        description: "Chemicals for treating boiler water to prevent corrosion, scaling, and improve efficiency.",
      },
    ],
  }

  // Scroll control for horizontal scrolling
  const scroll = (id: string, direction: "left" | "right") => {
    const container = document.getElementById(id)
    if (container) {
      const scrollAmount = direction === "left" ? -300 : 300
      container.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We are dealing with Engineering Design, Supply, Installation, Commissioning, Upgradation, Operation,
              Troubleshooting, and Maintenance of various water treatment solutions.
            </p>
          </div>
        </AnimatedSection>

        <Tabs defaultValue="drinking" className="w-full" onValueChange={setActiveTab}>
          <AnimatedSection delay={200}>
            <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
              <TabsTrigger value="drinking">Drinking Water Purifiers</TabsTrigger>
              <TabsTrigger value="wtp">Water Treatment Plant</TabsTrigger>
              <TabsTrigger value="etp">Waste Water Treatment</TabsTrigger>
              <TabsTrigger value="manufacturing">Manufacturing Consultancy</TabsTrigger>
              <TabsTrigger value="chemicals">Chemicals</TabsTrigger>
            </TabsList>
          </AnimatedSection>

          {Object.entries(serviceItems).map(([category, items]) => (
            <TabsContent key={category} value={category} className="space-y-8">
              <div className="relative">
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md hidden md:flex"
                  onClick={() => scroll(`scroll-container-${category}`, "left")}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                <div
                  id={`scroll-container-${category}`}
                  className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide relative"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  {items.map((item, index) => (
                    <AnimatedSection
                      key={`${category}-${index}`}
                      delay={300 + index * 100}
                      className="min-w-[300px] max-w-[300px] flex-shrink-0"
                    >
                      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                        <CardHeader>
                          <CardTitle className="text-lg">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="relative h-48 mb-4 overflow-hidden rounded-md">
                            <Image
                              src="/placeholder.svg?height=200&width=300"
                              alt={item.title}
                              fill
                              className="object-cover transition-transform duration-500 hover:scale-110"
                            />
                          </div>
                          <p className="text-muted-foreground">{item.description}</p>
                        </CardContent>
                      </Card>
                    </AnimatedSection>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md hidden md:flex"
                  onClick={() => scroll(`scroll-container-${category}`, "right")}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

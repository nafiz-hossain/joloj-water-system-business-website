"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AnimatedSection from "./animated-section"
import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState("drinking")
  const [showLeftArrow, setShowLeftArrow] = useState<Record<string, boolean>>({})
  const [showRightArrow, setShowRightArrow] = useState<Record<string, boolean>>({})
  const containerRefs = useRef<Record<string, HTMLDivElement | null>>({})

  // Service items for each category with image paths
  const serviceItems = {
    drinking: [
      {
        title: "Household & Domestic Water Purifier",
        description: "Compact and efficient water purifiers for home use, ensuring clean and safe drinking water.",
        image: "/placeholder.svg?height=200&width=300&text=Domestic+Water+Purifier",
      },
      {
        title: "Central Drinking Water Purifier",
        description: "Centralized water purification systems for buildings, offices, and commercial spaces.",
        image: "/placeholder.svg?height=200&width=300&text=Central+Water+Purifier",
      },
      {
        title: "Spare Parts & Components",
        description: "Quality spare parts including PP Cartridge Filters, Alkaline Filters, RO Membranes, and more.",
        image: "/placeholder.svg?height=200&width=300&text=Water+Purifier+Parts",
      },
    ],
    wtp: [
      {
        title: "Reverse Osmosis (RO) Plant",
        description: "Advanced RO systems for removing contaminants and providing pure water for various applications.",
        image: "/placeholder.svg?height=200&width=300&text=RO+Plant",
      },
      {
        title: "Iron Removal Plant (IRP)",
        description: "Specialized systems for removing iron and related contaminants from water sources.",
        image: "/placeholder.svg?height=200&width=300&text=Iron+Removal+Plant",
      },
      {
        title: "Soft Water Plant (SF)",
        description: "Systems designed to remove hardness from water, making it suitable for various applications.",
        image: "/placeholder.svg?height=200&width=300&text=Soft+Water+Plant",
      },
      {
        title: "Demineralized Plant (DM)",
        description: "Industrial-grade water purification systems removing mineral ions for specialized applications.",
        image: "/placeholder.svg?height=200&width=300&text=Demineralized+Plant",
      },
      {
        title: "Deionized Plant (DI)",
        description: "Advanced systems that produce ultra-pure water by removing all ionized minerals and salts.",
        image: "/placeholder.svg?height=200&width=300&text=Deionized+Plant",
      },
      {
        title: "Salinity or Salt Removal Plant",
        description: "Specialized systems for removing salt and reducing salinity in water sources.",
        image: "/placeholder.svg?height=200&width=300&text=Salt+Removal+Plant",
      },
      {
        title: "Automatic Bottle Filling Plant",
        description: "Automated systems for efficient and hygienic filling of water bottles.",
        image: "/placeholder.svg?height=200&width=300&text=Bottle+Filling+Plant",
      },
      {
        title: "Battery Water Plant",
        description: "Specialized systems producing purified water for battery maintenance and manufacturing.",
        image: "/placeholder.svg?height=200&width=300&text=Battery+Water+Plant",
      },
      {
        title: "Dialysis Water Plant",
        description: "High-purity water treatment systems specifically designed for medical dialysis applications.",
        image: "/placeholder.svg?height=200&width=300&text=Dialysis+Water+Plant",
      },
    ],
    etp: [
      {
        title: "Effluent Treatment Plant (ETP)",
        description:
          "Comprehensive systems for treating industrial wastewater before discharge, ensuring environmental compliance.",
        image: "/placeholder.svg?height=200&width=300&text=ETP+System",
      },
      {
        title: "Sewage Treatment Plant (STP)",
        description: "Systems designed to treat domestic and commercial sewage for safe disposal or reuse.",
        image: "/placeholder.svg?height=200&width=300&text=STP+System",
      },
      {
        title: "Zero Liquid Discharge Plant (ZLDP)",
        description:
          "Advanced systems that eliminate liquid waste discharge, recovering water and valuable byproducts.",
        image: "/placeholder.svg?height=200&width=300&text=Zero+Liquid+Discharge",
      },
      {
        title: "Portable STP",
        description: "Compact, mobile sewage treatment solutions for temporary or remote locations.",
        image: "/placeholder.svg?height=200&width=300&text=Portable+STP",
      },
    ],
    manufacturing: [
      {
        title: "3D CAD Design",
        description: "Professional 3D design services for product development and manufacturing.",
        image: "/placeholder.svg?height=200&width=300&text=3D+CAD+Design",
      },
      {
        title: "3D Printing & Prototyping",
        description: "Rapid prototyping services to bring your designs to life quickly and efficiently.",
        image: "/placeholder.svg?height=200&width=300&text=3D+Printing",
      },
      {
        title: "CNC Machining",
        description: "Precision manufacturing services using computer-controlled cutting machines.",
        image: "/placeholder.svg?height=200&width=300&text=CNC+Machining",
      },
      {
        title: "Mold & Die",
        description: "Custom mold and die design and manufacturing for various industrial applications.",
        image: "/placeholder.svg?height=200&width=300&text=Mold+and+Die",
      },
      {
        title: "Plastic Injection Molding",
        description: "Manufacturing services for plastic components with precision and quality.",
        image: "/placeholder.svg?height=200&width=300&text=Injection+Molding",
      },
    ],
    chemicals: [
      {
        title: "Anti-Scaling Chemical",
        description: "Specialized chemicals to prevent scale buildup in water treatment systems and pipelines.",
        image: "/placeholder.svg?height=200&width=300&text=Anti-Scaling+Chemical",
      },
      {
        title: "Anti-Silica Chemical",
        description: "Chemicals designed to control silica levels in water treatment processes.",
        image: "/placeholder.svg?height=200&width=300&text=Anti-Silica+Chemical",
      },
      {
        title: "CIP Chemical",
        description: "Clean-in-place chemicals for efficient cleaning and maintenance of water treatment equipment.",
        image: "/placeholder.svg?height=200&width=300&text=CIP+Chemical",
      },
      {
        title: "ETP Chemical",
        description: "Specialized chemicals for enhancing the efficiency of effluent treatment processes.",
        image: "/placeholder.svg?height=200&width=300&text=ETP+Chemical",
      },
      {
        title: "Boiler Dosing Chemical",
        description: "Chemicals for treating boiler water to prevent corrosion, scaling, and improve efficiency.",
        image: "/placeholder.svg?height=200&width=300&text=Boiler+Chemical",
      },
    ],
  }

  // Check if scrolling is needed and update arrow visibility
  const checkScrollability = (category: string) => {
    const container = containerRefs.current[category]
    if (container) {
      const isScrollable = container.scrollWidth > container.clientWidth
      const isScrolledToStart = container.scrollLeft <= 10
      const isScrolledToEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 10

      setShowLeftArrow((prev) => ({
        ...prev,
        [category]: isScrollable && !isScrolledToStart,
      }))

      setShowRightArrow((prev) => ({
        ...prev,
        [category]: isScrollable && !isScrolledToEnd,
      }))
    }
  }

  // Set up scroll event listeners
  useEffect(() => {
    const categories = Object.keys(serviceItems)

    // Initial check for all categories
    categories.forEach((category) => {
      checkScrollability(category)
    })

    // Add scroll event listeners
    categories.forEach((category) => {
      const container = containerRefs.current[category]
      if (container) {
        const handleScroll = () => checkScrollability(category)
        container.addEventListener("scroll", handleScroll)
        return () => {
          container.removeEventListener("scroll", handleScroll)
        }
      }
    })

    // Check on window resize
    const handleResize = () => {
      categories.forEach((category) => {
        checkScrollability(category)
      })
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [activeTab]) // Only re-run when activeTab changes

  // Scroll control for horizontal scrolling
  const scroll = (category: string, direction: "left" | "right") => {
    const container = containerRefs.current[category]
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
                {showLeftArrow[category] && (
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md hidden md:flex"
                    onClick={() => scroll(category, "left")}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                )}

                <div
                  ref={(el) => (containerRefs.current[category] = el)}
                  className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide relative"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                  onScroll={() => checkScrollability(category)}
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
                              src={item.image || "/placeholder.svg"}
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

                {showRightArrow[category] && (
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md hidden md:flex"
                    onClick={() => scroll(category, "right")}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

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
        image: "images/services/drinking-water-purifier/drinking-water-purifier-1.png",      },
      {
        title: "Central Drinking Water Purifier",
        description: "Centralized water purification systems for buildings, offices, and commercial spaces.",
        image: "images/services/drinking-water-purifier/Central-drinking-water.png",
      }
    ],
    wtp: [
      {
        title: "Reverse Osmosis (RO) Plant",
        description: "Advanced RO systems for removing contaminants and providing pure water for various applications.",
        image: "images/services/water-treatment-plant/02 iRO tank & tap.png",
      },
      {
        title: "Iron Removal Plant (IRP)",
        description: "Specialized systems for removing iron and related contaminants from water sources.",
        image: "images/services/water-treatment-plant/Iron-Removal-Plant.webp",
      },
      {
        title: "Soft Water Plant (SF)",
        description: "Systems designed to remove hardness from water, making it suitable for various applications.",
        image: "images/services/water-treatment-plant/frp-water-softening-plant.png",
      },
      {
        title: "Demineralized Plant (DM)",
        description: "Industrial-grade water purification systems removing mineral ions for specialized applications.",
        image: "images/services/drinking-water-purifier/Upscaled-2X-Demineralization.png",
      },
      {
        title: "Deionized Plant (DI)",
        description: "Advanced systems that produce ultra-pure water by removing all ionized minerals and salts.",
        image: "images/services/water-treatment-plant/Upscaled-2X-Ionized water treatment plant.jpeg",
      },
      {
        title: "Salinity or Salt Removal Plant",
        description: "Specialized systems for removing salt and reducing salinity in water sources.",
        image: "images/services/water-treatment-plant/saline.png",
      },
      {
        title: "Automatic Bottle Filling Plant",
        description: "Automated systems for efficient and hygienic filling of water bottles.",
        image: "images/services/water-treatment-plant/Upscaled-2X-automatic-rinsing-filling-capping-machine-1000x1000.jpg",
      },
      {
        title: "Battery Water Plant",
        description: "Specialized systems producing purified water for battery maintenance and manufacturing.",
        image: "images/services/water-treatment-plant/battery-water-plant-1000x1000.webp",
      },
      {
        title: "Dialysis Water Plant",
        description: "High-purity water treatment systems specifically designed for medical dialysis applications.",
        image: "images/services/water-treatment-plant/dialysis-product-jpeg-1000x1000.webp",
      },
    ],
    etp: [
      {
        title: "Effluent Treatment Plant (ETP)",
        description:
          "Comprehensive systems for treating industrial wastewater before discharge, ensuring environmental compliance.",
        image: "images/services/waste-water-system/ETP-STP-1-770x499.webp",
      },
      {
        title: "Sewage Treatment Plant (STP)",
        description: "Systems designed to treat domestic and commercial sewage for safe disposal or reuse.",
        image: "images/services/waste-water-system/sewage-treatment-plant-stp-1000x1000.webp",
      },
      {
        title: "Zero Liquid Discharge Plant (ZLDP)",
        description:
          "Advanced systems that eliminate liquid waste discharge, recovering water and valuable byproducts.",
        image: "images/services/waste-water-system/Untitled-design-2024-02-28T135637.448.png",
      },
      {
        title: "Portable STP",
        description: "Compact, mobile sewage treatment solutions for temporary or remote locations.",
        image: "images/services/waste-water-system/portable-sewage-treatment-plant-stp-1000x1000.jpg",
      },
    ],
    manufacturing: [
      {
        title: "3D CAD Design",
        description: "Professional 3D design services for product development and manufacturing.",
        image: "images/services/Manufracturing/3d-cad-design.jpeg",
      },
      {
        title: "3D Printing & Prototyping",
        description: "Rapid prototyping services to bring your designs to life quickly and efficiently.",
        image: "images/services/Manufracturing/D-Printed-Filters-Capsules-Without-Activated-Carbon-A-The-original-design-left-and.ppm",
      },
      {
        title: "CNC Machining",
        description: "Precision manufacturing services using computer-controlled cutting machines.",
        image: "images/services/Manufracturing/KMT-WATERJET-CUTTING-TABLE-ICON-1-1024x788.webp",
      },
      {
        title: "Mold & Die",
        description: "Custom mold and die design and manufacturing for various industrial applications.",
        image: "images/services/Manufracturing/Water-Purifier-Mould.jpg.webp",
      },
      {
        title: "Plastic Injection Molding",
        description: "Manufacturing services for plastic components with precision and quality.",
        image: "images/services/Manufracturing/Clear-plastic-parts-created-by-injection-molding-process.webp",
      },
    ],
    chemicals: [
      {
        title: "Anti-Scaling Chemical",
        description: "Specialized chemicals to prevent scale buildup in water treatment systems and pipelines.",
        image: "images/services/Chemical/puredrop-anti-scaling-dosing-chemical-500x500.jpg",
      },
      {
        title: "Anti-Silica Chemical",
        description: "Chemicals designed to control silica levels in water treatment processes.",
        image: "images/services/Chemical/precipitated-silica-1000x1000.webp",
      },
      {
        title: "CIP Chemical",
        description: "Clean-in-place chemicals for efficient cleaning and maintenance of water treatment equipment.",
        image: "images/services/Chemical/CIP 200 55 gallon 668 784.jpg",
      },
      {
        title: "ETP Chemical",
        description: "Specialized chemicals for enhancing the efficiency of effluent treatment processes.",
        image: "images/services/Chemical/Upscaled-2X-etp-chemicals-1000x1000.jpg",
      },
      {
        title: "Boiler Dosing Chemical",
        description: "Chemicals for treating boiler water to prevent corrosion, scaling, and improve efficiency.",
        image: "images/services/Chemical/1010837.jpg",
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

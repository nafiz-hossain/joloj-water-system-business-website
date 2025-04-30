"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AnimatedSection from "./animated-section"
import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Description } from "@radix-ui/react-toast"

export default function System_breakdown() {
  const [activeTab, setActiveTab] = useState("drinking")
  const [showLeftArrow, setShowLeftArrow] = useState<Record<string, boolean>>({})
  const [showRightArrow, setShowRightArrow] = useState<Record<string, boolean>>({})
  const containerRefs = useRef<Record<string, HTMLDivElement | null>>({})

  // Service items for each category with image paths
  const parts_item = {
    drinking: [
      {
        title: "PURICOM CE2",
        image: "images/units/purification-system/11.png",     
      },  {
        title: "EASY PURE",
        image: "images/units/purification-system/10.png",     
      },
      {
        title: "AQUA",
        image: "images/units/purification-system/12.png",     
      },
      {
        title: "PURICOM CMW-R3",
        image: "images/units/purification-system/13.png",     
      },
      {
        title: "SUERSIBLE FILTER",
        image: "images/units/purification-system/14.png",     
      },
      {
        title: "I-RO",
        image: "images/units/purification-system/15.png",     
      },
      {
        title: "KIWI",
        image: "images/units/purification-system/16.png",     
      },
      {
        title: "KIWI",
        image: "images/units/purification-system/17.png",     
      },
      {
        title: "COMMERCIAL RO",
        image: "images/units/purification-system/18.png",     
      },
      {
        title: "HERON",
        image: "images/units/purification-system/19.png",     
      }
 
    ],
    spare: [
      {
        title: "PP Cartridge Filter",
        image: "images/units/spare/33.png",     
      },
      {
        title: "GAC Filter",
        image: "images/units/spare/Upscaled-2X-40.png",     
      },
      {
        title: "Housing Keys",
        image: "images/units/spare/Upscaled-2X-41.png",     
      },
      {
        title: "Alkaline Filter",
        image: "images/units/spare/Upscaled-2X-32.png",     
      },
      {
        title: "UV Filter",
        image: "images/units/spare/Upscaled-2X-34.png",     
      },
      {
        title: "RO Membrance",
        image: "images/units/spare/Upscaled-2X-35.png",     
      },
      {
        title: "NET Carbon",
        image: "images/units/spare/Upscaled-2X-36.png",     
      },
      {
        title: "Mineralized Filter",
        image: "images/units/spare/Upscaled-2X-31.png",     
      },
      {
        title: "Reserve Tank",
        image: "images/units/spare/Upscaled-2X-37.png",     
      },
      {
        title: "Fittings",
        image: "images/units/spare/Upscaled-2X-39.png",     
      },
      {
        title: "Diaphragm Pump",
        image: "images/units/spare/Upscaled-2X-38.png",     
      },
    ],
    wtp: [
      {
        title: "FRP Vessel",
        image: "images/units/wtp/42.png",     
      },
      {
        title: "MS Vessel",
        image: "images/units/wtp/43.png",     
      },
      {
        title: "SS Vessel",
        image: "images/units/wtp/44.png",     
      },
      {
        title: "SS Tank",
        image: "images/units/wtp/45.png",     
      },
      {
        title: "Dosing Pump",
        image: "images/units/wtp/46.png",     
      },
      {
        title: "Flow Meter",
        image: "images/units/wtp/47.png",     
      },
      {
        title: "Conductivity Monitor",
        image: "images/units/wtp/48.png",     
      },
      {
        title: "20 in Jumbo Filter",
        image: "images/units/wtp/49.png",     
      },
      {
        title: "Pressure Gauge",
        image: "images/units/wtp/50.png",     
      },
      {
        title: "Multiport Valves",
        image: "images/units/wtp/60.gif",     
      },
      {
        title: "Micron Filter",
        image: "images/units/wtp/52.png",     
      },
      {
        title: "UV Light",
        image: "images/units/wtp/54.png",     
      },
      {
        title: "Streiners",
        image: "images/units/wtp/55.png",     
      },
    ],
    ro: [
      {
        title: "Solinoid Valve",
        image: "images/units/ro/59.png",     
      },  {
        title: "Multistage Pump",
        image: "images/units/ro/60.png",     
      },
      {
        title: "RO Controller",
        image: "images/units/ro/61.png",     
      },
      {
        title: "RO Membranes",
        image: "images/units/ro/65.png",     
      },
      {
        title: "Membrance Housing FRP",
        image: "images/units/ro/62.png",     
      },
      {
        title: "Membrance Housing SS",
        image: "images/units/ro/64.png",     
      },
      {
        title: "250LPH RO Plant",
        image: "images/units/ro/68.png",     
      },
      {
        title: "RO System 500LPH",
        image: "images/units/ro/69.png",     
      },
      {
        title: "RO Machine 4000 LPH",
        image: "images/units/ro/67.png",     
      },
      {
        title: "RO system 8000 LPH",
        image: "images/units/ro/63.png",     
      },      
      {
        title: "RO System 12000LPH",
        image: "images/units/ro/66.png",     
      }
 
    ],
    media: [
      {
        title: "Activated Carbon",
        image: "images/media/73.png",     
      },
      {
        title: "Mixed Bed Resin",
        image: "images/media/74.png",     
      },
      {
        title: "Gravels & Pebbles",
        image: "images/media/75.png",     
      },
      {
        title: "Iron Exchange Resin",
        image: "images/media/70.png",     
      },
      {
        title: "Manganese Sand",
        image: "images/media/76.png",     
      },
      {
        title: "DMI-65",
        image: "images/media/77.png",     
      },
      {
        title: "Anion Resin",
        image: "images/media/78.png",     
      }
    ],
    dm: [
      {
        title: "5-7 LPH DM Plant",
        image: "images/dm/80.gif",     
      },
      {
        title: "EDI Water Plant",
        image: "images/dm/72.png",     
      }
    ],
    etp: [
      {
        title: "BELT-OIL SKIMMER",
        image: "images/etp/82.png",
        description: "CAP: 10-200 m3/hr"     
      },
      {
        title: "BAR SCREEN",
        image: "images/etp/85.png",
        description: "CAP: 80-500 m3/hr"     
      },
      {
        title: "NON CLOG SELF PRIMMING PUMP",
        image: "images/etp/84.png",
        description: "CAP: 5-200 m3/hr, KGEN Series"     
      },
      {
        title: "FILTER PRESS",
        image: "images/etp/81.png",
        description: "Quick dry sludge making unit"     
      },
      {
        title: "SCREW PRESS",
        image: "images/etp/83.png",
        description: "Quick dry sludge making unit"     
      },
      {
        title: "AIR BLOWER",
        image: "images/etp/86.png",
        description: "Minimum Vibration & Low Noise, CAP: 50-7000 m3/hr"     
      },
      {
        title: "ELECTRO MAGNETIC FLOW METER",
        image: "images/etp/89.png",
        description: "CAP: 10-1000 m3 /hr"     
      },
      {
        title: "DRUM SCREEN",
        image: "images/etp/91.png",
        description: "CAP: 50-500 m3/hr"     
      },
      {
        title: "SLUDGE PUMP",
        image: "images/etp/92.png",
        description: "CAP: 30 rpm to 150 rpm"     
      },
      {
        title: "DISK TYPE DIFFUSER (FINE BUBBLE)",
        image: "images/etp/90.png",
        description: "CAP: 1.2-7.2 m3 /hr"     
      },
      {
        title: "COARSE BUBBLE DIFFUSER",
        image: "images/etp/87.png",
        description: "CAP: 1.2-7.2 m3 /hr"     
      },
      {
        title: "TUBE TYPE DIFFUSER",
        image: "images/etp/88.png",
        description: "LTF 1000 (Diameter 64mm*3/4 in PT) Length 1000 mm, CAP: 290-440 L/M"     
      }
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
    const categories = Object.keys(parts_item)

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
    <section id="products" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Products</h2>

          </div>
        </AnimatedSection>

        <Tabs defaultValue="drinking" className="w-full" onValueChange={setActiveTab}>
          <AnimatedSection delay={200}>
            <TabsList className="grid grid-cols-2 md:grid-cols-7 mb-8">
              <TabsTrigger value="drinking">Drinking Water Filters</TabsTrigger>
              <TabsTrigger value="spare">Spare PARTS</TabsTrigger>
              <TabsTrigger value="wtp">Water Treatment Plant</TabsTrigger>
              <TabsTrigger value="ro">RO Systems</TabsTrigger>
              <TabsTrigger value="media">Treatment Media</TabsTrigger>
              <TabsTrigger value="dm">DM Plant</TabsTrigger>
              <TabsTrigger value="etp">ETP Plant</TabsTrigger>




            </TabsList>
          </AnimatedSection>

          {Object.entries(parts_item).map(([category, items]) => (
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

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
  const serviceItems = {
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
      
    ],
    ro: [
      
    ],
    media: [
      
    ],
    dm: [
     
    ],
    etp: [
   
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
            <h2 className="text-3xl font-bold mb-4">DRINKING WATER PURIFICATION SYSTEM</h2>

          </div>
        </AnimatedSection>

        <Tabs defaultValue="drinking" className="w-full" onValueChange={setActiveTab}>
          <AnimatedSection delay={200}>
            <TabsList className="grid grid-cols-2 md:grid-cols-7 mb-8">
              <TabsTrigger value="drinking">Water Filtration UNITS</TabsTrigger>
              <TabsTrigger value="spare">Spare PARTS</TabsTrigger>
              <TabsTrigger value="wtp">Water Treatment Plant</TabsTrigger>
              <TabsTrigger value="ro">RO Systems</TabsTrigger>
              <TabsTrigger value="media">Treatment Media</TabsTrigger>
              <TabsTrigger value="dm">DM Plant</TabsTrigger>
              <TabsTrigger value="etp">ETP Plant</TabsTrigger>




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

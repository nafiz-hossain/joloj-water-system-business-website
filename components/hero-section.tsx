import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import AnimatedSection from "./animated-section"

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-sky-50 to-white overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-sky-300 mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 rounded-full bg-sky-400 mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 rounded-full bg-sky-200 mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <AnimatedSection direction="left">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                <span className="text-sky-700">PURITY</span> Is Our <span className="text-sky-700">PRIORITY</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Leading solution provider in Bangladesh for environment, water & waste water treatment with over 10
                years of experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="group">
                  <Link href="#services">
                    Our Services
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={300}>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-[1.02]">
              <Image
                src="images/vision.jpg"
                alt="JOLOJ Water Treatment Plant"
                fill
                className="object-cover"
                priority
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

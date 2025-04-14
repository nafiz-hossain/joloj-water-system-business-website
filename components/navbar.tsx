"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm border-b" : "bg-white border-b",
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-12 w-auto">
            <Image
              src="/images/logo.png"
              alt="JOLOJ Water Systems Logo"
              width={160}
              height={48}
              className="transition-all duration-300 hover:opacity-90"
              priority
            />
          </div>
        </Link>
        <nav className="hidden md:flex gap-6">
          {["Home", "About", "Services", "Projects", "Contact"].map((item, index) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
              className="text-sm font-medium relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-700 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>
        <Button
          asChild
          className="hidden md:inline-flex transition-all duration-300 transform hover:scale-105"
          variant="default"
        >
          <Link href="#contact">Get in Touch</Link>
        </Button>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden container mx-auto px-4 pb-4 pt-2 bg-white">
          <nav className="flex flex-col gap-4">
            {["Home", "About", "Services", "Projects", "Contact"].map((item, index) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                className="text-sm font-medium hover:text-sky-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Button asChild className="w-full transition-all duration-300" variant="default">
              <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
                Get in Touch
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

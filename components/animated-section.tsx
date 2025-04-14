"use client"

import type React from "react"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
}

export default function AnimatedSection({ children, className, delay = 0, direction = "up" }: AnimatedSectionProps) {
  const { ref, isIntersecting } = useIntersectionObserver()

  const directionClasses = {
    up: "translate-y-10",
    down: "-translate-y-10",
    left: "translate-x-10",
    right: "-translate-x-10",
    none: "opacity-0",
  }

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={cn(
        "transition-all duration-700 ease-out",
        isIntersecting ? "opacity-100 translate-y-0 translate-x-0" : `opacity-0 ${directionClasses[direction]}`,
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </section>
  )
}

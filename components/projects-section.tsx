import Image from "next/image"
import AnimatedSection from "./animated-section"

export default function ProjectsSection() {
  const projects = [
    {
      title: "Industrial RO Plant",
      location: "Dhaka, Bangladesh",
      image: "images/projects/93.jpg",
    },
    {
      title: "Community Drinking Water Plant",
      location: "Chittagong, Bangladesh",
      image: "images/projects/94.jpg",
    },
    {
      title: "Beverage Industry WTP",
      location: "Narayanganj, Bangladesh",
      image: "images/projects/95.jpg",
    },
    {
      title: "Industrial RO Plant",
      location: "Sylhet, Bangladesh",
      image: "images/projects/96.jpg",
    },
    {
      title: "Community Drinking Water Plant",
      location: "Khulna, Bangladesh",
      image: "images/projects/97.jpg",
    },
    {
      title: "Textile Industry WTP",
      location: "Rajshahi, Bangladesh",
      image: "images/projects/98.jpg",
    },
  ]

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Completed Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We have successfully completed over 30 drinking water, WTP & ETP solutions all over Bangladesh.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} delay={200 + index * 100} direction={index % 2 === 0 ? "up" : "down"}>
              <div className="overflow-hidden rounded-lg group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {/* <h3 className="font-semibold text-lg">{project.title}</h3> */}
                      {/* <p className="text-sky-100">{project.location}</p> */}
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-sky-50">
                  <h3 className="font-semibold text-lg">{project.title}</h3>
                  {/* <p className="text-muted-foreground">{project.location}</p> */}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

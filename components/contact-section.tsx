import { Phone, Mail, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import AnimatedSection from "./animated-section"

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have questions about our services? Contact us today and our team will be happy to assist you.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedSection direction="left" delay={200}>
            <div className="bg-sky-50 p-8 rounded-lg transform transition-all duration-300 hover:shadow-md">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start group">
                  <Phone className="h-5 w-5 text-sky-700 mt-0.5 mr-3 transform transition-transform duration-300 group-hover:scale-110" />
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-muted-foreground">01759-142647</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <Mail className="h-5 w-5 text-sky-700 mt-0.5 mr-3 transform transition-transform duration-300 group-hover:scale-110" />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-muted-foreground">jolojwatersystems@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <MapPin className="h-5 w-5 text-sky-700 mt-0.5 mr-3 transform transition-transform duration-300 group-hover:scale-110" />
                  <div>
                    <h4 className="font-semibold">Address</h4>
                    <p className="text-muted-foreground">
                      House: 01 Level: 02 Shastitala, Jashore
                      <br />
                      (Opposite of Fire Brigade Office)
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
  <h3 className="text-xl font-bold mb-4">Follow Us</h3>
  <div className="flex space-x-4">
    {[
      {
        href: "https://www.facebook.com/profile.php?id=61551242409666",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
        ),
      },
      {
        href: "https://wa.me/8801759142647?text=Hello%21%20I%E2%80%99m%20interested%20in%20Joloj%2C%20the%20water%20system.%20Could%20you%20please%20share%20more%20details%3F",        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16.72 13.06c-.27-.13-1.63-.8-1.88-.89-.25-.09-.43-.13-.61.13-.18.26-.7.89-.86 1.07-.16.18-.32.2-.59.07-.27-.13-1.13-.42-2.14-1.35-.79-.7-1.32-1.56-1.47-1.83-.15-.26-.02-.4.11-.52.12-.12.27-.32.4-.48.13-.16.17-.27.25-.45.08-.18.04-.34-.02-.48-.07-.13-.61-1.48-.84-2.04-.22-.53-.44-.46-.61-.47-.16-.01-.34-.01-.53-.01-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.26s.97 2.62 1.11 2.8c.13.18 1.91 2.92 4.63 4.1.65.28 1.16.44 1.56.56.65.21 1.24.18 1.7.11.52-.08 1.63-.67 1.86-1.31.23-.65.23-1.21.16-1.32-.07-.11-.25-.18-.52-.31z" />
            <path d="M21.05 12.05C21.05 6.51 16.53 2 11 2S.95 6.51.95 12.05c0 2.11.69 4.06 1.86 5.64L2 22l4.43-1.55c1.57.86 3.4 1.36 5.35 1.36 5.53 0 10.05-4.52 10.05-10.05z" />
          </svg>
        ),
      },
      // {
      //   href: "#", // Instagram link
      //   icon: (
      //     <svg
      //       xmlns="http://www.w3.org/2000/svg"
      //       width="20"
      //       height="20"
      //       viewBox="0 0 24 24"
      //       fill="none"
      //       stroke="currentColor"
      //       strokeWidth="2"
      //       strokeLinecap="round"
      //       strokeLinejoin="round"
      //     >
      //       <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      //       <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      //       <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      //     </svg>
      //   ),
      // },
      // {
      //   href: "#", // LinkedIn link
      //   icon: (
      //     <svg
      //       xmlns="http://www.w3.org/2000/svg"
      //       width="20"
      //       height="20"
      //       viewBox="0 0 24 24"
      //       fill="none"
      //       stroke="currentColor"
      //       strokeWidth="2"
      //       strokeLinecap="round"
      //       strokeLinejoin="round"
      //     >
      //       <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      //       <rect x="2" y="9" width="4" height="12"></rect>
      //       <circle cx="4" cy="4" r="2"></circle>
      //     </svg>
      //   ),
      // },
    ].map((item, index) => (
      <a
        key={index}
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-sky-700 text-white p-2 rounded-full hover:bg-sky-800 transition-all duration-300 transform hover:scale-110"
      >
        {item.icon}
      </a>
    ))}
  </div>
</div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={400}>
            <div className="bg-white p-8 rounded-lg shadow-sm transform transition-all duration-300 hover:shadow-md">
              <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="transition-all duration-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      className="transition-all duration-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    placeholder="Your phone number"
                    className="transition-all duration-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="How can we help you?"
                    className="transition-all duration-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    rows={5}
                    className="transition-all duration-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  />
                </div>
                <Button type="submit" className="w-full transition-all duration-300 transform hover:scale-[1.02]">
                  Send Message
                </Button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

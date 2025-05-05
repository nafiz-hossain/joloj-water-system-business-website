"use client"

import { useState } from "react"
import { Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import AnimatedSection from "./animated-section"
import emailjs from "emailjs-com"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSent, setIsSent] = useState(false)
  const [error, setError] = useState(null)

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()

    // Send the form data to EmailJS
    emailjs
      .sendForm('service_43zj56n', 'template_k6gfpzl', e.target, 'op6lw94FuBCv8PlO8') // Replace 'your_service_id' with your actual service ID
      .then(
        (result) => {
          console.log("Message sent:", result.text)
          setIsSent(true)
          setError(null)
        },
        (error) => {
          console.log("Error sending message:", error.text)
          setError("Sorry, something went wrong. Please try again later.")
        }
      )
  }

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
          {/* Contact Information */}
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
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection direction="right" delay={400}>
            <div className="bg-white p-8 rounded-lg shadow-sm transform transition-all duration-300 hover:shadow-md">
              <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      className="transition-all duration-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
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
                    name="phone"
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="transition-all duration-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="How can we help you?"
                    value={formData.subject}
                    onChange={handleChange}
                    className="transition-all duration-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="transition-all duration-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full transition-all duration-300 transform hover:scale-[1.02]"
                >
                  Send Message
                </Button>
              </form>
              {isSent && <p className="text-green-500 mt-4">Your message has been sent!</p>}
              {error && <p className="text-red-500 mt-4">{error}</p>}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

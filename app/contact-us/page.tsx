"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Phone, MessageCircle, Twitter } from "lucide-react"

const services = [
  "WEB DEVELOPMENT",
  "DIGITAL MARKETING",
  "COPYWRITING",
  "DATA ANALYSIS",
  "BUSINESS CONSULTANCY",
  "SOCIAL MEDIA",
]

const budgetOptions = ["LESS THAN $1,000", "$1,000 - $5,000", "MORE THAN $5,000", "LET'S TALK"]

export default function ContactForm() {
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [selectedBudget, setSelectedBudget] = useState<string>("")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  })

  const toggleService = (service: string) => {
    setSelectedServices((prev) => (prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]))
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({
      services: selectedServices,
      budget: selectedBudget,
      ...formData,
    })
    // Handle form submission here
  }

  return (
    <div className="min-h-screen bg-black font-sans">
      <div className="container mx-auto px-4 py-8 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Form Section (Left Side) */}
          <div className="space-y-8">
            {/* Header */}
            <div className="text-center lg:text-left space-y-4">
              <p className="text-sm text-zinc-400 uppercase tracking-wide">Request Our Services</p>
              <h1 className="text-3xl lg:text-4xl font-bold text-white leading-tight">Explore Our Diverse Services</h1>
              <p className="text-zinc-300 text-lg leading-relaxed">
                From creative design and marketing to technical support and consultancy, we cover a broad spectrum to
                ensure your requirements are fully met.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Service Selection */}
              <div className="space-y-4">
                <Label className="text-base font-medium text-zinc-200">Select Service</Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {services.map((service) => (
                    <Button
                      key={service}
                      type="button"
                      variant={selectedServices.includes(service) ? "default" : "outline"}
                      className={`h-auto py-3 px-4 text-xs font-medium whitespace-normal text-center ${
                        selectedServices.includes(service)
                          ? "bg-white text-black hover:bg-zinc-100"
                          : "bg-zinc-900 text-zinc-300 border-zinc-700 hover:bg-zinc-800 hover:text-white"
                      }`}
                      onClick={() => toggleService(service)}
                    >
                      {service}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Budget Selection */}
              <div className="space-y-4">
                <Label className="text-base font-medium text-zinc-200">Estimated Expenses</Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {budgetOptions.map((budget) => (
                    <Button
                      key={budget}
                      type="button"
                      variant={selectedBudget === budget ? "default" : "outline"}
                      className={`h-auto py-3 px-4 text-xs font-medium ${
                        selectedBudget === budget
                          ? "bg-white text-black hover:bg-zinc-100"
                          : "bg-zinc-900 text-zinc-300 border-zinc-700 hover:bg-zinc-800 hover:text-white"
                      }`}
                      onClick={() => setSelectedBudget(budget)}
                    >
                      {budget}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Contact Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-base font-medium text-zinc-200">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    className="h-12 bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-400 focus:border-white focus:ring-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-base font-medium text-zinc-200">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    className="h-12 bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-400 focus:border-white focus:ring-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-base font-medium text-zinc-200">
                  Your Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@email.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="h-12 bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-400 focus:border-white focus:ring-white"
                />
              </div>

              {/* Phone Number Field */}
              <div className="space-y-2">
                <Label htmlFor="phoneNumber" className="text-base font-medium text-zinc-200">
                  Phone Number
                </Label>
                <Input
                  id="phoneNumber"
                  type="tel"
                  placeholder="e.g., +1 555 123 4567"
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                  className="h-12 bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-400 focus:border-white focus:ring-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-base font-medium text-zinc-200">
                  Your Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="min-h-[120px] bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-400 focus:border-white focus:ring-white resize-none"
                />
              </div>

              <Button
                type="submit"
                className="bg-white hover:bg-zinc-100 text-black px-8 py-3 text-sm font-medium uppercase tracking-wide"
              >
                SEND REQUEST
              </Button>
            </form>
          </div>

          {/* New Contact Info Section (Right Side) */}
          <div className="w-full bg-black rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-6">Get in Touch</h2>
            <div className="w-24 h-1 bg-zinc-800 mx-auto mb-8 rounded-full" /> {/* Optional divider */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Phone Card */}
              <a
                href="tel:+1234567890"
                className="flex flex-col items-center justify-center bg-zinc-900 rounded-xl shadow-md p-4 sm:p-6 border-l-4 border-zinc-700 transition-all duration-300 ease-in-out hover:scale-102 hover:shadow-lg group"
                aria-label="Call us at +1 (234) 567-890"
              >
                <Phone className="w-8 h-8 text-white mb-2 transition-transform duration-200 ease-in-out group-hover:rotate-6" />
                <span className="text-white text-base md:text-lg font-semibold">Phone</span>
                <span className="text-zinc-400 text-sm">+1 (234) 567-890</span>
              </a>

              {/* Email Card */}
              <a
                href="mailto:your.email@example.com"
                className="flex flex-col items-center justify-center bg-zinc-900 rounded-xl shadow-md p-4 sm:p-6 border-l-4 border-zinc-700 transition-all duration-300 ease-in-out hover:scale-102 hover:shadow-lg group"
                aria-label="Email us at your.email@example.com"
              >
                <Mail className="w-8 h-8 text-white mb-2 transition-transform duration-200 ease-in-out group-hover:scale-110" />
                <span className="text-white text-base md:text-lg font-semibold">Email</span>
                <span className="text-zinc-400 text-sm">your.email@example.com</span>
              </a>

              {/* GitHub Card */}
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center bg-zinc-900 rounded-xl shadow-md p-4 sm:p-6 border-l-4 border-zinc-700 transition-all duration-300 ease-in-out hover:scale-102 hover:shadow-lg group"
                aria-label="Visit my GitHub profile"
              >
                <Github className="w-8 h-8 text-white mb-2 transition-transform duration-200 ease-in-out group-hover:-translate-y-0.5" />
                <span className="text-white text-base md:text-lg font-semibold">GitHub</span>
                <span className="text-zinc-400 text-sm">yourusername</span>
              </a>

              {/* LinkedIn Card */}
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center bg-zinc-900 rounded-xl shadow-md p-4 sm:p-6 border-l-4 border-zinc-700 transition-all duration-300 ease-in-out hover:scale-102 hover:shadow-lg group"
                aria-label="Connect with me on LinkedIn"
              >
                <Linkedin className="w-8 h-8 text-[#0A66C2] mb-2 transition-transform duration-200 ease-in-out group-hover:-translate-y-0.5" />
                <span className="text-white text-base md:text-lg font-semibold">LinkedIn</span>
                <span className="text-zinc-400 text-sm">yourprofile</span>
              </a>

              {/* WhatsApp Card */}
              <a
                href="https://wa.me/9461004417" // Replace with actual WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center bg-zinc-900 rounded-xl shadow-md p-4 sm:p-6 border-l-4 border-zinc-700 transition-all duration-300 ease-in-out hover:scale-102 hover:shadow-lg group"
                aria-label="Chat with me on WhatsApp"
              >
                <MessageCircle className="w-8 h-8 text-[#25D366] mb-2 transition-transform duration-200 ease-in-out group-hover:-translate-y-0.5" />
                <span className="text-white text-base md:text-lg font-semibold">WhatsApp</span>
                <span className="text-zinc-400 text-sm">+1 (234) 567-890</span>
              </a>

              {/* X Card */}
              <a
                href="https://wa.me/9461004417" // Replace with actual WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center bg-zinc-900 rounded-xl shadow-md p-4 sm:p-6 border-l-4 border-zinc-700 transition-all duration-300 ease-in-out hover:scale-102 hover:shadow-lg group"
                aria-label="Chat with me on WhatsApp"
              >
                <Twitter className="w-8 h-8 text-[#0b62e6] mb-2 transition-transform duration-200 ease-in-out group-hover:-translate-y-0.5" />
                <span className="text-white text-base md:text-lg font-semibold">X</span>
                <span className="text-zinc-400 text-sm">username</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

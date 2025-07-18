"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

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
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-8 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Form Section */}
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

          {/* Decorative Section */}
          <div className="hidden lg:block">
            <div className="relative h-[600px] bg-black rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 to-black">
                <div className="absolute top-20 left-20 w-32 h-32 border border-zinc-800 rounded-full opacity-20"></div>
                <div className="absolute bottom-32 right-16 w-24 h-24 border border-zinc-700 rotate-45 opacity-30"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-zinc-700 rounded-full opacity-10"></div>
                <div className="absolute top-40 right-32 w-16 h-16 bg-zinc-800 rounded-full opacity-40"></div>
                <div className="absolute bottom-20 left-32 w-20 h-20 border-2 border-zinc-700 opacity-25"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

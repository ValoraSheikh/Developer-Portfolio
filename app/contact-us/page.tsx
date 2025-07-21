"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Phone, MessageCircle } from "lucide-react"

// React Hook Form and Zod imports
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

const services = [
  "WEB DEVELOPMENT",
  "DIGITAL MARKETING",
  "COPYWRITING",
  "DATA ANALYSIS",
  "BUSINESS CONSULTANCY",
  "SOCIAL MEDIA",
]

const budgetOptions = ["LESS THAN $1,000", "$1,000 - $5,000", "MORE THAN $5,000", "LET'S TALK"]

const formSchema = z.object({
  firstName: z.string().min(1, { message: "First Name is required." }),
  lastName: z.string().min(1, { message: "Last Name is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  phoneNumber: z.string().min(10, { message: "Phone Number is required and must be at least 10 digits." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  selectedServices: z.array(z.string()).min(1, { message: "Please select at least one service." }),
  selectedBudget: z.string().min(1, { message: "Please select an estimated expense." }),
})

export default function ContactForm() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
      selectedServices: [],
      selectedBudget: "",
    },
  })

  // Watch for changes in selectedServices and selectedBudget to update button states
  const watchedServices = form.watch("selectedServices")
  const watchedBudget = form.watch("selectedBudget")

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Form submitted with values:", values)
    // Here you would typically send the data to your backend
    alert("Form submitted successfully! Check console for data.")
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

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Service Selection */}
                <FormField
                  control={form.control}
                  name="selectedServices"
                  render={({ field }) => (
                    <FormItem className="space-y-4">
                      <FormLabel className="text-base font-medium text-zinc-200">Select Service</FormLabel>
                      <FormControl>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                          {services.map((service) => (
                            <Button
                              key={service}
                              type="button"
                              variant={watchedServices.includes(service) ? "default" : "outline"}
                              className={`h-auto py-3 px-4 text-xs font-medium whitespace-normal text-center ${
                                watchedServices.includes(service)
                                  ? "bg-white text-black hover:bg-zinc-100"
                                  : "bg-zinc-900 text-zinc-300 border-zinc-700 hover:bg-zinc-800 hover:text-white"
                              }`}
                              onClick={() => {
                                const newServices = watchedServices.includes(service)
                                  ? watchedServices.filter((s) => s !== service)
                                  : [...watchedServices, service]
                                field.onChange(newServices)
                              }}
                            >
                              {service}
                            </Button>
                          ))}
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Budget Selection */}
                <FormField
                  control={form.control}
                  name="selectedBudget"
                  render={({ field }) => (
                    <FormItem className="space-y-4">
                      <FormLabel className="text-base font-medium text-zinc-200">Estimated Expenses</FormLabel>
                      <FormControl>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                          {budgetOptions.map((budget) => (
                            <Button
                              key={budget}
                              type="button"
                              variant={watchedBudget === budget ? "default" : "outline"}
                              className={`h-auto py-3 px-4 text-xs font-medium ${
                                watchedBudget === budget
                                  ? "bg-white text-black hover:bg-zinc-100"
                                  : "bg-zinc-900 text-zinc-300 border-zinc-700 hover:bg-zinc-800 hover:text-white"
                              }`}
                              onClick={() => field.onChange(budget)}
                            >
                              {budget}
                            </Button>
                          ))}
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Contact Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel htmlFor="firstName" className="text-base font-medium text-zinc-200">
                          First Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            id="firstName"
                            placeholder="First Name"
                            className="h-12 bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-400 focus:border-white focus:ring-white"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel htmlFor="lastName" className="text-base font-medium text-zinc-200">
                          Last Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            id="lastName"
                            placeholder="Last Name"
                            className="h-12 bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-400 focus:border-white focus:ring-white"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel htmlFor="email" className="text-base font-medium text-zinc-200">
                        Your Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          id="email"
                          type="email"
                          placeholder="name@email.com"
                          className="h-12 bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-400 focus:border-white focus:ring-white"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Phone Number Field */}
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel htmlFor="phoneNumber" className="text-base font-medium text-zinc-200">
                        Phone Number
                      </FormLabel>
                      <FormControl>
                        <Input
                          id="phoneNumber"
                          type="tel"
                          placeholder="e.g., +1 555 123 4567"
                          className="h-12 bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-400 focus:border-white focus:ring-white"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel htmlFor="message" className="text-base font-medium text-zinc-200">
                        Your Message
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          id="message"
                          placeholder="Message"
                          className="min-h-[120px] bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-400 focus:border-white focus:ring-white resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="bg-white hover:bg-zinc-100 text-black px-8 py-3 text-sm font-medium uppercase tracking-wide"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? "SENDING..." : "SEND REQUEST"}
                </Button>
              </form>
            </Form>
          </div>

          {/* Contact Info Section (Right Side) - Remains unchanged */}
          <div className="w-full bg-black rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-6">Get in Touch</h2>
            <div className="w-24 h-1 bg-zinc-800 mx-auto mb-8 rounded-full" /> {/* Optional divider */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Phone Card */}
              <a
                href="tel:+1234567890"
                className="flex flex-col items-center justify-center bg-zinc-900 rounded-xl shadow-md p-4 sm:p-6 border-l-4 border-zinc-700 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg group"
                aria-label="Call us at +1 (234) 567-890"
              >
                <Phone className="w-8 h-8 text-white mb-2 transition-transform duration-200 ease-in-out group-hover:rotate-6" />
                <span className="text-white text-base md:text-lg font-semibold">Phone</span>
                <span className="text-zinc-400 text-sm">+1 (234) 567-890</span>
              </a>

              {/* Email Card */}
              <a
                href="mailto:your.email@example.com"
                className="flex flex-col items-center justify-center bg-zinc-900 rounded-xl shadow-md p-4 sm:p-6 border-l-4 border-zinc-700 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg group"
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
                className="flex flex-col items-center justify-center bg-zinc-900 rounded-xl shadow-md p-4 sm:p-6 border-l-4 border-zinc-700 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg group"
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
                className="flex flex-col items-center justify-center bg-zinc-900 rounded-xl shadow-md p-4 sm:p-6 border-l-4 border-zinc-700 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg group"
                aria-label="Connect with me on LinkedIn"
              >
                <Linkedin className="w-8 h-8 text-[#0A66C2] mb-2 transition-transform duration-200 ease-in-out group-hover:-translate-y-0.5" />
                <span className="text-white text-base md:text-lg font-semibold">LinkedIn</span>
                <span className="text-zinc-400 text-sm">yourprofile</span>
              </a>

              {/* WhatsApp Card */}
              <a
                href="https://wa.me/1234567890" // Replace with actual WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center bg-zinc-900 rounded-xl shadow-md p-4 sm:p-6 border-l-4 border-zinc-700 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg group"
                aria-label="Chat with me on WhatsApp"
              >
                <MessageCircle className="w-8 h-8 text-[#25D366] mb-2 transition-transform duration-200 ease-in-out group-hover:-translate-y-0.5" />
                <span className="text-white text-base md:text-lg font-semibold">WhatsApp</span>
                <span className="text-zinc-400 text-sm">+1 (234) 567-890</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

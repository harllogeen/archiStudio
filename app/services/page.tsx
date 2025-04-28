"use client"

import { motion } from "framer-motion"
import { Building2, Users, Award, Compass, PenTool, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Sample services data
const services = [
  {
    icon: <Building2 className="h-12 w-12" />,
    title: "Architectural Design",
    description:
      "Comprehensive architectural design services for residential, commercial, and institutional projects. We create innovative, functional, and aesthetically pleasing spaces tailored to your specific needs and vision, drawing inspiration from Nigerian architectural traditions.",
    features: [
      "Concept development and schematic design",
      "Design development and construction documents",
      "3D visualization and rendering",
      "Building code compliance",
      "Sustainable design solutions",
    ],
  },
  {
    icon: <Users className="h-12 w-12" />,
    title: "Interior Design",
    description:
      "Thoughtful interior design that balances aesthetics, functionality, and client needs. We transform spaces into beautiful, comfortable environments that reflect your personality and lifestyle while incorporating elements of Nigerian design and craftsmanship.",
    features: [
      "Space planning and layout optimization",
      "Material and finish selection",
      "Custom furniture design",
      "Lighting design",
      "Art and accessory curation",
    ],
  },
  {
    icon: <Award className="h-12 w-12" />,
    title: "Urban Planning",
    description:
      "Strategic urban planning solutions that create sustainable, livable, and vibrant communities. We develop comprehensive plans that address the complex challenges of urban development in Nigerian cities.",
    features: [
      "Master planning for neighborhoods and districts",
      "Public space design",
      "Transportation and mobility planning",
      "Zoning and land use analysis",
      "Community engagement and participatory design",
    ],
  },
  {
    icon: <Compass className="h-12 w-12" />,
    title: "Landscape Architecture",
    description:
      "Innovative landscape design that enhances the natural environment and creates meaningful outdoor experiences. We integrate architecture with landscape to create harmonious and sustainable spaces that celebrate local flora and ecosystems.",
    features: [
      "Site analysis and planning",
      "Garden and park design",
      "Sustainable landscape solutions",
      "Hardscape and softscape design",
      "Water feature and irrigation systems",
    ],
  },
  {
    icon: <PenTool className="h-12 w-12" />,
    title: "Renovation & Restoration",
    description:
      "Expert renovation and restoration services that breathe new life into existing structures while preserving their historical and architectural integrity. We blend the old with the new to create unique spaces that honor Nigerian architectural heritage.",
    features: [
      "Historical building restoration",
      "Adaptive reuse of existing structures",
      "Building envelope upgrades",
      "Energy efficiency improvements",
      "Space reconfiguration and optimization",
    ],
  },
  {
    icon: <Lightbulb className="h-12 w-12" />,
    title: "Sustainable Design",
    description:
      "Environmentally responsible design solutions that minimize ecological impact and maximize energy efficiency. We integrate sustainable practices into every aspect of our design process, drawing inspiration from traditional Nigerian building techniques.",
    features: [
      "Green building certifications",
      "Passive design strategies",
      "Renewable energy integration",
      "Water conservation systems",
      "Sustainable material selection",
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <div className="h-[40vh] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1470&auto=format&fit=crop')",
          }}
        />
        <div className="container relative z-20 h-full flex flex-col justify-center items-center text-center text-white">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our <span className="text-accent">Services</span>
          </motion.h1>
          <motion.p
            className="text-xl max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Comprehensive architectural and design services tailored to your needs and inspired by Nigerian heritage.
          </motion.p>
        </div>
      </div>

      <section className="py-16 md:py-24">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col"
              >
                <div className="text-primary mb-4">{service.icon}</div>
                <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <span className="h-2 w-2 rounded-full bg-primary mr-3 mt-2"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="mt-auto">
                  <Link href="/contact">Inquire About {service.title}</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Design Process</h2>
            <p className="text-lg text-muted-foreground mb-12">
              We follow a collaborative and iterative design process to ensure your vision is realized to its fullest
              potential while honoring Nigerian architectural traditions.
            </p>

            <div className="space-y-12">
              <div className="relative">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold mx-auto">
                  1
                </div>
                <h3 className="text-xl font-bold mt-4 mb-2">Discovery & Consultation</h3>
                <p className="text-muted-foreground">
                  We begin by understanding your needs, goals, and vision through in-depth consultations and site
                  analysis, exploring how local cultural context can inform the design.
                </p>
              </div>

              <div className="relative">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold mx-auto">
                  2
                </div>
                <h3 className="text-xl font-bold mt-4 mb-2">Concept Development</h3>
                <p className="text-muted-foreground">
                  Our team develops initial design concepts that align with your requirements, budget constraints, and
                  incorporate elements of Nigerian design heritage.
                </p>
              </div>

              <div className="relative">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold mx-auto">
                  3
                </div>
                <h3 className="text-xl font-bold mt-4 mb-2">Design Refinement</h3>
                <p className="text-muted-foreground">
                  We refine the selected concept through detailed drawings, 3D models, and material selections, with a
                  focus on sustainable and locally-sourced materials.
                </p>
              </div>

              <div className="relative">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold mx-auto">
                  4
                </div>
                <h3 className="text-xl font-bold mt-4 mb-2">Documentation & Approvals</h3>
                <p className="text-muted-foreground">
                  We prepare comprehensive construction documents and assist with obtaining necessary permits and
                  approvals, navigating local building regulations.
                </p>
              </div>

              <div className="relative">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold mx-auto">
                  5
                </div>
                <h3 className="text-xl font-bold mt-4 mb-2">Construction & Implementation</h3>
                <p className="text-muted-foreground">
                  We provide construction administration services to ensure the design is executed according to
                  specifications, working with local craftspeople and contractors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Contact us today to schedule a consultation and discuss how our services can bring your vision to life
              with designs that celebrate Nigerian architectural heritage.
            </p>
          </div>

          <div className="flex justify-center">
            <Button asChild size="lg" className="text-base">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

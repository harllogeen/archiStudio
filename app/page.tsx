"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Award, Building2, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// Sample project data
const featuredProjects = [
  {
    id: 1,
    title: "Lagos Modern Villa",
    category: "Residential",
    imageUrl: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1471&auto=format&fit=crop",
    description: "A contemporary villa in Lagos that blends modern design with traditional Nigerian elements.",
  },
  {
    id: 2,
    title: "Abuja Eco Residences",
    category: "Residential",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470&auto=format&fit=crop",
    description:
      "Luxury eco-friendly residential complex with integrated green spaces inspired by Nigerian traditions.",
  },
  {
    id: 3,
    title: "Port Harcourt Waterfront Home",
    category: "Residential",
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1453&auto=format&fit=crop",
    description: "A stunning waterfront residence that combines luxury with sustainable design principles.",
  },
]

// Sample services
const services = [
  {
    icon: <Building2 className="h-10 w-10" />,
    title: "Architectural Design",
    description: "Comprehensive architectural design services for residential, commercial, and institutional projects.",
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: "Interior Design",
    description: "Thoughtful interior design that balances aesthetics, functionality, and client needs.",
  },
  {
    icon: <Award className="h-10 w-10" />,
    title: "Urban Planning",
    description: "Strategic urban planning solutions that create sustainable, livable, and vibrant communities.",
  },
]

export default function Home() {
  const servicesRef = useRef(null)
  const projectsRef = useRef(null)
  const aboutRef = useRef(null)

  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" })
  const projectsInView = useInView(projectsRef, { once: true, margin: "-100px" })
  const aboutInView = useInView(aboutRef, { once: true, margin: "-100px" })

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1470&auto=format&fit=crop"
            alt="Modern Nigerian luxury home with dramatic lighting"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Designing <span className="text-accent">Spaces</span> That Inspire
          </motion.h1>
          <motion.p
            className="text-xl text-white/90 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Award-winning architecture firm creating innovative and sustainable
            designs inspired by Nigerian heritage for residential, commercial,
            and cultural projects across the country.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button asChild size="lg" className="text-base btn-gradient">
              <Link href="/projects">View Our Projects</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-[#123458] border-white hover:bg-white/10 text-base"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 1,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            <ArrowRight className="h-8 w-8 text-white rotate-90" />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 bg-background">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Our <span className="text-gradient">Services</span>
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We offer a comprehensive range of architectural services tailored
              to meet your specific needs and vision.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="pt-6">
                    <div className="mb-4 text-accent">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild className="btn-gradient">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section ref={projectsRef} className="py-20 bg-secondary">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={projectsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Featured <span className="text-gradient">Projects</span>
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={projectsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Explore our portfolio of award-winning designs and innovative
              architectural solutions across Nigeria.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group"
              >
                <Link href={`/projects/${project.id}`} className="block">
                  <div className="relative overflow-hidden rounded-lg aspect-[4/3] shadow-lg">
                    <Image
                      src={project.imageUrl || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80" />
                    <div className="absolute bottom-0 left-0 p-6">
                      <span className="text-sm font-medium text-accent mb-2 block">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold text-white">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild className="btn-gradient">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 bg-background">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About <span className="text-gradient">ArchiStudio</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2005, ArchiStudio has grown to become one of the most
                respected architecture firms in Nigeria, known for our
                innovative designs and commitment to sustainability.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our team of talented architects and designers brings a wealth of
                experience and creativity to every project, ensuring exceptional
                results that exceed client expectations while honoring Nigerian
                architectural traditions.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-accent mr-3"></span>
                  <span>Over 200 completed projects across Nigeria</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-accent mr-3"></span>
                  <span>Award-winning sustainable design practices</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-accent mr-3"></span>
                  <span>Team of 50+ architects and designers</span>
                </li>
              </ul>
              <Button asChild className="btn-gradient">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[500px] rounded-lg overflow-hidden shadow-xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1470&auto=format&fit=crop"
                alt="Our architecture team collaborating in a Nigerian office"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-secondary">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our <span className="text-gradient">Clients Say</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We take pride in our client relationships and the successful
              projects we've delivered together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-background border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "ArchiStudio transformed our vision into reality. Their
                  attention to detail and innovative approach resulted in a
                  space that exceeds our expectations while honoring our
                  cultural heritage."
                </p>
                <div>
                  <p className="font-bold">Adebayo Johnson</p>
                  <p className="text-sm text-muted-foreground">
                    CEO, Nexus Properties
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Working with ArchiStudio was a seamless experience. Their
                  team's expertise and professionalism made our complex project
                  manageable and successful."
                </p>
                <div>
                  <p className="font-bold">Oluwaseun Oladipo</p>
                  <p className="text-sm text-muted-foreground">
                    Director, Urban Development Corp
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "The sustainable design solutions provided by ArchiStudio not
                  only reduced our environmental footprint but also created a
                  beautiful, functional space that celebrates our local
                  materials."
                </p>
                <div>
                  <p className="font-bold">Chioma Eze</p>
                  <p className="text-sm text-muted-foreground">
                    Sustainability Director, EcoLiving
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your <span className="text-accent">Project</span>?
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              Contact us today to discuss your vision and how we can bring it to
              life with our innovative architectural solutions inspired by
              Nigerian heritage.
            </p>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-[#123458] border-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

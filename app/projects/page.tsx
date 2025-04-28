"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

// Sample project data
const projects = [
  {
    id: 1,
    title: "Lagos Modern Villa",
    category: "Residential",
    location: "Lekki, Lagos",
    year: 2022,
    imageUrl: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1471&auto=format&fit=crop",
    description: "A contemporary villa in Lagos that blends modern design with traditional Nigerian elements.",
  },
  {
    id: 2,
    title: "Abuja Eco Residences",
    category: "Residential",
    location: "Maitama, Abuja",
    year: 2021,
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470&auto=format&fit=crop",
    description:
      "Luxury eco-friendly residential complex with integrated green spaces inspired by Nigerian traditions.",
  },
  {
    id: 3,
    title: "Port Harcourt Waterfront Home",
    category: "Residential",
    location: "Port Harcourt, Rivers",
    year: 2023,
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1453&auto=format&fit=crop",
    description: "A stunning waterfront residence that combines luxury with sustainable design principles.",
  },
  {
    id: 4,
    title: "Calabar Beach House",
    category: "Hospitality",
    location: "Calabar, Cross River",
    year: 2020,
    imageUrl: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1470&auto=format&fit=crop",
    description: "A luxury beach house that celebrates Nigerian coastal design traditions with modern amenities.",
  },
  {
    id: 5,
    title: "Ibadan Tech Campus",
    category: "Educational",
    location: "Ibadan, Oyo",
    year: 2022,
    imageUrl: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1470&auto=format&fit=crop",
    description: "A state-of-the-art educational facility designed to foster collaboration and innovation in Nigeria.",
  },
  {
    id: 6,
    title: "Kano Urban Revival",
    category: "Urban Planning",
    location: "Kano, Kano",
    year: 2021,
    imageUrl: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1470&auto=format&fit=crop",
    description: "A revitalized urban space that transforms a former industrial area into a vibrant community hub.",
  },
]

// Categories for filtering
const categories = ["All", "Commercial", "Residential", "Cultural", "Hospitality", "Educational", "Urban Planning"]

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <>
      <div className="h-[40vh] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/archi7.avif')",
          }}
        />
        <div className="container relative z-20 h-full flex flex-col justify-center items-center text-center text-white">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our <span className="text-accent">Projects</span>
          </motion.h1>
          <motion.p
            className="text-xl max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore our portfolio of innovative architectural designs and transformative spaces across Nigeria.
          </motion.p>
        </div>
      </div>

      <section className="py-16 md:py-24">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="group"
              >
                <Link href={`/projects/${project.id}`}>
                  <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-4 shadow-lg">
                    <Image
                      src={project.imageUrl || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80" />
                    <div className="absolute bottom-0 left-0 p-6">
                      <span className="text-sm font-medium text-accent mb-2 block">{project.category}</span>
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm text-muted-foreground mb-2">
                      <span>{project.location}</span>
                      <span>{project.year}</span>
                    </div>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

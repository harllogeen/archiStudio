"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

// Sample team data
const teamMembers = [
  {
    name: "Adebayo Johnson",
    role: "Principal Architect & Founder",
    imageUrl: "images/archi1.jpg",
    bio: "With over 20 years of experience, Adebayo has led the design of award-winning projects across Nigeria. His innovative approach to sustainable architecture has earned him recognition as a leader in the field.",
  },
  {
    name: "Oluwaseun Oladipo",
    role: "Senior Architect",
    imageUrl:
      "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1374&auto=format&fit=crop",
    bio: "Oluwaseun specializes in commercial and mixed-use developments. His expertise in urban design has contributed to transformative projects that revitalize communities and create vibrant public spaces.",
  },
  {
    name: "Moje Toluwa",
    role: "Interior Design Director",
    imageUrl: "images/archi2.jpg",
    bio: "Chioma brings a unique perspective to interior spaces, blending functionality with aesthetic excellence. Her designs create harmonious environments that enhance the user experience.",
  },
  {
    name: "Emeka Okafor",
    role: "Sustainable Design Specialist",
    imageUrl: "images/archi3.jpg",
    bio: "Emeka is passionate about environmentally responsible design. He leads our sustainable initiatives and ensures that our projects minimize ecological impact while maximizing energy efficiency.",
  },
];

export default function AboutPage() {
  return (
    <>
      <div className="h-[40vh] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470&auto=format&fit=crop')",
          }}
        />
        <div className="container relative z-20 h-full flex flex-col justify-center items-center text-center text-white">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About <span className="text-accent">ArchiStudio</span>
          </motion.h1>
          <motion.p
            className="text-xl max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our story, our team, and our approach to architectural excellence in
            Nigeria.
          </motion.p>
        </div>
      </div>

      <section className="py-16 md:py-24">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="text-gradient">Story</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2018 by Adebayo Johnson, ArchiStudio began as a small
                practice with a big vision: to create architecture that
                inspires, functions beautifully, and respects our environment
                while celebrating Nigerian heritage.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Over the years, we've grown into a diverse team of architects,
                designers, and planners united by our passion for innovative
                design and commitment to excellence. Today, our portfolio spans
                residential, commercial, cultural, and urban planning projects
                across Nigeria.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                What sets us apart is our collaborative approach. We believe
                that the best designs emerge from a dialogue between architects,
                clients, and communities. This philosophy has earned us
                recognition and awards, but our greatest achievement is the
                positive impact our work has on people's lives and the
                environment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[500px] rounded-lg overflow-hidden shadow-xl"
            >
              <Image
                src="images/archi6.jpg"
                alt="Modern Nigerian interior design"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core principles guide our work and define our approach to
              architecture and design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-background p-6 rounded-lg shadow-lg"
            >
              <div className="h-12 w-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-accent text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                We push boundaries and explore new ideas to create architecture
                that is forward-thinking and responsive to evolving needs while
                honoring traditional Nigerian design principles.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-background p-6 rounded-lg shadow-lg"
            >
              <div className="h-12 w-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-accent text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Sustainability</h3>
              <p className="text-muted-foreground">
                We are committed to environmentally responsible design that
                minimizes ecological impact and creates healthy spaces for
                people, drawing inspiration from traditional Nigerian
                sustainable building practices.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-background p-6 rounded-lg shadow-lg"
            >
              <div className="h-12 w-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-accent text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Collaboration</h3>
              <p className="text-muted-foreground">
                We believe in the power of teamwork and partnership with
                clients, consultants, and communities to achieve exceptional
                results that reflect local cultures and needs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-background p-6 rounded-lg shadow-lg"
            >
              <div className="h-12 w-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-accent text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p className="text-muted-foreground">
                We are dedicated to the highest standards of design, technical
                expertise, and professional service in everything we do, setting
                new benchmarks for Nigerian architecture.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the talented professionals who bring creativity, expertise,
              and passion to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="text-center"
              >
                <div className="relative h-64 mb-4 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={member.imageUrl || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-accent mb-3">{member.role}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our <span className="text-accent">Team</span>
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              We're always looking for talented architects, designers, and
              professionals to join our team. If you're passionate about
              creating innovative and sustainable architecture inspired by
              Nigerian heritage, we'd love to hear from you.
            </p>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-[#123458] border-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link href="/careers">View Open Positions</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

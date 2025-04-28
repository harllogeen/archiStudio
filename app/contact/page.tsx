"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { sendEmail } from "./actions";

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);

    try {
      await sendEmail(formData);
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      // Reset the form
      event.currentTarget.reset();
    } catch (error) {
      toast({
        title: "Something went wrong.",
        description: "Your message couldn't be sent. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <div className="h-[40vh] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1470&auto=format&fit=crop')",
          }}
        />
        <div className="container relative z-20 h-full flex flex-col justify-center items-center text-center text-white">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contact <span className="text-accent">Us</span>
          </motion.h1>
          <motion.p
            className="text-xl max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Get in touch with our team to discuss your project or inquire about
            our services.
          </motion.p>
        </div>
      </div>

      <section className="py-16 md:py-24">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Get In <span className="text-gradient">Touch</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We'd love to hear from you. Fill out the form and our team will
                get back to you as soon as possible.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 bg-accent/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Our Office</h3>
                    <p className="text-muted-foreground">
                      123 Bourdillon Road
                      <br />
                      Abuja,
                      <br />
                      Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 bg-accent/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Email Us</h3>
                    <p className="text-muted-foreground">
                      info@archistudio.com
                      <br />
                      careers@archistudio.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 bg-accent/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Call Us</h3>
                    <p className="text-muted-foreground">
                      +234 (0) 123-4567
                      <br />
                      +234 (0) 987-6543
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white dark:bg-secondary p-8 rounded-lg shadow-xl"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="First Name"
                      required
                      className="border-accent/20 focus-visible:ring-accent"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Last Name"
                      required
                      className="border-accent/20 focus-visible:ring-accent"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    className="border-accent/20 focus-visible:ring-accent"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="phone number"
                    className="border-accent/20 focus-visible:ring-accent"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Project Inquiry"
                    required
                    className="border-accent/20 focus-visible:ring-accent"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project or inquiry..."
                    rows={5}
                    required
                    className="border-accent/20 focus-visible:ring-accent"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full btn-gradient"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Visit Our <span className="text-gradient">Office</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're located in the heart of Abuja, Nigeria. Feel free to stop by
              during business hours.
            </p>
          </div>

          <div className="aspect-[16/9] w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126083.42375243508!2d7.3499646!3d9.0764785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745f4cd62fd9%3A0x53bd17b4a20ea12b!2sAbuja%2C%20Federal%20Capital%20Territory%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1714384548123!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location Map"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}

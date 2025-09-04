"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

function Card({ className = "", children }) {
  return (
    <motion.div
      className={`border bg-[#EFE1DA]/50 backdrop-blur-md border-[#D8B7C1] hover:shadow-xl transition-all duration-500 hover:scale-105 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

function CardHeader({ className = "", children }) {
  return (
    <div className={`px-6 pt-6 ${className}`}>
      {children}
    </div>
  );
}

function CardTitle({ className = "", children }) {
  return (
    <h3 className={`text-2xl font-serif font-bold text-[#897A81] ${className}`}>
      {children}
    </h3>
  );
}

function CardContent({ className = "", children }) {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
}

function Input({ className = "", type = "text", id, ...props }) {
  return (
    <input
      type={type}
      id={id}
      name={id}
      className={`w-full p-3 bg-[#EFE1DA] border border-[#D8B7C1] focus:border-[#897A81] focus:outline-none ${className}`}
      {...props}
    />
  );
}

function Textarea({ className = "", rows = 4, id, ...props }) {
  return (
    <textarea
      rows={rows}
      id={id}
      name={id}
      className={`w-full p-3 bg-[#EFE1DA] border border-[#D8B7C1] focus:border-[#897A81] focus:outline-none ${className}`}
      {...props}
    />
  );
}

function Button({ className = "", children, ...props }) {
  return (
    <motion.button
      className={`w-full bg-[#897A81] text-white py-3 px-4 font-medium uppercase tracking-wider transition-all duration-500 hover:bg-[#D8B7C1] ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export default function Contact() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here (e.g., API call)
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen bg-[#EFE1DA] relative overflow-hidden" ref={ref}>
      {/* Parallax Background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/bg3.jpg"
          alt="Contact Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#EFE1DA]/20 to-[#D8B7C1]/80"></div>
      </motion.div>


      {/* Hero Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-serif font-bold text-[#897A81] mb-6"
          >
            Let’s Connect
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-xl text-[#897A81]/90"
          >
            At Syncity, we’re here to listen and transform your vision into an extraordinary event. Reach out to start your journey.
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <Card className="bg-[#EFE1DA]/50 backdrop-blur-md h-[50rem] border-[#D8B7C1] shadow-lg">
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-[#897A81] mb-2">
                        First Name
                      </label>
                      <Input id="firstName" className="bg-[#EFE1DA] border-[#D8B7C1] focus:border-[#897A81]" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-[#897A81] mb-2">
                        Last Name
                      </label>
                      <Input id="lastName" className="bg-[#EFE1DA] border-[#D8B7C1] focus:border-[#897A81]" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#897A81] mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      id="email"
                      className="bg-[#EFE1DA] border-[#D8B7C1] focus:border-[#897A81]"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#897A81] mb-2">
                      Phone
                    </label>
                    <Input
                      type="tel"
                      id="phone"
                      className="bg-[#EFE1DA] border-[#D8B7C1] focus:border-[#897A81]"
                    />
                  </div>

                  <div>
                    <label htmlFor="eventType" className="block text-sm font-medium text-[#897A81] mb-2">
                      Event Type
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      className="w-full p-3 bg-[#EFE1DA] border border-[#D8B7C1] focus:border-[#897A81] focus:outline-none"
                    >
                      <option>Destination Wedding</option>
                      <option>Corporate Event</option>
                      <option>Farm Tourism</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#897A81] mb-2">
                      Tell Us About Your Event
                    </label>
                    <Textarea
                      id="message"
                      rows={4}
                      className="bg-[#EFE1DA] border-[#D8B7C1] focus:border-[#897A81]"
                      placeholder="Share your vision, expected guest count, preferred dates, and any special requirements..."
                    />
                  </div>

                  <Button type="submit" className="w-full mt-3 bg-[#897A81] text-white py-6 text-lg hover:bg-[#D8B7C1]">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-[#EFE1DA]/50 backdrop-blur-md border-[#D8B7C1]">
                <CardContent className="p-8">
                  <h3 className="text-xl font-serif font-bold text-[#897A81] mb-4 flex items-center gap-2">
                    <Phone className="h-5 w-5 text-[#D8B7C1]" /> Call Us
                  </h3>
                  <p className="text-[#897A81]/80 mb-2">We’re ready to discuss your vision!</p>
                  <p className="text-lg font-semibold text-[#897A81]">+91 98765 43210</p>
                  <p className="text-lg font-semibold text-[#897A81]">+91 87654 32109</p>
                </CardContent>
              </Card>

              <Card className="bg-[#EFE1DA]/50 backdrop-blur-md border-[#D8B7C1]">
                <CardContent className="p-8">
                  <h3 className="text-xl font-serif font-bold text-[#897A81] mb-4 flex items-center gap-2">
                    <Mail className="h-5 w-5 text-[#D8B7C1]" /> Email Us
                  </h3>
                  <p className="text-[#897A81]/80 mb-2">Drop us a line to get started!</p>
                  <p className="text-lg font-semibold text-[#897A81]">hello@syncityevents.com</p>
                  <p className="text-lg font-semibold text-[#897A81]">weddings@syncityevents.com</p>
                </CardContent>
              </Card>

              <Card className="bg-[#EFE1DA]/50 backdrop-blur-md border-[#D8B7C1]">
                <CardContent className="p-8">
                  <h3 className="text-xl font-serif font-bold text-[#897A81] mb-4 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-[#D8B7C1]" /> Visit Us
                  </h3>
                  <p className="text-[#897A81]/80 mb-2">Meet us in the heart of Uttarakhand</p>
                  <p className="text-[#897A81]">
                    123 Mountain View Road
                    <br />
                    Dehradun, Uttarakhand 248001
                    <br />
                    India
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[#EFE1DA]/50 backdrop-blur-md border-[#D8B7C1] text-[#897A81]">
                <CardContent className="p-8">
                  <h3 className="text-xl font-serif font-bold mb-4 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-[#D8B7C1]" /> Office Hours
                  </h3>
                  <div className="space-y-2">
                    <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                    <p>Saturday: 10:00 AM - 5:00 PM</p>
                    <p>Sunday: By appointment</p>
                  </div>
                  <p className="text-sm mt-4 opacity-90">*Emergency support available 24/7 during events</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif font-bold text-[#897A81] text-center mb-12"
            >
              Frequently Asked Questions
            </motion.h2>

            <div className="space-y-6">
              <Card className="bg-[#EFE1DA]/50 backdrop-blur-md border-[#D8B7C1]">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-[#897A81] mb-2">How far in advance should I book?</h3>
                  <p className="text-[#897A81]/80">
                    For destination weddings, we recommend 6-12 months in advance. Corporate events and farm tourism can often be arranged with 2-3 months’ notice, depending on the season.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[#EFE1DA]/50 backdrop-blur-md border-[#D8B7C1]">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-[#897A81] mb-2">Do you handle events outside Uttarakhand?</h3>
                  <p className="text-[#897A81]/80">
                    While Syncity specializes in Uttarakhand, we can coordinate events in neighboring regions. Let’s discuss your specific location needs.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[#EFE1DA]/50 backdrop-blur-md border-[#D8B7C1]">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-[#897A81] mb-2">What’s included in your packages?</h3>
                  <p className="text-[#897A81]/80">
                    Every event is tailored, including venue coordination, vendor management, décor, catering, and day-of management. We’ll provide a personalized proposal.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    );
}
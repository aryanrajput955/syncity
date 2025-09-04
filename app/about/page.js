"use client";

import Link  from "next/link";
import Image from "next/image";
import { Card, CardContent } from "../components/ui/cards";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Heart, MapPin, Users, Sparkles, MessageSquare, Leaf } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div className="min-h-screen bg-[#EFE1DA] relative overflow-hidden" ref={ref}>
      {/* Parallax Background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/bg.jpg"
          alt="About Background"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#EFE1DA]/20 to-[#D8B7C1]/80"></div>
      </motion.div>

      {/* Hero Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#897A81] mb-6">
                Our Vision
              </h1>
              <p className="text-xl text-[#897A81]/90 leading-relaxed">
                At Syncity, we transform your dreams into unforgettable events, crafted with precision and passion in the heart of Uttarakhand.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative"
            >
              <Image
                src="/happy-couple-celebrating-successful-wedding-in-mou.png"
                alt="Our Vision"
                width={500}
                height={400}
                className="shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Beginning */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative"
            >
              <Image
                src="/stressed-couple-with-wedding-planning-documents-an.png"
                alt="Our Journey"
                width={500}
                height={400}
                className="shadow-xl border-2 border-[#D8B7C1]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#897A81]">
                Our Journey Began Here
              </h2>
              <p className="text-lg text-[#897A81]/90 leading-relaxed">
                Syncity was born from our own chaotic wedding planning experience. Weeks before our mountain wedding, vendors disappeared, plans unraveled, and stress threatened to overshadow our joy.
              </p>
              <p className="text-lg text-[#897A81]/90 leading-relaxed">
                Determined to turn chaos into celebration, we took charge and created a magical day. That experience inspired Syncity—a commitment to ensuring no one else faces the same challenges.
              </p>
              <div className="bg-[#D8B7C1]/20 p-6 border-l-4 border-[#D8B7C1]">
                <p className="text-[#897A81] font-medium italic">
                  "We vowed to make every event seamless and joyful. Syncity is the realization of that promise."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-white px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-[#897A81] mb-8"
          >
            Our Mission
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-xl text-[#897A81]/90 mb-16 max-w-4xl mx-auto"
          >
            Syncity is dedicated to crafting extraordinary events that reflect your vision, infused with the timeless beauty of Uttarakhand and executed with unparalleled precision.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#EFE1DA] border-[#D8B7C1] hover:shadow-xl transition-all duration-500 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#D8B7C1]/20 flex items-center justify-center mx-auto mb-6">
                    <Heart className="h-8 w-8 text-[#D8B7C1]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#897A81] mb-4">Stress-Free Planning</h3>
                  <p className="text-[#897A81]/80">
                    We manage every detail, allowing you to cherish every moment with loved ones.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#EFE1DA] border-[#D8B7C1] hover:shadow-xl transition-all duration-500 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#D8B7C1]/20 flex items-center justify-center mx-auto mb-6">
                    <MapPin className="h-8 w-8 text-[#D8B7C1]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#897A81] mb-4">Uttarakhand’s Charm</h3>
                  <p className="text-[#897A81]/80">
                    Events infused with the stunning landscapes and rich culture of Uttarakhand.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#EFE1DA] border-[#D8B7C1] hover:shadow-xl transition-all duration-500 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#D8B7C1]/20 flex items-center justify-center mx-auto mb-6">
                    <Users className="h-8 w-8 text-[#D8B7C1]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#897A81] mb-4">Your Trusted Partner</h3>
                  <p className="text-[#897A81]/80">
                    We’re your dedicated allies, bringing warmth and expertise to every step and detail.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-[#897A81] text-center mb-16"
          >
            Meet Our Team
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#EFE1DA] border-[#D8B7C1] hover:shadow-xl transition-all duration-500 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <Image
                    src="/professional-indian-woman-event-planner-smiling.png"
                    alt="Priya Sharma"
                    width={200}
                    height={200}
                    className="mx-auto mb-6"
                  />
                  <h3 className="text-xl font-bold text-[#897A81] mb-2">Priya Sharma</h3>
                  <p className="text-[#897A81]/80 mb-4">Founder & Lead Planner</p>
                  <p className="text-sm text-[#897A81]/80">
                    Inspired by her own wedding challenges, Priya ensures every event is flawless and joyful.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#EFE1DA] border-[#D8B7C1] hover:shadow-xl transition-all duration-500 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <Image
                    src="/professional-indian-man-event-coordinator-smiling.png"
                    alt="Rajesh Kumar"
                    width={200}
                    height={200}
                    className="mx-auto mb-6"
                  />
                  <h3 className="text-xl font-bold text-[#897A81] mb-2">Rajesh Kumar</h3>
                  <p className="text-[#897A81]/80 mb-4">Co-Founder & Operations Head</p>
                  <p className="text-sm text-[#897A81]/80">
                    Rajesh’s logistical expertise turns complex plans into seamless celebrations.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#EFE1DA] border-[#D8B7C1] hover:shadow-xl transition-all duration-500 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <Image
                    src="/professional-indian-woman-event-planner-smiling.png"
                    alt="Meera Patel"
                    width={200}
                    height={200}
                    className="mx-auto mb-6"
                  />
                  <h3 className="text-xl font-bold text-[#897A81] mb-2">Meera Patel</h3>
                  <p className="text-[#897A81]/80 mb-4">Creative Director</p>
                  <p className="text-sm text-[#897A81]/80">
                    Meera’s artistic vision transforms every event into a masterpiece.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-[#897A81] text-center mb-16"
          >
            Our Core Values
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="w-12 h-12 bg-[#D8B7C1]/20 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="h-6 w-6 text-[#D8B7C1]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#897A81] mb-2">Precision in Detail</h3>
                  <p className="text-[#897A81]/80">
                    Every element, from decor to timing, is meticulously crafted for perfection.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="w-12 h-12 bg-[#D8B7C1]/20 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="h-6 w-6 text-[#D8B7C1]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#897A81] mb-2">Transparent Communication</h3>
                  <p className="text-[#897A81]/80">
                    We keep you informed with clear, timely updates for complete peace of mind.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="w-12 h-12 bg-[#D8B7C1]/20 flex items-center justify-center flex-shrink-0">
                  <Leaf className="h-6 w-6 text-[#D8B7C1]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#897A81] mb-2">Sustainable Elegance</h3>
                  <p className="text-[#897A81]/80">
                    We prioritize eco-conscious practices to honor Uttarakhand’s natural beauty.
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="w-12 h-12 bg-[#D8B7C1]/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-[#D8B7C1]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#897A81] mb-2">Local Mastery</h3>
                  <p className="text-[#897A81]/80">
                    Our deep roots in Uttarakhand ensure authentic, exceptional experiences.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="w-12 h-12 bg-[#D8B7C1]/20 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="h-6 w-6 text-[#D8B7C1]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#897A81] mb-2">Swift Solutions</h3>
                  <p className="text-[#897A81]/80">
                    We tackle challenges quickly and discreetly, keeping your event flawless.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="w-12 h-12 bg-[#D8B7C1]/20 flex items-center justify-center flex-shrink-0">
                  <Heart className="h-6 w-6 text-[#D8B7C1]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#897A81] mb-2">Joyful Celebrations</h3>
                  <p className="text-[#897A81]/80">
                    We infuse every event with positivity, passion, and genuine care.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-[#897A81] relative z-10 text-center">
        <div className="max-w-4xl mx-auto bg-[#EFE1DA]/20 backdrop-blur-md py-12 px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-serif font-bold text-white mb-6"
          >
            Ready to Create Your <span className="text-[#D8B7C1]">Dream Event?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Let Syncity bring your vision to life with elegance and precision. Start your stress-free journey today.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link href="/contact">
              <motion.button
                className="bg-[#D8B7C1] text-white px-8 py-4 text-lg font-medium uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-500 hover:bg-[#897A81]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Let’s Talk
              </motion.button>
            </Link>
            <Link href="tel:+919876543210">
              <motion.button
                className="border-2 border-white text-white px-8 py-4 text-lg font-medium uppercase tracking-wider transition-all duration-500 hover:bg-[#D8B7C1]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Call Us Now
              </motion.button>
            </Link>
            <Link href="/services">
              <motion.button
                className="bg-[#897A81] text-white px-12 py-4 text-lg font-light uppercase tracking-wider hover:bg-[#D8B7C1] transition-colors duration-500"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore All Services
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
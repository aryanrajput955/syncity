"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, Calendar, Users, MapPin, Star } from "lucide-react";

export default function OurVisionSection() {
  const aboutRef = useRef(null);
  const { scrollYProgress: aboutScrollProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"],
  });
  const aboutParallax = useTransform(aboutScrollProgress, [0, 1], [0, -100]);

  return (
    <section id="about" ref={aboutRef} className="py-20 md:py-32 bg-white relative overflow-hidden">
      <motion.div
        style={{ y: aboutParallax }}
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#D8B7C1]/10 pointer-events-none"
      />
      <motion.div
        style={{ y: aboutParallax }}
        className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#D8B7C1]/10 pointer-events-none"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/img/1.png"
                alt="Event planning"
                width={600}
                height={800}
                className="object-cover w-full h-[500px]"
              />
            </div>
            <div className="absolute -top-5 -left-5 w-full h-full border-2 border-[#D8B7C1] rounded-2xl z-0" />

            <div className="absolute -bottom-10 -right-10 bg-[#EFE1DA] p-4 rounded-lg shadow-xl z-20 max-w-xs">
              <div className="flex items-center gap-2 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400" fill="#FACC15" />
                ))}
              </div>
              <p className="text-sm text-[#897A81] italic">
                "Syncity turned our vision into a breathtaking reality. Every moment was unforgettable!"
              </p>
              <p className="text-xs text-[#D8B7C1] mt-2 font-medium">— Priya & Arjun</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-block bg-[#D8B7C1]/20 text-[#D8B7C1] px-4 py-1 rounded-full text-sm font-medium">
              OUR VISION
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#897A81] leading-tight">
              Crafting Your <span className="text-[#D8B7C1]">Vision</span>
            </h2>

            <div className="w-20 h-1 bg-[#D8B7C1]" />

            <p className="text-lg text-[#897A81] leading-relaxed">
              At Syncity, we envision events that transcend expectations, weaving your dreams into every detail. From intimate gatherings to grand celebrations, we orchestrate experiences that resonate with your unique story.
            </p>

            <p className="text-lg text-[#897A81] leading-relaxed">
              With innovation and passion, Syncity transforms ideas into reality, ensuring every moment is crafted with precision and care.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="bg-[#D8B7C1]/20 p-3 rounded-full">
                  <Heart className="h-5 w-5 text-[#D8B7C1]" />
                </div>
                <div>
                  <h3 className="font-medium text-[#897A81] mb-1">Inspired Creativity</h3>
                  <p className="text-sm text-[#897A81]/80">We bring your unique vision to life</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-[#D8B7C1]/20 p-3 rounded-full">
                  <Calendar className="h-5 w-5 text-[#D8B7C1]" />
                </div>
                <div>
                  <h3 className="font-medium text-[#897A81] mb-1">Flawless Coordination</h3>
                  <p className="text-sm text-[#897A81]/80">Every moment perfectly timed</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-[#D8B7C1]/20 p-3 rounded-full">
                  <Users className="h-5 w-5 text-[#D8B7C1]" />
                </div>
                <div>
                  <h3 className="font-medium text-[#897A81] mb-1">Personalized Experiences</h3>
                  <p className="text-sm text-[#897A81]/80">Tailored to reflect your story</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-[#D8B7C1]/20 p-3 rounded-full">
                  <MapPin className="h-5 w-5 text-[#D8B7C1]" />
                </div>
                <div>
                  <h3 className="font-medium text-[#897A81] mb-1">Global Expertise</h3>
                  <p className="text-sm text-[#897A81]/80">Unforgettable events anywhere</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
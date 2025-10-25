"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function CTASection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={ref}
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#EFE1DA] relative overflow-hidden text-center"
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/bg3.jpg"
          alt="CTA Background"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#EFE1DA]/20 to-[#D8B7C1]/80"></div>
      </motion.div>

      <div className="max-w-4xl mx-auto relative z-10 bg-white/50 backdrop-blur-md rounded-lg py-8 sm:py-10 md:py-12 px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#897A81] mb-4 sm:mb-6 leading-tight"
        >
          Create Your <span className="text-[#D8B7C1]">Unforgettable Moment</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-base sm:text-lg text-[#897A81]/90 mb-6 sm:mb-8 max-w-2xl mx-auto"
        >
          Let Syncity transform your vision into a seamless, elegant event. Start planning your dream celebration with us today.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
        >
          <Link href="/contact">
            <motion.button
              className="bg-[#897A81] text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-500 hover:bg-[#D8B7C1] w-full sm:w-auto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started
            </motion.button>
          </Link>
          <Link href="/services">
            <motion.button
              className="bg-[#897A81] text-white px-6 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-light uppercase tracking-wider hover:bg-[#D8B7C1] transition-colors duration-500 w-full sm:w-auto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore All Services
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
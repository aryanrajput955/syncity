import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Elegant Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-[#897980]/50 to-black/70 z-10"></div>

      {/* Subtle Geometric Background */}
      <div className="absolute inset-0 z-15">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-white/10 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-white/5 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-24 z-20">
        <div className="text-center space-y-12">
          
          {/* Premium Badge */}
          <motion.div
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="w-2 h-2 bg-[#D8B7C1] rounded-full animate-pulse"></span>
            <span className="text-white/90 text-sm font-medium tracking-wider">PREMIUM EVENT PLANNING</span>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <h1 className="text-6xl lg:text-8xl font-light text-white leading-tight tracking-tight">
              Crafting
              <span className="block font-extralight italic text-[#D8B7C1] mt-2">
                Unforgettable
              </span>
              <span className="block font-light">
                Moments
              </span>
            </h1>
            
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D8B7C1] to-transparent mx-auto"></div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-xl lg:text-2xl text-white/80 font-light max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Elevating celebrations in Uttarakhand's pristine landscapes with 
            <span className="text-[#D8B7C1]"> meticulous attention to detail</span> and 
            <span className="text-[#D8B7C1]"> uncompromising excellence</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Link href="/contact">
              <motion.button
                className="group relative bg-white text-[#897980] px-10 py-4 text-lg font-medium rounded-none overflow-hidden transition-all duration-500 hover:bg-[#D8B7C1] hover:text-white min-w-[220px]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Begin Your Journey</span>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#897980] group-hover:bg-white transition-colors duration-300"></div>
              </motion.button>
            </Link>
            
            {/* <Link href="/gallery">
              <motion.button
                className="group text-white font-medium px-10 py-4 text-lg relative overflow-hidden transition-all duration-300 border-b border-white/30 hover:border-[#D8B7C1] min-w-[220px]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="group-hover:text-[#D8B7C1] transition-colors duration-300">
                  View Our Portfolio
                </span>
              </motion.button>
            </Link> */}
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="pt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            {[
              { number: "500+", label: "Celebrations" },
              { number: "50+", label: "Venues" },
              { number: "5 Years", label: "Excellence" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <motion.div
                  className="text-4xl lg:text-5xl font-light text-[#D8B7C1] mb-2"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-white/70 text-sm font-medium tracking-widest uppercase">
                  {stat.label}
                </div>
                <div className="w-8 h-0.5 bg-white/20 mx-auto mt-3 group-hover:bg-[#D8B7C1] transition-colors duration-300"></div>
              </div>
            ))}
          </motion.div>

          {/* Services Preview */}
          <motion.div
            className="pt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            {[
              { title: "Weddings", desc: "Intimate to grand celebrations" },
              { title: "Corporate", desc: "Professional event solutions" },
              { title: "Destinations", desc: "Scenic venue coordination" },
              { title: "Hospitality", desc: "Complete guest experience" }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="group p-6 border border-white/10 hover:border-[#D8B7C1]/50 transition-all duration-500 bg-white/5 hover:bg-white/10 backdrop-blur-sm"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-white font-medium mb-2 group-hover:text-[#D8B7C1] transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>

      {/* Minimalist Wave */}
      <div className="absolute bottom-0 left-0 w-full z-10">
        <svg viewBox="0 0 1440 80" className="w-full h-16 text-white/95">
          <path
            fill="currentColor"
            d="M0,32L120,37.3C240,43,480,53,720,48C960,43,1200,21,1320,10.7L1440,0L1440,80L1320,80C1200,80,960,80,720,80C480,80,240,80,120,80L0,80Z"
          />
        </svg>
      </div>
    </section>
  );
}       
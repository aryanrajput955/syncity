import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Combined Sections with Smooth Background
export default function CombinedSections() {
  return (
    <div className="relative">
      {/* Static Smooth Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg2.png"
          alt="Background"
          fill
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#EFE1DA]/25 via-[#EFE1DA]/15 to-[#D8B7C1]/30"></div>
      </div>

      {/* Why We Started Section */}
      <WhyWeStartedSection />
      
      {/* Services Preview Section */}
      <ServicesPreviewSection />
    </div>
  );
}

// Why We Started Section
export function WhyWeStartedSection() {
  return (
    <section className="relative py-32 z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Content Side */}
          <motion.div 
            className="space-y-8 lg:order-2"
          >
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-block">
                <span className="text-sm font-medium text-[#897980]/60 tracking-[0.2em] uppercase">
                  Our Story
                </span>
                <div className="w-16 h-0.5 bg-[#897980] mt-2"></div>
              </div>
              
              <h2 className="text-5xl lg:text-6xl font-light text-[#897980] leading-tight">
                Why We
                <span className="block font-extralight italic text-[#D8B7C1]">Started</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-xl text-[#897980]/90 leading-relaxed font-light">
                Born from our own wedding planning journey, we understand the overwhelming stress 
                that should never overshadow your most precious moments.
              </p>
              
              <p className="text-lg text-[#897980]/80 leading-relaxed">
                We transform Uttarakhand's breathtaking landscapes into the perfect backdrop 
                for your celebrations, delivering meticulous planning with genuine care.
              </p>
            </motion.div>

            {/* Quote Block */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="relative p-8 bg-white/70 backdrop-blur-sm border border-[#D8B7C1]/30"
            >
              <div className="absolute top-4 left-4 text-6xl text-[#D8B7C1]/30 font-serif">"</div>
              <blockquote className="text-[#897980] text-lg font-medium italic ml-8">
                Every celebration deserves to be filled with joy, not stress. 
                We exist to make that promise a reality.
              </blockquote>
              <div className="mt-4 ml-8">
                <div className="w-12 h-0.5 bg-[#D8B7C1]"></div>
              </div>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-6 pt-6"
            >
              {[
                { number: "100%", label: "Dedication" },
                { number: "5+", label: "Years Experience" },
                { number: "∞", label: "Care & Attention" }
              ].map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="text-2xl font-light text-[#D8B7C1] mb-1">
                    {item.number}
                  </div>
                  <div className="text-xs text-[#897980]/80 uppercase tracking-wider">
                    {item.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative lg:order-1"
          >
            <div className="relative">
              <Image
                src="/stressed-couple-planning-wedding-with-papers-scatt.png"
                alt="Wedding Planning Journey"
                width={600}
                height={500}
                className="rounded-none shadow-2xl object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#897980]/20 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-8 -right-8 w-24 h-24 border border-[#D8B7C1]/30 rounded-full"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-[#D8B7C1]/20 rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Services Preview Section
export function ServicesPreviewSection() {
  return (
    <section className="relative py-32 bg-white z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-block">
              <span className="text-sm font-medium text-[#897980]/60 tracking-[0.2em] uppercase">
                What We Offer
              </span>
              <div className="w-16 h-0.5 bg-[#D8B7C1] mx-auto mt-2"></div>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-light text-[#897980] leading-tight">
              One Station for All
              <span className="block font-extralight italic text-[#D8B7C1]">Your Needs</span>
            </h2>
            
            <p className="text-xl text-[#897980]/70 max-w-2xl mx-auto font-light">
              From intimate gatherings to grand celebrations, we transform your vision 
              into extraordinary experiences
            </p>
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              image: "/elegant-destination-wedding-in-uttarakhand-mountai.png",
              title: "Destination Weddings",
              description: "Breathtaking ceremonies in pristine locations",
              features: ["Mountain venues", "Custom decor", "Photography"]
            },
            {
              image: "/corporate-team-building-event-in-mountain-resort.png",
              title: "Corporate Events",
              description: "Professional gatherings with mountain charm",
              features: ["Team building", "Conferences", "Retreats"]
            },
            {
              image: "/farm-tourism-experience-with-traditional-activitie.png",
              title: "Farm Tourism",
              description: "Authentic rural experiences in Devbhoomi Uttarakhand",
              features: ["Local culture", "Traditional food", "Activities"]
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative overflow-hidden bg-white shadow-lg hover:shadow-xl border border-gray-100 hover:border-[#D8B7C1]/40 transition-all duration-500">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </div>
                
                <div className="p-8 space-y-4">
                  <h3 className="text-2xl font-light text-[#897980] group-hover:text-[#D8B7C1] transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-[#897980]/70 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 pt-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-[#D8B7C1] rounded-full"></div>
                        <span className="text-[#897980]/60 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/services">
            <motion.button
              className="bg-[#897980] text-white px-12 py-4 text-lg font-light uppercase tracking-wider hover:bg-[#D8B7C1] transition-colors duration-500"
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
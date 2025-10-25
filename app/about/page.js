"use client";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "../components/ui/cards";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Heart, MapPin, Users, Sparkles, MessageSquare, Leaf, Award, Target, Star } from "lucide-react";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
};

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
};

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <div className="min-h-screen bg-[#EFE1DA] relative overflow-hidden" ref={ref}>
      {/* Gradient Background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 bg-gradient-to-br from-[#EFE1DA] via-[#EFE1DA]/95 to-[#D8B7C1]/80"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D8B7C1]/10 to-[#D8B7C1]/30"></div>
      </motion.div>

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInLeft}
              className="lg:col-span-7 space-y-6 md:space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-[#D8B7C1]/30"
              >
                <Star className="h-3 w-3 md:h-4 md:w-4 text-[#D8B7C1]" />
                <span className="text-xs md:text-sm font-medium text-[#897A81] tracking-wide uppercase">Premium Event Planning</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
                viewport={{ once: true }}
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-[#897A81] leading-[0.9] tracking-tight">
                  Our<br />
                  <span className="relative">
                    Vision
                    <motion.div 
                      initial={{ width: 0, opacity: 0 }}
                      whileInView={{ width: "100%", opacity: 1 }}
                      transition={{ duration: 1.2, delay: 0.8 }}
                      viewport={{ once: true }}
                      className="absolute -bottom-1 md:-bottom-2 left-0 h-1.5 md:h-2 bg-[#D8B7C1] rounded-full"
                    ></motion.div>
                  </span>
                </h1>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl text-[#897A81]/80 leading-relaxed font-light max-w-xl"
              >
              Transforming dreams into unforgettable experiences through precision, passion, and the timeless beauty of Uttarakhand. From the sacred serenity of the Himalayas to the vibrant culture woven into every valley, we bring journeys to life that stay with you forever.

              </motion.p>

            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInRight}
              className="lg:col-span-5 relative"
            >
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-br from-[#D8B7C1]/20 to-transparent rounded-2xl"></div>
                <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-16 md:w-24 h-16 md:h-24 bg-[#D8B7C1]/30 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-20 md:w-32 h-20 md:h-32 bg-[#897A81]/20 rounded-full blur-2xl"></div>
                
                <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-white/20">
                  <Image
                    src="/img/1.png"
                    alt="Our Vision"
                    width={500}
                    height={400}
                    className="transition-transform duration-700 group-hover:scale-105 w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#897A81]/30 via-transparent to-transparent"></div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Beginning */}
      <section className="py-16 md:py-24 px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInLeft}
              className="lg:col-span-5 relative group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#D8B7C1]/30 to-[#897A81]/20 rounded-2xl transform rotate-3"></div>
                <motion.div
                  className="relative overflow-hidden rounded-2xl shadow-2xl border-2 border-[#D8B7C1] bg-white p-2"
                  whileHover={{ scale: 1.02, rotate: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <Image
                    src="/img/4.png"
                    alt="Our Journey"
                    width={400}
                    height={320}
                    className="rounded-xl transition-transform duration-700 group-hover:scale-105 w-full"
                  />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="lg:col-span-7 space-y-6 md:space-y-8"
            >
              <motion.div variants={fadeInUp}>
                <div className="inline-flex items-center gap-2 bg-[#D8B7C1]/20 px-3 py-1.5 rounded-full mb-4 md:mb-6">
                  <Target className="h-3 w-3 md:h-4 md:w-4 text-[#D8B7C1]" />
                  <span className="text-xs md:text-sm font-medium text-[#897A81] tracking-wide uppercase">Our Genesis</span>
                </div>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-[#897A81] leading-tight tracking-tight">
                  Excellence<br />Born from<br />
                  <span className="text-[#D8B7C1]">Experience</span>
                </h2>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="space-y-4 md:space-y-6 text-base md:text-lg leading-relaxed">
                <p className="text-[#897A81]/90 font-light">
                  Syncity emerged from a transformative moment—our own wedding planning journey in the mountains of Uttarakhand. When vendors vanished and plans crumbled weeks before our celebration, we discovered our true calling.
                </p>
                <p className="text-[#897A81]/90 font-light">
                  Rather than surrender to chaos, we orchestrated a flawless celebration that exceeded our dreams. This pivotal experience became our foundation—a commitment to ensuring no couple faces such uncertainty.
                </p>
              </motion.div>
              
              <motion.div 
                variants={fadeInUp}
                className="relative"
              >
                <motion.div 
                  className="relative bg-gradient-to-r from-[#D8B7C1]/10 to-transparent p-6 md:p-8 rounded-2xl border-l-4 border-[#D8B7C1] overflow-hidden"
                  whileHover={{ x: 8, boxShadow: "0 20px 40px rgba(137, 122, 129, 0.1)" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <div className="absolute top-4 right-4 text-4xl md:text-6xl text-[#D8B7C1]/20 font-serif">"</div>
                  <p className="text-[#897A81] font-medium text-lg md:text-xl italic leading-relaxed relative z-10">
                    Every challenge becomes an opportunity to create something extraordinary. Syncity is our promise made manifest.
                  </p>
                  <div className="flex items-center mt-4 text-xs md:text-sm text-[#897A81]/70">
                    <div className="w-6 md:w-8 h-px bg-[#D8B7C1] mr-3"></div>
                    Syncity Founders
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-[#EFE1DA]/30 px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="text-center space-y-8 md:space-y-12"
          >
            <motion.div variants={fadeInUp} className="space-y-4 md:space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#D8B7C1]/20 px-3 py-1.5 rounded-full">
                <Award className="h-3 w-3 md:h-4 md:w-4 text-[#D8B7C1]" />
                <span className="text-xs md:text-sm font-medium text-[#897A81] tracking-wide uppercase">Our Promise</span>
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-[#897A81] leading-tight">
                Our Mission
              </h2>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "100px" }}
                transition={{ duration: 1.2, delay: 0.5 }}
                viewport={{ once: true }}
                className="h-1 bg-gradient-to-r from-[#D8B7C1] to-[#897A81] mx-auto rounded-full"
              ></motion.div>
            </motion.div>
            
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-[#897A81]/80 max-w-3xl mx-auto font-light leading-relaxed"
            >
              Crafting extraordinary celebrations that honor your vision, embrace Uttarakhand's natural splendor, and deliver uncompromising excellence at every turn.
            </motion.p>

            <motion.div 
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12"
            >
              {[
                {
                  icon: Heart,
                  title: "Stress-Free Excellence",
                  description: "Complete event orchestration that lets you savor every precious moment with your loved ones."
                },
                {
                  icon: MapPin,
                  title: "Himalayan Heritage",
                  description: "Events infused with Uttarakhand's majestic landscapes and rich cultural tapestry."
                },
                {
                  icon: Users,
                  title: "Your Dedicated Partners",
                  description: "A committed team that brings warmth, expertise, and unwavering attention to every detail."
                }
              ].map((item, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="bg-white/80 backdrop-blur-sm border-2 border-[#D8B7C1]/30 h-full group cursor-pointer hover:border-[#D8B7C1] transition-all duration-500">
                    <CardContent className="p-6 md:p-8 text-center h-full flex flex-col relative overflow-hidden">
                      <div className="absolute -top-8 -right-8 w-16 md:w-20 h-16 md:h-20 bg-[#D8B7C1]/10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                      
                      <motion.div 
                        className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-[#D8B7C1]/20 to-[#897A81]/10 flex items-center justify-center mx-auto mb-6 rounded-2xl relative z-10"
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 5,
                          background: "linear-gradient(135deg, rgba(216, 183, 193, 0.3), rgba(137, 122, 129, 0.2))"
                        }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        <item.icon className="h-10 w-10 md:h-12 md:w-12 text-[#D8B7C1]" />
                      </motion.div>
                      
                      <h3 className="text-xl md:text-2xl font-bold text-[#897A81] mb-4 md:mb-6 relative z-10">{item.title}</h3>
                      <p className="text-[#897A81]/80 leading-relaxed flex-grow text-base md:text-lg relative z-10">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 md:py-24 px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12 md:mb-16 space-y-4 md:space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-[#D8B7C1]/30">
                <Users className="h-3 w-3 md:h-4 md:w-4 text-[#D8B7C1]" />
                <span className="text-xs md:text-sm font-medium text-[#897A81] tracking-wide uppercase">Leadership Team</span>
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-[#897A81]">
                Meet Our Experts
              </h2>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "100px" }}
                transition={{ duration: 1.2, delay: 0.5 }}
                viewport={{ once: true }}
                className="h-1 bg-gradient-to-r from-[#D8B7C1] to-[#897A81] mx-auto rounded-full"
              ></motion.div>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-6 md:gap-8"
            >
              {[
                {
                  image: "/img/img.jpg",
                  name: "Manik",
                  role: "Founder & Lead Planner",
                  description: "Visionary leader who transforms wedding dreams into flawless realities through meticulous planning and creative excellence."
                },
                {
                  image: "/img/lakshay.jpg",
                  name: "Lakshya",
                  role: "Co-Founder & Operations Director",
                  description: "Operations mastermind who ensures seamless execution through strategic planning and unparalleled logistical expertise."
                },
              
              ].map((member, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#D8B7C1]/30 h-full group cursor-pointer hover:border-[#D8B7C1] transition-all duration-500 overflow-hidden">
                    <CardContent className="p-0 h-full flex flex-col">
                      <div className="relative overflow-hidden">
                        <motion.div
                          className="relative"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                          <Image
                            src={member.image}
                            alt={member.name}
                            width={400}
                            height={300}
                            className="w-full h-48 md:h-64 object-cover transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#897A81]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </motion.div>
                      </div>
                      
                      <div className="p-6 md:p-8 flex flex-col flex-grow text-center space-y-3 md:space-y-4">
                        <h3 className="text-xl md:text-2xl font-bold text-[#897A81]">{member.name}</h3>
                        <div className="w-12 md:w-16 h-px bg-[#D8B7C1] mx-auto"></div>
                        <p className="text-[#D8B7C1] font-semibold text-base md:text-lg tracking-wide">{member.role}</p>
                        <p className="text-[#897A81]/80 leading-relaxed flex-grow text-base md:text-lg">
                          {member.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white via-[#EFE1DA]/20 to-white px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12 md:mb-16 space-y-4 md:space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#D8B7C1]/20 px-3 py-1.5 rounded-full">
                <Sparkles className="h-3 w-3 md:h-4 md:w-4 text-[#D8B7C1]" />
                <span className="text-xs md:text-sm font-medium text-[#897A81] tracking-wide uppercase">Core Principles</span>
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-[#897A81]">
                Our Values
              </h2>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "100px" }}
                transition={{ duration: 1.2, delay: 0.5 }}
                viewport={{ once: true }}
                className="h-1 bg-gradient-to-r from-[#D8B7C1] to-[#897A81] mx-auto rounded-full"
              ></motion.div>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {[
                {
                  icon: Sparkles,
                  title: "Precision in Detail",
                  description: "Every element, from decor to timing, is meticulously crafted for absolute perfection."
                },
                {
                  icon: MessageSquare,
                  title: "Transparent Communication",
                  description: "Clear, timely updates and open dialogue ensure complete confidence throughout your journey."
                },
                {
                  icon: Leaf,
                  title: "Sustainable Elegance",
                  description: "Eco-conscious practices that honor and preserve Uttarakhand's pristine natural beauty."
                },
                {
                  icon: MapPin,
                  title: "Local Mastery",
                  description: "Deep regional expertise ensuring authentic, culturally rich, and exceptional experiences."
                },
                {
                  icon: Target,
                  title: "Swift Solutions",
                  description: "Proactive problem-solving that anticipates and resolves challenges before they impact your event."
                },
                {
                  icon: Heart,
                  title: "Joyful Celebrations",
                  description: "Infusing every moment with positivity, passion, and genuine care for your happiness."
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group cursor-pointer"
                >
                  <motion.div
                    className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-[#D8B7C1]/30 h-full hover:border-[#D8B7C1] transition-all duration-500 relative overflow-hidden"
                    whileHover={{ 
                      y: -8,
                      boxShadow: "0 20px 40px rgba(137, 122, 129, 0.15)"
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <div className="absolute -top-6 -right-6 md:-top-8 md:-right-8 w-12 md:w-16 h-12 md:h-16 bg-[#D8B7C1]/10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                    
                    <motion.div 
                      className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#D8B7C1]/20 to-[#897A81]/10 flex items-center justify-center rounded-2xl mb-4 md:mb-6 relative z-10"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5
                      }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <value.icon className="h-6 w-6 md:h-8 md:w-8 text-[#D8B7C1]" />
                    </motion.div>
                    
                    <div className="space-y-3 md:space-y-4 relative z-10">
                      <h3 className="text-xl md:text-2xl font-bold text-[#897A81]">{value.title}</h3>
                      <div className="w-10 md:w-12 h-px bg-[#D8B7C1] group-hover:w-14 md:group-hover:w-16 transition-all duration-300"></div>
                      <p className="text-[#897A81]/80 leading-relaxed text-base md:text-lg">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-br from-[#897A81] via-[#897A81] to-[#D8B7C1] relative z-10 text-center overflow-hidden">
        <div className="absolute top-10 md:top-20 left-10 md:left-20 w-24 md:w-32 h-24 md:h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 md:bottom-20 right-10 md:right-20 w-32 md:w-40 h-32 md:h-40 bg-[#D8B7C1]/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 md:w-96 h-64 md:h-96 bg-white/5 rounded-full blur-3xl"></div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto relative z-10"
        >
          <motion.div 
            className="bg-white/10 backdrop-blur-md py-12 md:py-16 px-8 md:px-12 rounded-3xl border border-white/20 shadow-2xl"
            variants={fadeInUp}
          >
            <motion.div variants={fadeInUp} className="space-y-6 md:space-y-8 mb-8 md:mb-12">
              <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-full">
                <Star className="h-3 w-3 md:h-4 md:w-4 text-white" />
                <span className="text-xs md:text-sm font-medium text-white tracking-wide uppercase">Begin Your Journey</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight tracking-tight">
                Create Your
                <br />
                <span className="text-[#D8B7C1]">Dream Event</span>
              </h2>
              
              <div className="w-20 md:w-24 h-1 bg-[#D8B7C1] mx-auto rounded-full"></div>
            </motion.div>
            
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-white/90 mb-8 md:mb-12 max-w-3xl mx-auto font-light leading-relaxed"
            >
              Let Syncity transform your vision into an extraordinary celebration. Experience the perfect blend of elegance, precision, and Himalayan charm.
            </motion.p>
            
            <motion.div
              variants={staggerContainer}
              className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center"
            >
              {[
                { href: "/contact", text: "Start Planning", primary: true },
                { href: "tel:+919876543210", text: "Call Us Today", secondary: true },
                { href: "/services", text: "View Services", tertiary: true }
              ].map((button, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Link href={button.href}>
                    <motion.button
                      className={`px-8 md:px-10 py-3 md:py-4 text-base md:text-lg font-semibold tracking-wider transition-all duration-500 rounded-full ${
                        button.primary 
                          ? "bg-[#D8B7C1] text-white hover:bg-white hover:text-[#897A81] shadow-lg hover:shadow-xl" 
                          : button.secondary
                          ? "border-2 border-white text-white hover:bg-white hover:text-[#897A81] shadow-lg hover:shadow-xl"
                          : "bg-white/20 backdrop-blur-sm text-white hover:bg-white hover:text-[#897A81] border-2 border-white/30 hover:border-white shadow-lg hover:shadow-xl"
                      }`}
                      whileHover={{ 
                        scale: 1.05,
                        y: -3
                      }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      {button.text}
                    </motion.button>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

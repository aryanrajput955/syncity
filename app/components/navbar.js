"use client"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinkStyle =
    "relative text-[13px] tracking-widest font-semibold text-[#897A81] uppercase after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[1px] after:bg-[#897A81] after:transition-all after:duration-300 hover:after:w-full"

  // Hamburger menu toggle
  const toggleMenu = () => setIsOpen(!isOpen)

  // Animation variants for mobile menu
  const menuVariants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" }
    },
    exit: { opacity: 0, y: "-100%", transition: { duration: 0.3, ease: "easeInOut" } }
  }

  // Hamburger icon variants
  const hamburgerVariants = {
    closed: {
      rotate: 0,
      transition: { duration: 0.3 }
    },
    open: {
      rotate: 90,
      transition: { duration: 0.3 }
    }
  }

  const lineVariants = {
    closed: {
      rotate: 0,
      y: 0,
      transition: { duration: 0.3 }
    },
    open: (i) => ({
      rotate: i === 0 ? 45 : -45,
      y: i === 0 ? 6 : -6,
      transition: { duration: 0.3 }
    })
  }

  return (
    <nav className="w-full flex items-center justify-between px-4 sm:px-6 md:px-10 py-4 bg-[#EFE1DA] shadow-sm">
      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden flex items-center">
        <motion.button
          onClick={toggleMenu}
          className="relative w-8 h-8 flex flex-col justify-center items-center space-y-1.5 z-50"
          animate={isOpen ? "open" : "closed"}
          variants={hamburgerVariants}
        >
          <motion.span
            className="w-6 h-0.5 bg-[#897A81]"
            custom={0}
            variants={lineVariants}
          />
          <motion.span
            className={`w-6 h-0.5 bg-[#897A81] ${isOpen ? "opacity-0" : "opacity-100"}`}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-[#897A81]"
            custom={2}
            variants={lineVariants}
          />
        </motion.button>
      </div>

      {/* Left Menu (Desktop) */}
      <div className="hidden md:flex gap-6">
        <Link href="/" className="text-[#897A81]/70 hover:text-[#897A81] transition-colors uppercase">
          HOME
        </Link>
        <Link href="/about" className={navLinkStyle}>
          ABOUT
        </Link>
        <Link href="/services" className={navLinkStyle}>
          SERVICES
        </Link>
        <Link href="/destination" className={navLinkStyle}>
          DESTINATION
        </Link>
        <Link href="/gallery" className={navLinkStyle}>
          GALLERY
        </Link>
      </div>

      {/* Logo */}
      <div className="flex justify-center items-center">
        <Link href="/">
        <Image
          src="/logo2.png"
          alt=" uEvents Logo"
          width={180}
          height={80}
          priority
          className="w-18 sm:w-24 md:w-30 h-auto"
        />
        </Link>
      </div>

      {/* Right Menu (Desktop) */}
      <div className="hidden md:flex gap-6">
        <Link href="/login" className={navLinkStyle}>
          LOGIN
        </Link>
        <Link href="/testimonials" className={navLinkStyle}>
          TESTIMONIALS
        </Link>
        <Link href="/contact" className={navLinkStyle}>
          CONTACT
        </Link>
        <Link href="/press" className={navLinkStyle}>
          PRESS
        </Link>
        <Link href="/blog" className={navLinkStyle}>
          BLOG
        </Link>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-0 left-0 w-full h-screen bg-[#EFE1DA]/95 flex flex-col items-center justify-center gap-8 z-40 md:hidden"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            <Link
              href="/"
              className="text-[16px] text-[#897A81] font-semibold uppercase tracking-widest"
              onClick={toggleMenu}
            >
              HOME
            </Link>
            <Link
              href="/about"
              className="text-[16px] text-[#897A81] font-semibold uppercase tracking-widest"
              onClick={toggleMenu}
            >
              ABOUT
            </Link>
            <Link
              href="/services"
              className="text-[16px] text-[#897A81] font-semibold uppercase tracking-widest"
              onClick={toggleMenu}
            >
              SERVICES
            </Link>
            <Link
              href="/destination"
              className="text-[16px] text-[#897A81] font-semibold uppercase tracking-widest"
              onClick={toggleMenu}
            >
              DESTINATION
            </Link>
            <Link
              href="/gallery"
              className="text-[16px] text-[#897A81] font-semibold uppercase tracking-widest"
              onClick={toggleMenu}
            >
              GALLERY
            </Link>
            <Link
              href="/login"
              className="text-[16px] text-[#897A81] font-semibold uppercase tracking-widest"
              onClick={toggleMenu}
            >
              LOGIN
            </Link>
            <Link
              href="/testimonials"
              className="text-[16px] text-[#897A81] font-semibold uppercase tracking-widest"
              onClick={toggleMenu}
            >
              TESTIMONIALS
            </Link>
            <Link
              href="/contact"
              className="text-[16px] text-[#897A81] font-semibold uppercase tracking-widest"
              onClick={toggleMenu}
            >
              CONTACT
            </Link>
            <Link
              href="/press"
              className="text-[16px] text-[#897A81] font-semibold uppercase tracking-widest"
              onClick={toggleMenu}
            >
              PRESS
            </Link>
            <Link
              href="/blog"
              className="text-[16px] text-[#897A81] font-semibold uppercase tracking-widest"
              onClick={toggleMenu}
            >
              BLOG
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Base style for nav links
  const navLinkStyle =
    "relative text-[13px] tracking-widest font-semibold text-[#897A81]/70 uppercase after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[1px] after:bg-[#897A81] after:transition-all after:duration-300 hover:after:w-full hover:text-[#897A81]";

  // Active link style
  const activeLinkStyle = "text-[#D8B7C1]"; // Distinct color for active link

  // Hamburger menu toggle
  const toggleMenu = () => setIsOpen(!isOpen);

  // Animation variants for mobile menu
  const menuVariants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    exit: { opacity: 0, y: "-100%", transition: { duration: 0.3, ease: "easeInOut" } },
  };

  // Hamburger icon variants
  const hamburgerVariants = {
    closed: {
      rotate: 0,
      transition: { duration: 0.3 },
    },
    open: {
      rotate: 90,
      transition: { duration: 0.3 },
    },
  };

  const lineVariants = {
    closed: {
      rotate: 0,
      y: 0,
      transition: { duration: 0.3 },
    },
    open: (i) => ({
      rotate: i === 0 ? 45 : -45,
      y: i === 0 ? 6 : -6,
      transition: { duration: 0.3 },
    }),
  };

  return (
    <nav className="w-full flex items-center justify-center px-4 sm:px-6 md:px-0 py-4 bg-[#EFE1DA] shadow-sm">
      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden flex items-center absolute left-4">
        <motion.button
          onClick={toggleMenu}
          className="relative w-8 h-8 flex flex-col justify-center items-center space-y-1.5 z-50"
          animate={isOpen ? "open" : "closed"}
          variants={hamburgerVariants}
        >
          <motion.span className="w-6 h-0.5 bg-[#897A81]" custom={0} variants={lineVariants} />
          <motion.span
            className={`w-6 h-0.5 bg-[#897A81] ${isOpen ? "opacity-0" : "opacity-100"}`}
            transition={{ duration: 0.3 }}
          />
          <motion.span className="w-6 h-0.5 bg-[#897A81]" custom={2} variants={lineVariants} />
        </motion.button>
      </div>

      {/* Left Menu (Desktop) */}
      <div className="hidden md:flex items-center gap-4 mr-1">
        <Link href="/" className={`${navLinkStyle} ${pathname === "/" ? activeLinkStyle : ""}`}>
          HOME
        </Link>
        <Link
          href="/services"
          className={`${navLinkStyle} ${pathname === "/services" ? activeLinkStyle : ""}`}
        >
          SERVICES
        </Link>
      </div>

      {/* Logo */}
      <div className="flex justify-center mx-10 items-center">
        <Link href="/">
          <Image
            src="/logo2.png"
            alt="Syncity Events Logo"
            width={180}
            height={80}
            priority
            className="w-18 sm:w-24 md:w-30 h-auto"
          />
        </Link>
      </div>

      {/* Right Menu (Desktop) */}
      <div className="hidden md:flex items-center gap-4 ml-1">
        <Link
          href="/about"
          className={`${navLinkStyle} ${pathname === "/about" ? activeLinkStyle : ""}`}
        >
          ABOUT
        </Link>
        <Link
          href="/contact"
          className={`${navLinkStyle} ${pathname === "/contact" ? activeLinkStyle : ""}`}
        >
          CONTACT
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
              className={`text-[16px] font-semibold uppercase tracking-widest ${
                pathname === "/" ? "text-[#D8B7C1]" : "text-[#897A81]"
              }`}
              onClick={toggleMenu}
            >
              HOME
            </Link>
            <Link
              href="/services"
              className={`text-[16px] font-semibold uppercase tracking-widest ${
                pathname === "/services" ? "text-[#D8B7C1]" : "text-[#897A81]"
              }`}
              onClick={toggleMenu}
            >
              SERVICES
            </Link>
            <Link
              href="/about"
              className={`text-[16px] font-semibold uppercase tracking-widest ${
                pathname === "/about" ? "text-[#D8B7C1]" : "text-[#897A81]"
              }`}
              onClick={toggleMenu}
            >
              ABOUT
            </Link>
            <Link
              href="/contact"
              className={`text-[16px] font-semibold uppercase tracking-widest ${
                pathname === "/contact" ? "text-[#D8B7C1]" : "text-[#897A81]"
              }`}
              onClick={toggleMenu}
            >
              CONTACT
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
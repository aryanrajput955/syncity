"use client";

import { motion } from "framer-motion";
import { Video } from "lucide-react";
import Slider from "react-slick";
import { useState, useEffect } from "react";

// Simplified animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" }
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05
    }
  }
};

// Uniform video animation (no depth tricks)
const videoVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6 }
};

// Video data
const videos = [
  {
    src: "/img/2.mp4",
    poster: "/wedding-moment-1-poster.png",
    alt: "Wedding Ceremony Highlight"
  },
  {
    src: "/img/6.mp4",
    poster: "/wedding-moment-2-poster.png",
    alt: "Reception Dance Moment"
  },
  {
    src: "/img/3.mp4",
    poster: "/wedding-moment-3-poster.png",
    alt: "Cultural Celebration"
  },
  {
    src: "/img/5.mp4",
    poster: "/wedding-moment-4-poster.png",
    alt: "Scenic Venue Setup"
  }
];

// Slick slider settings (mobile)
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: false,
  customPaging: () => (
    <div className="w-2 h-2 bg-[#D8B7C1]/50 rounded-full mx-1 transition-all duration-300 hover:bg-[#D8B7C1]" />
  ),
  dotsClass: "slick-dots custom-dots"
};

export default function PortraitVideoSection() {
  const [isMobile, setIsMobile] = useState(false);

  // Responsive detection
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="py-8 md:py-10 px-4 md:px-6 bg-[#EFE1DA] relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-40px" }}
          variants={staggerContainer}
          className="text-center space-y-4 md:space-y-5"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="space-y-2">
            <div className="inline-flex items-center gap-1.5 bg-[#D8B7C1]/10 px-2 py-1 border border-[#D8B7C1]/20">
              <Video className="h-3 w-3 md:h-3.5 md:w-3.5 text-[#D8B7C1]" />
              <span className="text-xs font-medium text-[#897A81] tracking-wide uppercase">
                Moments
              </span>
            </div>
            <h2 className="text-2xl md:text-5xl font-serif font-light text-[#897A81] leading-tight">
              Our Celebrations
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "60px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-0.5 bg-[#D8B7C1] mx-auto"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="text-sm md:text-base text-[#897A81]/70 max-w-md mx-auto font-light leading-relaxed"
          >
            Heartfelt moments from Syncity's events in Uttarakhand.
          </motion.p>

          {/* Video Grid / Slider */}
          {isMobile ? (
            <motion.div variants={staggerContainer} className="mt-4 md:mt-5">
              <Slider {...sliderSettings}>
                {videos.map((video, i) => (
                  <div key={i} className="px-2">
                    <motion.div variants={videoVariants}>
                      <video
                        className="w-full aspect-[9/16] max-w-[240px] mx-auto  shadow-md"
                        poster={video.poster}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        loading="lazy"
                      >
                        <source src={video.src} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </motion.div>
                  </div>
                ))}
              </Slider>
            </motion.div>
          ) : (
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-4 gap-3 mt-4 md:mt-5"
            >
              {videos.map((video, i) => (
                <motion.div
                  key={i}
                  variants={videoVariants}
                  className="relative"
                >
                  <video
                    className="w-full aspect-[9/16] max-w-[240px] mx-auto  shadow-md"
                    poster={video.poster}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    loading="lazy"
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Slick Dots Styling */}
      <style jsx>{`
        .custom-dots {
          position: relative;
          bottom: -10px;
          display: flex !important;
          justify-content: center;
          padding: 0;
          margin: 0;
        }
        .custom-dots li {
          margin: 0 4px;
        }
        .custom-dots li.slick-active div {
          background-color: #D8B7C1;
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
}
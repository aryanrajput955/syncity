"use client";

import { motion } from "framer-motion";
import { Video } from "lucide-react";
import Slider from "react-slick";
import { useState, useEffect } from "react";

// Animation variants
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

const videoVariants = (index) => ({
  initial: { 
    opacity: index === 1 || index === 2 ? 1 : 0.7, 
    x: index === 0 ? -8 : index === 3 ? 8 : 0 
  },
  animate: { 
    opacity: index === 1 || index === 2 ? 1 : 0.7, 
    x: index === 0 ? -8 : index === 3 ? 8 : 0 
  },
  transition: { duration: 0.5, ease: "easeOut" }
});

// Video data
const videos = [
  {
    src: "/img/1.mp4",
    poster: "/wedding-moment-1-poster.png",
    alt: "Wedding Ceremony Highlight"
  },
  {
    src: "/img/2.mp4",
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

// Slick slider settings for mobile
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

  // Detect screen size for mobile vs. desktop layout
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Mobile breakpoint at 768px
    };
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
          {/* Section Header */}
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
            ></motion.div>
          </motion.div>

          {/* Video Description */}
          <motion.p
            variants={fadeInUp}
            className="text-sm md:text-base text-[#897A81]/70 max-w-md mx-auto font-light leading-relaxed"
          >
            Heartfelt moments from Syncity's events in Uttarakhand.
          </motion.p>

          {/* Video Display */}
          {isMobile ? (
            <motion.div
              variants={staggerContainer}
              className="mt-4 md:mt-5"
            >
              <Slider {...sliderSettings}>
                {videos.map((video, index) => (
                  <div key={index} className="px-2">
                    <motion.div
                      variants={fadeInUp}
                      className="relative"
                    >
                      <video
                        className="w-full aspect-[9/16] max-w-[240px] mx-auto"
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
              className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-3 mt-4 md:mt-5 relative"
            >
              {videos.map((video, index) => (
                <motion.div
                  key={index}
                  variants={videoVariants(index)}
                  className={`relative ${
                    index === 1 || index === 2 ? "z-10" : "z-0 hover:blur-0"
                  }`}
                >
                  <video
                    className="w-full aspect-[9/16] max-w-[180px] md:max-w-[240px] mx-auto"
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

      {/* Custom CSS for Slick Dots */}
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
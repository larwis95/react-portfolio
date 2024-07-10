// Import the images used forr the hero background and foreground, as well as necessary dependencies from React and Framer Motion
import heroBG from "../../assets/hero_bg_portfolio.png";
import heroFG from "../../assets/foreground_hero.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { easeIn } from "framer-motion";

// Export the Hero component
export default function Hero(): JSX.Element {
  // Need a reference so that the scrollYProgress can be calculated
  const ref = useRef(null);
  // Calculate the scrollYProgress and use it to animate the hero background and text
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // Calculate the y position of the hero background and text
  const heroBGY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"], {
    clamp: true,
    ease: easeIn,
  });
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"], {
    clamp: true,
    ease: easeIn,
  });

  return (
    <div
      ref={ref}
      className="relative grid h-screen w-full place-items-center overflow-hidden"
    >
      <motion.h1
        style={{
          y: textY,
        }}
        className="xs:text-base relative z-10 text-center font-bold text-white sm:text-5xl md:text-5xl lg:text-9xl"
      >
        Lawrence Wisniewski
      </motion.h1>
      <motion.div
        className="z-1 absolute inset-0"
        style={{
          backgroundImage: `url(${heroBG})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          y: heroBGY,
        }}
        animate={{
          scale: [2.0, 1.5, 1.0],
          y: ["50%", "25%", "0%"],
        }}
        transition={{
          duration: 2.5,
        }}
      />
      <motion.div
        className="absolute inset-0 z-20 overflow-hidden"
        style={{
          backgroundImage: `url(${heroFG})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
        initial={{
          display: "none",
        }}
        animate={{
          display: "block",
          scale: [2.0, 1.5, 1.0],
        }}
        transition={{
          duration: 2.5,
        }}
      />
    </div>
  );
}

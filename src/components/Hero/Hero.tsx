import heroBG from "../../assets/hero_bg_portfolio.png";
import heroFG from "../../assets/foreground_hero.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { easeIn } from "framer-motion";

export default function Hero(): JSX.Element {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
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
      className="relative grid h-screen w-full place-items-center overflow-hidden overflow-x-hidden"
    >
      <motion.h1
        style={{
          y: textY,
        }}
        className="xs:text-base relative z-10 text-center font-bold text-white sm:text-base md:text-5xl lg:text-9xl"
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
        className="absolute inset-0 z-20"
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

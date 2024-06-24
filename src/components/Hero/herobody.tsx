import heroBG from "../../assets/hero_bg_portfolio.png";
import heroFG from "../../assets/foreground_hero.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroBody(): JSX.Element {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const heroBGY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <div
      ref={ref}
      className="w-full h-screen overflow-hidden relative grid place-items-center"
    >
      <motion.h1
        style={{ y: textY }}
        className="font-bold text-white text-7xl md:text-9xl relative z-10"
      >
        Lawrence Wisniewski
      </motion.h1>
      <motion.div
        className="absolute inset-0 z-1"
        style={{
          backgroundImage: `url(${heroBG})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          y: heroBGY,
        }}
      />
      <div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: `url(${heroFG})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      />
    </div>
  );
}

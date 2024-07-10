import { motion } from "framer-motion";
import { useState } from "react";
import { IconBrandGithub } from "@tabler/icons-react";

interface CardProps {
  onClick?: () => void;
  key: number;
  position: number;
  cardDescription: string;
  cardImage: string;
  githubLink: string;
}

export default function Project({
  githubLink,
  cardDescription,
  cardImage,
  onClick,
}: CardProps): JSX.Element {
  // need to use a state to track the hover state of the card, so we can animate an overlay
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="card relative flex h-64 w-full cursor-pointer select-none flex-col items-center justify-center gap-4 overflow-hidden rounded-lg bg-rose-400 p-4 shadow-lg lg:w-3/4"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{
        perspective: "1000px",
        rotateY: "-30deg",
        pointerEvents: "none",
        opacity: 0,
      }}
      whileInView={{
        opacity: 1.0,
        perspective: "0px",
        rotateY: "0deg",
        pointerEvents: "auto",
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 1.5, type: "tween" }}
    >
      <motion.div
        className="overlay absolute bottom-full left-0 right-0 top-full z-20 flex h-full w-full rounded-lg bg-red-950 bg-opacity-90"
        animate={{
          top: isHovered ? "0%" : "100%",
          bottom: isHovered ? "0%" : "100%",
          opacity: isHovered ? 1.0 : 0,
        }}
        transition={{ duration: 0.5 }}
      >
        <p className="bold absolute left-0 stroke-black p-4 text-2xl text-white sm:bottom-8 md:bottom-0">
          {cardDescription}
        </p>
        <IconBrandGithub
          size={64}
          className="absolute bottom-0 right-6 cursor-pointer transition-colors hover:stroke-rose-300"
          onClick={() => window.open(githubLink, "_blank")}
        />
      </motion.div>
      <div
        className="z-1 absolute inset-0"
        style={{
          backgroundImage: `url(${cardImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      ></div>
    </motion.div>
  );
}

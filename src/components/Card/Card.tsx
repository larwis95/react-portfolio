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

export default function Card({
  githubLink,
  cardDescription,
  cardImage,
  onClick,
}: CardProps): JSX.Element {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="card  w-3/4 h-64 bg-rose-400 shadow-lg rounded-lg overflow-hidden relative cursor-pointer select-none flex flex-col justify-center items-center gap-4 p-4"
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
        className="overlay flex absolute top-full bottom-full left-0 right-0 rounded-lg bg-red-950 bg-opacity-90 w-full h-full z-20"
        animate={{
          top: isHovered ? "0%" : "100%",
          bottom: isHovered ? "0%" : "100%",
          opacity: isHovered ? 1.0 : 0,
        }}
        transition={{ duration: 0.5 }}
      >
        <p className="p-4 text-white stroke-black bold text-2xl absolute bottom-0 left-6">
          {cardDescription}
        </p>
        <IconBrandGithub
          size={64}
          className="absolute bottom-0 right-6 cursor-pointer hover:stroke-rose-300 transition-colors"
          onClick={() => window.open(githubLink, "_blank")}
        />
      </motion.div>
      <div
        className="absolute inset-0 z-1"
        style={{
          backgroundImage: `url(${cardImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      ></div>
    </motion.div>
  );
}

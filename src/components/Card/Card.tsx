import { motion } from "framer-motion";
import { useState } from "react";

interface CardProps {
  onClick?: () => void;
  key: number;
  position: number;
  cardTitle: string;
  cardDescription: string;
  cardImage: string;
}

export default function Card({
  cardTitle,
  cardDescription,
  cardImage,
  onClick,
}: CardProps): JSX.Element {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="card w-64 h-64 bg-black shadow-lg rounded-lg overflow-hidden relative cursor-pointer select-none flex flex-col justify-center items-center gap-2 p-4"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{
        perspective: "1000px",
        rotateY: "-30deg",
        pointerEvents: "none",
      }}
      animate={{
        perspective: "0px",
        rotateY: "0deg",
        pointerEvents: "auto",
      }}
      transition={{ duration: 2.0, delay: 1.5, type: "tween" }}
    >
      <motion.div
        className="overlay flex absolute top-full bottom-full left-0 right-0 rounded-lg bg-red-950 bg-opacity-40 w-full h-full z-20"
        animate={{
          top: isHovered ? "0%" : "100%",
          bottom: isHovered ? "0%" : "100%",
          opacity: isHovered ? 1.0 : 0,
        }}
        transition={{ duration: 0.5 }}
      >
        <p className="p-4 text-white stroke-black bold text-lg absolute bottom-4 left-6">
          {cardDescription}
        </p>
      </motion.div>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${cardImage})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      ></div>
      <h2 className="bold z-10 p-4 bg-red-900 border-solid border-amber-400 bg-opacity-60 text-2xl w-full text-center">
        {cardTitle}
      </h2>
    </motion.div>
  );
}

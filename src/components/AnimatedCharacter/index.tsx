import { motion } from "framer-motion";

interface CharacterProps {
  character: string;
  delay?: number;
}

// an animated character component, takes a character and a delay, and animates the character by changing the opacity from 0 to 1 and back looping
export default function AnimatedCharacter({
  character,
  delay,
}: CharacterProps): JSX.Element {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: delay,
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
      className="display-inline-block"
    >
      {character}
    </motion.span>
  );
}

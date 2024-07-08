import { motion } from "framer-motion";

interface CharacterProps {
  character: string;
  delay?: number;
}

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

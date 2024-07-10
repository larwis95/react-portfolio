import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

// since the exit animations do not work without having a motion.div as a direct child of the <AnimatedPresence> component from framer we need to create an animation wrapper component for each page.
export default function AnimatedLayout({ children }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ x: "-100%" }}
      transition={{ duration: 1.0, type: "tween" }}
      className="flex h-full w-full flex-col items-center justify-center gap-4"
    >
      {children}
    </motion.div>
  );
}

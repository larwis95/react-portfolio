import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

export default function AnimatedLayout({ children }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ x: "-100%" }}
      transition={{ duration: 1.0, type: "tween" }}
      className="flex h-full w-full flex-col items-center justify-center gap-4 overflow-x-hidden"
    >
      {children}
    </motion.div>
  );
}

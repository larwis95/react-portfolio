import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

export default function AnimatedLayout({ children }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ x: "-100%" }}
      transition={{ duration: 2.0 }}
    >
      {children}
    </motion.div>
  );
}

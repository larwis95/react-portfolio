import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

const AnimatedLayout = ({ children }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2.0 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedLayout;

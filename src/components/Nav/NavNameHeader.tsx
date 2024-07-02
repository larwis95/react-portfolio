import { motion } from "framer-motion";

export default function NavNameHeader(): JSX.Element {
  return (
    <motion.div
      className="flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.5, duration: 0.5 }}
    >
      <h2 className="rounded-lg p-2 text-2xl font-bold text-rose-700">
        Lawrence Wisniewski
      </h2>
    </motion.div>
  );
}

import { motion } from "framer-motion";
interface NotificationProps {
  message: string;
  type: string;
}

export default function Notification({ message, type }: NotificationProps) {
  return type === "success" ? (
    <motion.div
      className="z-1 relative bottom-1 right-1 flex h-fit w-fit items-center justify-center border border-white bg-green-500 bg-opacity-75 p-2 text-white"
      role="alert"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      exit={{ y: 100, opacity: 0 }}
    >
      <p className="text-base font-bold">{message}</p>
    </motion.div>
  ) : (
    <motion.div
      className="z-1 relative bottom-1 right-1 flex h-fit w-fit items-center justify-center border border-white bg-red-500 bg-opacity-75 p-2 text-white"
      role="alert"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      exit={{ y: 100, opacity: 0 }}
    >
      <p className="text-base font-bold">{message}</p>
    </motion.div>
  );
}

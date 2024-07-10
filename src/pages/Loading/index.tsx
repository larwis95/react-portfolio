import { motion } from "framer-motion";
import { useEffect } from "react";
import AnimatedCharacter from "../../components/AnimatedCharacter";
import AnimatedLayout from "../../utils/page-transitions/AnimatedLayout";

export default function LoadingPage({}) {
  const loadingText = "Loading...";
  useEffect(() => {
    document.title = "Loading...";
  }, []);
  return (
    <AnimatedLayout>
      <div className="flex h-full w-full flex-col items-center justify-center gap-4">
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <svg
            className="h-16 w-16 text-rose-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </motion.div>
        <h2>
          {loadingText.split("").map((char, index) => (
            <AnimatedCharacter
              key={index}
              character={char}
              delay={index * 0.1}
            />
          ))}
        </h2>
      </div>
    </AnimatedLayout>
  );
}

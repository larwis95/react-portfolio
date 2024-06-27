import { motion } from "framer-motion";

interface AboutSectionProps {
  title: string;
  description?: string[];
}

export default function AboutTextSection({
  title,
  description,
}: AboutSectionProps): JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="m-5 p-4 flex justify-center items-center flex-col min-w-full"
    >
      <h2 className="text-4xl mb-1 text-secondary">{title}</h2>
      <div className="container flex flex-col">
        {description?.map((desc, index) => (
          <p key={index} className="text-center text-white">
            {desc}
          </p>
        ))}
      </div>
    </motion.div>
  );
}

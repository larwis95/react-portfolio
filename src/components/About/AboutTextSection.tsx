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
      className="m-5 flex min-w-full flex-col items-center justify-center p-4"
    >
      <h2 className="text-secondary mb-1 text-4xl">{title}</h2>
      <div className="container flex flex-col">
        {description?.map((desc, index) => (
          <p key={index} className="text-wrap text-center text-white">
            {desc}
          </p>
        ))}
      </div>
    </motion.div>
  );
}

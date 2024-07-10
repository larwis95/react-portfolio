import { motion } from "framer-motion";

interface SkillsProps {
  skills: JSX.Element[];
}

// Export AboutSkills component
export default function AboutSkills({ skills }: SkillsProps): JSX.Element {
  // Duplicate the skills array to create a scrolling effect
  const duplicatedSkills = [...skills, ...skills];
  return (
    <motion.div
      className={
        "xs:w-2/3 flex items-center justify-center overflow-x-hidden rounded-lg border-4 border-white bg-black bg-opacity-50 p-4 lg:w-1/4"
      }
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="flex"
        animate={{
          x: ["0%", "-100%"],
          transition: {
            ease: "linear",
            duration: 15,
            repeat: Infinity,
          },
        }}
      >
        {duplicatedSkills.map((skill, index) => {
          return (
            <div
              key={index}
              className="flex-shrink-0"
              style={{ width: `${100 / skills.length}%` }}
            >
              <div className="flex h-full items-center justify-center">
                {skill}
              </div>
            </div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}

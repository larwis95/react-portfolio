import { motion } from "framer-motion";

interface SkillsProps {
  skills: JSX.Element[];
}

export default function AboutSkills({ skills }: SkillsProps): JSX.Element {
  const duplicatedSkills = [...skills, ...skills];
  return (
    <motion.div
      className={
        "flex xs:w-2/3 lg:w-1/4 justify-center items-center overflow-x-hidden p-4 border-4 border-white rounded-lg bg-black bg-opacity-50"
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
              <div className="flex items-center justify-center h-full">
                {skill}
              </div>
            </div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}

import { motion } from "framer-motion";

interface Skills {
  name: string;
  icon: JSX.Element;
  level: string;
  color: string;
}

export default function SkillsListItem({
  name,
  icon,
  level,
  color,
}: Skills): JSX.Element {
  return (
    <motion.li
      className="flex h-fit w-fit flex-col items-center rounded-xl border-2 border-rose-600 bg-slate-700 p-5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-500">
        {icon}
      </div>
      <h3 className="w-24 text-center text-lg font-semibold text-white">
        {name}
      </h3>
      <p className={`${color}`}>{level}</p>
    </motion.li>
  );
}

import { motion } from "framer-motion";

export default function HeroSummary() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="hero-body m-5 p-4 flex justify-center items-center flex-col"
    >
      <h2 className="text-lg mb-1 text-secondary">
        Full-Stack Web Development
      </h2>
      <div className="container flex flex-col max-w-screen-md">
        <p className="m-1">
          Hello! I am an aspiring web developer who specializes in React,
          JavaScript, Node.js, and TypeScript.
        </p>
        <p className="m-1">
          My journey into programming started when I was just 14 years old. On
          my favorite video games World of Warcraft, I discovered you could
          create add-ons with the Lua programming language. Ever since then I
          have dived deep into the world of problem solving with these awesome
          coding languages!
        </p>
      </div>
    </motion.div>
  );
}

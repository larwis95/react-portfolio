import { motion } from "framer-motion";

interface NavLinkProps {
  href: string;
  title: string;
}

function NavLink({ href, title }: NavLinkProps) {
  return (
    <motion.li
      className="m-1 p-2 bg-black rounded-md cursor-pointer transition-colors hover:bg-rose-300 hover:text-black basis-full"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      whileTap={{ scale: 0.95 }}
    >
      <a href={href} className=" text-white hover:text-black bold">
        {title}
      </a>
    </motion.li>
  );
}

export default NavLink;

import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

interface NavLinkProps {
  href: string;
  title: string;
}

function NavLink({ href, title }: NavLinkProps) {
  const location = useLocation();
  return (
    <motion.li
      className={`m-1 p-2 bg-black relative rounded-md cursor-pointer transition hover:bg-rose-300 hover:text-black basis-full ${
        location.pathname === href
          ? "border-b-2 border-rose-500 pb-2 pointer-events-none"
          : ""
      }`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      whileTap={{ scale: 0.95 }}
    >
      <a
        href={href}
        className={`${
          location.pathname === href
            ? "text-rose-500 pointer-events-none"
            : "text-white"
        } hover:text-black bold relative w-full h-full transition`}
      >
        {title}
      </a>
    </motion.li>
  );
}

export default NavLink;

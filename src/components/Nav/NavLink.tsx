import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

interface NavLinkProps {
  href: string;
  title: string;
}

// NavLink component
function NavLink({ href, title }: NavLinkProps) {
  // gets the current url location
  const location = useLocation();
  return (
    <motion.li
      // need the location to set the current nav link to a different color
      className={`relative m-1 flex cursor-pointer items-center justify-center rounded-md bg-black p-2 text-center transition hover:bg-rose-300 hover:text-black ${
        location.pathname === href
          ? "pointer-events-none border-b-2 border-rose-500 pb-2"
          : ""
      }`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      whileTap={{ scale: 0.95 }}
      style={{ height: "40px" }}
    >
      <Link
        to={href}
        className={`${
          location.pathname === href
            ? "pointer-events-none text-rose-500"
            : "text-white"
        } bold h-full w-full transition hover:text-black`}
      >
        {title}
      </Link>
    </motion.li>
  );
}

// export NavLink component
export default NavLink;

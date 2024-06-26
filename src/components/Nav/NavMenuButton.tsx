import { useState, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { ButtonMenu } from "./ButtonMenu";

type NavAnimationVariants = {
  open: {
    rotate: number;
    scale: number;
    backgroundColor: string;
    color: string;
  };
  closed: {
    rotate: number;
    scale: number;
    backgroundColor: string;
    color: string;
  };
};

const variants: NavAnimationVariants = {
  open: {
    rotate: 90,
    scale: 0.8,
    backgroundColor: "#fda4af",
    color: "#4c0519",
  },
  closed: {
    rotate: 0,
    scale: 1.0,
    backgroundColor: "#4c0519",
    color: "#fda4af",
  },
};

export function NavMenuButton(): JSX.Element {
  const controls = useAnimationControls();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
    controls.start(isOpen ? "closed" : "open");
  };

  useEffect(() => {
    const menu = document.querySelector(".button-nav-menu");
    const menuBtn = document.querySelector(".nav-button");
    const handleClickOutsideMenu = (e: MouseEvent) => {
      if (
        e.target !== menu &&
        e.target !== menuBtn &&
        !menu?.contains(e.target as Node)
      ) {
        setIsOpen(false);
        controls.start("closed");
      }
    };
    document.addEventListener("mousedown", handleClickOutsideMenu);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideMenu);
    };
  }, [isOpen]);

  const handleHover = (e: MouseEvent) => {
    const target = e.target as HTMLButtonElement;
    if (target) {
      target.style.backgroundColor = isOpen ? "#4c0519" : "#fda4af";
      target.style.color = isOpen ? "#fda4af" : "#4c0519";
    }
  };

  const handleHoverEnd = (e: MouseEvent) => {
    const target = e.target as HTMLButtonElement;
    if (target) {
      target.style.backgroundColor = isOpen ? "#fda4af" : "#4c0519";
      target.style.color = isOpen ? "#4c0519" : "#fda4af";
    }
  };

  return (
    <div>
      <motion.button
        className="nav-button inline-flex items-center justify-center text-2xl text-center rounded-full bg-rose-900 text-rose-300 sticky sticky-animation top-10 right-1 z-50 cursor-pointer w-10 h-10 p-2 border border-amber-300 transition-colors"
        onClick={handleOpen}
        onHoverStart={(e) => {
          handleHover(e);
        }}
        onHoverEnd={(e) => {
          handleHoverEnd(e);
        }}
        variants={variants}
        animate={controls}
        transition={{ duration: 0.5 }}
      >
        ▶
      </motion.button>
      {isOpen ? <ButtonMenu /> : null}
    </div>
  );
}

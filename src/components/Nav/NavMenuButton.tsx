import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import ButtonMenuLink from "./ButtonMenuLink";

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
  const [isAnimating, setIsAnimating] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleOpen = () => {
    setIsOpen(!isOpen);
    setIsAnimating(true);
    controls.start(isOpen ? "closed" : "open");
  };

  const handleClickOutsideMenu = (e: MouseEvent) => {
    if (
      e.target !== menuRef?.current &&
      e.target !== buttonRef?.current &&
      !menuRef?.current?.contains(e.target as Node)
    ) {
      setIsOpen(false);
      setIsAnimating(true);
      controls.start("closed");
      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideMenu);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideMenu);
    };
  }, [isOpen, controls]);

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
        ref={buttonRef}
        className={`${
          isAnimating ? "pointer-events-none" : ""
        } nav-button top-20 z-50 ml-3 inline-flex h-10 w-10 cursor-pointer select-none items-center justify-center rounded-full border border-amber-300 bg-rose-900 p-2 text-center text-2xl text-rose-300 transition-colors duration-300 ease-in-out`}
        onClick={() => {
          isAnimating ? null : handleOpen();
        }}
        onHoverStart={(e) => {
          handleHover(e);
        }}
        onHoverEnd={(e) => {
          handleHoverEnd(e);
        }}
        variants={variants}
        animate={controls}
        transition={{ duration: 0.5 }}
        onTransitionEnd={() => {
          setIsAnimating(false);
        }}
      >
        ▶
      </motion.button>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            ref={menuRef}
            key="buttonMenu"
            className="button-nav-menu w-50vw h-50vh z-49 absolute flex flex-col place-items-start justify-start gap-4 rounded-r-xl bg-black bg-opacity-50 p-4"
            initial={{ opacity: 0, x: "-100%", scale: 0.4 }}
            animate={{ opacity: 1, x: "0%", scale: 1.0 }}
            transition={{ duration: 0.5, type: "tween" }}
            exit={{ opacity: 0, x: "-100%", scale: 0.4 }}
          >
            <ButtonMenuLink url="/" title="About" />
            <ButtonMenuLink url="/contact" title="Contact" />
            <ButtonMenuLink url="/projects" title="Projects" />
            <ButtonMenuLink url="/resume" title="Resume" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

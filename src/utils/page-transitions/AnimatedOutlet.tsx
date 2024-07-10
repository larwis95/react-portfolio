import { useOutlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import React from "react";

// We have to create a custom outlet because the default outlet does not support exit animations from framer-motion
export default function AnimatedOutlet(): JSX.Element {
  const location = useLocation();
  const element = useOutlet();

  return (
    <AnimatePresence mode="wait">
      {element && React.cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
  );
}

import { useOutlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import React from "react";

export default function AnimatedOutlet(): JSX.Element {
  const location = useLocation();
  const element = useOutlet();
  return (
    <AnimatePresence mode="wait" initial={true}>
      {element && React.cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
  );
}

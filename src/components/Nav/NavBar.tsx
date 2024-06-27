import NavLink from "./NavLink";
import { NavMenuButton } from "./NavMenuButton";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function NavBar(): JSX.Element {
  const [scroll, setScroll] = useState(false);
  const location = useLocation();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY >= 100);
    });
  });
  return (
    <header
      className={
        scroll
          ? `sticky sticky-animation ${
              location.pathname === "/" ? "top-52" : "top-28"
            } z-50`
          : "absolute top-10 absolute-animation"
      }
      style={scroll ? { height: "0px" } : { height: "84px" }}
    >
      {scroll ? (
        <NavMenuButton />
      ) : (
        <nav>
          <ul className="flex flex-row basis-1/4 flex-grow">
            <NavLink href="/" title="About" />
            <NavLink href="/contact" title="Contact" />
            <NavLink href="/projects" title="Projects" />
            <NavLink href="/resume" title="Resume" />
          </ul>
        </nav>
      )}
    </header>
  );
}

export default NavBar;

import NavLink from "./NavLink";
import { NavMenuButton } from "./NavMenuButton";
import { useState, useEffect } from "react";

function NavBar(): JSX.Element {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY >= 100);
    });
  });
  return (
    <header
      className={
        scroll
          ? `sticky-animation sticky top-28 z-50`
          : "absolute-animation absolute left-1 top-10"
      }
      style={scroll ? { height: "0px" } : { height: "84px" }}
    >
      {scroll ? (
        <NavMenuButton />
      ) : (
        <nav className="flex">
          <ul className="flex flex-row flex-wrap">
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

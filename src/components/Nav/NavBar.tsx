import NavLink from "./NavLink";
import { NavMenuButton } from "./NavMenuButton";
import { useState, useEffect } from "react";

function NavBar(): JSX.Element {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY >= 80);
    });
  });
  return (
    <header
      className={
        scroll
          ? "sticky sticky-animation top-10 z-50"
          : "absolute absolute-animation"
      }
      style={scroll ? { height: "0px" } : { height: "84px" }}
    >
      {scroll ? (
        <NavMenuButton />
      ) : (
        <nav>
          <ul className="flex flex-row basis-1/4 flex-grow">
            <NavLink href="/" title="Home" />
            <NavLink href="/about" title="About" />
            <NavLink href="/contact" title="Contact" />
            <NavLink href="/projects" title="Projects" />
          </ul>
        </nav>
      )}
    </header>
  );
}

export default NavBar;

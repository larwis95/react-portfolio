import NavLink from "./NavLink";
import { useState, useEffect } from "react";

function NavBar(): JSX.Element {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20);
    });
  });
  return (
    <header className={scroll ? "sticky top-0 z-50" : ""}>
      <nav>
        <ul className="flex flex-row basis-1/4 flex-grow">
          <NavLink href="/" title="Home" />
          <NavLink href="/about" title="About" />
          <NavLink href="/contact" title="Contact" />
          <NavLink href="/projects" title="Projects" />
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;

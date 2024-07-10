import NavLink from "./NavLink";
import { NavMenuButton } from "./NavMenuButton";
import { useState, useEffect } from "react";

function NavBar(): JSX.Element {
  //  Initialize scroll state
  const [scroll, setScroll] = useState(false);
  //  Add event listener to window scroll that sets scroll state to true when window.scrollY is greater than or equal to 100, we use this to switch which navigation is displayed
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY >= 100);
    });
  });
  return (
    //  If scroll is true, display the sticky navigation, otherwise display the absolute navigation
    <header
      className={
        scroll
          ? `sticky-animation sticky top-28 z-50`
          : "absolute-animation absolute top-10"
      }
      style={scroll ? { height: "0px" } : { height: "84px" }}
    >
      {scroll ? (
        <NavMenuButton />
      ) : (
        <nav className="ml-2 flex">
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

//  Export the NavBar component
export default NavBar;

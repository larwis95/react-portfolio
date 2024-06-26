import ButtonMenuLink from "./ButtonMenuLink";

export function ButtonMenu() {
  return (
    <div className="button-nav-menu flex absolute w-50vw h-50vh bg-black bg-opacity-50 top- z-49 flex-col justify-start place-items-start gap-4 p-4 rounded-r-xl">
      <ButtonMenuLink url="/" title="Home" />
      <ButtonMenuLink url="/about" title="About" />
      <ButtonMenuLink url="/contact" title="Contact" />
      <ButtonMenuLink url="/projects" title="Projects" />
    </div>
  );
}

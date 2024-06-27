import { useLocation } from "react-router-dom";

interface NavLinkProps {
  title: string;
  url: string;
}

export default function ButtonMenuLink({ title, url }: NavLinkProps) {
  const location = useLocation();
  return (
    <a
      href={url}
      className={`${
        location.pathname === url
          ? "text-rose-500 pointer-events-none"
          : "text-white"
      } hover:text-rose-300  transition-colors text-4xl`}
    >
      {title}
    </a>
  );
}

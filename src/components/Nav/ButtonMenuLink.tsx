import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

interface NavLinkProps {
  title: string;
  url: string;
}

export default function ButtonMenuLink({ title, url }: NavLinkProps) {
  const location = useLocation();
  return (
    <Link
      to={url}
      className={`${
        location.pathname === url
          ? "pointer-events-none text-rose-500"
          : "text-white"
      } text-4xl transition-colors hover:text-rose-300`}
    >
      {title}
    </Link>
  );
}

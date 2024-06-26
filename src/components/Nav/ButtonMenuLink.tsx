interface NavLinkProps {
  title: string;
  url: string;
}

export default function ButtonMenuLink({ title, url }: NavLinkProps) {
  return (
    <a
      href={url}
      className="text-white hover:text-rose-300 transition-colors text-4xl"
    >
      {title}
    </a>
  );
}

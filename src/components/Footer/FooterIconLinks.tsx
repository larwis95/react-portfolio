import {
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandGithub,
} from "@tabler/icons-react";

export default function FooterIconLinks(): JSX.Element {
  return (
    <div className="flex gap-4">
      <a
        href="https://twitter.com/larwis95"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
      >
        <IconBrandTwitter
          size={24}
          strokeWidth={1.5}
          className="text-rose-600 transition-colors hover:text-white"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/larry-wisniewski-1b54a7317/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <IconBrandLinkedin
          size={24}
          strokeWidth={1.5}
          className="text-rose-600 transition-colors hover:text-white"
        />
      </a>
      <a
        href="https://github.com/larwis95"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <IconBrandGithub
          size={24}
          strokeWidth={1.5}
          className="text-rose-600 transition-colors hover:text-white"
        />
      </a>
    </div>
  );
}

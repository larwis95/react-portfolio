import FooterIconLinks from "./FooterIconLinks";

export default function Footer(): JSX.Element {
  return (
    <footer className="mt-24 flex h-24 w-full flex-col items-center justify-center rounded-md border-t border-rose-400">
      <FooterIconLinks />
      <p className="text-sm text-gray-400">
        &copy; 2024 Lawrence Wisniewski. All rights reserved.
      </p>
    </footer>
  );
}

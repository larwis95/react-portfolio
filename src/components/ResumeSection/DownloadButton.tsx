import { IconDownload } from "@tabler/icons-react";

interface DownloadButtonProps {
  resumeLink: string;
}

export default function DownloadButton({
  ...props
}: DownloadButtonProps): JSX.Element {
  const { resumeLink } = props;
  const handleDownload = () => {
    window.open(resumeLink, "_blank");
  };
  return (
    <button
      className="flex h-11 w-11 items-center justify-center rounded-lg border-2 border-slate-600 bg-rose-500 transition duration-300 ease-in-out hover:scale-105 hover:border-rose-500 hover:bg-black"
      onClick={handleDownload}
    >
      <IconDownload size={24} strokeWidth={1.5} className="text-white" />
    </button>
  );
}

import About from "../../components/About";
import AnimatedLayout from "../../utils/page-transitions/AnimatedLayout";
import { useEffect } from "react";

export default function HomePage(): JSX.Element {
  // have this useEffect on every page, it sets the document title to the current page we are on.
  useEffect(() => {
    document.title = "About | Lawrence Wisniewski";
  }, []);
  return (
    <AnimatedLayout>
      <title>About - Lawrence Wisniewski</title>
      <div className="mt-24 flex min-h-screen w-full flex-1 flex-wrap items-center justify-center gap-1 overflow-x-hidden p-4">
        <About />
      </div>
    </AnimatedLayout>
  );
}

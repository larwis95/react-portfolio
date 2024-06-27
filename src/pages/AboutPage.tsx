import About from "../components/About";
import AnimatedLayout from "../utils/page-transitions/AnimatedLayout";

export default function HomePage(): JSX.Element {
  return (
    <AnimatedLayout>
      <div className="flex justify-center items-center min-h-screen gap-1 flex-wrap w-full flex-1 p-4 mt-24">
        <About />
      </div>
    </AnimatedLayout>
  );
}

import AnimatedOutlet from "./utils/page-transitions/AnimatedOutlet";
import Nav from "./components/Nav";
import Hero from "./components/Hero/Hero";
import "./App.css";
import AnimatedLayout from "./utils/page-transitions/AnimatedLayout";

export default function App() {
  return (
    <>
      <Nav />
      <AnimatedLayout>
        <Hero />
      </AnimatedLayout>
      <AnimatedOutlet />
    </>
  );
}

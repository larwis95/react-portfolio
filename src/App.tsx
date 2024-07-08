import AnimatedOutlet from "./utils/page-transitions/AnimatedOutlet";
import Nav from "./components/Nav";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer";
import LoadingPage from "./pages/LoadingPage";
import "./App.css";
import AnimatedLayout from "./utils/page-transitions/AnimatedLayout";
import { Suspense } from "react";

export default function App() {
  return (
    <>
      <Nav />
      <AnimatedLayout>
        <Hero />
        <Suspense fallback={<LoadingPage />}>
          <AnimatedOutlet />
        </Suspense>
      </AnimatedLayout>
      <Footer />
    </>
  );
}

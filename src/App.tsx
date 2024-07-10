import AnimatedOutlet from "./utils/page-transitions/AnimatedOutlet";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loading from "./pages/Loading";
import "./App.css";
import AnimatedLayout from "./utils/page-transitions/AnimatedLayout";
import { Suspense } from "react";

export default function App() {
  return (
    <>
      <Header />
      <AnimatedLayout>
        <Suspense fallback={<Loading />}>
          <AnimatedOutlet />
        </Suspense>
      </AnimatedLayout>
      <Footer />
    </>
  );
}

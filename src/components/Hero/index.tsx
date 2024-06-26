import HeroBody from "./herobody";
import HeroSummary from "./heroSummary";
import AnimatedLayout from "../../utils/page-transitions/AnimatedLayout";

export default function Hero(): JSX.Element {
  return (
    <>
      <AnimatedLayout>
        <HeroBody />
        <HeroSummary />
      </AnimatedLayout>
    </>
  );
}

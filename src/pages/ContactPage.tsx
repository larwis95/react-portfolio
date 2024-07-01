import AnimatedLayout from "../utils/page-transitions/AnimatedLayout";
import Form from "../components/ContactForm/Form";

export default function ContactPage(): JSX.Element {
  return (
    <AnimatedLayout>
      <div className="mt-24 flex min-h-screen w-full flex-1 flex-wrap items-center justify-center gap-1 overflow-x-hidden p-4">
        <Form />
      </div>
    </AnimatedLayout>
  );
}

import AnimatedLayout from "../../utils/page-transitions/AnimatedLayout";
import Form from "../../components/ContactForm";
import { useEffect } from "react";

export default function ContactPage(): JSX.Element {
  useEffect(() => {
    document.title = "Contact | Lawrence Wisniewski";
  });
  return (
    <AnimatedLayout>
      <div className="mt-24 flex min-h-screen w-full flex-1 flex-wrap items-center justify-center gap-1 overflow-x-hidden p-4">
        <Form />
      </div>
    </AnimatedLayout>
  );
}

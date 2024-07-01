import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useState } from "react";

export default function Form(): JSX.Element {
  const form = useRef() as React.MutableRefObject<HTMLFormElement>;
  const [emailSuccess, setEmailSuccess] = useState<boolean | undefined>(
    undefined,
  );
  const [errorMessage, setErrorMessage] = useState<string>("");
  const nameError = errorMessage.includes("Name");
  const emailError = errorMessage.includes("Email");
  const messageError = errorMessage.includes("Message");

  const validateForm = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!form.current.user_name.value) {
      throw new Error("Name is required");
    }
    if (!form.current.user_email.value) {
      throw new Error("Email is required");
    }
    if (!emailPattern.test(form.current.user_email.value)) {
      throw new Error("Email is invalid");
    }
    if (!form.current.message.value) {
      throw new Error("Message is required");
    }
  };

  const handleEmailUnfocus = (e: React.FocusEvent<HTMLInputElement>): void => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(e.target.value)) {
      setErrorMessage("Email is invalid");
      return;
    }
    setErrorMessage("");
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      validateForm();
      await emailjs.sendForm(
        "portfolio_contact",
        "template_ksu85kb",
        form.current,
        "p4TYc78A-HIpcGYZU",
      );
      form.current.reset();
      setEmailSuccess(true);
    } catch (error: any) {
      setEmailSuccess(false);
      setErrorMessage(error.message as string);
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
    }
  };

  return (
    <div className="flex w-full flex-col items-center justify-center rounded-lg border-2 border-rose-600 bg-slate-700 bg-opacity-50 p-5 md:w-3/4 lg:w-1/2">
      <h1 className="mb-6 text-center text-3xl font-bold">Contact Me</h1>
      <form
        className="relative flex w-full flex-col gap-4 sm:w-full md:w-full lg:w-1/2"
        onSubmit={(e) => {
          sendEmail(e);
        }}
        ref={form}
      >
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="user_name"
          type="text"
          placeholder="John Doe"
          className="rounded-md p-2"
        />
        <p
          className={`text-sm text-red-500 ${nameError ? "opacity-100" : "opacity-0"}`}
          style={{ height: "14px", transition: "opacity 0.5s" }}
        >
          {errorMessage}
        </p>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="user_email"
          type="email"
          placeholder="example@example.com"
          className="rounded-md p-2"
          onBlur={(e) => handleEmailUnfocus(e)}
        />
        <p
          className={`text-sm text-red-500 ${emailError ? "opacity-100" : "opacity-0"}`}
          style={{ height: "14px", transition: "opacity 0.5s" }}
        >
          {errorMessage}
        </p>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your message here..."
          className="rounded-md p-2"
        />
        <p
          className={`text-sm text-red-500 ${messageError ? "opacity-100" : "opacity-0"}`}
          style={{ height: "14px", transition: "opacity 0.5s" }}
        >
          {errorMessage}
        </p>
        <input
          type="submit"
          className={`${emailSuccess ? "pointer-events-none cursor-not-allowed bg-slate-600" : ""} cursor-pointer rounded-md bg-rose-500 p-2 font-bold text-white`}
          value={`${emailSuccess ? "Email Sent" : "Send Email"}`}
        />
      </form>
      {emailSuccess && (
        <p className="text-sm text-green-500">Email sent successfully!</p>
      )}
    </div>
  );
}

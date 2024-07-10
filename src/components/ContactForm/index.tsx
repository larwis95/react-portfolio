import emailjs from "@emailjs/browser";
import { useState, useRef, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Notification from "./Notification";
import Input from "./Input";

export default function Form(): JSX.Element {
  const form = useRef() as React.MutableRefObject<HTMLFormElement>;
  const [emailSuccess, setEmailSuccess] = useState<boolean | undefined>(
    undefined,
  );
  const [validEmail, setValidEmail] = useState<boolean | undefined>(undefined);
  const [validMessage, setValidMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [showNotification, setShowNotification] = useState<boolean>(false);

  useEffect(() => {
    let timeout: number;
    if (errorMessage !== "Email is invalid" || validEmail) {
      timeout = setTimeout(() => {
        setShowNotification(false);
        setValidEmail(undefined);
      }, 2000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [errorMessage, validEmail]);

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

  const handleUnfocus = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    const titleCase = (str: string) => {
      return str.replace(/\b\w/g, (char) => char.toUpperCase());
    };
    if (!e.target.value) {
      setErrorMessage(`${titleCase(e.target.id)} field is required.`);
      setShowNotification(true);
      return;
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(e.target.value)) {
      setShowNotification(true);
      setValidEmail(false);
      setValidMessage("");
      setErrorMessage("Email is invalid");
    } else {
      setValidEmail(true);
      setValidMessage("Email is valid");
      setErrorMessage("");
      setShowNotification(true);
    }
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setErrorMessage("");
      setValidEmail(undefined);
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
      setErrorMessage(error.message);
      setValidEmail(false);
      setShowNotification(true);
      return;
    }
  };

  return (
    <div className="relative flex w-full flex-col items-center justify-center rounded-lg border-2 border-rose-600 bg-slate-700 bg-opacity-50 p-5 md:w-3/4 lg:w-1/2">
      <h1 className="mb-6 text-center text-3xl font-bold">Contact Me</h1>
      <form
        className="flex w-full flex-col items-center justify-center gap-8 sm:w-full md:w-full lg:w-1/2"
        onSubmit={(e) => {
          sendEmail(e);
        }}
        ref={form}
      >
        <Input
          id="name"
          label="Name:"
          type="text"
          name="user_name"
          onBlur={(e) => handleUnfocus(e)}
          placeholder="Your Name"
          emailSuccess={emailSuccess}
        />
        <Input
          id="email"
          label="Email:"
          type="email"
          name="user_email"
          onChange={(e) => handleEmailChange(e)}
          onBlur={(e) => handleUnfocus(e)}
          placeholder="Your Email"
          emailSuccess={emailSuccess}
        />
        <Input
          id="message"
          label="Message:"
          type="textarea"
          name="message"
          onBlur={(e) => handleUnfocus(e)}
          placeholder="Your Message"
          emailSuccess={emailSuccess}
        />
        <input
          type="submit"
          className={`${emailSuccess ? "pointer-events-none cursor-not-allowed bg-slate-600" : ""} cursor-pointer rounded-md border border-white bg-rose-500 p-2 font-bold text-white transition duration-300 ease-in-out hover:scale-105 hover:border-rose-500 hover:bg-black hover:text-rose-500`}
          value={`${emailSuccess ? "Email Sent" : "Send Email"}`}
        />
      </form>
      <div className="absolute bottom-0 right-0 flex h-full items-end justify-center overflow-y-hidden p-1 sm:w-5 lg:w-fit">
        <AnimatePresence>
          {showNotification && (
            <>
              {errorMessage && (
                <Notification message={errorMessage} type="error" />
              )}
              {validEmail && (
                <Notification message={validMessage} type="success" />
              )}
            </>
          )}
        </AnimatePresence>
      </div>

      {emailSuccess && (
        <Notification message="Email sent successfully" type="success" />
      )}
    </div>
  );
}

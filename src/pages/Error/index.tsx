import { useEffect } from "react";
import { Link } from "react-router-dom";

// error page
export default function NotFoundPage() {
  useEffect(() => {
    document.title = "404 - Not Found";
  }, []);
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <h1 className="text-4xl">404</h1>
      <p className="text-xl">
        Oops! Something went wrong, click the link below to go back home!
      </p>
      <Link to="/" className="text-xl text-rose-500 hover:text-white">
        Go back
      </Link>
    </div>
  );
}

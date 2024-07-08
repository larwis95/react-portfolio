import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
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

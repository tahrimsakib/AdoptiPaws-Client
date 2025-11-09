import React from "react";
import { Link } from "react-router";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-black text-gray-800 dark:text-gray-200 px-6 transition-colors duration-300">
      {/* Error Code */}
      <h1 className="text-9xl font-extrabold text-[#ff6d2d] mb-6">404</h1>

      {/* Message */}
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Page Not Found
      </h2>
      <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
        Oops! The page you are looking for does not exist. It might have been
        moved or deleted.
      </p>

      {/* Back Home Button */}
      <Link to={'/'} className="bg-[#ff6d2d] hover:bg-[#e65c1d] text-white dark:text-white font-medium py-3 px-6 rounded-lg transition-colors"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default Error;

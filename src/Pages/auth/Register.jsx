import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-black transition-colors duration-300 py-20">
      <div className="bg-white dark:bg-neutral-900 shadow-xl rounded-2xl p-12 w-full max-w-lg transition-colors duration-300">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#ff6d2d]">
          Register
          <p className="text-xl font-light text-black dark:text-white font2">
            Start your paw-some journey with AdoptiPaws.
          </p>
        </h2>

        {/* Name Input */}
        <div className="mb-6">
          <label className="block text-gray-700 dark:text-gray-200 text-base mb-2">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-3 bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-[#ff6d2d] transition-colors duration-300"
          />
        </div>

        {/* Email Input */}
        <div className="mb-6">
          <label className="block text-gray-700 dark:text-gray-200 text-base mb-2">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-3 bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-[#ff6d2d] transition-colors duration-300"
          />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <label className="block text-gray-700 dark:text-gray-200 text-base mb-2">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-3 bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-[#ff6d2d] transition-colors duration-300"
          />
        </div>

        {/* Photo URL Input */}
        <div className="mb-10">
          <label className="block text-gray-700 dark:text-gray-200 text-base mb-2">
            Photo URL
          </label>
          <input
            type="text"
            placeholder="Enter your photo URL"
            className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-3 bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-[#ff6d2d] transition-colors duration-300"
          />
        </div>

        {/* Register Button */}
        <button className="w-full bg-[#ff6d2d] text-white py-3 rounded-lg hover:bg-[#e65c1d] transition-colors mb-6 text-lg font-medium">
          Register
        </button>

        {/* Google Login Button */}
        <button className="w-full border border-gray-300 dark:border-gray-700 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors mb-8 flex items-center justify-center gap-3">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-6 h-6"
          />
          <span className="text-gray-700 dark:text-gray-200 text-base font-medium">
            Register with Google
          </span>
        </button>

        {/* Login Link */}
        <p className="text-center text-base text-gray-600 dark:text-gray-300 font2">
          Already have an account?{" "}
          <Link
            to={"/auth/login"}
            className="text-[#ff6d2d] hover:underline font-medium font2"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

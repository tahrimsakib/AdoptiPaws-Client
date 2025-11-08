import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6 text-[#ff6d2d]">
          Login
        </h2>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-[#ff6d2d]"
          />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm mb-2">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-[#ff6d2d]"
          />
        </div>

        {/* Login Button */}
        <button className="w-full bg-[#ff6d2d] text-white py-2 rounded-lg hover:bg-[#e65c1d] transition-colors mb-4">
          Login
        </button>

        {/* Google Login Button */}
        <button className="w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition-colors mb-4 flex items-center justify-center gap-2">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Login with Google
        </button>

        {/* Register Link */}
        <p className="text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <a href="/register" className="text-[#ff6d2d] hover:underline">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;

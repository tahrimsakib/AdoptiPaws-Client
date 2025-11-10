import React, { use, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";
import Loading from "../Loading/Loading";

const Login = () => {
  const { signIn, googleLogin } = use(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || "/";

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signIn(email, password)
      .then((res) => {
        toast.success(`Welcome ${res.user.displayName || "back"}!`);
        navigate(from);
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  const handleGoogle = () => {
    googleLogin()
      .then((res) => {
        toast.success(`Welcome ${res.user.displayName}!`);
        navigate(from);
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-black transition-colors duration-300 py-20">
      <div className="bg-white dark:bg-neutral-900 shadow-xl rounded-2xl p-12 w-full max-w-lg transition-colors duration-300">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#ff6d2d]">
          Login Now!
          <p className="text-xl font-light text-black dark:text-white font2">
            Welcome back to AdoptiPaws
          </p>
        </h2>

        <form onSubmit={handleLogin}>
          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-200 text-base mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-3 bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-[#ff6d2d] transition-colors duration-300 font2"
            />
          </div>

          <div className="mb-10">
            <label className="block text-gray-700 dark:text-gray-200 text-base mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-3 bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-[#ff6d2d] transition-colors duration-300 font2"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#ff6d2d] text-white py-3 rounded-lg hover:bg-[#e65c1d] transition-colors mb-6 text-lg font-medium"
          >
            Login
          </button>

          <button
            onClick={handleGoogle}
            type="button"
            className="w-full border border-gray-300 dark:border-gray-700 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors mb-8 flex items-center justify-center gap-3"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-6 h-6"
            />
            <span className="text-gray-700 dark:text-gray-200 text-base font-medium">
              Login with Google
            </span>
          </button>

          <p className="text-center text-base text-gray-600 dark:text-gray-300 font2">
            Don't have an account?{" "}
            <Link
              to={"/auth/register"}
              className="text-[#ff6d2d] hover:underline font-medium font2"
            >
              Register here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

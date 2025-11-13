import React, { use, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";
import Loading from "../Loading/Loading";

const Register = () => {
  const { googleLogin, createUser, updateUser } = use(AuthContext);

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

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;

    const passCheck = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!passCheck.test(password)) {
      toast.error(
        "Password must have 1 uppercase, 1 lowercase, and be at least 6 chars long."
      );
      return;
    }

    createUser(email, password)
      .then(() => {
        return updateUser({ displayName: name, photoURL: photo });
      })
      .then(() => {
        toast.success(`Welcome ${name}!`);
        navigate(from);
      })
      .catch((err) => {
        const errorMessage = err.message;
        toast.error(errorMessage);
        console.log(err);
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
       <div className=" dark:bg-gray-900 shadow-xl rounded-2xl p-12 w-full max-w-lg border border-gray-200 bg-gray-100 dark:border-gray-700 relative overflow-hidden">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-6">
          <span className="bg-linear-to-r from-[#ff8a4c] to-[#ff6d2d] bg-clip-text text-transparent">
            Register
          </span>{" "}
          Now!
          <p className="text-xl font-light text-black dark:text-white font2">
            Start your paw-some journey with AdoptiPaws
          </p>
        </h2>

        <form onSubmit={handleRegister}>
          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-200 text-base mb-2">
              Name
            </label>
            <input
              type="text"
              name="name" required
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-[#ff6d2d] outline-none font2"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-200 text-base mb-2">
              Email
            </label>
            <input
              type="email"
              name="email" required
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-[#ff6d2d] outline-none font2"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-200 text-base mb-2 ">
              Password
            </label>
            <input
              type="password"
              name="password" required
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-[#ff6d2d] outline-none font2"
            />
          </div>

          <div className="mb-10">
            <label className="block text-gray-700 dark:text-gray-200 text-base mb-2">
              Photo URL
            </label>
            <input
              type="url"
              name="photo" required
              placeholder="Enter your photo URL"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-[#ff6d2d] outline-none font2"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#ff6d2d] text-white py-3 rounded-lg hover:bg-[#e65c1d] transition-colors mb-6 text-lg font-medium cursor-pointer"
          >
            Register
          </button>

          <button
            onClick={handleGoogle}
            type="submit"
            className="w-full border border-gray-300 dark:border-gray-700 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors mb-8 flex items-center justify-center gap-3"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-6 h-6"
            />
            <span className="text-gray-700 dark:text-gray-200 text-base font-medium cursor-pointer">
              Register with Google
            </span>
          </button>

          <p className="text-center text-base text-gray-600 dark:text-gray-300 font2">
            Already have an account?{" "}
            <Link
              to={"/auth/login"}
              className="text-[#ff6d2d] hover:underline font-medium font2 cursor-pointer"
            >
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;

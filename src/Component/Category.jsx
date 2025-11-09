import React from "react";
import { Link } from "react-router";

const Category = () => {
  return (
    <div className="py-12 bg-gray-50">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 ">
        Categories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4 ">
        {/* Pets (Adoption) */}
        <Link
          to={"/"}
          className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition hover:border-1 border-[#ff6d2d]"
        >
          <div className="text-5xl mb-3">🐾</div>
          <h3 className="text-xl font-semibold">Pets (Adoption)</h3>
          <p className="font2 mt-9 text-gray-500">
            Find your perfect furry companion and give a loving home to adorable
            pets waiting for adoption.
          </p>
        </Link>

        {/* Pet Food */}
        <Link
          to={"/"}
          className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition transition hover:border-1 border-[#ff6d2d]"
        >
          <div className="text-5xl mb-3">🍖</div>
          <h3 className="text-xl font-semibold">Pet Food</h3>
          <p className="font2 mt-9 text-gray-500">
            Explore a range of nutritious and tasty food options to keep your
            pets healthy and happy.
          </p>
        </Link>

        {/* Accessories */}
        <Link
          to={"/"}
          className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition transition hover:border-1 border-[#ff6d2d]"
        >
          <div className="text-5xl mb-3">🎽</div>
          <h3 className="text-xl font-semibold">Accessories</h3>
          <p className="font2 mt-9 text-gray-500">
            Stylish collars, cozy beds, and fun toys — everything your pet needs
            to look and feel great.
          </p>
        </Link>

        {/* Pet Care Products */}
        <Link
          to={"/"}
          className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition transition hover:border-1 border-[#ff6d2d]"
        >
          <div className="text-5xl mb-3">🧴</div>
          <h3 className="text-xl font-semibold">Pet Care Products</h3>
          <p className="font2 mt-9 text-gray-500">
            Grooming, hygiene, and wellness essentials to keep your pet clean,
            fresh, and comfortable.
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Category;

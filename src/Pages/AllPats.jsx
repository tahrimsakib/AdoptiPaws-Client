import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";

const AllPets = () => {
  const data = useLoaderData();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(data.map((item) => item.category))];

  const filteredData = data.filter((item) => {
    return selectedCategory === "All" || item.category === selectedCategory;
  });

  return (
    <section className="max-w-11/12 mx-auto px-5 py-16 relative">
      {/* Soft background blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-gradient-to-br from-[#ffd1b3]/60 to-[#ff6d2d]/40 blur-3xl rounded-full opacity-70 -z-10"></div>
      <div className="absolute -bottom-24 -right-16 w-72 h-72 bg-gradient-to-tr from-[#ffe0cc]/60 to-[#ff6d2d]/30 blur-3xl rounded-full opacity-60 -z-10"></div>

      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-3">
          <span className="bg-gradient-to-r from-[#ff8a4c] to-[#ff6d2d] bg-clip-text text-transparent">
            Pets
          </span>{" "}
          & Supplies
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium font2">
          Find adorable friends & essential supplies to keep them happy and
          healthy
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-col lg:flex-row justify-center mb-10 gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full font-medium transition-all ${
              selectedCategory === category
                ? "bg-[#ff6d2d] text-white shadow-md"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-700 hover:bg-[#ff6d2d] hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid Layout */}
      {filteredData.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredData.map((item) => (
            <div
              key={item._id}
              className="group bg-white dark:bg-gray-800 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-transparent hover:border-[#ff6d2d]/40 relative"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-50 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  {item.name}
                </h3>
                <p className="text-sl text-gray-500 dark:text-gray-400 font2">
                  {item.category} • {item.location}
                </p>
                <p className="text-lg font-bold text-[#ff6d2d]">
                  ${item.price}
                </p>

                <Link
                  to={`/product/${item._id}`}
                  className="inline-block mt-3 px-5 py-2 bg-gradient-to-r from-[#ff8a4c] to-[#ff6d2d] text-white text-sm rounded-full font-medium hover:shadow-md transition-all"
                >
                  See Details →
                </Link>
              </div>

              {/* Cute paw badge */}
              <div className="absolute top-4 right-4 bg-[#fff3ec] dark:bg-gray-700 text-[#ff6d2d] text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                {item.category}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-400 mt-10">
          No pets or supplies found
        </p>
      )}
    </section>
  );
};

export default AllPets;

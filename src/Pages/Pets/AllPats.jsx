import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import Loading from "../Loading/Loading";

const AllPets = () => {
  const data = useLoaderData();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  const categories = ["All", ...new Set(data.map((item) => item.category))];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  const filteredData = data.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="max-w-7xl mx-auto px-5 py-16 relative">
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-gradient-to-br from-[#ffd1b3]/60 to-[#ff6d2d]/40 blur-3xl rounded-full opacity-70 -z-10"></div>
      <div className="absolute -bottom-24 -right-16 w-72 h-72 bg-gradient-to-tr from-[#ffe0cc]/60 to-[#ff6d2d]/30 blur-3xl rounded-full opacity-60 -z-10"></div>
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

      <div className="flex flex-col lg:flex-row justify-between items-center mb-10 gap-5">
        <div className="flex flex-wrap justify-center lg:justify-start gap-3">
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

        <div className="relative w-3/5 md:w-4/5 lg:w-1/3">
          <input
            type="text"
            placeholder="Search pets or supplies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full py-2.5 px-4 rounded-full border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-[#ff6d2d] outline-none dark:bg-gray-800 dark:text-white"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-4 top-2.5 w-5 h-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
            />
          </svg>
        </div>
      </div>

      {filteredData.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredData.map((item) => (
            <div
              key={item._id}
              className="group bg-white dark:bg-gray-800 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-transparent hover:border-[#ff6d2d] relative"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 font2">
                  {item.category} • {item.location}
                </p>
                <p className="text-lg font-bold text-[#ff6d2d]">
                  ${item.price}
                </p>

                <Link
                  to={`/pets/${item._id}`}
                  className="inline-block mt-3 px-5 py-2 bg-gradient-to-r from-[#ff8a4c] to-[#ff6d2d] text-white text-sm rounded-full font-medium hover:shadow-md transition-all"
                >
                  See Details →
                </Link>
              </div>
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

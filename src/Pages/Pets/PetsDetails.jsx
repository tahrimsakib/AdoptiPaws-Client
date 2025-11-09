import React from "react";
import { useLoaderData } from "react-router";

const PetsDetails = () => {
  const item = useLoaderData();
  console.log(item);
  return (
    <section className="max-w-10/12 mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="relative group">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-[420px] object-cover rounded-3xl shadow-2xl group-hover:scale-[1.02] transition-transform duration-500"
          />
          <div className="absolute -bottom-8 -right-8 w-44 h-44 bg-[#ff8a4c] rounded-full blur-3xl opacity-30"></div>
        </div>

        <div className="space-y-6">
          <div className="inline-block bg-[#fff5ef] dark:bg-gray-700 text-[#ff6d2d] text-sm font-semibold px-4 py-1.5 rounded-full shadow-sm">
            {item.category}
          </div>

          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            {item.name}
          </h1>

          <p className="text-gray-600 dark:text-gray-400 text-sm">
            <span className="text-[#ff6d2d] font-medium">
              {item.ownerEmail}
            </span>
          </p>

          <p className="text-lg leading-relaxed text-gray-500 dark:text-gray-300 font2">
            {item.description ||
              "Every pet deserves love, care, and a cozy home."}
          </p>

          <div className="flex items-center justify-baseline gap-7 text-lg font-semibold text-gray-900 dark:text-white pt-3">
            <p>
              <span className="text-[#ff6d2d]">Price : ${item.price}</span>
            </p>
            <p className="text-gray-800"> {item.location}</p>
          </div>

          <button className="w-full md:w-auto mt-8 px-10 py-3 bg-gradient-to-r from-[#e48c59] to-[#ff6d2d] text-white font-semibold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#ff6d2d]/40">
            Adopt / Order Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default PetsDetails;

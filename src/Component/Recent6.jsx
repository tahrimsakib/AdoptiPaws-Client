import React from "react";
import { Link } from "react-router";

const Recent6 = ({ item }) => {
  // console.log(item);

  return (
    <div>
      <div
        key={item._id}
        className="group bg-white dark:bg-gray-800 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-transparent hover:border-[#ff6d2d] relative h-[450px]"
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-50 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className=" flex flex-col justify-between">
          <div className="p-6 space-y-3">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
              {item.name}
            </h3>
            <p className="text-sl text-gray-500 dark:text-gray-400 font2">
              {item.category} • {item.location}
            </p>
            <p className="text-lg font-bold text-[#ff6d2d]">${item.price}</p>
          </div>

          <Link
            to={`/pets/${item._id}`}
            className="w-fit inline-block mt-3 ml-6 px-5 py-2 bg-gradient-to-r from-[#ff8a4c] to-[#ff611d] text-white text-sm rounded-full font-medium hover:shadow-md transition-all  "
          >
            See Details →
          </Link>
        </div>
        <div className="absolute top-4 right-4 bg-[#fff3ec] dark:bg-gray-700 text-[#ff6d2d] text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
          {item.category}
        </div>
      </div>
    </div>
  );
};

export default Recent6;

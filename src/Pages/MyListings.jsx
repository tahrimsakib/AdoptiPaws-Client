import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";

const MyListings = () => {
  const { user } = useContext(AuthContext);
  const [order, setOrder] = useState([]);

  console.log(user);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/pets?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setOrder(data);
        })
        .catch((err) => console.error(err));
    }
  }, [user?.email]);

  return (
    <div className="max-w-7xl mx-auto px-5 py-16 min-h-screen-minus-380">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-3">
          <span className="bg-linear-to-r from-[#ff8a4c] to-[#ff6d2d] bg-clip-text text-transparent">
            My
          </span>{" "}
          Orders
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium font2">
          Review all your completed and pending orders in one place and stay
          updated on your purchases.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name (category)</th>
              <th>price</th>
              <th>location</th>
            </tr>
          </thead>
          <tbody>
            {order.map((item) => (
              <tr>
                <td>
                  <div className="avatar">
                    <div className="rounded-4xl w-20 lg:max-w-30">
                      <img src={item.image} alt={item.name} />
                    </div>
                  </div>
                </td>

                <td className=" font2">
                  <div className="text-[14px] lg:text-[18px]">{item.name}</div>
                  <div className="text-sm font2 text-gray-500 dark:text-gray-400">
                    ( {item.category} )
                  </div>
                </td>
                <td className="font2 text-[14px] lg:text-[18px] font-semibold">
                  ${item.price}
                </td>
                <td className="font2 text-[14px] lg:text-[18px] font-semibold">
                  {item.location}
                </td>
                <td className="font2 flex flex-col gap-5 items-center">
                  {/* Edit Button */}
                  <button className="w-full py-2 px-4 bg-gradient-to-r from-[#1d8ced] to-[#00f2fe] text-white font-semibold rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                    Edit
                  </button>

                  {/* Delete Button */}
                  <button className="w-full py-2 px-4 bg-gradient-to-r from-[#ea1e1e] to-[#ff6c53] text-white font-semibold rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyListings;

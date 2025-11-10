import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";

const MyOrders = () => {
  const { user } = use(AuthContext);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/orders?email=${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setOrder(data);
        });
    }
  }, [user?.email]);

  return (
    <div className="max-w-7xl mx-auto px-5 py-16">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-3">
          <span className="bg-gradient-to-r from-[#ff8a4c] to-[#ff6d2d] bg-clip-text text-transparent">
            My
          </span>{" "}
          Order
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium font2">
          Track your placed orders, review details, and manage your adoption or
          purchase history easily in one place.
        </p>
      </div>
      <div>Download Report</div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>product_name</th>
              <th>Buyer Name </th>
              <th>Price</th>
              <th>Quantity </th>
              <th>Date </th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {order.map((item) => (
              <tr key={item._id}>
                <th className="font2">{item.product_name}</th>
                <th className="font2 text-left">
                  <div>{item.buyer_name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 font2">
                    {item.address}
                  </div>
                </th>
                <th className="font2">${item.price} </th>
                <th className="font2 flex justify-center"> {item.quantity} </th>
                <th className="font2">{item.date} </th>
                <th className="font2">{item.phone} </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;

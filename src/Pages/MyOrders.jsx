import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/orders?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setOrder(data))
        .catch((err) => console.error(err));
    }
  }, [user?.email]);

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Orders Report", 14, 15);

    const tableColumn = [
      "Product Name",
      "Buyer Name & Address",
      "Price",
      "Quantity",
      "Date",
      "Phone",
    ];

    const tableRows = order.map((item) => [
      item.product_name,
      `${item.buyer_name}\n${item.address}`,
      `$${item.price}`,
      item.quantity,
      item.date,
      item.phone,
    ]);

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 25,
      theme: "grid",
      headStyles: { fillColor: [255, 138, 76] },
      styles: { fontSize: 10, cellPadding: 3 },
    });

    doc.save("orders_report.pdf");
  };

  return (
    <div className="max-w-7xl mx-auto px-5 py-16">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-3">
          <span className="bg-gradient-to-r from-[#ff8a4c] to-[#ff6d2d] bg-clip-text text-transparent">
            My
          </span>{" "}
          Orders
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium font2">
          Track your placed orders and manage your purchase history.
        </p>
      </div>

      {order.length > 0 && (
        <div className="flex justify-end mb-4">
          <button
            type="button"
            onClick={downloadPDF}
            className="bg-gradient-to-r from-[#ff8a4c] to-[#ff6d2d] text-white font-semibold px-4 py-2 rounded-xl shadow-md hover:scale-[1.03] hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            Download Report
          </button>
        </div>
      )}

      {order.length === 0 ? (
        <h2 className="text-center text-3xl font-bold text-gray-700 dark:text-gray-200">
          No Orders Yet
        </h2>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300 dark:border-gray-700">
            <thead>
              <tr className="bg-[#ff8a4c] dark:bg-gray-800">
                <th className="p-3 border font2">Product Name</th>
                <th className="p-3 border font2">Buyer Name & Address</th>
                <th className="p-3 border font2">Price</th>
                <th className="p-3 border font2">Quantity</th>
                <th className="p-3 border font2">Date</th>
                <th className="p-3 border font2">Phone</th>
              </tr>
            </thead>
            <tbody>
              {order.map((item) => (
                <tr key={item._id}>
                  <td className="p-3 border font2">{item.product_name}</td>
                  <td className="p-3 border font2">
                    <div>{item.buyer_name}</div>
                    <div className="text-sm font2 text-gray-500 dark:text-gray-400">
                      {item.address}
                    </div>
                  </td>
                  <td className="p-3 border font2 font-bold">${item.price}</td>
                  <td className="p-3 border font2 text-center">
                    {item.quantity}
                  </td>
                  <td className="p-3 border font2">{item.date}</td>
                  <td className="p-3 border font2">{item.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyOrders;

import React, { use, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import Loading from "../Loading/Loading";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";

const PetsDetails = () => {
  const { user } = use(AuthContext);
  // console.log(user);

  const item = useLoaderData();
  // console.log(item);

  const [isOpen, setIsOpen] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      buyer_name: user.displayName,
      buyer_email: user.email,
      listingid: item._id,
      product_name: item.name,
      category: item.category,
      quantity:
        item.category === "Pets" ? 1 : parseInt(e.target.quantity.value),
      price: item.price,
      address: e.target.address.value,
      date: e.target.date.value,
      phone: e.target.phone.value,
      additional_notes: e.target.notes.value,
    };

    fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Successfully added!");
        console.log(data);
        e.target.reset();
        setIsOpen(false); 
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
            <p className="text-gray-800 dark:text-white"> {item.location}</p>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="w-full md:w-auto mt-8 px-10 py-3 bg-gradient-to-r from-[#e48c59] to-[#ff6d2d] text-white font-semibold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#ff6d2d]/40"
          >
            Adopt / Order Now
          </button>

          {isOpen && (
            <div className="fixed inset-0  bg-black/40 backdrop-blur-md flex items-center justify-center z-50">
              <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="absolute inset-0 bg-black/50"></div>

                <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] p-6 overflow-y-auto z-10">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    ✕
                  </button>

                  <h2 className="text-2xl font-bold mb-6 text-center">
                    Place Your Order
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-gray-700 dark:text-gray-200 text-base mb-2">
                        Buyer Name
                      </label>
                      <input
                        type="text"
                        value={user?.displayName}
                        readOnly
                        name="buyer_name"
                        className="font2 w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 dark:text-gray-200 text-base mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={user?.email}
                        readOnly
                        name="buyer_email"
                        className="font2 w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 dark:text-gray-200 text-base mb-2">
                        Listing ID
                      </label>
                      <input
                        type="text"
                        value={item?._id}
                        readOnly
                        name="listingid"
                        className="font2 w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 dark:text-gray-200 text-base mb-2">
                        Product/Listing Name
                      </label>
                      <input
                        type="text"
                        value={item?.name}
                        readOnly
                        name="product_name"
                        className="font2 w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 dark:text-gray-200 text-base mb-2">
                        Quantity
                      </label>
                      {item?.category === "Pets" ? (
                        <input
                          type="number"
                          value={1}
                          readOnly
                          name="quantity"
                          className="font2 w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800"
                        />
                      ) : (
                        <input
                          type="number"
                          defaultValue={1}
                          min={1}
                          name="quantity"
                          className="font2 w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 dark:bg-gray-800"
                        />
                      )}
                    </div>

                    <div>
                      <label className="block text-gray-700 dark:text-gray-200 text-base mb-2">
                        Price
                      </label>
                      <input
                        type="number"
                        value={item?.price}
                        readOnly
                        name="price"
                        className="font2 w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 dark:text-gray-200 text-base mb-2">
                        Address
                      </label>
                      <input
                        type="text"
                        placeholder="Your Address"
                        required
                        name="address"
                        className="font2 w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 dark:bg-gray-800"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 dark:text-gray-200 text-base mb-2">
                        Pick Up Date
                      </label>
                      <input
                        type="date"
                        required
                        name="date"
                        className="font2 w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 dark:bg-gray-800"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 dark:text-gray-200 text-base mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        placeholder="Phone"
                        required
                        name="phone"
                        className="font2 w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 dark:bg-gray-800"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 dark:text-gray-200 text-base mb-2">
                        Additional Notes
                      </label>
                      <textarea
                        placeholder="Additional notes..."
                        rows={3}
                        name="notes"
                        className="font2 w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 dark:bg-gray-800 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-gradient-to-r from-[#ff8a4c] to-[#ff6d2d] text-white rounded-xl font-semibold hover:scale-[1.02] transition"
                    >
                      Place Order
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PetsDetails;

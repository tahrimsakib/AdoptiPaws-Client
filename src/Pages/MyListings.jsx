import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";
import Loading from "./Loading/Loading";
import { toast } from "react-toastify";

const MyListings = () => {
  const { user } = useContext(AuthContext);
  const [order, setOrder] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [selecteditem, setSelecteditem] = useState(null);

  useEffect(() => {
    if (user?.email) setLoading(true);
    fetch(`https://adopti-paws-server.vercel.app/pets?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrder(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [user?.email]);

  if (loading) {
    return <Loading />;
  }

  // console.log(user);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://adopti-paws-server.vercel.app/pets/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });

            const filterdata = order.filter((data) => data._id !== id);
            setOrder(filterdata);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  const handleOpen = (item) => {
    setSelecteditem(item);
    setIsOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selecteditem) return;

    const formData = {
      name: e.target.name.value,
      category: e.target.category.value,
      price: e.target.price.value,
      location: e.target.location.value,
      description: e.target.description.value,
      image: e.target.image.value,
      email: user.email,
      date: new Date(),
    };

    fetch(`https://adopti-paws-server.vercel.app/pets/${selecteditem._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Listing updated!");
        setOrder((prev) =>
          prev.map((p) =>
            p._id === selecteditem._id ? { ...p, ...formData } : p
          )
        );
        setIsOpen(false);
      })
      .catch(console.error);
  };

  return (
    <div className="max-w-7xl mx-auto px-5 py-16 min-h-[calc(100vh-380px)]">
       <title>AdoptiPaws | My Listing</title>
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-3">
          <span className="bg-linear-to-r from-[#ff8a4c] to-[#ff6d2d] bg-clip-text text-transparent">
            My
          </span>{" "}
          Listing
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium font2">
          Review all your completed and pending orders in one place and stay
          updated on your purchases.
        </p>
      </div>

      {order.length === 0 ? (
        <h2 className="text-center text-3xl font-bold text-gray-700 dark:text-gray-200">
          No Lists Yet
        </h2>
      ) : (
        <div className="overflow-x-auto">
          <table className="table bg-gray-100  dark:bg-gray-900">
            <thead>
              <tr>
                <th></th>
                <th className="font2">Name (Category)</th>
                <th className="font2">Price</th>
                <th className="font2">Location</th>
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
                    <div className="text-[14px] lg:text-[18px]">
                      {item.name}
                    </div>
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
                    <button
                      onClick={() => handleOpen(item)}
                      className="w-full py-2 px-4 bg-linear-to-r from-[#1d8ced] to-[#00f2fe] text-white font-semibold rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(item._id)}
                      className="w-full py-2 px-4 bg-linear-to-r from-[#ea1e1e] to-[#ff6c53] text-white font-semibold rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

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
                Edit Your Listing
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 dark:text-gray-200 text-base mb-2">
                    Product / Pet Name
                  </label>
                  <input
                    type="text"
                    defaultValue={selecteditem?.name}
                    name="name"
                    className="font2 w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-200 text-base mb-2">
                    Category
                  </label>

                  <select
                    defaultValue={selecteditem?.category}
                    name="category"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 font2"
                  >
                    <option value="">Select category</option>
                    <option value="Pets">Pets</option>
                    <option value="Food">Food</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Care Products">Care Products</option>
                  </select>
                </div>

                <div>
                    <label className="block text-gray-700 dark:text-gray-200 text-base mb-2">
                        Price
                      </label>
                      <input
                        type="text"
                        defaultValue={selecteditem?.price}
                        required
                        name="price"
                        placeholder="Enter price"
                        className="font2 w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 dark:bg-gray-800"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 dark:text-gray-200 text-base mb-2">
                        Points
                      </label>
                      <input
                        type="number"
                        defaultValue={99}
                        min={0}
                        placeholder="Enter points"
                        name="points"
                        className="font2 w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 dark:bg-gray-800"
                      />
                </div>

                <div>
                  <label className="block text-gray-700 dark:text-gray-200 text-base mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    defaultValue={selecteditem?.location}
                    name="location"
                    className="font2 w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800"
                  />
                </div>
                <div>
                  <label className=" block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Description
                  </label>
                  <textarea
                    name="description"
                    rows="4"
                    placeholder="Write a short description..."
                    defaultValue={selecteditem?.description}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-[#ff6d2d] outline-none font2 resize-none"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-200 text-base mb-2">
                    Image URL
                  </label>
                  <input
                    type="url"
                    defaultValue={selecteditem?.image}
                    name="image"
                    className="font2 w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-linear-to-r from-[#ff8a4c] to-[#ff6d2d] text-white rounded-xl font-semibold hover:scale-[1.02] transition cursor-pointer"
                >
                  Edit Listing
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyListings;

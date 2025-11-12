import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import Loading from "./Loading/Loading";

const AddListing = () => {
  const { user } = use(AuthContext);

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
      name: e.target.name.value,
      category: e.target.category.value,
      price: e.target.price.value,
      location: e.target.location.value,
      description: e.target.description.value,
      image: e.target.image.value,
      email: user.email,
      date: new Date(),
    };

    fetch("https://adopti-paws-server.vercel.app/pets", {
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
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className="max-w-3xl mx-auto px-5 py-16">
       <title>AdoptiPaws | Add Listing</title>
      <div className=" dark:bg-gray-900 rounded-3xl shadow-xl p-10 border border-gray-100 dark:border-gray-700 relative overflow-hidden">
        <div className="absolute -top-10 -left-10 w-60 h-60 bg-gradient-to-br from-[#ffb08f]/60 to-[#ff6d2d]/30 blur-3xl rounded-full -z-10"></div>
        <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-gradient-to-tr from-[#ffd1b3]/50 to-[#ff6d2d]/30 blur-3xl rounded-full -z-10"></div>

        <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-6">
          <span className="bg-linear-to-r from-[#ff8a4c] to-[#ff6d2d] bg-clip-text text-transparent">
            Add
          </span>{" "}
          New Listing
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className=" block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Product / Pet Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter pet or product name"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-[#ff6d2d] outline-none font2"
            />
          </div>

          <div>
            <label className=" block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Category
            </label>
            <select
              name="category"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-[#ff6d2d] outline-none font2"
            >
              <option value="">Select category</option>
              <option value="Pets">Pets</option>
              <option value="Food">Food</option>
              <option value="Accessories">Accessories</option>
              <option value="Care Products">Care Products</option>
            </select>
          </div>

          <div>
            <label className=" block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Price (use 0 if pet)
            </label>
            <input
              type="number"
              name="price"
              min="0"
              step="any"
              placeholder="Enter price"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-[#ff6d2d] outline-none font2"
            />
          </div>

          <div>
            <label className=" block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Location
            </label>
            <input
              type="text"
              name="location"
              placeholder="Enter location"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-[#ff6d2d] outline-none font2"
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
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-[#ff6d2d] outline-none font2 resize-none"
            ></textarea>
          </div>

          <div>
            <label className=" block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Image URL
            </label>
            <input
              type="url"
              name="image"
              placeholder="https://example.com/image.jpg"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-[#ff6d2d] outline-none font2"
            />
          </div>

          <div>
            <label className=" block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              value={user?.email}
              readOnly
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-300 cursor-not-allowed"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 py-3 text-white font-semibold bg-linear-to-r from-[#ff8a4c] to-[#ff6d2d] rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
          >
            Add Listing
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddListing;

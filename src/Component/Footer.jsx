import React from "react";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";
import MyNavLink from "./Navbar/MyNavlink";

const Footer = () => {
  return (
    <footer className="bg-[#171717] text-gray-200 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0">
          <div className="flex flex-col">
            <div className="flex ">
              <figure>
                <img
                  className="w-8 rounded-[10px]"
                  src="/public/Gemini_Generated_Image_llkghsllkghsdfllkg.jpg"
                  alt=""
                />
              </figure>
              <Link
                to="/"
                className="ml-2 text-3xl font-semibold tracking-tight bg-gradient-to-r from-[#ff8a5b] via-[#ffb37a] to-[#ffd3a3] bg-clip-text text-transparent drop-shadow-[0_1px_3px_rgba(255,138,91,0.35)] hover:drop-shadow-[0_2px_6px_rgba(255,138,91,0.55)] hover:scale-105 transition-all duration-300 ease-out flex items-center gap-1"
              >
                <span className="italic ">Adopti</span>
                <span className="font-bold text-[#ff844a] dark:text-[#ff9c5a]">
                  Paws
                </span>
                <span className="animate-[heartbeat_1.8s_ease-in-out_infinite] text-lg">
                  🐾
                </span>
              </Link>
            </div>
            <p className="text-gray-400 max-w-xs text-[17px] mt-2 font2">
              PawMart connects local pet owners and buyers for adoption and pet
              care products.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-12 mt-6 md:mt-0">
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold mb-2 ">Useful Links</h3>
              <Link>
                <MyNavLink to="/">Home</MyNavLink>
              </Link>
              <Link>
                <MyNavLink to="/pets">Pets & Supplies</MyNavLink>
              </Link>
              <Link>
                <MyNavLink to="/add-listing">Add Listing</MyNavLink>
              </Link>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-semibold mb-2">Follow Us</h3>
              <div className="flex gap-4 mt-1 ">
                <Link
                  className="hover:text-[#ff6d2d]"
                  to={"https://www.facebook.com/"}
                >
                  <FaFacebook size={20} />{" "}
                </Link>
                <Link
                  className="hover:text-[#ff6d2d]"
                  to={"https://x.com/home"}
                >
                  {" "}
                  <FaXTwitter size={20} />{" "}
                </Link>
                <Link
                  className="hover:text-[#ff6d2d]"
                  to={"https://www.pinterest.com/"}
                >
                  {" "}
                  <FaPinterest size={20} />{" "}
                </Link>
                <Link
                  className="hover:text-[#ff6d2d]"
                  to={"https://www.instagram.com/"}
                >
                  {" "}
                  <FaInstagram size={20} />{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-8 border-gray-700" />

        <div className="text-center text-gray-500 dark:text-gray-400 text-[17px] font2 ">
          @ 2025 AdoptiPaws. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import Footer from "../Component/Footer";
import { Outlet } from "react-router";
import Navbar from "../Component/Navbar/Navbar";
import Slider from "../Component/Slider";

const HomeLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Slider />
      <Footer />
    </div>
  );
};

export default HomeLayout;

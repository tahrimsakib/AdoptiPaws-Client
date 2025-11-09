import React from "react";
import Footer from "../Component/Footer";
import { Outlet } from "react-router";
import Navbar from "../Component/Navbar/Navbar";

const HomeLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;

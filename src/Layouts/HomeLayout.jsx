import React from "react";
import Footer from "../Component/Footer";
import { Outlet } from "react-router";
import Navbar from "../Component/Navbar/Navbar";
import ScrollProgress from "../Component/ScrollProgress";

const HomeLayout = () => {
  return (
    <div>
      <Navbar />
       <ScrollProgress />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;

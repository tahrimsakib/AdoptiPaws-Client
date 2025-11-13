import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer";
import ScrollProgress from "../Component/ScrollProgress";

const AuthLayout = () => {
  return (
    <div>
      <Navbar />
      <ScrollProgress />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AuthLayout;

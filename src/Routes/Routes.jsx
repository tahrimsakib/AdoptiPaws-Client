import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import AllPats from "../Pages/AllPats";
import AddListing from "../Pages/AddListing";
import MyListings from "../Pages/MyListings";
import MyOrders from "../Pages/MyOrders";
import Login from "../Pages/auth/Login";
import Register from "../Pages/auth/Register";
import AuthLayout from "../Layouts/AuthLayout";
import Error from "../Pages/error/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/pets-supplies",
        Component: AllPats,
        loader:()=>fetch('http://localhost:3000/listings')
      },
      {
        path: "/add-listing",
        Component: AddListing,
      },
      {
        path: "/my-listings",
        Component: MyListings,
      },
      {
        path: "/my-orders",
        Component: MyOrders,
      },
    ],
  },
  {
    path: "auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
  {
    path: "/*",
    Component: Error,
  },
]);

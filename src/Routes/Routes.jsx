import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import AllPats from "../Pages/AllPats";
import AddListing from "../Pages/AddListing";
import MyListings from "../Pages/MyListings";
import MyOrders from "../Pages/MyOrders";

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
  
]);

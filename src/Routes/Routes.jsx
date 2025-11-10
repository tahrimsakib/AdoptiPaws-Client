import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import AllPats from "../Pages/Pets/AllPats";
import AddListing from "../Pages/AddListing";
import MyListings from "../Pages/MyListings";
import MyOrders from "../Pages/MyOrders";
import Login from "../Pages/auth/Login";
import Register from "../Pages/auth/Register";
import AuthLayout from "../Layouts/AuthLayout";
import Error from "../Pages/error/Error";
import PetsDetails from "../Pages/Pets/PetsDetails";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("http://localhost:3000/latest-pets"),
      },
      {
        path: "/pets",
        Component: AllPats,
        loader: () => fetch("http://localhost:3000/pets"),
      },
      {
        path: "/pets/:id",
        element: (
          <PrivateRoute>
            <PetsDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/pets/${params.id}`),
      },
      {
        path: "/add-listing",
        element: (
          <PrivateRoute>
            <AddListing />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-listings",
        element: (
          <PrivateRoute>
            <MyListings />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-orders",
        element: (
          <PrivateRoute>
            <MyOrders />
          </PrivateRoute>
        ),
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

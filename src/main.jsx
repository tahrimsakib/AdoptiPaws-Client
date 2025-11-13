import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./Routes/Routes.jsx";
import { RouterProvider } from "react-router";
import { Bounce, ToastContainer } from "react-toastify";
import AuthProvider from "./Context/AuthProvider.jsx";
import Cursor from "./Component/Cursor.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
      <Cursor size={24} color="border border-[#ff6d2d]" ring={false} />
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
        transition={Bounce}
      />
    </AuthProvider>
  </StrictMode>
);

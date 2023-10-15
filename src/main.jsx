import * as React from "react";
import * as ReactDOM from "react-dom/client";
import UpdateCoffee from "./Pages/UpdateCoffee";
import AddCoffee from "./Pages/AddCoffee";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home";
import MainLayout from "./Layout/MAinLayout";
import ErrorPage from "./Pages/ErrorPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/updateCoffee",
        element: <UpdateCoffee></UpdateCoffee>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
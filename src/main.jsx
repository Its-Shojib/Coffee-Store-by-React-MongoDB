import * as React from "react";
import * as ReactDOM from "react-dom/client";
import UpdateCoffee from "./Pages/UpdateCoffee";
import AddCoffee from "./Pages/AddCoffee";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home";
import MainLayout from "./Layout/MAinLayout";
import ErrorPage from "./Pages/ErrorPage";
import AuthProvider from "./Provider/AuthProvider";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import PrivateRoute from "./Route/PrivateRoute";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/coffee')
      },
      {
        path: "/addCoffee",
        element: <PrivateRoute><AddCoffee></AddCoffee></PrivateRoute>,
      },
      {
        path: "/updateCoffee/:id",
        element: <PrivateRoute><UpdateCoffee></UpdateCoffee></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
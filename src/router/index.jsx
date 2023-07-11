import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Layout from "../layout/Layout";
import Home from "../pages/home/Home.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        path: "/",
        element: <App />,
      },
      {
        index: true,
        path: "/home",
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

import { createBrowserRouter } from "react-router-dom";
import Error from "../Error/Error";
import AppartmentFullDetail from "../Pages/AppartmentFullDetail";
import About from "../Pages/Home/About/About";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import Root from "../Root/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/appartment/:id",
        element: <AppartmentFullDetail></AppartmentFullDetail>,
        loader: () => fetch("../../../datas.json"),
      },
    ],
  },
]);
export default router;

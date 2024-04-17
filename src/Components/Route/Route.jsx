import { createBrowserRouter } from "react-router-dom";
import Error from "../Error/Error";
import Profile from "../Navbar/Profile/Profile";
import AppartmentFullDetail from "../Pages/AppartmentFullDetail";
import Contact from "../Pages/Contuct/Contact";
import About from "../Pages/Home/About/About";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import PrivateRout from "../PrivateRout/PrivateRout";
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
        element: (
          <PrivateRout>
            <AppartmentFullDetail></AppartmentFullDetail>
          </PrivateRout>
        ),
        loader: () => fetch("../../../datas.json"),
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/profil",
        element: <Profile></Profile>,
      },
    ],
  },
]);
export default router;

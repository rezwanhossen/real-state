// import React from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
// import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { AuthContx } from "../../AuthProvider/AuthProvider";
import SocalLogin from "./SocalLogin";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [error, seterror] = useState("");
  const [showpass, setshowpass] = useState(false);
  const { loginUser } = useAuth();
  const naviget = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    seterror("");
    loginUser(data.email, data.password)
      .then((result) => {
        if (result.user) {
          naviget(from);
        }
      })

      .catch((error) => {
        seterror(error.message);
      });
  };
  return (
    <div data-aos="zoom-in-up" data-aos-delay="200">
      <div className="w-full md:w-2/5 mx-auto border rounded shadow-md bg-gray-100 p-5 space-y-4">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="w-full border rounded px-2 py-3 mb-3"
            type="email"
            placeholder=" Email Address"
            name=""
            id=""
            required
            {...register("email")}
          />
          <br />
          <div className=" relative mb-3">
            <input
              className="w-full border rounded mb-3 px-2 py-3"
              type="password"
              placeholder="password"
              name=""
              id=""
              required
              {...register("password")}
            />
            <span
              className=" absolute top-4 right-4"
              onClick={() => setshowpass(!showpass)}
            >
              {showpass ? <FiEyeOff></FiEyeOff> : <FiEye></FiEye>}
            </span>
          </div>
          <input
            className="w-full border font-bold btn btn-secondary outline rounded mb-3 px-2 py-3"
            type="submit"
            value="Login"
          />
        </form>
        {error && <p className=" text-red-600">{error} </p>}
        <p className="text-center">
          Do not have an Account ?
          <Link className=" font-bold text-indigo-500" to="/register">
            Register
          </Link>
        </p>

        <SocalLogin></SocalLogin>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;

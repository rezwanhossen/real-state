import React from "react";
// import { useContext } from "react";
import { Link } from "react-router-dom";
// import { AuthContx } from "../../AuthProvider/AuthProvider";
import SocalLogin from "./SocalLogin";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const { loginUser } = useAuth();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    loginUser(data.email, data.password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
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
          <input
            className="w-full border rounded mb-3 px-2 py-3"
            type="password"
            placeholder="password"
            name=""
            id=""
            required
            {...register("password")}
          />
          <input
            className="w-full border font-bold btn btn-secondary outline rounded mb-3 px-2 py-3"
            type="submit"
            value="Login"
          />
        </form>
        <p className="text-center">
          Do not have an Account ?
          <Link className=" font-bold text-indigo-500" to="/register">
            Register
          </Link>
        </p>
        <SocalLogin></SocalLogin>
      </div>
    </div>
  );
};

export default Login;

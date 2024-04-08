import React from "react";
import { Link } from "react-router-dom";
import SocalLogin from "./SocalLogin";

const Login = () => {
  return (
    <div>
      <div className="w-full md:w-2/5 mx-auto border rounded shadow-md bg-gray-100 p-5 space-y-4">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form>
          <input
            className="w-full border rounded px-2 py-3 mb-3"
            type="email"
            placeholder=" Email Address"
            name=""
            id=""
          />
          <br />
          <input
            className="w-full border rounded mb-3 px-2 py-3"
            type="password"
            placeholder="password"
            name=""
            id=""
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

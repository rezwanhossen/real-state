import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import useAuth from "../../Hooks/useAuth";
const Register = () => {
  const { creatUser } = useAuth();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    creatUser(data.email, data.password)
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
            type="text"
            placeholder=" Full name"
            name=""
            id=""
            {...register("fullname")}
            required
          />
          <br />
          <input
            className="w-full border rounded px-2 py-3 mb-3"
            type="text"
            placeholder=" Photo url"
            name=""
            id=""
            {...register("img")}
          />
          <br />
          <input
            className="w-full border rounded px-2 py-3 mb-3"
            type="email"
            placeholder=" Email Address"
            name=""
            id=""
            {...register("email")}
            required
          />
          <br />
          <input
            className="w-full border rounded mb-3 px-2 py-3"
            type="password"
            placeholder="password"
            name=""
            id=""
            {...register("password")}
            required
          />
          <input
            className="w-full border font-bold btn btn-secondary outline rounded mb-3 px-2 py-3"
            type="submit"
            value="register"
          />
        </form>
        <p className="text-center">
          Alrady have an Account ?
          <Link className=" font-bold text-indigo-500" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

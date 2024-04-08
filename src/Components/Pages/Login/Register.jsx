import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div>
      <div className="w-full md:w-2/5 mx-auto border rounded shadow-md bg-gray-100 p-5 space-y-4">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form>
          <input
            className="w-full border rounded px-2 py-3 mb-3"
            type="text"
            placeholder=" Full name"
            name=""
            id=""
          />
          <br />
          <input
            className="w-full border rounded px-2 py-3 mb-3"
            type="text"
            placeholder=" Photo url"
            name=""
            id=""
          />
          <br />
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

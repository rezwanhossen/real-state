import { useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
const Editpro = () => {
  const { updateuserprofil } = useAuth();
  const [error, seterror] = useState("");
  const [succ, setsucc] = useState("");
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { fullname, img } = data;
    seterror("");
    setsucc("");
    updateuserprofil(fullname, img).then((result) => {
      setsucc("Save Succesfully !").catch((error) => {
        seterror(error.message);
      });
    });
  };
  return (
    <div>
      <Helmet>
        <title> update proile</title>
      </Helmet>
      <div className=" w-full md:w-2/5 mx-auto border rounded p-4">
        <h2 className=" text-3xl font-bold text-center mb-3">
          Update Profile{" "}
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              className="w-full border rounded px-2 py-3 mb-3"
              type="text"
              placeholder="Change full name"
              name=""
              id=""
              {...register("fullname")}
            />
          </div>
          <div>
            <input
              className="w-full border rounded px-2 py-3 mb-3"
              type="text"
              placeholder="Change photo url"
              name=""
              id=""
              {...register("img")}
            />
          </div>
          <input
            className="w-full border font-bold btn btn-secondary outline rounded mb-3 px-2 py-3"
            type="submit"
            value="Save"
          />
        </form>
        {succ && <p className=" text-green-600">{succ} </p>}
        {error && <p className=" text-red-600">{error} </p>}
      </div>
    </div>
  );
};

export default Editpro;

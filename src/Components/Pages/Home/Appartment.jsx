import { GoStarFill } from "react-icons/go";
import { BiDollar } from "react-icons/bi";
const Appartment = ({ data }) => {
  const { img, apartment_title, rating, quality, price, id, status, location } =
    data;
  return (
    <div className=" p-3 border shadow rounded-md">
      <div>
        <img className="w-full h-[250px] rounded" src={img} alt="" />
      </div>
      <p className=" -mt-10 text-white flex text-2xl items-center justify-end">
        {price} <BiDollar></BiDollar>{" "}
      </p>
      <div className=" mt-6 flex justify-between">
        <p className=" font-bold">Quality: {quality}</p>
        <p className=" font-bold">Status: {status}</p>
        <p className=" font-bold flex items-center">
          {rating} <GoStarFill />
        </p>
      </div>
      <h2>{apartment_title}</h2>
    </div>
  );
};

export default Appartment;

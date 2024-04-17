import { GoStarFill } from "react-icons/go";
import { BiDollar } from "react-icons/bi";
import { Link } from "react-router-dom";
const Appartment = ({ data }) => {
  const {
    img,
    apartment_title,
    rating,
    quality,
    price,
    id,
    status,
    description,
  } = data;
  return (
    <div
      data-aos="zoom-in-down"
      data-aos-duration="1000"
      data-aos-delay="700"
      className=" card p-3 border shadow flex flex-col  rounded-md"
    >
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
      <h2 className=" text-2xl font-semibold my-2">{apartment_title}</h2>
      {description.length > 90 ? (
        <p>{description.slice(0, 90)}..... </p>
      ) : (
        <p>{description} </p>
      )}

      <div className="flex-grow ">
        <Link
          to={`/appartment/${id}`}
          className=" btn btn-outline btn-secondary w-full my-3"
        >
          View Detail
        </Link>
      </div>
    </div>
  );
};

export default Appartment;

import { useLoaderData, useParams } from "react-router-dom";
import { GoStarFill } from "react-icons/go";
import { BiDollar } from "react-icons/bi";
const AppartmentFullDetail = () => {
  const datas = useLoaderData();
  const { id } = useParams();
  const idint = parseFloat(id);
  //   console.log(idint);
  const data = datas.find((data) => data.id === idint);
  //   console.log(data);
  const {
    img,
    apartment_title,
    rating,
    quality,
    price,
    status,
    description,
    apartment_name,
    area,
    location,
    facilities,
    blog1_img,
    blog1_cont,
    blog2_img,
    blog2_cont,
  } = data;
  return (
    <div>
      <div className=" space-y-2">
        <img className=" h-[80vh] w-full" src={img} alt="" />
        <div className=" flex justify-between text-xl font-semibold border rounded p-2 my-2">
          <p>Quality : {quality} </p>
          <p>Status : {status} </p>
          <p className=" flex gap-1 items-center">
            Rating : {rating} <GoStarFill />
          </p>
        </div>
        <h1 className="text-5xl font-bold text-slate-400">{apartment_name} </h1>
        <h2 className="text-2xl font-semibold text-slate-800">
          {apartment_title}{" "}
        </h2>
        <hr />
        <p className=" pb-3">{description} </p>
        <hr />
        <div className=" flex justify-between text-xl font-sans p-2">
          <p>Location :{location} </p>
          <p>Apartment Area : {area}</p>
          <p className=" flex gap-2 text-emerald-600 items-center">
            price : {price} <BiDollar></BiDollar>
          </p>
        </div>
        <h3 className="text-3xl font-bold border-b-2">Facilities</h3>

        {facilities.map((itm) => (
          <li className=" font-semibold">{itm} </li>
        ))}

        <div className=" grid grid-cols-1 md:grid-cols-2">
          <div>
            <img src={blog1_img} alt="" />
          </div>
          <div className=" border p-4 flex items-center">
            <p>{blog1_cont} </p>
          </div>
          <div className=" border p-4 flex items-center">
            <p>{blog2_cont} </p>
          </div>
          <div>
            <img src={blog2_img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppartmentFullDetail;

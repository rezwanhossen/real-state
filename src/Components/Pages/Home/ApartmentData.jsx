import { useEffect, useState } from "react";
import Appartment from "./Appartment";

const ApartmentData = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("datas.json")
      .then((rsc) => rsc.json())
      .then((data) => setDatas(data));
  }, []);

  return (
    <div className=" mt-10">
      <h1
        data-aos="fade-right"
        data-aos-delay="500"
        className="text-4xl font-bold text-center "
      >
        Available Apartments
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-10">
        {datas.map((data) => (
          <Appartment key={data.id} data={data}></Appartment>
        ))}
      </div>
    </div>
  );
};

export default ApartmentData;

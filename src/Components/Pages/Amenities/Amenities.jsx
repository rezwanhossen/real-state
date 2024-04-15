import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { GoStarFill } from "react-icons/go";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { useEffect } from "react";

const Amenities = () => {
  const [datas, setdata] = useState([]);
  useEffect(() => {
    fetch("amenitie.json")
      .then((res) => res.json())
      .then((data) => setdata(data));
  }, []);
  return (
    <div>
      <div className=" text-center space-y-2 mt-5">
        <h2 className="text-5xl text-stone-700 font-bold">Amenities</h2>
        <p>
          Our residential system offers many amenities that help make your life
          easier and more fulfilling. <br /> Following are our key benefits and
          their detailed description.
        </p>
      </div>
      <section className=" mt-10">
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, FreeMode, Pagination]}
          className="mySwiper h-[100vh] w-[100%]"
        >
          {datas.map((data, inx) => (
            <SwiperSlide key={inx} className=" bg-slate-300 border rounded-md">
              <div className=" space-y-3 px-3 py-4 ">
                <img
                  className="w-full h-[240px] lg:h-[350px]"
                  src={data.img}
                  alt=""
                />
                <p className=" font-semibold flex items-center justify-end">
                  Rating: {data.rating} <GoStarFill></GoStarFill>
                </p>
                <hr />
                <h1 className="text-2xl font-semibold">{data.name}</h1>

                <p>{data.des} </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Amenities;

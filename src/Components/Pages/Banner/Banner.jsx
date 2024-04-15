// import React from 'react';
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full h-[80vh]"
      >
        <SwiperSlide className=" bg-[url('https://i.ibb.co/6BYrM1K/pexels-liene-ratniece-1329510.jpg')] bg-cover bg-center flex justify-center items-center">
          <div className="flex items-center h-full justigfy-center ">
            <div className=" w-3/5 mx-auto text-white text-center">
              <h1 className="  text-3xl lg:text-5xl font-bold">
                Welcome our <br /> City
                <span className=" text-rose-600">Dwellers</span>
              </h1>
              <p>
                Welcome to CityDwellers. On our platform you can get all the
                information and details related to your dream residential life.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" bg-[url('https://i.ibb.co/VqC23Yp/pexels-min-an-1042594.jpg')] bg-cover bg-center flex justify-center items-center">
          <div className="flex items-center h-full justify-center ">
            <div className=" w-3/5 mx-auto text-white text-center">
              <h1 className="text-3xl lg:text-5xl font-bold">
                Your dream residence
              </h1>
              <p>
                On our platform you can easily find the ideal apartment for your
                dream residential life. You can view information about
                apartments available in your preferred area, which will match
                your living comfort and dream life.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" bg-[url('https://i.ibb.co/qYZqM8V/pexels-pixabay-258181.jpg')] bg-cover bg-center flex justify-center items-center">
          <div className="flex items-center h-full justify-center ">
            <div className=" w-3/5 mx-auto text-white text-center">
              <h1 className=" text-3xl lg:text-5xl font-bold">
                Our service team is always there for you
              </h1>
              <p>
                Our service team is always ready to find the apartment of your
                convenience for you. We will provide you with the right support
                so that you can lead a happy and fulfilling life. For more
                information visit our website for your convenience. Thank you!
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;

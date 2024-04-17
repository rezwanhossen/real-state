import React from "react";

const NaverhoodGide = () => {
  return (
    <div className="mt-14">
      <div className=" text-center space-y-3">
        <h1 data-aos="flip-left" className="text-3xl md:text-5xl font-bold">
          Neighborhood Guide
        </h1>
        <p data-aos="zoom-in">
          here are many interesting places around the location on the edge of{" "}
          our residential project. There are public schools, <br /> circular
          parks and various restaurants and shopping centers with specialty
          facilities.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <img
              className=" w-full h-[200px]"
              src="https://i.ibb.co/1TqXYn4/pexels-norma-mortenson-8456132.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className=" w-full h-[200px]"
              src="https://i.ibb.co/KwSJ7Yf/pexels-quang-nguyen-vinh-2161836.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className=" w-full h-[200px]"
              src="https://i.ibb.co/drQByzF/pexels-chan-walrus-941861.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className=" w-full h-[200px]"
              src="https://i.ibb.co/PFh2RYW/pexels-pixabay-54581.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="px-5 space-y-4">
          <li data-aos="zoom-in-right" data-aos-delay="100">
            <b> Schools :</b>The schools are popular educational institutions in
            the suburbs that provide students with the best learning
            institutions. All of them are run by excellent teachers and offer
            various educational facilities.
          </li>
          <li data-aos="zoom-in-right" data-aos-delay="200">
            <b>Parks : </b> The parks offer beautiful natural expanses of land,
            play areas, walking paths, and a hearty peaceful atmosphere.
          </li>
          <li data-aos="zoom-in-right" data-aos-delay="300">
            <b>Restaurants/shopping centers : </b> Restaurants and shopping
            centers offer opportunities to enjoy a variety of dining and retail
            options on the edge, and they are generally located in expansive and
            interesting locations.
          </li>
        </div>
      </div>
    </div>
  );
};

export default NaverhoodGide;

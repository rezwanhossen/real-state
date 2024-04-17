import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BiSolidLike } from "react-icons/bi";
import { IoMdShareAlt } from "react-icons/io";

import { FaCommentAlt } from "react-icons/fa";
const Blog = () => {
  const [blogs, setblogs] = useState([]);
  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setblogs(data));
  }, []);
  return (
    <div className=" mt-10 space-y-3">
      <div className=" text-center my-9 ">
        <h1
          className="text-3xl lg:text-5xl font-bold mb-3"
          data-aos="zoom-out-left"
          data-aos-delay="200"
        >
          Blogs
        </h1>
        <p data-aos="zoom-out-rigit" data-aos-delay="200">
          Certainly! Here's a curated list of articles and blog posts covering
          residential living, apartment hunting tips, <br /> home decor ideas,
          and real estate market updates.
        </p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
        {blogs.map((blog) => (
          <div
            className=" border rounded hover:shadow-lg p-2 md:hover:scale-105"
            key={blog.id}
          >
            <img className=" h-[250px] w-full" src={blog.photo} alt="" />
            <div className=" flex justify-between items-center my-2">
              <p className=" flex items-center gap-1">
                <BiSolidLike></BiSolidLike> {blog.like}
              </p>
              <p className=" flex items-center gap-1">
                <FaCommentAlt></FaCommentAlt> comments {blog.comment}
              </p>
              <p className=" flex items-center gap-1">
                <IoMdShareAlt></IoMdShareAlt> {blog.sher} shear
              </p>
            </div>
            <h1 className="text-3xl font-semibold">{blog.topic} </h1>
            <p>{blog.description} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

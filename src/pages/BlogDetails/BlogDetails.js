import React from "react";
import { useLoaderData } from "react-router-dom";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { FcCalendar } from "react-icons/fc";
import { AiFillFolderOpen } from "react-icons/ai";

const BlogDetails = () => {
  const { title, picture, date, category, description, authorName } =
    useLoaderData();

  return (
    <div className="w-[95%] lg:w-[80%] mx-auto py-4">
      <div>
        <div>
          {/* Blog Details */}
          <div className="bg-white pb-6">
            {/* Image */}
            <img src={picture} alt="" className="w-full h-[450px]" />
            {/* Others Info */}
            <div className="px-2 lg:px-0 text-sm lg:flex items-center justify-center gap-6 text-[#6c6565] lg:text-md py-6 font-medium">
              <p className="flex items-center gap-1">
                <AiFillFolderOpen className="text-red-600" />
                {category}
              </p>
              <p className="flex items-center gap-1">
                <FcCalendar className="text-red-600" />
                {date}
              </p>
              <p className="flex items-center gap-1">
                <HiOutlinePencilAlt className="text-red-600" />
                {authorName}
              </p>
            </div>
            <div className="px-2 lg:px-10">
              <h2 className="font-semibold text-4xl mb-3">{title}</h2>
              <div>{description}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;

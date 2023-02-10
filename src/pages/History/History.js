import React from "react";
import { useSelector } from "react-redux";
import Blog from "../Home/Blogs/Blog/Blog";

const History = () => {
  const histories = useSelector((state) => state.blogs.histories);
  console.log(histories);

  return (
    <div className="w-[95%] lg:w-[80%] mx-auto py-5">
      <div className="text-center">
        <span className="font-bold text-2xl text-primary border-primary border-b">
          Your History {histories.length}
        </span>
      </div>
      {histories.map((blog) => (
        <Blog key={blog._id} blog={blog}></Blog>
      ))}
    </div>
  );
};

export default History;

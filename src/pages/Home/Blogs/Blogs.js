import React from "react";
import Blog from "./Blog/Blog";

const Blogs = ({ blogs }) => {
  return (
    <div className="bg-white p-5 pt-0">
      {blogs.length
        ? blogs.map((blog) => <Blog key={blog._id} blog={blog} />)
        : "No Blog"}
    </div>
  );
};

export default Blogs;

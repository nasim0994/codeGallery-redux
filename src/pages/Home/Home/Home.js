import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Categorys from "../../../components/Categorys/Categorys";
import fetchBlogData from "../../../redux/thunk/blogs/fetchBlogs";
import Blogs from "./../Blogs/Blogs";

const Home = () => {
  const dispatch = useDispatch();
  let blogs = useSelector((state) => state.blogs.blogs);
  const category = useSelector((state) => state.filter.category);
  // console.log(blogs);

  useEffect(() => {
    dispatch(fetchBlogData());
  }, [dispatch]);

  if (blogs.length && category) {
    blogs = blogs.filter(
      (blog) => category.toLowerCase() === blog.category.toLowerCase()
    );
  }

  return (
    <div className="w-[95%] lg:w-[80%] mx-auto">
      <section className="flex gap-4 my-4">
        <div className="lg:w-[20%] hidden lg:block sticky top-20 self-start">
          <Categorys />
        </div>
        <div className="lg:w-[80%]">
          <div>
            <Blogs blogs={blogs} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

import React from "react";
import { Link } from "react-router-dom";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { FcCalendar } from "react-icons/fc";
import { AiFillFolderOpen } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToHistory } from "../../../../redux/actions/blogAction";

const Blog = ({ blog }) => {
  const { _id, title, description, picture, authorName, date, category } = blog;
  const dispatch = useDispatch();

  return (
    <div className="lg:flex gap-2 border-b py-6">
      <div className="lg:w-[35%]">
        <Link to={`blogs/${_id}`}>
          <img src={picture} alt="" className="h-full" />
        </Link>
      </div>
      <div className="lg:w-[65%]">
        <Link to={`blogs/${_id}`}>
          <h3 className="text-3xl font-semibold text-[#3c3434]">{title}</h3>
        </Link>
        <div className="flex items-center gap-6 text-[#6c6565] text-sm py-2">
          <p className="flex items-center gap-1">
            <HiOutlinePencilAlt />
            {authorName}
          </p>
          <p className="flex items-center gap-1">
            <FcCalendar />
            {date}
          </p>
          <p className="flex items-center gap-1">
            <AiFillFolderOpen />
            {category}
          </p>
        </div>
        <p className="text-[#504d4d] text-[16px]">
          {description.slice(0, 200)}...
        </p>

        <Link
          onClick={() => dispatch(addToHistory(blog))}
          to={`blogs/${_id}`}
          className="text-violet-700 font-medium underline"
        >
          read more
        </Link>
      </div>
    </div>
  );
};

export default Blog;

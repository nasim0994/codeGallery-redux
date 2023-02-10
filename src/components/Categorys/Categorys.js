import React from "react";
import { DiJavascript, DiHtml5, DiCss3 } from "react-icons/di";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByCategory,
  removeFilter,
} from "./../../redux/actions/filterAction";

const Categorys = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.filter.category);

  return (
    <ul className="menu bg-base-100 p-2">
      <h2 className="font-semibold text-xl py-2">Categorys</h2>
      <li className="lg:text-lg font-semibold text-orange-600 shadow-sm mb-1 bg-gray-100 rounded-md ">
        <Link
          onClick={() => dispatch(filterByCategory("HTML"))}
          className={category.toLowerCase() === "html" && "activeCategory"}
        >
          <DiHtml5 className="text-2xl" />
          HTML
        </Link>
      </li>
      <li className="lg:text-lg font-semibold text-blue-700 shadow-sm mb-1 bg-gray-100 rounded-md">
        <Link
          onClick={() => dispatch(filterByCategory("CSS"))}
          className={category.toLowerCase() === "css" && "activeCategory"}
        >
          <DiCss3 className=" text-2xl" />
          CSS
        </Link>
      </li>
      <li className="lg:text-lg font-semibold text-violet-700 shadow-sm mb-1 bg-gray-100 rounded-md">
        <Link
          onClick={() => dispatch(filterByCategory("Bootstrap"))}
          className={category.toLowerCase() === "bootstrap" && "activeCategory"}
        >
          {" "}
          <DiJavascript className=" text-2xl" />
          Bootstrap
        </Link>
      </li>
      <li className="lg:text-lg font-semibold text-yellow-500 shadow-sm mb-1 bg-gray-100 rounded-md">
        <Link
          onClick={() => dispatch(filterByCategory("JavaScript"))}
          className={
            category.toLowerCase() === "javascript" && "activeCategory"
          }
        >
          <DiJavascript className=" text-2xl" />
          JavaScript
        </Link>
      </li>
      <li className="lg:text-lg font-semibold text-cyan-500 shadow-sm mb-1 bg-gray-100 rounded-md">
        <Link
          onClick={() => dispatch(filterByCategory("React"))}
          className={category.toLowerCase() === "react" && "activeCategory"}
        >
          <DiJavascript className=" text-2xl" />
          React
        </Link>
      </li>
      <li className="lg:text-lg font-semibold text-teal-600 shadow-sm mb-1 bg-gray-100 rounded-md ">
        <Link
          onClick={() => dispatch(removeFilter())}
          className={category.toLowerCase() === "" && "activeCategory"}
        >
          <DiJavascript />
          All Blogs
        </Link>
      </li>
    </ul>
  );
};

export default Categorys;

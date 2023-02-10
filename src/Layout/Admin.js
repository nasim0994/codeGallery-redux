import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaAlignLeft } from "react-icons/fa";
import Header from "../components/Header/Header";

const Admin = () => {
  return (
    <div>
      <Header></Header>

      <div className="drawer drawer-mobile gap-4 py-5 w-[95%] lg:w-[80%] mx-auto ">
        <input id="dasboard-drawer" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content bg-white rounde-md">
          <div className="bg-base-300">
            <label htmlFor="dasboard-drawer" className="lg:hidden btn">
              <div className="flex items-center text-white">
                <p className=" text-white text-2xl">
                  <FaAlignLeft />
                </p>
              </div>
            </label>
          </div>

          <div className="rounded-md md:px-4">
            <Outlet></Outlet>
          </div>
        </div>

        <div className="drawer-side bg-white rounded-md mt-12 lg:mt-0">
          <label htmlFor="dasboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80  text-base-content">
            <li className="bg-gray-300 font-semibold rounded-md mb-2">
              <Link to="/admin/adminDashboard">Dashboard</Link>
            </li>
            <li className="bg-gray-300 font-semibold rounded-md mb-2">
              <Link to="/admin/addBlog">Add Blog</Link>
            </li>
            <li className="bg-gray-300 font-semibold rounded-md mb-2">
              <Link to="/admin/allblog">All Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Admin;

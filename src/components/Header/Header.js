import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white sticky z-20 top-0">
      <div className="w-[80%] mx-auto navbar  ">
        <div className="navbar-start gap-2">
          <Link
            to="/"
            className="flex items-center gap-1 text-violet-600 hover:text-violet-700"
          >
            <h2 className="text-2xl font-bold ">CodeGallery</h2>
          </Link>
        </div>

        <div className="navbar-end gap-4 items-center">
          <div>
            <ul className="flex gap-8 font-semibold uppercase">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/history">History</Link>
              </li>
              <li>
                <Link to="/admin/adminDashboard">Admin Dashboard</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

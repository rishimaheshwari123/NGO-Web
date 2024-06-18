import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaHome, FaTimes } from "react-icons/fa";
import { MdAddBox, MdLogout, MdWidgets } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { setToken, setUser } from "../../../redux/authSlice";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const handleLogout = async () => {
    localStorage.removeItem("token");
    dispatch(setToken(null));
    dispatch(setUser(null));
  };

  let pageTitle;
  switch (location.pathname) {
    case "/admin/dashboard":
      pageTitle = "Admin / Dashboard";
      break;
    case "/admin/addEvent":
      pageTitle = "Admin / Add Event";
      break;
    case "/admin/getEvents":
      pageTitle = "Admin / Get Event";
      break;
    case "/admin/createCulture":
      pageTitle = "Admin / Create Culture";
      break;
    default:
      pageTitle = "Home";
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-black p-4 rounded-b-lg">
        <div className="container mx-auto flex justify-between items-center">
          {/* Menu icon for mobile devices */}
          <div className="text-white text-xl md:hidden">
            <button onClick={toggleSidebar}>
              {isSidebarOpen ? (
                <FaTimes className="text-white text-2xl" />
              ) : (
                <FaBars className="text-white text-2xl" />
              )}
            </button>
          </div>
          {/* Home/Dashboard text for larger devices */}
          <div className="text-white text-xl hidden md:block">{pageTitle}</div>
          <div className=" w-[50px] h-[50px] lg:w-16 lg:h-16 ">
            <img
              src="https://i.ibb.co/W0v3fWm/Team-LOGO-page-0001.jpg"
              alt=""
              className=" object-cover rounded-full"
            />
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10"
          onClick={closeSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 w-[60%] left-0 h-full bg-black text-white p-4 transition-transform  duration-700 transform z-20 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-between items-center mb-8 -mt-2 gap-5">
          <h2 className="text-lg font-bold">Logo</h2>
          <button onClick={closeSidebar} className="text-white md:hidden">
            <FaTimes className="text-2xl" />
          </button>
        </div>
        <ul className="text-sm flex flex-col gap-4">
          <li className="mb-2 flex gap-4 items-center">
            <FaHome size={22} />
            <Link
              to="/admin/dashboard"
              onClick={closeSidebar}
              className="text-xl mt-[3px]"
            >
              Dashboard
            </Link>
          </li>
          <li className="mb-2 flex gap-4 items-center">
            <MdAddBox size={22} />
            <Link
              to="/admin/addEvent"
              onClick={closeSidebar}
              className="text-xl mt-[3px]"
            >
              Add Event
            </Link>
          </li>
          <li className="mb-2 flex gap-4 items-center">
            <MdWidgets size={22} />
            <Link
              to="/admin/getEvents"
              onClick={closeSidebar}
              className="text-xl mt-[3px]"
            >
              Get Events
            </Link>
          </li>
          <li className="mb-2 flex gap-4 items-center">
            <MdWidgets size={22} />
            <Link
              to="/admin/createCulture"
              onClick={closeSidebar}
              className="text-xl mt-[3px]"
            >
              Create Culture
            </Link>
          </li>
          <li className="mb-2 flex gap-4 items-center">
            <MdWidgets size={22} />
            <Link
              to="/admin/getCulture"
              onClick={closeSidebar}
              className="text-xl mt-[3px]"
            >
              Get Culture
            </Link>
          </li>
          <li className="mb-2 flex gap-4 items-center">
            <MdAddBox size={22} />
            <Link
              to="/admin/createOrganizationData"
              onClick={closeSidebar}
              className="text-xl mt-[3px]"
            >
              Create Organization Data
            </Link>
          </li>
          <li className="mb-2 flex gap-4 items-center">
            <MdAddBox size={22} />
            <Link
              to="/admin/getOrganizationData"
              onClick={closeSidebar}
              className="text-xl mt-[3px]"
            >
              Get Organization Data
            </Link>
          </li>
          <li className="mb-2 flex gap-4 items-center" onClick={handleLogout}>
            <MdLogout /> Logout
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;

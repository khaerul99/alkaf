import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isShowNavbar, setIsShowNavbar] = useState(false);

  const ToggleMenu = () => {
    setIsShowNavbar(!isShowNavbar);
  };

  return (
    <section className="fixed w-full max-w-7xl z-[999]">
    <div className="flex justify-between px-[20px] py-2 md:px-[80px] bg-black">
      <ListMenu show={isShowNavbar} close />
      <div className="flex items-center gap-1">
        <div className="h-[50px] w-[50px] rounded-full overflow-hidden">
          <img
            src="/assets/logo/alkaf.png"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      {/* menu */}
      <div className=" hidden md:flex items-center gap-2 ">
        <Link to={"/"} className="px-4 py-2 text-white hover:bg-white hover:text-black transition-all duration-200 ">
          Home
        </Link>
        <Link
          to={"/catalog"}
          className="px-4 py-2 text-white hover:bg-white hover:text-black transition-all duration-200 "
        >
          Catalog
        </Link>
        <Link
          to={"/aboutus"}
          className="px-4 py-2 text-white hover:bg-white hover:text-black transition-all duration-200 "
        >
          About Us
        </Link>
        <Link
          to={"/contactus"}
          className="px-4 py-2 text-white hover:bg-white hover:text-black transition-all duration-200 "
        >
          Contact Us
        </Link>
      </div>
      <div onClick={ToggleMenu} className="flex items-center md:hidden">
        {isShowNavbar ? (
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          </button>
        ) : (
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
    </section>
  );
}

const ListMenu = ({ show }) => {
  return (
    <div
      className={`fixed z-[999] h-screen w-full top-16 right-[-700px] md:hidden bg-gray-500 bg-opacity-20 backdrop-blur-sm transition-all duration-300 ${
        show ? "right-[0px]" : "right-[-700px]"
      }`}
    >
      <div className="h-full flex justify-end">
        <div className="w-6/12 h-full bg-white flex flex-col gap-5 text-center p-5">
          <Link to={"/"} className="px-4 py-2 bg-white hover:bg-gray-200 ">
            Home
          </Link>
          <Link
            to={"/catalog"}
            className="px-4 py-2 bg-white hover:bg-gray-200 "
          >
            Catalog
          </Link>
          <Link
            to={"/aboutus"}
            className="px-4 py-2 bg-white hover:bg-gray-200 "
          >
            About Us
          </Link>
          <Link
            to={"/contactus"}
            className="px-4 py-2 bg-white hover:bg-gray-200 "
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

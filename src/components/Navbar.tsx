import { useState } from "react";
import { FaFacebook, FaInstagram, FaYelp } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { getImageUrl } from "../helpers/strings";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavigation = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex w-full justify-between bg-pale-yellow">
      <NavLink to="/">
        <div className="h-logo w-logo ml-4 pt-4">
          <img
            src={getImageUrl("logo_black.png")}
            alt="Black Vaca Caliente logo"
          />
        </div>
      </NavLink>
      <div className="mr-5 pt-5" onClick={toggleNavigation}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-8 w-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      {isOpen && (
        <div className="absolute right-0 z-50 w-full bg-orange">
          <div className="flex w-screen justify-between">
            <NavLink to="/">
              <div className="ml-4 h-[120px] w-[120px] pt-4">
                <img
                  src={getImageUrl("logo_white.png")}
                  alt="White Vaca Caliente logo"
                />
              </div>
            </NavLink>
            <div className="mr-5 pt-5" onClick={toggleNavigation}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center pb-4">
            <NavLink
              to="/"
              className="text-3xl text-pale-yellow transition-transform hover:scale-110 hover:text-almost-white-variant"
            >
              Home
            </NavLink>
            <NavLink
              to="/booking"
              className="pt-4 text-3xl text-pale-yellow transition-transform hover:scale-110 hover:text-almost-white-variant"
            >
              Book a Table
            </NavLink>
            <NavLink
              to="/contact"
              className="pt-4 text-3xl text-pale-yellow transition-transform hover:scale-110 hover:text-almost-white-variant"
            >
              Contact
            </NavLink>
            <NavLink
              to="/menu"
              className="pt-4 text-3xl text-pale-yellow transition-transform hover:scale-110 hover:text-almost-white-variant"
            >
              Menu
            </NavLink>
            <NavLink
              to="/admin"
              className="pt-4 text-3xl text-pale-yellow transition-transform hover:scale-110 hover:text-almost-white-variant"
            >
              Admin
            </NavLink>
            <div className="flex pt-4">
              <FaInstagram className="m-2 h-5 w-5 cursor-pointer text-pale-yellow transition-all ease-in-out hover:scale-110 hover:text-almost-white-variant" />
              <FaFacebook className="hover: m-2 h-5 w-5 cursor-pointer text-pale-yellow transition-all ease-in-out hover:scale-110 hover:text-almost-white-variant" />
              <FaYelp className="hover: m-2 h-5 w-5 cursor-pointer text-pale-yellow transition-all ease-in-out hover:scale-110 hover:text-almost-white-variant" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

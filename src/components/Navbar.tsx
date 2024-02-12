import { useState } from "react";
import { getImageUrl } from "../helpers/strings";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavigation = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" flex w-screen justify-between bg-pale-yellow">
      <Link to="/">
        <div className="ml-4 h-[120px] w-[120px] pt-4">
          <img
            src={getImageUrl("logo_black.png")}
            alt="Black Vaca Caliente logo"
          />
        </div>
      </Link>
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
            <Link to="/">
              <div className="ml-4 h-[120px] w-[120px] pt-4">
                <img
                  src={getImageUrl("logo_white.png")}
                  alt="White Vaca Caliente logo"
                />
              </div>
            </Link>
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
            <Link to="/" className="text-3xl text-pale-yellow">
              Home
            </Link>
            <Link to="/booking" className="pt-4 text-3xl text-pale-yellow">
              Book a Table
            </Link>
            <Link to="/contact" className="pt-4 text-3xl text-pale-yellow">
              Contact
            </Link>
            <Link to="/menu" className="pt-4 text-3xl text-pale-yellow">
              Menu
            </Link>
            <Link to="/admin" className="pt-4 text-3xl text-pale-yellow">
              Admin
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

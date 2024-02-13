import { NavLink } from "react-router-dom";
import { getImageUrl } from "../helpers/strings";
import {
  FaInstagram,
  FaFacebook,
  FaYelp,
  FaPhoneAlt,
  FaMapPin,
} from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="flex justify-between bg-orange">
        <div
          className=" ml-4 h-[120px] w-[120px] cursor-pointer pt-4"
          onClick={scrollToTop}
        >
          <img
            src={getImageUrl("logo_white.png")}
            alt="White Vaca Caliente Logo"
          />
        </div>
        <div className="flex flex-col justify-center">
          <NavLink
            to="/menu"
            className="text-pale-yellow transition-transform hover:scale-110 hover:text-almost-white-variant"
          >
            Menu
          </NavLink>
          <NavLink
            to="/booking"
            className="text-pale-yellow transition-transform hover:scale-110 hover:text-almost-white-variant"
          >
            Book a table
          </NavLink>
          <NavLink
            to="/contact"
            className="text-pale-yellow transition-transform hover:scale-110 hover:text-almost-white-variant"
          >
            Contact
          </NavLink>
        </div>
        <div className="mr-6">
          <div className="flex flex-col items-center">
            <p className="text-sm text-pale-yellow">Join the fiesta</p>
            <div className="flex">
              <FaInstagram className="m-2 h-5 w-5 cursor-pointer text-pale-yellow transition-all ease-in-out hover:scale-110 hover:text-almost-white-variant" />
              <FaFacebook className="hover: m-2 h-5 w-5 cursor-pointer text-pale-yellow transition-all ease-in-out hover:scale-110 hover:text-almost-white-variant" />
              <FaYelp className="hover: m-2 h-5 w-5 cursor-pointer text-pale-yellow transition-all ease-in-out hover:scale-110 hover:text-almost-white-variant" />
            </div>
          </div>
          <hr className="border-t-2 border-pale-yellow"></hr>
          <div className="flex">
            <FaPhoneAlt className="m-2 h-3 w-3 text-pale-yellow" />
            <p className="mt-2 text-xs text-pale-yellow">+46 123 46 78 90</p>
          </div>
          <div className="flex">
            <FaMapPin className="m-2 h-3 w-3 text-pale-yellow" />
            <div className="flex flex-col">
              <p className="text-xs text-pale-yellow">Mexikanska gatan 1</p>
              <p className="text-xs text-pale-yellow">723 52 Stockholm</p>
            </div>
          </div>
        </div>
      </div>
      <p className="bg-orange pb-3 pl-3 text-xs text-pale-yellow">
        &copy; 2024, Vaca Caliente. All rights reserved.
      </p>
    </>
  );
};

export default Footer;

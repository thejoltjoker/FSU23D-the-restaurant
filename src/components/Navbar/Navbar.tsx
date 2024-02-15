import { useState } from "react";
import { FaFacebook, FaInstagram, FaYelp } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { getImageUrl } from "../../helpers/strings";
import MenuIcon from "../MenuIcon";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavigation = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative mx-auto flex w-full max-w-screen-xl items-center justify-between bg-pale-yellow px-sm py-sm">
      <NavLink to="/" className="z-50">
        <div className="max-w-logo opacity-90">
          <img
            src={
              isOpen
                ? getImageUrl("logo_white.png")
                : getImageUrl("logo_black.png")
            }
            alt="Vaca Caliente logo"
            onClick={isOpen ? toggleNavigation : undefined}
          />
        </div>
      </NavLink>
      <input
        type="checkbox"
        name="menu"
        id="menu"
        className="hidden"
        checked={isOpen}
        onChange={toggleNavigation}
      />
      <label htmlFor="menu" className="z-50">
        <MenuIcon isOpen={isOpen} />
      </label>

      <div
        className="fixed right-0 z-30 flex h-full w-full flex-col items-center justify-center bg-orange text-almost-white transition-all duration-500"
        style={isOpen ? { top: 0 } : { top: "-100vh" }}
      >
        <ul
          className="text-center font-heading text-6xl"
          onClick={toggleNavigation}
        >
          <li style={{ "--i": 0 } as React.CSSProperties}>
            <NavLink
              to="/"
              className="transition-transform hover:scale-110 hover:text-pale-yellow"
            >
              Home
            </NavLink>
          </li>
          <li style={{ "--i": 1 } as React.CSSProperties}>
            <NavLink
              to="/booking"
              className="transition-transform hover:scale-110 hover:text-pale-yellow"
            >
              Book a Table
            </NavLink>
          </li>
          <li style={{ "--i": 2 } as React.CSSProperties}>
            <NavLink
              to="/contact"
              className="transition-transform hover:scale-110 hover:text-pale-yellow"
            >
              Contact
            </NavLink>
          </li>
          <li style={{ "--i": 3 } as React.CSSProperties}>
            <NavLink
              to="/menu"
              className="transition-transform hover:scale-110 hover:text-pale-yellow"
            >
              Menu
            </NavLink>
          </li>
          <li style={{ "--i": 4 } as React.CSSProperties}>
            <NavLink
              to="/admin"
              className="transition-transform hover:scale-110 hover:text-pale-yellow"
            >
              Admin
            </NavLink>
          </li>
          <li className="social-icons flex justify-center gap-md pt-xl">
            <Link to="#" style={{ "--i": 2 } as React.CSSProperties}>
              <FaInstagram className="size-md cursor-pointer text-pale-yellow transition-all ease-in-out hover:scale-110 hover:text-almost-white-variant" />
            </Link>

            <Link to="#" style={{ "--i": 3 } as React.CSSProperties}>
              <FaFacebook className="size-md cursor-pointer text-pale-yellow transition-all ease-in-out hover:scale-110 hover:text-almost-white-variant" />
            </Link>

            <Link to="#" style={{ "--i": 4 } as React.CSSProperties}>
              <FaYelp className="size-md cursor-pointer text-pale-yellow transition-all ease-in-out hover:scale-110 hover:text-almost-white-variant" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

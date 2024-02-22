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
    <>
      <nav className="relative mx-auto flex h-navbar-sm w-full items-center justify-between bg-pale-yellow px-sm md:h-navbar-md lg:h-navbar-lg">
        <div className="relative mx-auto flex h-navbar-sm w-full max-w-screen-xl items-center justify-between bg-pale-yellow px-sm md:h-navbar-md lg:h-navbar-lg">
          <NavLink to="/" className="z-50">
            <div className="max-w-logo-sm opacity-90 md:max-w-logo-md lg:max-w-logo-lg">
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
          <label htmlFor="menu" className="z-50">
            <MenuIcon isOpen={isOpen} />
          </label>
        </div>
        <input
          type="checkbox"
          name="menu"
          id="menu"
          className="hidden"
          checked={isOpen}
          onChange={toggleNavigation}
        />

        <div
          className="fixed right-0 z-30 flex h-full w-full flex-col items-center justify-center bg-orange text-almost-white transition-all duration-500"
          style={isOpen ? { top: 0 } : { top: "-100vh" }}
        >
          <ul
            className="text-center font-heading text-4xl lg:text-6xl"
            onClick={toggleNavigation}
          >
            <li style={{ "--i": 0 } as React.CSSProperties}>
              <NavLink to="/">Home</NavLink>
            </li>
            <li style={{ "--i": 1 } as React.CSSProperties}>
              <NavLink to="/booking">Book a Table</NavLink>
            </li>
            <li style={{ "--i": 2 } as React.CSSProperties}>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li style={{ "--i": 3 } as React.CSSProperties}>
              <NavLink to="/menu">Menu</NavLink>
            </li>
            <li style={{ "--i": 4 } as React.CSSProperties}>
              <NavLink to="/admin">Admin</NavLink>
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
      {isOpen && (
        <div className="h-navbar-sm md:h-navbar-md lg:h-navbar-lg"></div>
      )}
    </>
  );
};

export default Navbar;

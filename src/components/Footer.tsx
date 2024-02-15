import {
  FaFacebook,
  FaInstagram,
  FaMapPin,
  FaPhoneAlt,
  FaYelp,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { getImageUrl } from "../helpers/strings";
import WavySection from "./WavySection";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="w-full  text-xl text-pale-yellow">
      <div className="-mt-wave">
        <WavySection bgColor="vivid-orange" top={true} bottom={false}>
          <div className="mx-auto max-w-screen-lg p-sm">
            <div className="items-top flex justify-between">
              <div className="w-logo" onClick={scrollToTop}>
                <img
                  src={getImageUrl("logo_white.png")}
                  alt="White Vaca Caliente Logo"
                />
              </div>
              <ul>
                <li className="pb-xs">
                  <NavLink
                    to="/menu"
                    className="hover:text-almost-white-variant"
                  >
                    Menu
                  </NavLink>
                </li>
                <li className="pb-xs">
                  <NavLink
                    to="/booking"
                    className="hover:text-almost-white-variant"
                  >
                    Book a table
                  </NavLink>
                </li>
                <li className="pb-xs">
                  <NavLink
                    to="/contact"
                    className="hover:text-almost-white-variant"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
              <div className="">
                <p>Join the fiesta</p>
                <ul className="flex gap-sm pb-sm pt-2">
                  <li>
                    <Link to="#">
                      <FaInstagram className="size-md transition-all ease-in-out hover:scale-110 hover:text-almost-white-variant" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <FaFacebook className="size-md transition-all ease-in-out hover:scale-110 hover:text-almost-white-variant" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <FaYelp className="size-md transition-all ease-in-out hover:scale-110 hover:text-almost-white-variant" />
                    </Link>
                  </li>
                </ul>
                <hr className="border-t-2 border-pale-yellow"></hr>
                <div className="flex flex-col gap-sm">
                  <div className="inline-flex items-center gap-sm">
                    <FaPhoneAlt className="mt-2 size-4 " />
                    <p className="mt-2 text-pale-yellow">+46 123 46 78 90</p>
                  </div>
                  <div className="items-top inline-flex gap-sm">
                    <FaMapPin className="mt-2 size-4 " />
                    <div className="flex flex-col">
                      <p className="">Mexikanska gatan 1</p>
                      <p className="">723 52 Stockholm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p>&copy; 2024, Vaca Caliente. All rights reserved.</p>
          </div>
        </WavySection>
      </div>
    </footer>
  );
};

export default Footer;

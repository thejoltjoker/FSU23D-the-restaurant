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
        <WavySection bgColor="vivid-orange" waveIdTop={1} top={true} bottom={false}>
          <div className="p-l mx-auto max-w-screen-lg">
            <div className="items-top flex flex-col items-center justify-between sm:flex-row">
              <div className="w-logo mb-10" onClick={scrollToTop}>
                <img
                  src={getImageUrl("logo_white.png")}
                  alt="White Vaca Caliente Logo"
                />
              </div>
              <ul className="mb-5">
                <li className="pb-xs">
                  <NavLink
                    to="/menu"
                    className="text-almost-white-variant hover:text-pale-yellow"
                  >
                    Menu
                  </NavLink>
                </li>
                <li className="pb-xs">
                  <NavLink
                    to="/booking"
                    className="text-almost-white-variant hover:text-pale-yellow"
                  >
                    Book a table
                  </NavLink>
                </li>
                <li className="pb-xs">
                  <NavLink
                    to="/contact"
                    className="text-almost-white-variant hover:text-pale-yellow"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
              <div className="">
                <div className="flex flex-col gap-sm">
                  <div className="inline-flex items-center gap-sm">
                    <FaPhoneAlt className="mt-1 size-4 " />
                    <p className=" text-pale-yellow">+46 123 46 78 90</p>
                  </div>
                  <div className="items-top inline-flex gap-sm">
                    <FaMapPin className="mt-1 size-4 " />
                    <div className="flex flex-col">
                      <p className="">Mexikanska gatan 1</p>
                      <p className="">723 52 Stockholm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-m flex  flex-col-reverse items-center justify-between p-lg sm:flex-row">
              <div className="sm:mb-5 lg:mt-md">
                <p>&copy; 2024, Vaca Caliente. All rights reserved.</p>
              </div>
              <div className="flex flex-col justify-center sm:flex-row">
                <p className="mx-auto">Join the fiesta</p>
                <ul className="flex gap-sm pb-sm pl-5 sm:order-last">
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
              </div>
            </div>
          </div>
        </WavySection>
      </div>
    </footer>
  );
};

export default Footer;

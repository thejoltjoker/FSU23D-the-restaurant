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
    <footer className="relative z-30 w-full text-xl text-pale-yellow">
      <div className="-mt-wave">
        <WavySection
          bgColor="vivid-orange"
          waveIdTop={1}
          top={true}
          bottom={false}
        >
          <div className="p-l mx-auto max-w-screen-lg p-sm text-paragraph-sm md:pb-md md:text-paragraph-md lg:text-paragraph-lg">
            <div className="flex flex-col justify-between sm:flex-row sm:items-center">
              <div className="mb-lg grow" onClick={scrollToTop}>
                <img
                  src={getImageUrl("logo_white.png")}
                  alt="White Vaca Caliente Logo"
                  className="max-w-logo"
                />
              </div>
              <div className="flex grow">
                <ul className="grow basis-1/3">
                  <li className="pb-sm">
                    <NavLink
                      to="/menu"
                      className="text-almost-white transition hover:text-pale-yellow"
                    >
                      Menu
                    </NavLink>
                  </li>
                  <li className="pb-sm">
                    <NavLink
                      to="/booking"
                      className="text-almost-white transition hover:text-pale-yellow"
                    >
                      Book a table
                    </NavLink>
                  </li>
                  <li className="pb-sm">
                    <NavLink
                      to="/contact"
                      className="text-almost-white transition hover:text-pale-yellow"
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>

                <ul className="grow basis-1/3">
                  <li className="pb-sm">
                    <p className="inline-flex gap-xs text-paragraph-sm text-pale-yellow md:text-paragraph-md lg:text-paragraph-lg">
                      <FaPhoneAlt className="mt-0.5 size-4" />
                      +46 123 46 78 90
                    </p>
                  </li>
                  <li className="pb-sm">
                    <p className="inline-flex gap-xs text-paragraph-sm leading-6 text-pale-yellow md:text-paragraph-md lg:text-paragraph-lg">
                      <FaMapPin className="mt-1 size-4" />
                      Mexikanska gatan 1 <br />
                      723 52 Stockholm
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="pt-m flex flex-col-reverse items-center justify-between p-lg sm:flex-row"> */}
            <div className="flex flex-col-reverse items-center pt-md sm:flex-row md:pt-lg">
              <p className="text-paragraph-sm md:text-paragraph-md lg:text-paragraph-lg">
                &copy; 2024, Vaca Caliente. All rights reserved.
              </p>

              <div className="flex flex-col pb-sm sm:ml-auto sm:flex-row sm:items-center sm:gap-sm sm:pb-0">
                <p className="mx-auto mb-xs text-paragraph-sm sm:mb-0 md:text-paragraph-md lg:text-paragraph-lg">
                  Join the fiesta
                </p>

                <ul className="flex gap-sm sm:order-last">
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

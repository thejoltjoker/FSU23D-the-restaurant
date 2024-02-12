import { getImageUrl } from "../helpers/strings";

const Navbar = () => {
  return (
    <div className=" flex w-screen justify-between bg-pale-yellow">
      <div className="ml-4 h-[120px] w-[120px] pt-4">
        <img
          src={getImageUrl("logo_black.png")}
          alt="Black Vaca Caliente logo"
        />
      </div>
      <div className="mr-5 pt-5">
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
    </div>
  );
};

export default Navbar;

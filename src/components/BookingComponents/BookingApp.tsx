import { FaApple } from "react-icons/fa";
import { getImageUrl } from "../../helpers/strings";

const Downloadapp = () => {
  return (
    <div className="pb-wave">
      <div className="flex flex-col gap-sm pb-lg pt-8 text-center text-pale-yellow">
        <h2 className="text-heading-sm md:text-heading-md lg:text-heading-lg">
          Download Our App
        </h2>
        <p className="m-auto w-3/4 text-2xl md:w-2/4">
          Experience the vibrant flavors of Vaca Caliente at your fingertips by
          downloading our app
        </p>
      </div>

      <div className="flex flex-col justify-center gap-xl text-center md:flex-row">
        <img
          className="m-auto h-[400px] w-[275px] -rotate-[20deg] md:m-0"
          src={getImageUrl("app.png")}
          alt="Inside Vaca Caliente's beutiful atmosphere"
        />

        <div className="mb-auto mt-auto text-pale-yellow ">
          <button className="inline-flex items-center gap-sm rounded-full bg-stone-900 px-sm py-xs text-almost-white">
            <FaApple className="size-6" /> Download on the App Store
          </button>
          <p className="text-lg">
            Unlock a 10% discount on your <br />
            next burrito adventure with us
          </p>
        </div>
      </div>
    </div>
  );
};

export default Downloadapp;

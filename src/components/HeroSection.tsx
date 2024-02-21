import { getImageUrl } from "../helpers/strings";
import BookButton from "./BookButton";
import OrderButton from "./OrderButton";

const HeroSection = () => {
  return (
    <section className="mx-auto flex min-h-[550px] max-w-screen-lg flex-col-reverse items-center md:min-h-[400px] md:flex-row">
      <HeroContent />
      <HeroImage />
    </section>
  );
};

const HeroContent = () => {
  return (
    <div className="w-1/1 mt-10 flex flex-col px-5 md:w-1/2">
      <h1 className="md:heading-md mb-2 text-heading-sm leading-[60px] lg:text-heading-lg ">
        Spice up your dining at Vaca Caliente!
      </h1>
      <div className="mt-12 flex gap-5">
        <OrderButton />
        <BookButton />
      </div>
    </div>
  );
};

const HeroImage = () => {
  return (
    <div className="mt-10 w-2/3 px-0 sm:w-2/4  md:w-1/2 md:px-5 ">
      <img
        className="w-full md:m-auto "
        src={getImageUrl("taco-hero.png")}
        alt="Vaca Caliente's Special Burrito"
      />
    </div>
  );
};

export default HeroSection;

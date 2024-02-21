import { getImageUrl } from "../helpers/strings";
import BookButton from "./BookButton";
import OrderButton from "./OrderButton";

const HeroSection = () => {
  return (
    <section className="mx-auto flex min-h-[550px] max-w-screen-lg flex-col md:min-h-[400px] md:flex-row">
      <HeroContent />
      <HeroImage />
    </section>
  );
};

const HeroContent = () => {
  return (
    <div className="mt-10 flex flex-col px-5">
      <h1 className="mb-2 ">Spice up your dining at Vaca Caliente!</h1>
      <div className="mt-12 flex gap-5">
        <OrderButton />
        <BookButton />
      </div>
    </div>
  );
};

const HeroImage = () => {
  return (
    <div className="md: mt-10 px-5 ">
      <img
        className="md: m-auto max-h-[250px] "
        src={getImageUrl("taco-hero.png")}
        alt="Vaca Caliente's Special Burrito"
      />
    </div>
  );
};

export default HeroSection;

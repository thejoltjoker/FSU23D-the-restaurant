import WavySection from "../../WavySection";
import BurritosMenuList from "./BurritosMenuList";

const burritosItems = [
  {
    id: 1,
    imageUrl: "burrito-bonanza.png",
    title: "Royal Burrito",
    description:
      "Savor freshness with our Vegetales Deluxe taco – a garden-inspired delight in every bite.",
  },

  {
    id: 2,
    imageUrl: "burrito-baby.png",
    title: "Baby Burrito",
    description:
      "Savor freshness with our Vegetales Deluxe taco – a garden-inspired delight in every bite.",
  },

  {
    id: 3,
    imageUrl: "burrito-veggie-fiesta.png",
    title: "Veggie Fiesta",
    description:
      "Savor freshness with our Vegetales Deluxe taco – a garden-inspired delight in every bite.",
  },
];

const BurritosMenu = () => {
  return (
    <section className=" -my-wave " id="burrito">
      <WavySection bgColor="dark-red" top={true} bottom={false}></WavySection>

      <div className=" -mb-[65px] bg-dark-red pb-24 ">
        <h2 className="md:heading-md text-center text-heading-sm text-almost-white lg:text-heading-lg">
          Burritos
        </h2>

        <div className="m-auto flex w-full max-w-screen-lg flex-col p-5  md:flex-row md:gap-5 ">
          <BurritosMenuList items={burritosItems} />
        </div>
      </div>
    </section>
  );
};

export default BurritosMenu;

import WavySection from "../../../WavySection";
import TacoMenuList from "./TacoMenuList";

const tacoItems = [
  {
    id: 1,
    imageUrl: "taco-spicy-sizzle.png",
    title: "Taco Delight",
    description:
      "Savor the Taco Delight – a perfect blend of seasoned goodness and zesty toppings.",
  },

  {
    id: 2,
    imageUrl: "taco-fishermans-catch.png",
    title: "Taco Del Mar",
    description:
      "Dive into the Taco Del Mar, where the freshness of the sea meets the bold flavors of Mexico in every mouthwatering bite.",
  },

  {
    id: 3,
    imageUrl: "taco-zesty-veggie-fiesta.png",
    title: "Vegetales Deluxe",
    description:
      "Savor freshness with our Vegetales Deluxe taco – a garden-inspired delight in every bite.",
  },
];

const TacoMenu = () => {
  return (
    <section className="" id="taco">
      <WavySection bgColor="orange" top={true} bottom={false}></WavySection>

      <div className=" -mb-[65px] bg-orange pb-24 ">
        <h2 className="md:heading-md text-center text-heading-sm text-almost-white lg:text-heading-lg">
          Tacos
        </h2>

        <div className="m-auto flex w-full max-w-screen-lg flex-col p-5 md:flex-row md:gap-5  ">
          <TacoMenuList items={tacoItems} />
        </div>
      </div>
    </section>
  );
};

export default TacoMenu;

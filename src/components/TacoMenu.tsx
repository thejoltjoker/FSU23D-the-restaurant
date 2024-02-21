import TacoMenuList from "./TacoMenuList";
import WavySection from "./WavySection";

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
    imageUrl: "taco-spicy-sizzle.png",
    title: "Taco Delight",
    description:
      "Savor the Taco Delight – a perfect blend of seasoned goodness and zesty toppings.",
  },

  {
    id: 3,
    imageUrl: "taco-spicy-sizzle.png",
    title: "Taco Delight",
    description:
      "Savor the Taco Delight – a perfect blend of seasoned goodness and zesty toppings.",
  },
];

const TacoMenu = () => {
  return (
    <section className="min-h-[1000px]  ">
      <WavySection bgColor="orange" top={true} bottom={false}></WavySection>

      <div className=" bg-orange">
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

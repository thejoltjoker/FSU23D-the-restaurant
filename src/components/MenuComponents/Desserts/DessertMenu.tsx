import WavySection from "../../WavySection";
import DessertsMenuList from "./DessertsMenuList";

const dessertItems = [
  {
    id: 1,
    imageUrl: "dessert-chocochurro-extravaganza.png",
    title: "Chocochurro Extra Vaganza",
    description:
      "Indulge in a symphony of flavors with our Chocochurro Extravaganza. A classic churro, reimagined with a luscious chocolate filling.",
  },

  {
    id: 2,
    imageUrl: "dessert-cinnamon-churro-explosion.png",
    title: "Cinnamon Churro Explosion",
    description:
      "Experience the burst of warm spices in every bite of our Cinnamon Churro Explosion. Crispy on the outside, soft on the inside.",
  },

  {
    id: 3,
    imageUrl: "dessert-dulce-de-leche-delight.png",
    title: "Dulce De Leche Delight",
    description:
      "Surrender to the sweet caress of our Dulce De Leche Delight. Enjoy the creamy, caramelized milk filling that oozes out of a tender, buttery pastry. ",
  },
];

const DessertsMenu = () => {
  return (
    <section className="mt-{100px} " id="dessert">
      <WavySection
        bgColor="dark-red-variant"
        top={true}
        bottom={false}
      ></WavySection>

      <div className=" bg-dark-red-variant pb-24 ">
        <h2 className="md:heading-md text-center text-heading-sm text-almost-white lg:text-heading-lg">
          Desserts
        </h2>

        <div className="m-auto flex w-full max-w-screen-lg flex-col p-5 md:flex-row md:gap-5  ">
          <DessertsMenuList items={dessertItems} />
        </div>
      </div>
    </section>
  );
};

export default DessertsMenu;

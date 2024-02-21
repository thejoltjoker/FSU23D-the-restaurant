import DessertsMenuList from "./DessertsMenuList";
import WavySection from "./WavySection";

const dessertItems = [
  {
    id: 1,
    imageUrl: "dessert-chocochurro-extravaganza.png",
    title: "Chocochurro Extravaganza",
    description: "woooow",
  },

  {
    id: 2,
    imageUrl: "dessert-cinnamon-churro-explosion.png",
    title: "Cinnamon Churro Explosion",
    description: "woooow",
  },

  {
    id: 3,
    imageUrl: "dessert-dulce-de-leche-delight.png",
    title: "Dulce De Leche Delight",
    description: "woooow",
  },
];

const DessertsMenu = () => {
  return (
    <section className="  ">
      <WavySection
        bgColor="dark-red-variant"
        top={true}
        bottom={false}
      ></WavySection>

      <div className=" bg-dark-red-variant">
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

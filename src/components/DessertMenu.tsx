import DessertsMenuList from "./DessertsMenuList";
import WavySection from "./WavySection";

const dessertItems = [
  {
    id: 1,
    imageUrl: "burrito-bonanza.png",
    title: "Royal Burrito",
  },

  {
    id: 2,
    imageUrl: "burrito-baby.png",
    title: "Baby Burrito",
  },

  {
    id: 3,
    imageUrl: "burrito-veggie-fiesta.png",
    title: "Veggie Fiesta",
  },
];

const DessertsMenu = () => {
  return (
    <section className="min-h-[1000px]  ">
      <WavySection bgColor="dark-red" top={true} bottom={false}></WavySection>

      <div className=" bg-dark-red">
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

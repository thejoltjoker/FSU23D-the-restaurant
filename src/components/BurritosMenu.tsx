import TacoMenuList from "./TacoMenuList";
import WavySection from "./WavySection";

const burritosItems = [
  {
    id: 1,
    imageUrl: "burrito-bonanza.png",
    title: "Royal Burrito",
    description: "",
  },

  {
    id: 2,
    imageUrl: "burrito-baby.png",
    title: "Baby Burrito",
    description: "",
  },

  {
    id: 3,
    imageUrl: "burrito-big-chunker.png",
    title: "Big Chunker",
    description: "",
  },
];

const BurritosMenu = () => {
  return (
    <section className="min-h-[1000px]  ">
      <WavySection bgColor="dark-red" top={true} bottom={false}></WavySection>

      <div className=" bg-dark-red">
        <h2 className="md:heading-md text-center text-heading-sm text-almost-white lg:text-heading-lg">
          Burritos
        </h2>

        <div className="m-auto flex w-full max-w-screen-lg flex-col p-5 md:flex-row md:gap-5  ">
          <TacoMenuList items={burritosItems} />
        </div>
      </div>
    </section>
  );
};

export default BurritosMenu;

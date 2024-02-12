import HomeFoodItem from "./HomeFoodItem";
import WavySection from "./WavySection";

const HomeTacosSection = () => {
  return (
    <div className="-mt-wave">
      <WavySection bgColor="orange" top={true} bottom={false}>
        <div className="mx-auto max-w-screen-lg py-xl text-almost-white">
          <h2 className="font-heading text-7xl">Tacos</h2>
          <p className="mb-sm text-xl">
            Savor Mexico's finest in every taco bite at Vaca Caliente
            <br />– a burst of flavor in every taco, a fiesta on your palate!
          </p>
          <div>
            <HomeFoodItem
              item={{
                name: "Taco Supreme",
                description: "",
                price: 9.99,
                category: "Tacos",
                isVegetarian: false,
                imageName: "taco-del-mar",
              }}
            />
          </div>
        </div>
      </WavySection>
    </div>
  );
};

export default HomeTacosSection;

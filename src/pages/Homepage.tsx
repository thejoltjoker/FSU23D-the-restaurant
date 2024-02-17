import HeroSection from "../components/HeroSection";
import HomeChefSection from "../components/HomeChefSection/HomeChefSection";
import HomeFoodSection from "../components/HomeFoodSection";

const Homepage = () => {
  return (
    <>
      <HeroSection />

      <HomeFoodSection
        key={"tacos-section"}
        title="Tacos"
        description="Savor Mexico's finest in every taco bite at Vaca Caliente <br />– a burst of flavor in every taco, a fiesta on your palate!"
        category="Tacos"
        bgColor="orange"
        scrollOffset={300}
        scrollMultiplier={0.4}
      />

      <div className="-mt-wave-2">
        <HomeFoodSection
          key={"burritos-section"}
          title="Burritos"
          description="Savor Mexico's finest in every taco bite at Vaca Caliente <br />– a burst of flavor in every taco, a fiesta on your palate!"
          category="Burritos"
          bgColor="dark-red"
          waveIdTop={4}
          waveIdBottom={5}
          scrollOffset={400}
          scrollMultiplier={0.25}
        />
      </div>
      <div className="relative z-10 -mt-wave-2">
        <HomeFoodSection
          key={"desserts-section"}
          title="Desserts"
          description="Savor Mexico's finest in every taco bite at Vaca Caliente <br />– a burst of flavor in every taco, a fiesta on your palate!"
          category="Desserts"
          bgColor="almost-white"
          textColor="dark-red"
          waveIdTop={8}
          waveIdBottom={8}
          scrollOffset={400}
          scrollMultiplier={0.3}
        />
      </div>
      <div className="z-0 -my-wave">
        <HomeChefSection />
      </div>
    </>
  );
};

export default Homepage;

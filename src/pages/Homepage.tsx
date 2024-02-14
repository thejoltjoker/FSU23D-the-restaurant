import HomeFoodSection from "../components/HomeFoodSection";
import HeroSection from "../components/HeroSection";

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
      <HomeFoodSection
        key={"burritos-section"}
        title="Burritos"
        description="Savor Mexico's finest in every taco bite at Vaca Caliente <br />– a burst of flavor in every taco, a fiesta on your palate!"
        category="Burritos"
        bgColor="dark-red"
        scrollOffset={400}
        scrollMultiplier={0.25}
      />
      <HomeFoodSection
        key={"desserts-section"}
        title="Desserts"
        description="Savor Mexico's finest in every taco bite at Vaca Caliente <br />– a burst of flavor in every taco, a fiesta on your palate!"
        category="Desserts"
        bgColor="almost-white"
        textColor="dark-red"
        scrollOffset={400}
        scrollMultiplier={0.3}
      />
    </>
  );
};

export default Homepage;

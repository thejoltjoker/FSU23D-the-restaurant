import HomeFoodSection from "../components/HomeFoodSection";

const Homepage = () => {
  return (
    <div>
      <div className="mx-auto max-w-screen-lg py-xl text-dark-red">
        <h1>Placeholder Hero</h1>
        <p className="pb-wave">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus at
          incidunt impedit inventore! Aut expedita fugiat, laborum esse
          perferendis eaque quis quae deserunt facilis? Quas debitis inventore
          praesentium consequuntur? Dolor?
        </p>
      </div>

      {/* <HomeTacosSection /> */}
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
    </div>
  );
};

export default Homepage;

import HomeTacosSection from "../components/HomeTacosSection";
import WavySection from "../components/WavySection";

const Homepage = () => {
  return (
    <div>
      <WavySection bgColor="almost-white" top={true} bottom={false}>
        <div className="mx-auto max-w-screen-lg py-xl text-dark-red">
          <h1>My Squiggly Section</h1>
          <p className="pb-wave">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus at
            incidunt impedit inventore! Aut expedita fugiat, laborum esse
            perferendis eaque quis quae deserunt facilis? Quas debitis inventore
            praesentium consequuntur? Dolor?
          </p>
        </div>
      </WavySection>
      <HomeTacosSection />
    </div>
  );
};

export default Homepage;

import WavySection from "../components/WavySection";

const Homepage = () => {
  return (
    <div>
      <WavySection bgColor="dark-green" top={true} bottom={true}>
        <div className="mx-auto max-w-screen-lg py-xl text-almost-white">
          <h1>My Squiggly Section</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus at
            incidunt impedit inventore! Aut expedita fugiat, laborum esse
            perferendis eaque quis quae deserunt facilis? Quas debitis inventore
            praesentium consequuntur? Dolor?
          </p>
        </div>
      </WavySection>
    </div>
  );
};

export default Homepage;

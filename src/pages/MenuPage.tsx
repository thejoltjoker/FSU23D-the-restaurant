import BurritosMenu from "../components/BurritosMenu";
import DessertMenu from "../components/DessertMenu";
import IntroSection from "../components/IntroSection";
import TacoMenu from "../components/TacoMenu";

const Menupage = () => {
  return (
    <>
      <IntroSection />
      <TacoMenu />
      <BurritosMenu />
      <DessertMenu />
    </>
  );
};

export default Menupage;

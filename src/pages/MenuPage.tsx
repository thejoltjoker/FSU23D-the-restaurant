import BurritosMenu from "../components/BurritosMenu";
import DessertMenu from "../components/DessertMenu";
import IntroSection from "../components/IntroSection";
import MenuNavbar from "../components/MenuNavbar";
import TacoMenu from "../components/TacoMenu";

const Menupage = () => {
  return (
    <>
      <MenuNavbar />
      <IntroSection />
      <TacoMenu />
      <BurritosMenu />
      <DessertMenu />
    </>
  );
};

export default Menupage;

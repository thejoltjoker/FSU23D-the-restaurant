import IntroSection from "../components/IntroSection";
import BurritosMenu from "../components/MenuComponents/Burritos/BurritosMenu";
import DessertMenu from "../components/MenuComponents/Burritos/Desserts/DessertMenu";
import TacoMenu from "../components/MenuComponents/Burritos/Tacos/TacoMenu";
import MenuNavbar from "../components/MenuNavbar";

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

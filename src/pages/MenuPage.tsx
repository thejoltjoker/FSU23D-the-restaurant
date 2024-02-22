import BurritosMenu from "../components/MenuComponents/Burritos/BurritosMenu";
import DessertMenu from "../components/MenuComponents/Burritos/Desserts/DessertMenu";
import TacoMenu from "../components/MenuComponents/Burritos/Tacos/TacoMenu";
import IntroSection from "../components/MenuComponents/IntroSection";
import MenuNavbar from "../components/MenuComponents/MenuNav/MenuNavbar";

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

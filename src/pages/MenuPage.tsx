import BurritosMenu from "../components/MenuComponents/Burritos/BurritosMenu";
import DessertMenu from "../components/MenuComponents/Desserts/DessertMenu";
import IntroSection from "../components/MenuComponents/IntroSection";
import MenuNavbar from "../components/MenuComponents/MenuNav/MenuNavbar";
import TacoMenu from "../components/MenuComponents/Tacos/TacoMenu";

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

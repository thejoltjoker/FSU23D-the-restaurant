import { getImageUrl } from "../../helpers/strings";

const Mainpic = () => {
  return (
    <div className="bg-pale-yellow pb-6 pt-6">
      <img
        className="m-auto  h-[200px] md:h-[400px]"
        src={getImageUrl("inside-resturant.png")}
        alt="Inside Vaca Caliente's beutiful atmosphere"
      />
    </div>
  );
};

export default Mainpic;

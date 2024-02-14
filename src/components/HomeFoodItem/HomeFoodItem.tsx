import { getImageUrl } from "../../helpers/strings";
import { IMenuItem } from "../../models/IMenuItem";
import "./HomeFoodItem.css";

interface HomeFoodItemProps {
  item: IMenuItem;
}

const HomeFoodItem = ({ item }: HomeFoodItemProps) => {
  return (
    <div className="home-food-item flex min-w-72 flex-col items-center text-center">
      <img src={`${getImageUrl(item.id)}.png`} alt="" className="w-72" />
      <h4 className="font-sans text-xl">{item.name}</h4>
    </div>
  );
};

export default HomeFoodItem;

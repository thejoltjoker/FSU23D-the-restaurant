import { IMenuItem } from "../models/IMenuItem";
import { getImageUrl } from "../helpers/strings";

interface HomeFoodItemProps {
  item: IMenuItem;
}

const HomeFoodItem = ({ item }: HomeFoodItemProps) => {
  return (
    <div className="max-w-sm text-center">
      <img src={`${getImageUrl(item.imageName)}.png`} alt="" />
      <h4 className="text-xl">{item.name}</h4>
    </div>
  );
};

export default HomeFoodItem;

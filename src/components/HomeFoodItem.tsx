import { IMenuItem } from "../models/IMenuItem";
import { getImageUrl } from "../helpers/strings";

interface HomeFoodItemProps {
  item: IMenuItem;
}

const HomeFoodItem = ({ item }: HomeFoodItemProps) => {
  return (
    <div className="flex min-w-64 flex-col items-center text-center">
      <img src={`${getImageUrl(item.imageName)}.png`} alt="" className="w-64" />
      <h4 className="font-sans text-xl text-almost-white">{item.name}</h4>
    </div>
  );
};

export default HomeFoodItem;

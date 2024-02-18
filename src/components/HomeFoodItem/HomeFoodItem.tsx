import { getImageUrl } from "../../helpers/strings";
import { IMenuItem } from "../../models/IMenuItem";
import "./HomeFoodItem.css";

interface HomeFoodItemProps {
  item: IMenuItem;
  blobColor?: string;
}

const HomeFoodItem = ({
  item,
  blobColor = "orange-variant",
}: HomeFoodItemProps) => {
  return (
    <div className="home-food-item w-home-food-item-sm lg:w-home-food-item-lg flex shrink-0 grow-0 flex-col items-center">
      <div className="relative mb-md flex aspect-square w-full justify-center">
        <div className="absolute z-0 flex h-full w-full items-center justify-center">
          <div className={`text-${blobColor} w-food-blob-sm lg:w-food-blob-lg`}>
            <svg
              className="w-food-blob-sm lg:w-food-blob-lg"
              viewBox="0 0 900 900"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
            >
              <g transform="translate(459.99332070919974 456.73759977129055)">
                <path
                  d="M181.4 -232C232.3 -212.7 268.8 -155.9 273.9 -98.8C279 -41.6 252.7 16 222.4 60.9C192.2 105.9 158.1 138.3 120.4 162C82.7 185.8 41.3 200.9 -9.4 213.8C-60.2 226.8 -120.3 237.6 -173.6 218.9C-226.8 200.2 -273.2 152 -288.4 95.9C-303.7 39.8 -287.9 -24.3 -267.7 -87.1C-247.5 -149.9 -222.9 -211.5 -177.6 -232.6C-132.3 -253.7 -66.1 -234.3 -0.4 -233.7C65.2 -233.1 130.5 -251.3 181.4 -232"
                  fill="currentColor"
                ></path>
              </g>
            </svg>
          </div>
        </div>
        <img src={`${getImageUrl(item.id)}.png`} alt="" className="z-10" />
      </div>
      <h4 className="font-sans text-xl">{item.name}</h4>
    </div>
  );
};

export default HomeFoodItem;

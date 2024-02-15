import { useEffect, useState } from "react";
import { useScrollYContext } from "../contexts/ScrollYContext";
import { IMenuItem } from "../models/IMenuItem";
import { IMenuResponse } from "../models/IMenuResponse";
import { get } from "../services/http";
import HomeFoodItem from "./HomeFoodItem";
import WavySection from "./WavySection";

interface HomeFoodSectionProps {
  title: string;
  description: string;
  category: string;
  bgColor: string;
  textColor?: string;
  scrollOffset?: number;
  scrollMultiplier?: number;
}

const HomeFoodSection = ({
  title,
  description,
  category,
  bgColor = "orange",
  textColor = "almost-white",
  scrollOffset = 0,
  scrollMultiplier = 0.35,
}: HomeFoodSectionProps) => {
  const [food, setFood] = useState<IMenuItem[]>();
  const scrollY = useScrollYContext();

  useEffect(() => {
    if (food) return;
    let ignore = false;

    const fetchData = async () => {
      try {
        const response = await get<IMenuResponse>(
          `${import.meta.env.BASE_URL}api/menu.json`,
        );
        if (!ignore)
          setFood(
            response.items.filter(
              (item) => item.category.toLowerCase() === category.toLowerCase(),
            ),
          );
      } catch (error) {
        console.error("Error while fetching menu");
      }
    };

    fetchData();

    return () => {
      ignore = true;
    };
  });

  return (
    <WavySection bgColor={bgColor} top={true} bottom={false}>
      <div className={`text-${textColor} overflow-clip`}>
        <div className="mx-auto max-w-screen-lg py-xl">
          <h2 className="font-heading text-7xl">{title}</h2>
          <p
            className="mb-sm text-xl"
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
        </div>

        <div
          className="pb-wave-2 flex gap-40 whitespace-nowrap"
          style={{ marginLeft: -scrollY * scrollMultiplier + scrollOffset }}
        >
          {food?.map((taco) => (
            <HomeFoodItem
              key={taco.id}
              item={taco}
              blobColor={`${bgColor}-variant`}
            />
          ))}
        </div>
      </div>
    </WavySection>
  );
};

export default HomeFoodSection;

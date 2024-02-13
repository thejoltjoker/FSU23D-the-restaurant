import { useEffect, useState } from "react";
import { IMenuItem } from "../models/IMenuItem";
import { IMenuResponse } from "../models/IMenuResponse";
import { get } from "../services/http";
import HomeFoodItem from "./HomeFoodItem";
import WavySection from "./WavySection";

interface HomeFoodSectionProps {
  title: string;
  description: string;
  category: string;
}

const HomeFoodSection = ({
  title,
  description,
  category,
}: HomeFoodSectionProps) => {
  const [food, setFood] = useState<IMenuItem[]>();

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
    <div className="-mt-wave">
      <WavySection bgColor="orange" top={true} bottom={false}>
        <div className="mx-auto max-w-screen-lg py-xl text-almost-white">
          <h2 className="font-heading text-7xl">{title}</h2>
          <p className="mb-sm text-xl">{description}</p>
        </div>
        <div className="no-scrollbar flex gap-80 overflow-x-scroll whitespace-nowrap pb-lg">
          {food?.map((taco) => (
            <HomeFoodItem item={taco} key={taco.imageName} />
          ))}
        </div>
      </WavySection>
    </div>
  );
};

export default HomeFoodSection;

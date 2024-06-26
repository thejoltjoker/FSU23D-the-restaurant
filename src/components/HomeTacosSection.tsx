import { useEffect, useState } from "react";
import { useScrollYContext } from "../contexts/ScrollYContext";
import { IMenuItem } from "../models/IMenuItem";
import { IMenuResponse } from "../models/IMenuResponse";
import { get } from "../services/http";
import HomeFoodItem from "./HomeFoodItem";
import WavySection from "./WavySection";

const HomeTacosSection = () => {
  const [tacos, setTacos] = useState<IMenuItem[]>();
  const scrollY = useScrollYContext();

  useEffect(() => {
    if (tacos) return;
    let ignore = false;

    const fetchData = async () => {
      try {
        const response = await get<IMenuResponse>(
          `${import.meta.env.BASE_URL}api/menu.json`,
        );
        if (!ignore)
          setTacos(response.items.filter((item) => item.category === "Tacos"));
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
    <div className="-mt-wave pb-[100vh]">
      <WavySection bgColor="orange" top={true} bottom={false}>
        <div className="mx-auto max-w-screen-lg py-xl text-almost-white">
          <h2 className="font-heading text-7xl">Tacos</h2>
          <p className="mb-sm text-xl">
            Savor Mexico's finest in every taco bite at Vaca Caliente
            <br />– a burst of flavor in every taco, a fiesta on your palate!
          </p>
        </div>
        <div className="relative h-[24rem] overflow-clip">
          <div
            className="absolute top-0 flex gap-80 overscroll-x-none whitespace-nowrap pb-lg transition"
            style={{ left: -scrollY }}
          >
            {tacos?.map((taco) => <HomeFoodItem item={taco} key={taco.id} />)}
          </div>
        </div>
      </WavySection>
    </div>
  );
};

export default HomeTacosSection;

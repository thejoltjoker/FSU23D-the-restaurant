import { useFoodItemsContext } from "../contexts/FoodItemsContext";
import { useScrollYContext } from "../contexts/ScrollYContext";
import HomeFoodItem from "./HomeFoodItem";
import WavySection from "./WavySection";

interface HomeFoodSectionProps {
  title: string;
  description: string;
  category: string;
  bgColor: string;
  textColor?: string;
  waveIdTop?: number;
  waveIdBottom?: number;
  scrollOffset?: number;
  scrollMultiplier?: number;
}

const HomeFoodSection = ({
  title,
  description,
  category,
  bgColor = "orange",
  textColor = "almost-white",
  waveIdTop = 1,
  waveIdBottom = 2,
  scrollOffset = 0,
  scrollMultiplier = 0.35,
}: HomeFoodSectionProps) => {
  const scrollY = useScrollYContext();
  const food = useFoodItemsContext();

  return (
    <WavySection
      bgColor={bgColor}
      waveIdTop={waveIdTop}
      waveIdBottom={waveIdBottom}
      top={true}
      bottom={false}
    >
      <div className={`text-${textColor} overflow-clip`}>
        <div className="mx-auto max-w-screen-lg py-xl">
          <h2 className="font-heading text-7xl">{title}</h2>
          <p
            className="mb-sm text-xl"
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
        </div>

        <div
          className="flex gap-40 whitespace-nowrap pb-wave-2"
          style={{ marginLeft: -scrollY * scrollMultiplier + scrollOffset }}
        >
          {food?.map((foodItem) => {
            if (foodItem.category.toLowerCase() === category.toLowerCase()) {
              return (
                <HomeFoodItem
                  key={foodItem.id}
                  item={foodItem}
                  blobColor={`${bgColor}-variant`}
                />
              );
            }
          })}
        </div>
      </div>
    </WavySection>
  );
};

export default HomeFoodSection;

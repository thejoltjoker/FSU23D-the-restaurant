import { useScrollYContext } from "../contexts/ScrollYContext";
import { getImageUrl } from "../helpers/strings";

const HomeChefSection = () => {
  const scrollY = useScrollYContext();
  return (
    <div className="overflow-hidden">
      <div className="relative h-[50vh] w-full overflow-hidden">
        <div className="absolute left-0 top-0 z-10 h-[50vh] w-full">
          <img
            src={getImageUrl("chef.png")}
            alt=""
            className="h-[50vh]"
            style={{ marginLeft: `${-scrollY * 0.01 + 70}%` }}
          />
          s
        </div>
        <div className="absolute left-0 top-0 z-0 flex h-[50vh] w-full items-center justify-center object-cover">
          <img src={getImageUrl("chef-bg.jpg")} alt="" className="" />s
        </div>
      </div>
    </div>
  );
};

export default HomeChefSection;

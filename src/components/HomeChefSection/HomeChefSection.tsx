import { useScrollYContext } from "../../contexts/ScrollYContext";
import { getImageUrl } from "../../helpers/strings";
import "./HomeChefSection.css";
const HomeChefSection = () => {
  const scrollY = useScrollYContext();
  return (
    <div className="overflow-hidden">
      <div
        className="chef-section relative flex h-[50rem] w-full items-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${getImageUrl("chef-bg.jpg")})` }}
      >
        <div className="relative z-20 w-full text-center text-heading-lg">
          <h5 className="absolute left-0 top-0 z-10 w-full text-almost-white lg:top-20">
            The Good, The Bad, The Chef
          </h5>
        </div>
        <div className="absolute bottom-0 left-0 z-10 flex w-full items-end justify-center">
          <img
            src={getImageUrl("chef.png")}
            alt=""
            className="w-[34rem] max-w-[34rem]"
            style={{ marginLeft: `${-scrollY * 0.01 + 50}vw` }}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeChefSection;

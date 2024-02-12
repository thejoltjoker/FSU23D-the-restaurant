import { ReactNode } from "react";

interface Props {
  bgColor: string;
  top?: boolean;
  bottom?: boolean;
  children?: ReactNode;
}

const WavySection = ({
  bgColor,
  top = true,
  bottom = false,
  children,
}: Props) => {
  return (
    <div className={`relative ${top && "pt-wave"} ${bottom && "pb-wave"}`}>
      {top && (
        <div className="wave-divider-top h-wave absolute left-0 top-0 w-full overflow-hidden">
          <svg
            id="visual"
            viewBox="0 0 1728 100"
            preserveAspectRatio="none"
            className={`h-wave w-wave fill-${bgColor} lg:w-full`}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
          >
            <path
              d="M0 46L28.8 53C57.7 60 115.3 74 173 73.3C230.7 72.7 288.3 57.3 345.8 52.2C403.3 47 460.7 52 518.2 56C575.7 60 633.3 63 691 59.5C748.7 56 806.3 46 864 44.3C921.7 42.7 979.3 49.3 1037 56.2C1094.7 63 1152.3 70 1209.8 66C1267.3 62 1324.7 47 1382.2 41C1439.7 35 1497.3 38 1555 37C1612.7 36 1670.3 31 1699.2 28.5L1728 26L1728 101L1699.2 101C1670.3 101 1612.7 101 1555 101C1497.3 101 1439.7 101 1382.2 101C1324.7 101 1267.3 101 1209.8 101C1152.3 101 1094.7 101 1037 101C979.3 101 921.7 101 864 101C806.3 101 748.7 101 691 101C633.3 101 575.7 101 518.2 101C460.7 101 403.3 101 345.8 101C288.3 101 230.7 101 173 101C115.3 101 57.7 101 28.8 101L0 101Z"
              stroke-linecap="round"
              stroke-linejoin="miter"
            ></path>
          </svg>
        </div>
      )}
      {bottom && (
        <div className="wave-divider-top h-wave absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            id="visual"
            viewBox="0 0 1728 100"
            preserveAspectRatio="none"
            className={`h-wave w-wave fill-${bgColor} rotate-180 lg:w-full  `}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
          >
            <path
              d="M0 46L28.8 53C57.7 60 115.3 74 173 73.3C230.7 72.7 288.3 57.3 345.8 52.2C403.3 47 460.7 52 518.2 56C575.7 60 633.3 63 691 59.5C748.7 56 806.3 46 864 44.3C921.7 42.7 979.3 49.3 1037 56.2C1094.7 63 1152.3 70 1209.8 66C1267.3 62 1324.7 47 1382.2 41C1439.7 35 1497.3 38 1555 37C1612.7 36 1670.3 31 1699.2 28.5L1728 26L1728 101L1699.2 101C1670.3 101 1612.7 101 1555 101C1497.3 101 1439.7 101 1382.2 101C1324.7 101 1267.3 101 1209.8 101C1152.3 101 1094.7 101 1037 101C979.3 101 921.7 101 864 101C806.3 101 748.7 101 691 101C633.3 101 575.7 101 518.2 101C460.7 101 403.3 101 345.8 101C288.3 101 230.7 101 173 101C115.3 101 57.7 101 28.8 101L0 101Z"
              stroke-linecap="round"
              stroke-linejoin="miter"
            ></path>
          </svg>
        </div>
      )}
      <div className={`bg-${bgColor}`}>{children}</div>
    </div>
  );
};

export default WavySection;

import { ReactNode } from "react";
import Wave from "../Wave";

interface IWavySectionProps {
  bgColor: string;
  waveIdTop?: number;
  waveIdBottom?: number;
  top?: boolean;
  bottom?: boolean;
  children?: ReactNode;
}

const WavySection = ({
  bgColor,
  waveIdTop = 1,
  waveIdBottom = 2,
  top = true,
  bottom = false,
  children,
}: IWavySectionProps) => {
  return (
    <div className={`relative ${top && "pt-wave"} ${bottom && "pb-wave"}`}>
      {top && (
        <div
          className="absolute left-0 top-0 h-wave w-full overflow-hidden"
          data-testid="wave-divider-top"
        >
          <Wave
            id={waveIdTop}
            className={`h-wave w-wave text-${bgColor} lg:w-full`}
          />
        </div>
      )}
      {bottom && (
        <div
          className="wave-divider-bottom absolute bottom-0 left-0 h-wave w-full overflow-hidden"
          data-testid="wave-divider-bottom"
        >
          <Wave
            id={waveIdBottom}
            className={`h-wave w-wave text-${bgColor} rotate-180 lg:w-full  `}
          />
        </div>
      )}
      <div className={`bg-${bgColor}`}>{children}</div>
    </div>
  );
};

export default WavySection;

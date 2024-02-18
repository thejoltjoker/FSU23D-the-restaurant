/// <reference types="vite-plugin-svgr/client" />
type Props = { id: number; className?: string };

import Wave01 from "../assets/svg/waves/wave-01.svg?react";
import Wave02 from "../assets/svg/waves/wave-02.svg?react";
import Wave03 from "../assets/svg/waves/wave-03.svg?react";
import Wave04 from "../assets/svg/waves/wave-04.svg?react";
import Wave05 from "../assets/svg/waves/wave-05.svg?react";
import Wave06 from "../assets/svg/waves/wave-06.svg?react";
import Wave07 from "../assets/svg/waves/wave-07.svg?react";
import Wave08 from "../assets/svg/waves/wave-08.svg?react";
import Wave09 from "../assets/svg/waves/wave-09.svg?react";
import Wave10 from "../assets/svg/waves/wave-10.svg?react";

const Wave = ({ id = 1, className = "" }: Props) => {
  const waves = [
    <Wave01 className={className} />,
    <Wave02 className={className} />,
    <Wave03 className={className} />,
    <Wave04 className={className} />,
    <Wave05 className={className} />,
    <Wave06 className={className} />,
    <Wave07 className={className} />,
    <Wave08 className={className} />,
    <Wave09 className={className} />,
    <Wave10 className={className} />,
  ];

  return <>{waves[id - 1]}</>;
};

export default Wave;

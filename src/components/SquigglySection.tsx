import { ReactNode } from "react";

interface Props {
  top?: boolean;
  bottom?: boolean;
  children?: ReactNode;
}

const SquigglySection = ({ top = true, bottom = false, children }: Props) => {
  return <div>{children}</div>;
};

export default SquigglySection;

import { HiBars3, HiXMark } from "react-icons/hi2";

type Props = {
  isOpen: boolean;
};

const MenuIcon = ({ isOpen }: Props) => {
  return (
    <>
      {isOpen ? (
        <HiXMark
          className="spin-in size-lg cursor-pointer stroke-1 text-almost-white"
          data-testid="x-mark"
        />
      ) : (
        <HiBars3
          className="size-lg cursor-pointer stroke-1"
          data-testid="bars"
        />
      )}
    </>
  );
};

export default MenuIcon;

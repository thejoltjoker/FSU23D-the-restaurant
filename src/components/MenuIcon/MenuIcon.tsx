import { HiBars3, HiXMark } from "react-icons/hi2";

type Props = {
  isOpen: boolean;
};

const MenuIcon = ({ isOpen }: Props) => {
  return (
    <>
      {isOpen ? (
        <HiXMark
          className="spin-in size-md cursor-pointer stroke-1 text-almost-white lg:size-lg"
          data-testid="x-mark"
        />
      ) : (
        <HiBars3
          className="size-md cursor-pointer stroke-1 md:size-lg"
          data-testid="bars"
        />
      )}
    </>
  );
};

export default MenuIcon;

import BurritosMenuItem from "./BurritosMenuItem";

interface BurritosMenuItemType {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
}

interface BurritosMenuListProps {
  items: BurritosMenuItemType[];
}

const BurritosMenuList: React.FC<BurritosMenuListProps> = ({ items }) => {
  return (
    <div className="m-auto flex w-full max-w-screen-lg flex-col p-5 md:flex-row md:gap-5">
      {items.map((item) => (
        <BurritosMenuItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default BurritosMenuList;

import DessertMenuItem from "./DessertMenuItem";

interface DessertsMenuItemType {
  id: number;
  imageUrl: string;
  title: string;
}

interface DessertsMenuListProps {
  items: DessertsMenuItemType[];
}

const DessertssMenuList: React.FC<DessertsMenuListProps> = ({ items }) => {
  return (
    <div className="m-auto flex w-full max-w-screen-lg flex-col p-5 md:flex-row md:gap-5">
      {items.map((item) => (
        <DessertMenuItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default DessertssMenuList;

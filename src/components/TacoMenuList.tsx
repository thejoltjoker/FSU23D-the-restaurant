import TacoMenuItem from "./TacoMenuItem";

interface TacoMenuItemType {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
}

interface TacoMenuListProps {
  items: TacoMenuItemType[];
}

const TacoMenuList: React.FC<TacoMenuListProps> = ({ items }) => {
  return (
    <div className="m-auto flex w-full max-w-screen-lg flex-col p-5 md:flex-row md:gap-5">
      {items.map((item) => (
        <TacoMenuItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default TacoMenuList;

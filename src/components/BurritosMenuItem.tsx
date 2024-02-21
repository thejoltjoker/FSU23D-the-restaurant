import { getImageUrl } from "../helpers/strings";

interface BurritosMenuItemProps {
  imageUrl: string;
  title: string;
}

const BurritoMenuItem = ({ imageUrl, title }: BurritosMenuItemProps) => {
  return (
    <div className="mbl:w-2/3 mbl:m-auto max-h-1/2 md:w-full">
      <img className="" src={getImageUrl(imageUrl)} alt={title} />
      <div className="rounded-md  p-5 text-almost-white">
        <h3 className="md:text-2rem mb-5 text-center text-heading-sm">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default BurritoMenuItem;

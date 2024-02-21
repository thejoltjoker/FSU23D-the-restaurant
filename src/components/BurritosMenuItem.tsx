import { getImageUrl } from "../helpers/strings";

interface BurritosMenuItemProps {
  imageUrl: string;
  title: string;
  description: string;
}

const BurritoMenuItem = ({
  imageUrl,
  title,
  description,
}: BurritosMenuItemProps) => {
  return (
    <div className="mbl:w-2/3 mbl:m-auto max-h-1/2 md:w-full">
      <img className="m-auto w-3/4" src={getImageUrl(imageUrl)} alt={title} />
      <div className="rounded-md  bg-white p-5 text-dark-red">
        <h3 className="text-heading-menu mb-5 text-center">{title}</h3>
        <p className="md:paragraph-md text-paragraph-sm">{description}</p>
      </div>
    </div>
  );
};

export default BurritoMenuItem;

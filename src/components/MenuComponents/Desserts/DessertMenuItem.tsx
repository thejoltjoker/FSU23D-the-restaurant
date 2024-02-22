import { getImageUrl } from "../../../helpers/strings";

interface DessertMenuItemProps {
  imageUrl: string;
  title: string;
  description: string;
}

const DessertMenuItem = ({
  imageUrl,
  title,
  description,
}: DessertMenuItemProps) => {
  return (
    <div className="max-h-1/2 md:w-full mbl:m-auto mbl:w-2/3">
      <img className="m-auto w-3/4" src={getImageUrl(imageUrl)} alt={title} />
      <div className="rounded-md   bg-white p-5 text-dark-red">
        <h3 className="mb-5 text-center text-heading-menu">{title}</h3>
        <p className="md:paragraph-md text-paragraph-sm">{description}</p>
      </div>
    </div>
  );
};

export default DessertMenuItem;

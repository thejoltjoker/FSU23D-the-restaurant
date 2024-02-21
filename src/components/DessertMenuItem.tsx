import { getImageUrl } from "../helpers/strings";

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
    <div className="mbl:w-2/3 mbl:m-auto max-h-1/2 md:w-full">
      <img className="" src={getImageUrl(imageUrl)} alt={title} />
      <div className="rounded-md   bg-white p-5 text-dark-red">
        <h3 className="md:text-2rem mb-5 text-center text-heading-sm">
          {title}
        </h3>
        <p className="md:paragraph-md text-paragraph-sm">{description}</p>
      </div>
    </div>
  );
};

export default DessertMenuItem;

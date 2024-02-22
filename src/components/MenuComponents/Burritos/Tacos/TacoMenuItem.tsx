import { getImageUrl } from "../../../../helpers/strings";

interface TacoMenuItemProps {
  imageUrl: string;
  title: string;
  description: string;
}

const TacoMenuItem = ({ imageUrl, title, description }: TacoMenuItemProps) => {
  return (
    <div className="md:w-full mbl:m-auto mbl:w-2/3">
      <img className="m-auto w-3/4" src={getImageUrl(imageUrl)} alt={title} />
      <div className="rounded-md bg-white p-5">
        <h3 className="mb-5 text-center text-heading-menu">{title}</h3>
        <p className="md:paragraph-md text-paragraph-sm">{description}</p>
      </div>
    </div>
  );
};

export default TacoMenuItem;

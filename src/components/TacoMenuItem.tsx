import { getImageUrl } from "../helpers/strings";

interface TacoMenuItemProps {
  imageUrl: string;
  title: string;
  description: string;
}

const TacoMenuItem = ({ imageUrl, title, description }: TacoMenuItemProps) => {
  return (
    <div className="mbl:w-2/3 mbl:m-auto md:w-full">
      <img src={getImageUrl(imageUrl)} alt={title} />
      <div className="rounded-md bg-white p-5">
        <h3 className="md:text-2rem mb-5 text-center text-heading-sm">
          {title}
        </h3>
        <p className="md:paragraph-md text-paragraph-sm">{description}</p>
      </div>
    </div>
  );
};

export default TacoMenuItem;

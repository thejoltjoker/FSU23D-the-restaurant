import { getImageUrl } from "../../../helpers/strings";

interface MenuItemProps {
  href: string;
  imageSrc: string;
  altText: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ href, imageSrc, altText }) => {
  return (
    <a href={href} className="flex w-1/3 items-center justify-center md:w-full">
      <img
        className="max-h-full p-1 opacity-50 hover:p-0 hover:opacity-100"
        src={getImageUrl(imageSrc)}
        alt={altText}
      />
    </a>
  );
};

export default MenuItem;

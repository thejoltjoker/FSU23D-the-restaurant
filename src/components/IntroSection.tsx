import BookButton from "./BookButton";
import OrderButton from "./OrderButton";

const IntroSection = () => {
  return (
    <div className="p-5 md:w-2/3">
      <h1 className="md:heading-md mb-5 mt-5 text-heading-sm lg:text-heading-lg">
        Menu
      </h1>
      <p className="md:paragraph-md mb-5 text-paragraph-sm lg:text-paragraph-lg">
        Discover a culinary fiesta at Vaca Caliente! Our menu is a vibrant
        tapestry of authentic Mexican flavors, expertly crafted to tantalize
        your taste buds. From sizzling tacos to savory burritos and indulgent
        desserts, every dish is a celebration of bold and delicious experiences.
      </p>
      <div className="flex gap-5">
        <OrderButton />
        <BookButton />
      </div>
    </div>
  );
};

export default IntroSection;

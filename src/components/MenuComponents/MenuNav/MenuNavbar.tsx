import { getImageUrl } from "../../../helpers/strings";

const MenuNavbar = () => {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 mx-auto flex h-24 w-3/4 justify-between rounded-md
     bg-orange-variant md:bottom-auto 
     
     md:left-auto md:right-auto md:top-auto md:h-1/2 
     md:w-20 md:flex-col md:items-end md:justify-center  md:bg-transparent md:hover:bg-orange-variant "
    >
      <div className="flex w-full justify-between md:h-full md:flex-col md:items-center">
        <a
          href="#taco"
          className="flex w-1/3 items-center justify-center md:w-full"
        >
          <img
            className="max-h-full p-1 opacity-50 hover:p-0 hover:opacity-100"
            src={getImageUrl("nav-tt.png")}
            alt="Taco"
          />
        </a>

        <a
          href="#burrito"
          className="flex w-1/3 items-center justify-center md:w-full"
        >
          <img
            className="max-h-full p-1 opacity-50 hover:p-0 hover:opacity-100"
            src={getImageUrl("nav-b.png")}
            alt="Burrito"
          />
        </a>

        <a
          href="#dessert"
          className="flex w-1/3 items-center justify-center md:w-full"
        >
          <img
            className="max-h-full p-1 opacity-50 hover:p-0 hover:opacity-100"
            src={getImageUrl("nav-c.png")}
            alt="Dessert"
          />
        </a>
      </div>
    </nav>
  );
};

export default MenuNavbar;

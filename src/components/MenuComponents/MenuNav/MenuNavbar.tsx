import MenuItem from "./MenuItem"; // Adjust the import path as necessary

const MenuNavbar = () => {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 mx-auto flex h-24 w-3/4 justify-between rounded-md
     bg-orange-variant md:bottom-auto 
     
     md:left-auto md:right-auto md:top-auto md:h-1/2 
     md:w-20 md:flex-col md:items-end md:justify-center md:bg-transparent md:hover:bg-orange-variant "
    >
      <div className="flex w-full justify-between md:h-full md:flex-col md:items-center">
        <MenuItem href="#taco" imageSrc="nav-tt.png" altText="Taco" />
        <MenuItem href="#burrito" imageSrc="nav-b.png" altText="Burrito" />
        <MenuItem href="#dessert" imageSrc="nav-c.png" altText="Dessert" />
      </div>
    </nav>
  );
};

export default MenuNavbar;

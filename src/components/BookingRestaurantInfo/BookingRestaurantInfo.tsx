import { useEffect, useState } from "react";
import {
  FaConciergeBell,
  FaDirections,
  FaMapMarkerAlt,
  FaRegClock,
} from "react-icons/fa";
import { IRestaurant } from "../../models/IRestaurant";
import { getRestaurant, restaurantId } from "../../services/restaurant";

const BookingRestaurantInfo = () => {
  const [restaurant, setRestaurant] = useState<IRestaurant>();
  
  useEffect(() => {
    if (restaurant) return;
    let ignore = false;

    const fetchData = async () => {
      try {
        const restaurantResponse = await getRestaurant(restaurantId);
        console.log(restaurantResponse);
        if (!ignore) setRestaurant(restaurantResponse);
      } catch (error) {
        console.error("Error while getting restaurant data");
      }
    };
    fetchData();
    return () => {
      ignore = true;
    };
  });
  return (
    <div className="m-auto  flex w-4/5 flex-col  md:m-0 md:w-1/2 ">
      <div className="gap-5 md:flex">
        <p className="flex items-center gap-1">
          <FaMapMarkerAlt className="mr-2" />
          Mexikanska gatan 1, 723 52 Stockholm
          {restaurant?.address}, {restaurant?.zip} {restaurant?.city}
        </p>
        <p className="flex items-center">
          <FaRegClock className="mr-2" />
          <time className="">18:00 - 00:00</time>
        </p>
      </div>

      <a
        href="https://maps.app.goo.gl/Tbo8BWLwv9i9uYrG9"
        className="mr-4 flex items-center"
      >
        <FaDirections className="mr-2" />
        Get Direction
      </a>

      <button className="flex items-center">
        <FaConciergeBell className="mr-2" />
        Show Menu
      </button>

      <p className="mt-5">
        Vaca Caliente is a vibrant oasis that offers an authentic Mexican
        culinary adventure. Our name, Spanish for "Hot Cow," reflects our
        specialty in sizzling, spice-infused dishes that promise to ignite your
        taste buds and warm your soul.
      </p>
    </div>
  );
};

export default BookingRestaurantInfo;

import { useEffect, useState } from "react";
import { FaConciergeBell, FaMapPin, FaRegClock } from "react-icons/fa";
import { FaDiamondTurnRight } from "react-icons/fa6";
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
    <div className="flex flex-col gap-sm text-lg">
      <p className="inline-flex items-center gap-2 text-lg">
        <FaMapPin />
        {restaurant?.address}, {restaurant?.zip} {restaurant?.city}
      </p>
      <p className="inline-flex items-center gap-2 text-lg">
        <FaRegClock />
        <time className="">18:00 - 00:00</time>
      </p>

      <a href="#" className="inline-flex items-center gap-2 text-lg">
        <FaDiamondTurnRight />
        Get Directions
      </a>

      <a className="inline-flex items-center gap-2 text-lg" href="#">
        <FaConciergeBell />
        Show Menu
      </a>

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

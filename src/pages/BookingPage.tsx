import { useEffect, useState } from "react";
import Downloadapp from "../components/BookingComponents/BookingApp";
import BookingHeroImg from "../components/BookingComponents/BookingHeroImg";
import BookingForm from "../components/BookingForm";
import BookingRestaurantInfo from "../components/BookingRestaurantInfo/BookingRestaurantInfo";
import "../components/CreateBooking/CreateBooking.css";
import WavySection from "../components/WavySection";
import { IRestaurant } from "../models/IRestaurant";
import { getRestaurant, restaurantId } from "../services/restaurant";
const Bookingpage = () => {
  const [restaurant, setRestaurant] = useState<IRestaurant>();

  // Effect för att hämta restaurangdata
  useEffect(() => {
    if (restaurant) return;
    let ignore = false;
    getRestaurant(restaurantId)
      .then((response) => {
        if (!ignore) {
          console.log(response);
          setRestaurant(response);
        }
      })
      .catch((error) => console.error(error));
    return () => {
      ignore = true;
    };
  });

  return (
    <>
      <BookingHeroImg />

      <WavySection bgColor="dark-green" top={true} bottom={false}>
        <div className="mx-auto -mb-wave flex max-w-screen-lg flex-col justify-center bg-dark-green px-sm py-wave text-xl text-almost-white">
          <h1 className="mb-md text-heading-sm text-almost-white md:text-heading-md lg:text-heading-lg">
            Come and eat!
          </h1>
          <div className="flex flex-wrap gap-sm">
            <div className="shrink grow basis-full pb-lg md:basis-1/3">
              <BookingRestaurantInfo />
            </div>
            <div className="shrink grow basis-full pb-lg md:basis-1/3">
              <BookingForm />
            </div>
          </div>
        </div>
      </WavySection>

      <WavySection bgColor="dark-green-variant" top={true} bottom={false}>
        <Downloadapp />
      </WavySection>
    </>
  );
};

export default Bookingpage;

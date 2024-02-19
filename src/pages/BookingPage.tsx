import { useEffect, useState } from "react";
import Downloadapp from "../components/BookingComponents/BookingApp";
import Mainpic from "../components/BookingComponents/Mainpic";
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
      <Mainpic />

      <WavySection bgColor="dark-green" top={true} bottom={false}>
        <div className="mx-auto -mb-wave flex max-w-screen-lg flex-col justify-center bg-dark-green py-wave">
          <h1 className="mb-10 text-center text-almost-white">Booking form</h1>
          <div className="grid justify-center gap-8 text-almost-white md:flex-row lg:grid-cols-2">
            <BookingRestaurantInfo />
            {/* <CreateBooking /> */}
            <BookingForm />
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

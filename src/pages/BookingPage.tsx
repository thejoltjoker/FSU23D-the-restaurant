import _ from "lodash";
import { useEffect, useState } from "react";
import Downloadapp from "../components/BookingComponents/BookingApp";
import BookingHeroImg from "../components/BookingComponents/BookingHeroImg";
import BookingForm from "../components/BookingForm";
import BookingReservation from "../components/BookingReservation";
import BookingRestaurantInfo from "../components/BookingRestaurantInfo/BookingRestaurantInfo";
import "../components/CreateBooking/CreateBooking.css";
import WavySection from "../components/WavySection";
import { IBooking } from "../models/Booking";
import { ICustomer } from "../models/Customer";
import { IRestaurant } from "../models/IRestaurant";
import { getCustomerIdFromLocalStorage } from "../services/booking";
import {
  getCustomer,
  getRestaurant,
  getRestaurantBookings,
  restaurantId,
} from "../services/restaurant";
const Bookingpage = () => {
  const [restaurant, setRestaurant] = useState<IRestaurant>();
  const [bookings, setBookings] = useState<IBooking[]>();
  const [customer, setCustomer] = useState<ICustomer>();

  useEffect(() => {
    const customerId = getCustomerIdFromLocalStorage();
    if (customer || customerId === "") return;
    let ignore = false;
    getCustomer(customerId)
      .then((response) => {
        if (!ignore) {
          setCustomer(response);
        }
      })
      .catch((error) => console.error(error));
    return () => {
      ignore = true;
    };
  });

  useEffect(() => {
    if (bookings) return;
    let ignore = false;
    getRestaurantBookings(restaurantId)
      .then((response) => {
        if (!ignore) {
          setBookings(_.sortBy(response, ["date", "time"]));
        }
      })
      .catch((error) => console.error(error));
    return () => {
      ignore = true;
    };
  });

  useEffect(() => {
    if (restaurant) return;
    let ignore = false;
    getRestaurant(restaurantId)
      .then((response) => {
        if (!ignore) {
          setRestaurant(response);
        }
      })
      .catch((error) => console.error(error));
    return () => {
      ignore = true;
    };
  });

  const handleCancelBooking = (bookingId: string) => {
    setBookings(bookings?.filter((booking) => booking._id !== bookingId));
  };

  const updateReservations = () => {
    setBookings(undefined);
  };

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
            <div className="flex shrink grow basis-full flex-col gap-sm pb-lg md:basis-1/3">
              <BookingForm
                updateReservations={updateReservations}
                customer={customer}
              />
              {bookings?.map((booking) => {
                if (booking.customerId === getCustomerIdFromLocalStorage()) {
                  return (
                    <BookingReservation
                      key={booking._id}
                      booking={booking}
                      updateReservations={updateReservations}
                      onCancel={handleCancelBooking}
                    />
                  );
                }
              })}
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

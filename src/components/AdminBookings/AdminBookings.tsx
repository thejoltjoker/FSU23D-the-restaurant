import { useEffect, useState } from "react";
import { IBooking } from "../../models/Booking";
import {
  deleteBooking,
  getRestaurantBookings,
  restaurantId,
} from "../../services/restaurant";
import WavySection from "../WavySection";
import "./AdminBookings.css";

const AdminBookings = () => {
  const [bookings, setBookings] = useState<IBooking[]>();

  const HandleChangeBooking = () => {};

  const HandleCancelBooking = async (bookingId: string) => {
    await deleteBooking(bookingId);

    setBookings(bookings?.filter((booking) => booking._id !== bookingId));
  };

  useEffect(() => {
    if (bookings) return;
    let ignore = false;

    const fetchData = async () => {
      try {
        const response = await getRestaurantBookings(restaurantId);

        if (!ignore) setBookings(response);
      } catch (error) {
        console.error("Couldn't get bookings");
      }
    };
    fetchData();

    return () => {
      ignore = true;
    };
  });

  return (
    <>
      <div className="px-lg py-wave"></div>
      <div className="-mt-wave ">
        <WavySection bgColor={"orange"} top={true} bottom={true}>
          <div className="mx-auto max-w-screen-lg p-sm">
            <h1 className="mb-4 text-4xl text-almost-white">Bookings</h1>
            <p className="w-3/5 text-lg text-almost-white">
              Savor Mexico's finest in every taco bite at Vaca Caliente – a
              burst of flavor in every taco, a fiesta on your palate!
            </p>
            <div className="flex flex-col gap-sm">
              {bookings &&
                bookings.map((booking) => {
                  return (
                    <div
                      className="form-with-dark-red-shadow"
                      key={booking._id}
                    >
                      <div className="inline-flex grow basis-full items-center gap-sm">
                        <h4 className="text-lg text-dark-red">Booking</h4>
                        <p className=" text-lg text-vivid-orange">
                          #{booking._id}
                        </p>
                      </div>
                      <div className="flex">
                        <div className="grid shrink grid-cols-2">
                          <p className="text-dark-red">Customer id: </p>
                          <p className="text-vivid-orange">
                            {booking.customerId}
                          </p>
                          <p className="text-dark-red">Guests: </p>
                          <p className="text-vivid-orange">
                            {booking.numberOfGuests}
                          </p>
                          <p className="text-dark-red">Date: </p>
                          <p className="text-vivid-orange">{booking.date}</p>
                          <p className="text-dark-red">Time: </p>
                          <p className="text-vivid-orange">{booking.time}</p>
                        </div>
                        <div className="ml-auto flex flex-col justify-around">
                          <button
                            onClick={HandleChangeBooking}
                            className="button-vivid-orange mb-2"
                          >
                            Change booking
                          </button>
                          <button
                            onClick={() => HandleCancelBooking(booking._id)}
                            className="button-dark-red"
                          >
                            Cancel booking
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </WavySection>
      </div>
    </>
  );
};

export default AdminBookings;

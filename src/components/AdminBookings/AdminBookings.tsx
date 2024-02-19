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
  // const [updatedBookingData, setUpdatedBookingData] = useState<string | null>(
  //   null,
  // );
  // const [isClicked, setIsClicked] = useState<boolean>(false);

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

  // const HandleChangeBooking = async (bookingId: string, updatedBookingData: Partial<IBooking>) => {
  //   try {
  //     await

  //   } catch (error) {
  //     console.error("Error while updating booking:", error)
  //   }
  // };

  // const handleChangeButton = (bookingId: string) => {
  //   setIsClicked(!isClicked);
  //   return null;
  // };

  const HandleCancelBooking = async (bookingId: string) => {
    await deleteBooking(bookingId);

    setBookings(bookings?.filter((booking) => booking._id !== bookingId));
  };

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
                    <form
                      className="form-with-dark-red-shadow"
                      key={booking._id}
                      onSubmit={(e) => {
                        e.preventDefault();
                      }}
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
                          <input
                            className="text-vivid-orange"
                            defaultValue={booking.numberOfGuests.toString()}
                          />
                          <p className="text-dark-red">Date: </p>
                          <input
                            className="text-vivid-orange"
                            defaultValue={booking.date}
                          />
                          <p className="text-dark-red">Time: </p>
                          <input
                            className="text-vivid-orange"
                            defaultValue={booking.time}
                          />
                        </div>
                        <div className="ml-auto flex flex-col justify-around">
                          <button
                            className="button-vivid-orange mb-2"
                            // onClick={() => handleChangeButton(booking._id)}
                          >
                            {/* {isClicked(booking._id)
                              ? "Save booking"
                              : "Change booking"} */}
                          </button>
                          <button
                            onClick={() => HandleCancelBooking(booking._id)}
                            className="button-dark-red"
                          >
                            Cancel booking
                          </button>
                        </div>
                      </div>
                    </form>
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

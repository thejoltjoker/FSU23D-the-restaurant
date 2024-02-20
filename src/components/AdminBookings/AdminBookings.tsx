import { useEffect, useState } from "react";
import { IBooking } from "../../models/Booking";
import {
  bookingIsPossible,
  deleteBooking,
  getRestaurantBookings,
  restaurantId,
  updateBooking,
} from "../../services/restaurant";
import AdminBookingListItem from "../AdminBookingListItem";
import WavySection from "../WavySection";
import "./AdminBookings.css";

const AdminBookings = () => {
  const [bookings, setBookings] = useState<IBooking[]>();

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

  const handleEditBooking = async (booking: IBooking) => {
    if (
      await bookingIsPossible(
        restaurantId,
        booking.date,
        booking.time,
        booking.numberOfGuests,
      )
    ) {
      const { _id, ...updateBody } = booking;
      await updateBooking({ ...updateBody, id: _id });
      setBookings(bookings?.map((b) => (b._id === booking._id ? booking : b)));
    }
  };
  const handleCancelBooking = async (bookingId: string) => {
    console.log("removing booking", bookingId);
    await deleteBooking(bookingId);
    setBookings(bookings?.filter((booking) => booking._id !== bookingId));
  };

  return (
    <>
      <div className="px-lg py-wave"></div>
      <div className="-mt-wave ">
        <WavySection bgColor={"orange"} top={true} bottom={true}>
          <div className="mx-auto max-w-screen-lg p-sm">
            <h2 className="mb-4 text-4xl text-almost-white">Bookings</h2>

            <div className="flex flex-col gap-sm">
              {bookings &&
                bookings.map((booking) => {
                  return (
                    <AdminBookingListItem
                      key={booking._id}
                      booking={booking}
                      onEdit={handleEditBooking}
                      onCancel={handleCancelBooking}
                    />
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

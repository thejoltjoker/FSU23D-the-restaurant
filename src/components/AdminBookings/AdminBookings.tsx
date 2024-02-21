import { useEffect, useState } from "react";
import { IBooking } from "../../models/Booking";
import {
  bookingIsPossible,
  deleteBooking,
  getRestaurantBookings,
  restaurantId,
  updateBooking,
} from "../../services/restaurant";
import AdminBookingsTableRow from "../AdminBookingsListItem";
import Spinner from "../Spinner";
import WavySection from "../WavySection";
import "./AdminBookings.css";

const AdminBookings = () => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [bookings, setBookings] = useState<IBooking[]>();

  useEffect(() => {
    if (bookings) return;
    setIsLoading(true);
    let ignore = false;

    const fetchData = async () => {
      try {
        const response = await getRestaurantBookings(restaurantId);

        if (!ignore) setBookings(response);
        setIsLoading(false);
      } catch (error) {
        console.error("Couldn't get bookings");
        setIsError(true);
        setIsLoading(false);
      }
    };
    fetchData();

    return () => {
      ignore = true;
      setIsLoading(false);
    };
  }, [bookings]);

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
      <WavySection bgColor={"orange"} top={true} bottom={false}>
        <div className="mx-auto max-w-screen-xl p-sm pb-wave-2 pt-md">
          <h2 className="mb-4 text-4xl text-almost-white">Bookings</h2>
          {isError && !isLoading && <p>Something went wrong...</p>}
          {isLoading && !isError && (
            <Spinner chiliColor="dark-red">Loading...</Spinner>
          )}
          <ul className="flex flex-col gap-sm">
            {bookings &&
              bookings.map((booking) => {
                return (
                  <AdminBookingsTableRow
                    key={booking._id}
                    booking={booking}
                    onEdit={handleEditBooking}
                    onCancel={handleCancelBooking}
                  />
                );
              })}
          </ul>
        </div>
      </WavySection>
    </>
  );
};

export default AdminBookings;

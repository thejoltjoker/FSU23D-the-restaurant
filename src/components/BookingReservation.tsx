import { format } from "date-fns";
import { useState } from "react";
import { IBooking } from "../models/Booking";
import { deleteBooking } from "../services/restaurant";
import Button from "./Button";
import Spinner from "./Spinner";

interface IBookingReservationProps {
  booking: IBooking;
  updateReservations: () => void;
}

const BookingReservation = (props: IBookingReservationProps) => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [booking, setBooking] = useState<IBooking>(props.booking);

  const handleCancelBooking = async () => {
    await deleteBooking(booking._id);
    props.updateReservations();
  };

  return (
    <div className="rounded-xl bg-almost-white px-sm py-sm text-slate-800">
      <h3 className="text-2xl">
        Reservation for {booking.numberOfGuests} on{" "}
        {format(new Date(booking.date), "iii, d LLL")}.
      </h3>

      <div className="grid grid-cols-[max-content_1fr] gap-x-xs">
        <label htmlFor="date" className="text-lg">
          Date:
        </label>
        <p>{booking.date}</p>

        <label htmlFor="guests" className="text-lg">
          Guests:
        </label>
        <p>{booking.numberOfGuests.toString()}</p>

        <label htmlFor="time" className="text-lg">
          Time:
        </label>
        <p>{booking.time}</p>

        {isLoading && <Spinner>Updating reservation</Spinner>}
        <div className="col-span-full flex pt-xs">
          <Button
            bgColor={"dark-red"}
            textColor={"almost-white"}
            type="button"
            onClick={() => handleCancelBooking()}
          >
            Cancel reservation
          </Button>
        </div>
        {isError && "Error"}
      </div>
    </div>
  );
};

export default BookingReservation;

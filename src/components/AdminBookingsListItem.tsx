import { useEffect, useState } from "react";

import { IBooking } from "../models/Booking";
import { TimeSlots } from "../models/TimeSlots";
import Button from "./Button";
interface IAdminBookingsTableRowProps {
  booking: IBooking;
  onEdit: (booking: IBooking) => void;
  onCancel: (bookingId: string) => void;
}

const AdminBookingsTableRow = (props: IAdminBookingsTableRowProps) => {
  const [isEditable, setIsEditable] = useState(false);
  const [booking, setBooking] = useState<IBooking>(props.booking);

  useEffect(() => {
    console.log(booking);
  }, [booking]);

  const handleEditBooking = () => {
    props.onEdit(booking);
    setIsEditable(!isEditable);
  };

  const handleCancelBooking = () => {
    props.onCancel(booking._id);
  };
  return (
    <ul className="flex w-full flex-wrap gap-xs rounded-lg bg-almost-white px-sm py-xs text-paragraph-sm">
      <li className="flex shrink grow flex-col justify-center">
        <p className="text-xs">Booking ID</p>
        <p className="text-vivid-orange">#{booking._id}</p>
      </li>
      <li className="flex shrink grow flex-col justify-center">
        <p className="text-xs">Customer ID</p>
        <p className="text-vivid-orange">#{booking.customerId}</p>
      </li>
      <li className="flex shrink grow basis-full flex-col justify-center md:basis-2">
        <p className="text-xs">Guests</p>
        <input
          type="number"
          className="w-full appearance-none rounded-lg border-orange text-vivid-orange disabled:border-none disabled:bg-almost-white disabled:p-0 disabled:text-dark-red"
          value={booking.numberOfGuests}
          disabled={!isEditable}
          onChange={(e) =>
            setBooking({
              ...booking,
              numberOfGuests: Number(e.currentTarget.value),
            })
          }
        />
      </li>
      <li className="flex shrink grow basis-full flex-col justify-center md:basis-2">
        <p className="text-xs">Date</p>
        <input
          type="date"
          className="w-full appearance-none rounded-lg border-orange text-vivid-orange disabled:border-none disabled:bg-almost-white disabled:p-0 disabled:text-dark-red"
          value={booking.date}
          disabled={!isEditable}
          onChange={(e) =>
            setBooking({
              ...booking,
              date: e.currentTarget.value,
            })
          }
        />
      </li>
      <li className="flex shrink grow basis-full flex-col justify-center md:basis-2">
        <p className="text-xs">Time</p>
        <select
          name="time-slot"
          className="appearance-none rounded-lg border-orange text-vivid-orange disabled:border-none disabled:bg-almost-white disabled:p-0 disabled:text-dark-red"
          value={booking.time}
          disabled={!isEditable}
          onChange={(e) =>
            setBooking({
              ...booking,
              time: e.currentTarget.value,
            })
          }
        >
          {Object.values(TimeSlots).map((slot) => (
            <option
              value={slot}
              defaultChecked={booking.time == slot}
              key={slot}
            >
              {slot}
            </option>
          ))}
        </select>
      </li>
      <li className="flex grow flex-col justify-center gap-xs py-xs md:flex-row">
        <Button
          bgColor="vivid-orange"
          textColor="white"
          onClick={
            isEditable ? () => handleEditBooking() : () => setIsEditable(true)
          }
        >
          {isEditable ? "Save changes" : "Change booking"}
        </Button>

        <Button
          bgColor="dark-red"
          textColor="white"
          onClick={() => handleCancelBooking()}
        >
          Cancel booking
        </Button>
      </li>
    </ul>
  );
};

export default AdminBookingsTableRow;

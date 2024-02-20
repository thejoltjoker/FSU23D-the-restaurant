import { useEffect, useState } from "react";
import { IBooking } from "../models/Booking";
import { TimeSlots } from "../models/TimeSlots";
import Button from "./Button";

interface IAdminBookingListItemProps {
  booking: IBooking;
  onEdit: (booking: IBooking) => void;
  onCancel: (bookingId: string) => void;
}

const AdminBookingListItem = (props: IAdminBookingListItemProps) => {
  const [isEditable, setIsEditable] = useState(false);
  const [booking, setBooking] = useState<IBooking>(props.booking);

  useEffect(() => {
    console.log(booking);
  }, [booking]);

  const handleEditBooking = () => {
    props.onEdit(booking);
    // setIsEditable(!isEditable);
  };

  const handleCancelBooking = () => {
    props.onCancel(booking._id);
  };
  return (
    <>
      <form
        className="form-with-dark-red-shadow"
        key={booking._id}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="inline-flex grow basis-full items-center gap-sm">
          <h4 className="text-lg text-dark-red">Booking</h4>
          <p className=" text-lg text-vivid-orange">#{booking._id}</p>
        </div>
        <div className="flex">
          <div className="grid shrink grid-cols-2">
            <p className="text-dark-red">Customer id: </p>
            <p className="text-vivid-orange">{booking.customerId}</p>
            <p className="text-dark-red">Guests: </p>
            <input
              className="text-vivid-orange"
              value={booking.numberOfGuests}
              disabled={!isEditable}
              onChange={(e) =>
                setBooking({
                  ...booking,
                  numberOfGuests: Number(e.currentTarget.value),
                })
              }
            />
            <p className="text-dark-red">Date: </p>
            <input
              type="date"
              className="text-vivid-orange"
              value={booking.date}
              disabled={!isEditable}
              onChange={(e) =>
                setBooking({
                  ...booking,
                  date: e.currentTarget.value,
                })
              }
            />
            <p className="text-dark-red">Time: </p>

            <select
              name=""
              id=""
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
                <option value={slot} selected={booking.time == slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>
          <div className="ml-auto flex flex-col items-center justify-around">
            <Button
              bgColor="vivid-orange"
              textColor="white"
              onClick={
                isEditable
                  ? () => handleEditBooking()
                  : () => setIsEditable(true)
              }
            >
              {isEditable ? "Save changes" : "Change booking"}
            </Button>
            <Button
              bgColor="dark-red"
              textColor="white"
              onClick={() => handleCancelBooking(booking._id)}
            >
              Cancel booking
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AdminBookingListItem;

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
    setIsEditable(!isEditable);
  };

  const handleCancelBooking = () => {
    props.onCancel(booking._id);
  };
  return (
    <div className="text-paragraph-sm">
      <form
        className="form-with-dark-red-shadow"
        key={booking._id}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="inline-flex grow basis-full items-center gap-sm">
          <h4 className="text-paragraph-sm text-dark-red md:text-paragraph-md lg:text-paragraph-lg">
            Booking
          </h4>
          <p className="text-vivid-orange">#{booking._id}</p>
        </div>
        <div className="flex flex-wrap">
          <table className="">
            <tbody>
              <tr>
                <td>
                  <p className="text-dark-red">Customer id: </p>
                </td>
                <td>
                  <p className="text-vivid-orange">{booking.customerId}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="text-dark-red">Guests: </p>
                </td>
                <td>
                  <input
                    type="number"
                    className="w-full text-vivid-orange"
                    value={booking.numberOfGuests}
                    disabled={!isEditable}
                    onChange={(e) =>
                      setBooking({
                        ...booking,
                        numberOfGuests: Number(e.currentTarget.value),
                      })
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <p className="text-dark-red">Date: </p>
                </td>
                <td>
                  <input
                    type="date"
                    className="w-full text-vivid-orange"
                    value={booking.date}
                    disabled={!isEditable}
                    onChange={(e) =>
                      setBooking({
                        ...booking,
                        date: e.currentTarget.value,
                      })
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <p className="text-dark-red">Time: </p>
                </td>
                <td>
                  <select
                    name="time-slot"
                    className="flex h-12 w-full items-center justify-center rounded-full border-almost-white bg-pale-yellow px-sm text-dark-red"
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
                        selected={booking.time == slot}
                        key={slot}
                      >
                        {slot}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
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
              onClick={() => handleCancelBooking()}
            >
              Cancel booking
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdminBookingListItem;

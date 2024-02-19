import { format } from "date-fns";
import { useState } from "react";
import { Booking } from "../../models/Booking";
import { Customer } from "../../models/Customer";
import { getAvailableTimeSlots, restaurantId } from "../../services/restaurant";
import "./BookingForm.css";
const BookingForm = () => {
  const [timeSlots, setTimeSlots] = useState<string[]>();
  const [booking, setBooking] = useState<Booking>(
    new Booking(
      restaurantId,
      format(new Date(), "yyyy-MM-dd"),
      "",
      2,
      new Customer("", "", "", ""),
    ),
  );
  const getTimeSlots = async () => {
    const slots = await getAvailableTimeSlots(
      booking.restaurantId,
      booking.date,
      booking.numberOfGuests,
    );

    console.log(slots);
    setTimeSlots(slots);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setBooking({ ...booking, date: e.currentTarget.value });
    getTimeSlots();
  };
  const handleGuestsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setBooking({ ...booking, numberOfGuests: Number(e.currentTarget.value) });
    getTimeSlots();
  };

  return (
    <>
      <h3 className="text-4xl">Make a reservation</h3>
      <form className="">
        <div className="flex gap-sm">
          <div className="shrink grow basis-1/2">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              name="date"
              id="date"
              value={booking.date}
              onChange={handleDateChange}
            />
          </div>
          <div className="shrink grow basis-1/2">
            <label htmlFor="guests">Guests:</label>
            <input
              type="number"
              name="guests"
              id="guests"
              className="w-full"
              value={booking.numberOfGuests.toString()}
              onChange={handleGuestsChange}
            />
          </div>
        </div>

        <div className="time-slots">
          <p>Available time slots</p>
          <div className="time-slots flex gap-sm">
            {timeSlots
              ? timeSlots.map((time, i) => (
                  <>
                    <input
                      type="radio"
                      key={`time-slot-${i}`}
                      id={`time-slot-${i}`}
                      name="time"
                      value={time}
                      className="hidden w-full"
                    />
                    <label htmlFor={`time-slot-${i}`}>{time}</label>
                  </>
                ))
              : null}
          </div>
        </div>
      </form>
    </>
  );
};

export default BookingForm;

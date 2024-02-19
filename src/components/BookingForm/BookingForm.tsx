import { format } from "date-fns";
import { useState } from "react";
import { Booking } from "../../models/Booking";
import { Customer } from "../../models/Customer";
import { ICreateBookingResponse } from "../../models/ICreateBookingResponse";
import {
  createBooking,
  getAvailableTimeSlots,
  restaurantId,
} from "../../services/restaurant";
import BookingFormCustomer from "../BookingFormCustomer";
import Button from "../Button";
import Spinner from "../Spinner";
import "./BookingForm.css";
const BookingForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [gdprIsChecked, setGdprIsChecked] = useState(false);
  const [bookingResponse, setBookingResponse] =
    useState<ICreateBookingResponse>();
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

  const formIsValid = () => {
    return (
      booking.date != "" &&
      booking.time != "" &&
      booking.numberOfGuests > 0 &&
      booking.customer.email != "" &&
      booking.customer.name != "" &&
      booking.customer.lastname != "" &&
      booking.customer.phone != "" &&
      gdprIsChecked === true
    );
  };

  const getTimeSlots = async () => {
    setIsLoading(true);
    const slots = await getAvailableTimeSlots(
      booking.restaurantId,
      booking.date,
      booking.numberOfGuests,
    );

    setTimeSlots(slots);
    setIsLoading(false);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setBooking({ ...booking, date: e.currentTarget.value });
    // getTimeSlots();
  };

  const handleGuestsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setBooking({ ...booking, numberOfGuests: Number(e.currentTarget.value) });
    // getTimeSlots();
  };

  const handleClickGetTimeSlots = async (
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();
    await getTimeSlots();
    setBooking({ ...booking, time: "" });
  };

  const handleTimeSlotClick = (e: React.MouseEvent<HTMLInputElement>) => {
    setBooking({ ...booking, time: e.currentTarget.value });
  };

  const handleCustomerChange = (customer: Customer) => {
    setBooking({ ...booking, customer });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await createBooking(booking);
      console.log(response);
      setBookingResponse(response);
      setIsLoading(false);
      console.log(booking);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  return (
    <div className="rounded-xl bg-almost-white px-sm py-md text-slate-800">
      <h3 className="pb-sm text-3xl">Make a reservation</h3>

      <form onSubmit={handleSubmit} className="booking-form">
        <div className="flex gap-sm">
          <div className="shrink grow basis-1/2">
            <label htmlFor="date" className="text-xl">
              Date:
            </label>
            <input
              type="date"
              name="date"
              id="date"
              value={booking.date}
              onChange={handleDateChange}
            />
          </div>
          <div className="shrink grow basis-1/2">
            <label htmlFor="guests" className="text-xl">
              Guests:
            </label>
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

        <div className="flex w-full py-sm">
          <Button
            onClick={handleClickGetTimeSlots}
            bgColor={"orange"}
            textColor={"almost-white"}
            type="button"
          >
            Get time slots
          </Button>
        </div>
        {isLoading && !timeSlots && <Spinner>Looking for slots</Spinner>}
        {timeSlots && !bookingResponse ? (
          <>
            <div className="time-slots my-sm">
              <p className="text-xl">Available time slots</p>
              <div className="time-slots flex gap-sm" data-testid="time-slots">
                {timeSlots.map((time, i) => (
                  <div key={`time-slot-${i}`}>
                    <input
                      type="radio"
                      id={`time-slot-${i}`}
                      name="time"
                      value={time}
                      className="time-slot hidden w-full"
                      onClick={handleTimeSlotClick}
                    />
                    <label htmlFor={`time-slot-${i}`}>{time}</label>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : null}
        {booking.time != "" && !bookingResponse ? (
          <>
            <BookingFormCustomer
              booking={booking}
              updateCustomer={handleCustomerChange}
            />
            <input
              type="checkbox"
              name="gdpr-consent"
              id="gdpr-consent"
              className="mr-2 rounded-md border-orange p-2 checked:bg-orange checked:focus-within:bg-orange focus:shadow-none focus:ring-0 focus:ring-offset-0 checked:focus:bg-orange checked:active:bg-orange"
              checked={gdprIsChecked}
              onChange={() => setGdprIsChecked(!gdprIsChecked)}
            />
            <label htmlFor="gdpr-consent" className="text-sm">
              By checking this box, you acknowledge and consent to the
              processing of your personal data in accordance with our
              GDPR-compliant privacy policy.
            </label>
            <div className="flex w-full py-sm">
              <Button
                bgColor={"orange"}
                textColor={"almost-white"}
                type="submit"
                disabled={!formIsValid()}
              >
                Create reservation
              </Button>
            </div>
          </>
        ) : null}
        {isLoading && formIsValid() && <Spinner>Making reservation</Spinner>}
      </form>
    </div>
  );
};

export default BookingForm;

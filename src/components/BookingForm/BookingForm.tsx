import { format } from "date-fns";
import _ from "lodash";
import { useState } from "react";
import { Booking } from "../../models/Booking";
import { Customer, ICustomer } from "../../models/Customer";
import { ICreateBookingResponse } from "../../models/ICreateBookingResponse";
import { TimeSlots } from "../../models/TimeSlots";
import { setCustomerIdToLocalStorage } from "../../services/booking";
import {
  createBooking,
  getAvailableTimeSlots,
  getBooking,
  restaurantId,
} from "../../services/restaurant";
import BookingFormCustomer from "../BookingFormCustomer";
import Button from "../Button";
import Spinner from "../Spinner";
import "./BookingForm.css";
interface IBookingFormProps {
  customer: ICustomer | undefined;
  updateReservations: () => void;
}
const BookingForm = (props: IBookingFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isMakingReservation, setIsMakingReservation] = useState(false);
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
      _.includes(Object.values(TimeSlots), booking.time) &&
      booking.numberOfGuests > 0 &&
      booking.customer.email != "" &&
      booking.customer.name != "" &&
      booking.customer.lastname != "" &&
      booking.customer.phone != "" &&
      gdprIsChecked === true
    );
  };

  const getTimeSlots = async (date: string, numberOfGuests: number) => {
    setIsLoading(true);
    const slots = await getAvailableTimeSlots(
      booking.restaurantId,
      date,
      numberOfGuests,
    );
    setTimeSlots(slots);
    setIsLoading(false);
  };

  const handleDateChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setTimeSlots(undefined);
    setBooking({ ...booking, date: e.currentTarget.value, time: "" });
    await getTimeSlots(e.currentTarget.value, booking.numberOfGuests);
  };

  const handleGuestsChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setTimeSlots(undefined);
    setBooking({
      ...booking,
      numberOfGuests: Number(e.currentTarget.value),
      time: "",
    });
    await getTimeSlots(booking.date, Number(e.currentTarget.value));
  };

  const handleClickGetTimeSlots = async (
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();
    setTimeSlots(undefined);
    await getTimeSlots(booking.date, booking.numberOfGuests);
    setBooking({ ...booking, time: "" });
  };

  const handleTimeSlotClick = (e: React.MouseEvent<HTMLInputElement>) => {
    const time = e.currentTarget.value;
    if (props.customer) {
      setBooking({
        ...booking,
        time: time,
        customer: {
          name: props.customer?.name ?? "",
          lastname: props.customer?.lastname ?? "",
          email: props.customer?.email ?? "",
          phone: props.customer?.phone ?? "",
        },
      });
    } else {
      setBooking({ ...booking, time: time });
    }
  };

  const handleCustomerChange = (customer: Customer) => {
    setBooking({ ...booking, customer });
  };

  const resetForm = () => {
    setBooking(
      new Booking(
        restaurantId,
        format(new Date(), "yyyy-MM-dd"),
        "",
        2,
        new Customer(
          props.customer?.name ?? "",
          props.customer?.lastname ?? "",
          props.customer?.email ?? "",
          props.customer?.phone ?? "",
        ),
      ),
    );
    setBookingResponse(undefined);
    setTimeSlots(undefined);
    setGdprIsChecked(false);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setIsMakingReservation(true);
    try {
      const response = await createBooking(booking);
      setBookingResponse(response);
      if (response) {
        const newBooking = await getBooking(response.insertedId);
        if (newBooking) {
          setCustomerIdToLocalStorage(newBooking.customerId);
        }
      }
      props.updateReservations();
      setIsLoading(false);
      setIsMakingReservation(false);
      resetForm();
    } catch (error) {
      setIsLoading(false);
      setIsMakingReservation(false);
      setIsError(true);
    }
  };

  return (
    <div className="booking-form rounded-xl bg-almost-white px-sm py-md text-slate-800">
      <h3 className="pb-sm text-3xl">Make a reservation</h3>

      <form onSubmit={handleSubmit} className="booking-form">
        <div className="flex gap-sm">
          <div className="shrink grow basis-1/2">
            <label htmlFor="date" className="text-xl">
              Date:
            </label>
            <input
              min={format(new Date(), "yyyy-MM-dd")}
              type="date"
              name="date"
              id="date"
              value={booking.date}
              onChange={handleDateChange}
              className="w-full"
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
                {timeSlots.length > 0 ? (
                  timeSlots.map((time, i) => (
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
                  ))
                ) : (
                  <p>No available time slots for this selection</p>
                )}
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
                disabled={!formIsValid() || isLoading}
              >
                Create reservation
              </Button>
            </div>
          </>
        ) : null}
        {isMakingReservation && formIsValid() && (
          <Spinner>Making reservation</Spinner>
        )}
        {isError && "Error"}
      </form>
    </div>
  );
};

export default BookingForm;

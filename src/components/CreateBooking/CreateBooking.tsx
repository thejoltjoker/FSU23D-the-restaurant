import { FormEvent, useState } from "react";
import { Booking } from "../../models/Booking";
import { Customer } from "../../models/Customer";
import { ICreateBookingResponse } from "../../models/ICreateBookingResponse";
import { createBooking } from "../../services/restaurant";

const CreateBooking = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [inputValue, setInputValue] = useState<Booking>(
    new Booking(
      "65c5e43412ebb6ed53265ab9",
      "2024-01-01",
      "19:00",
      4,
      new Customer("John", "Doe", "john@example.com", "070123456789"),
    ),
  );
  const [booking, setBooking] = useState<ICreateBookingResponse>();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await createBooking(inputValue);
      setBooking(response);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  return (
    <div className="m-auto md:m-0">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="create-booking-date" className="sr-only">
            Booking
          </label>
          <input
            className="rounded-md text-pale-yellow"
            type="date"
            name="create-booking-date"
            value={inputValue.date}
            onChange={(e) =>
              setInputValue({ ...inputValue, date: e.target.value })
            }
          />
          <label htmlFor="create-booking-time" className="sr-only">
            Time
          </label>
          <select
            name="selectedTime"
            value={inputValue.time}
            onChange={(e) =>
              setInputValue({ ...inputValue, time: e.target.value })
            }
          >
            <option value="18:00">18:00</option>
            <option value="21:00">21:00</option>
          </select>
        </div>

        <div className="gap-1">
          <label htmlFor="create-booking-numberOfGuests">Guests</label>

          <input
            className="w-16 rounded-md text-pale-yellow"
            type="number"
            name="create-booking-numberOfGuests"
            min="1"
            max="6"
            placeholder="1-6"
            value={inputValue.numberOfGuests}
            onChange={(e) =>
              setInputValue({
                ...inputValue,
                numberOfGuests: +e.target.value,
              })
            }
          />
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-center">Reservation under the name of</p>
          <label htmlFor="create-booking-customer-name" className="sr-only">
            name
          </label>

          <input
            className="rounded-md text-pale-yellow"
            type="text"
            name="create-booking-customer-name"
            value={inputValue.customer.name}
            onChange={(e) => {
              const customer: Customer = {
                ...inputValue.customer,
                name: e.target.value,
              };
              setInputValue({ ...inputValue, customer });
            }}
          />

          <label htmlFor="create-booking-customer-lastname" className="sr-only">
            lastname
          </label>

          <input
            className="rounded-md text-pale-yellow"
            type="text"
            name="create-booking-customer-lastname"
            value={inputValue.customer.lastname}
            onChange={(e) => {
              const customer: Customer = {
                ...inputValue.customer,
                lastname: e.target.value,
              };
              setInputValue({ ...inputValue, customer });
            }}
          />

          <label htmlFor="create-booking-customer-email" className="sr-only">
            email
          </label>

          <input
            className="rounded-md text-pale-yellow"
            type="text"
            name="create-booking-customer-email"
            value={inputValue.customer.email}
            onChange={(e) => {
              const customer: Customer = {
                ...inputValue.customer,
                email: e.target.value,
              };
              setInputValue({ ...inputValue, customer });
            }}
          />

          <label htmlFor="create-booking-customer-phone" className="sr-only">
            phone
          </label>

          <input
            className="rounded-md text-pale-yellow"
            type="text"
            name="create-booking-customer-phone"
            value={inputValue.customer.phone}
            onChange={(e) => {
              const customer: Customer = {
                ...inputValue.customer,
                phone: e.target.value,
              };
              setInputValue({ ...inputValue, customer });
            }}
          />
        </div>

        <button disabled={isLoading} className=" button-vivid-orange">
          Send
        </button>
      </form>
      {isLoading && !isError ? (
        <p className="animate-pulse">Skickar data</p>
      ) : null}
      {isError ? <p className="text-red-500">Fel!</p> : null}
      <table>
        <tbody>
          {booking &&
            Object.entries(booking).map(([k, v]) => {
              return (
                <tr key={k}>
                  <td className="text-stone-800">{k}:</td>
                  <td className="text-vivid-orange">{v}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default CreateBooking;

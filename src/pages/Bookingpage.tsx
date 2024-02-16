import { FormEvent, useEffect, useState } from "react";
import Downloadapp from "../components/BookingComponents/BookingApp";
import Mainpic from "../components/BookingComponents/Mainpic";
import WavySection from "../components/WavySection";
import { Booking, IBooking } from "../models/Booking";
import { Customer } from "../models/Customer";
import { ICreateBookingResponse } from "../models/ICreateBookingResponse";
import { IRestaurant } from "../models/IRestaurant";
import {
  createBooking,
  getBooking,
  getRestaurant,
  restaurantId,
} from "../services/restaurant";

// Exampel på hur man kan hämta en bokning
const CreateBooking = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [inputValue, setInputValue] = useState<Booking>(
    new Booking(
      "65c5e43412ebb6ed53265ab9",
      "2024-01-01",
      "19:00",
      4,
      new Customer("John", "Doe", "john@example.com", "123456789"),
    ),
  );
  const [booking, setBooking] = useState<ICreateBookingResponse>();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await createBooking(inputValue);
      console.log(response);
      setBooking(response);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  return (
    <div>
      <h4>CreateBooking</h4>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="create-booking-date">Datum</label>
              </td>
              <td>
                <input
                  type="text"
                  name="create-booking-date"
                  value={inputValue.date}
                  onChange={(e) =>
                    setInputValue({ ...inputValue, date: e.target.value })
                  }
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="create-booking-time">Tid</label>
              </td>
              <td>
                <input
                  type="text"
                  name="create-booking-time"
                  value={inputValue.time}
                  onChange={(e) =>
                    setInputValue({ ...inputValue, time: e.target.value })
                  }
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="create-booking-numberOfGuests">
                  numberOfGuests
                </label>
              </td>
              <td>
                <input
                  type="text"
                  name="create-booking-numberOfGuests"
                  value={inputValue.numberOfGuests}
                  onChange={(e) =>
                    setInputValue({
                      ...inputValue,
                      numberOfGuests: +e.target.value,
                    })
                  }
                />
              </td>
            </tr>
            <tr>
              <td>
                <p>Customer</p>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="create-booking-customer-name">name</label>
              </td>
              <td>
                <input
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
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="create-booking-customer-lastname">
                  lastname
                </label>
              </td>
              <td>
                <input
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
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="create-booking-customer-email">email</label>
              </td>
              <td>
                <input
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
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="create-booking-customer-phone">phone</label>
              </td>
              <td>
                <input
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
              </td>
            </tr>
          </tbody>
        </table>

        <button disabled={isLoading} className="button-vivid-orange">
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

// Exampel på hur man kan hämta en bokning
const GetBooking = () => {
  const [inputValue, setInputValue] = useState("65cd2a385541b0f9094d3dc8");
  const [booking, setBooking] = useState<IBooking>();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await getBooking(inputValue);
    console.log(response);
    setBooking(response);
  };

  return (
    <div>
      <h4>GetBooking</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="button-vivid-orange">Send</button>
      </form>
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

const Bookingpage = () => {
  const [restaurant, setRestaurant] = useState<IRestaurant>();

  // Effect för att hämta restaurangdata
  useEffect(() => {
    if (restaurant) return;
    let ignore = false;
    getRestaurant(restaurantId)
      .then((response) => {
        if (!ignore) {
          console.log(response);
          setRestaurant(response);
        }
      })
      .catch((error) => console.error(error));
    return () => {
      ignore = true;
    };
  });

  return (
    <>
      <Mainpic />

      <WavySection bgColor="dark-green" top={true} bottom={false}>
        <div className=" mx-auto -mb-wave flex max-w-screen-lg flex-col justify-center bg-dark-green py-wave">
          {/* Här visas all restaurangdata */}
          <h3>Restaurant</h3>
          <table>
            <tbody>
              {restaurant &&
                Object.entries(restaurant).map(([k, v]) => {
                  return (
                    <tr key={k}>
                      <td className="text-stone-800">{k}:</td>
                      <td className="text-vivid-orange">{v}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>

          {/* Här visas bokningsdata */}
          <h3>Booking</h3>
          <GetBooking />
          <CreateBooking />
        </div>
      </WavySection>

      <WavySection bgColor="dark-green-variant" top={true} bottom={false}>
        <Downloadapp />
      </WavySection>
    </>
  );
};

export default Bookingpage;

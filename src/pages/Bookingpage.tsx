import { FormEvent, useEffect, useState } from "react";
import {
  FaConciergeBell,
  FaDirections,
  FaMapMarkerAlt,
  FaRegClock,
} from "react-icons/fa";
import Downloadapp from "../components/BookingComponents/BookingApp";
import Mainpic from "../components/BookingComponents/Mainpic";
import WavySection from "../components/WavySection";
import { Booking, IBooking } from "../models/Booking";
import { Customer } from "../models/Customer";
import { ICreateBookingResponse } from "../models/ICreateBookingResponse";
import { IRestaurant } from "../models/IRestaurant";
import {
  createBooking,
  getRestaurant,
  getRestaurantBookings,
  restaurantId,
} from "../services/restaurant";

const ResturantInfo = () => {
  return (
    <div className="m-auto  flex w-4/5 flex-col  md:m-0 md:w-1/2 ">
      <div className="gap-5 md:flex">
        <p className="flex items-center gap-1">
          <FaMapMarkerAlt className="mr-2" />
          Mexikanska gatan 1, 723 52 Stockholm
        </p>
        <p className="flex items-center">
          <FaRegClock className="mr-2" />
          <time className="">18:00 - 00:00</time>
        </p>
      </div>

      <a
        href="https://maps.app.goo.gl/Tbo8BWLwv9i9uYrG9"
        className="mr-4 flex items-center"
      >
        <FaDirections className="mr-2" />
        Get Direction
      </a>

      <button className="flex items-center">
        <FaConciergeBell className="mr-2" />
        Show Menu
      </button>

      <p className="mt-5">
        Vaca Caliente is a vibrant oasis that offers an authentic Mexican
        culinary adventure. Our name, Spanish for "Hot Cow," reflects our
        specialty in sizzling, spice-infused dishes that promise to ignite your
        taste buds and warm your soul.
      </p>
    </div>
  );
};

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
      new Customer("John", "Doe", "john@example.com", "070123456789"),
    ),
  );
  const [booking, setBooking] = useState<ICreateBookingResponse>();
  const [allBookings, setAllBookings] = useState<IBooking[]>();
  const [availableAt18, setAvailable18] = useState<boolean>(false);
  const [availableAt21, setAvailable21] = useState<boolean>(false);

  const checkAvailability = async () => {
    try {
      const bookingsList = await getRestaurantBookings(restaurantId);
      setAllBookings(bookingsList);

      if (bookingsList) {
        const matchingBookings = bookingsList.filter(
          (booking) => booking.date === inputValue.date,
        );
        const bookingsAt18 = matchingBookings.filter(
          (booking) => booking.time === "18:00",
        );
        const bookingsAt21 = matchingBookings.filter(
          (booking) => booking.time === "21:00",
        );

        if (bookingsAt18.length < 15) setAvailable18(true);
        if (bookingsAt21.length < 15) setAvailable21(true);
        if (bookingsAt18.length >= 15) setAvailable18(false);
        if (bookingsAt21.length >= 15) setAvailable21(false);
        if (
          (inputValue.time === "21:00" && availableAt21) ||
          (inputValue.time === "18:00" && availableAt18)
        ) {
          handleSubmit;
        }
      }
    } catch (error) {
      console.error("Error checking availability", error);
      throw error;
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await createBooking(inputValue);
      console.log(response);
      setBooking(response);
      setIsLoading(false);
      console.log(inputValue);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  return (
    <div className="m-auto md:m-0">
      <form onSubmit={checkAvailability} className="">
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
            name="selectedFruit"
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

// Exampel på hur man kan hämta en bokning
// const GetBooking = () => {
//   const [inputValue, setInputValue] = useState("65cd2a385541b0f9094d3dc8");
//   const [booking, setBooking] = useState<IBooking>();

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const response = await getBooking(inputValue);
//     console.log(response);
//     setBooking(response);
//   };

//   return (
//     <div>
//       <h4>GetBooking</h4>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//         />
//         <button className="button-vivid-orange">Send</button>
//       </form>
//       <table>
//         <tbody>
//           {booking &&
//             Object.entries(booking).map(([k, v]) => {
//               return (
//                 <tr key={k}>
//                   <td className="text-stone-800">{k}:</td>
//                   <td className="text-vivid-orange">{v}</td>
//                 </tr>
//               );
//             })}
//         </tbody>
//       </table>
//     </div>
//   );
// };

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
          {/* Här visas all restaurangdata
          <h3>Restaurant</h3> */}
          {/* <table>
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
          </table> */}
          {/* Här visas bokningsdata */}
          <h1 className="mb-10 text-center text-almost-white">Booking form</h1>
          <div className="flex flex-col justify-center gap-8 text-almost-white md:flex-row">
            <ResturantInfo />
            <CreateBooking />
          </div>
          {/* <GetBooking /> */}
        </div>
      </WavySection>

      <WavySection bgColor="dark-green-variant" top={true} bottom={false}>
        <Downloadapp />
      </WavySection>
    </>
  );
};

export default Bookingpage;

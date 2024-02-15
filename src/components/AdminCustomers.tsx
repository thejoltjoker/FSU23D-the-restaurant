import { useEffect, useState } from "react";
import "tailwindcss/components.css";
import { getBooking, getCustomer } from "../../services/restaurant";
import { IBooking } from "../models/Booking";
import { ICustomer } from "../models/Customer";
import WavySection from "./WavySection";

const AdminCustomers = () => {
  const [customers, setCustomers] = useState<ICustomer[]>();
  const [bookings, setBookings] = useState<IBooking[]>();

  useEffect(() => {
    if (bookings) return;
    let ignore = false;

    const fetchData = async () => {
      try {
        const response = await getBooking(bookingId);
        console.log(response);
        if (!ignore) setBookings(response);
      } catch (error) {
        console.error("Couldn't get bookings");
      }
    };
    fetchData();

    return () => {
      ignore = true;
    };
  });

  useEffect(() => {
    if (customers) return;
    let ignore = false;

    const fetchData = async () => {
      try {
        const response = await getCustomer(customerId);
        console.log(response);
        if (!ignore) setCustomers(response);
      } catch (error) {
        console.error("Couldn't get the customers");
      }
    };
    fetchData();

    return () => {
      ignore = true;
    };
  });

  return (
    <>
      <div className="-mt-wave">
        <WavySection bgColor="dark-red" top={true} bottom={true}>
          <div className=" ml-10 mr-10 bg-dark-red">
            <h1 className="mb-4 text-almost-white">Customers</h1>
            <p className="w-2/5 text-sm text-almost-white">
              Savor Mexico's finest in every taco bite at Vaca Caliente – a
              burst of flavor in every taco, a fiesta on your palate!
            </p>

            <div className="form-with-dark-red-variant-shadow">
              <div>
                <p className="text-sm text-dark-red">Customer: </p>
                <p className="text-sm text-dark-red">Name: </p>
                <p className="text-sm text-dark-red">Email: </p>
                <p className="text-sm text-dark-red">Phone: </p>
              </div>
              <div className="flex flex-col justify-around">
                <button className="button-vivid-orange">Update customer</button>
              </div>
            </div>
          </div>
        </WavySection>
      </div>
    </>
  );
};

export default AdminCustomers;

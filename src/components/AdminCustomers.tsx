import { useEffect, useState } from "react";
import "tailwindcss/components.css";
import { getBooking, getCustomer } from "../../services/restaurant";
import { IBooking } from "../models/Booking";
import { ICustomer } from "../models/Customer";
import WavySection from "./WavySection";

const AdminCustomers = () => {
  const [customers, setCustomers] = useState<ICustomer[]>([]);
  const [bookings, setBookings] = useState<IBooking[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const customerResponse = await getCustomer();
        setCustomers(customerResponse);

        const bookingResponse = await getBooking();
        setBookings(bookingResponse);
      } catch (error) {
        console.error("Error while getting customer data");
      }
    };
    fetchData();
  });

  const getCustomerIdFromBooking = (booking: IBooking): string => {
    const matchedCustomer = customers.find(
      (customer) => customer.id === booking.customerId,
    );
    if (matchedCustomer) {
      return matchedCustomer.id;
    } else {
      throw new Error("Error finding customerID");
    }
  };

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
              {customers.map((customer) => (
                <div key={matchedCustomer.id}>
                  <p className="text-sm text-dark-red">
                    Customer: {matchedCustomer.id}
                  </p>
                  <p className="text-sm text-dark-red">Name: {customer.name}</p>
                  <p className="text-sm text-dark-red">
                    Email: {customer.email}
                  </p>
                  <p className="text-sm text-dark-red">
                    Phone: {customer.phone}
                  </p>
                  <div className="flex flex-col justify-around">
                    <button className="button-vivid-orange">
                      Update customer
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </WavySection>
      </div>
    </>
  );
};

export default AdminCustomers;

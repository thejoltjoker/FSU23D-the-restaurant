import { useEffect, useState } from "react";
import "tailwindcss/components.css";
import { IBooking } from "../models/Booking";
import { ICustomer } from "../models/Customer";
import {
  getCustomer,
  getRestaurantBookings,
  restaurantId,
} from "../services/restaurant";
import WavySection from "./WavySection";

const AdminCustomers = () => {
  const [customers, setCustomers] = useState<ICustomer[]>([]);
  const [bookings, setBookings] = useState<IBooking[]>();

  useEffect(() => {
    if (bookings) return;
    let ignore = false;

    const fetchData = async () => {
      try {
        const bookingResponse = await getRestaurantBookings(restaurantId);
        if (!ignore) setBookings(bookingResponse);
        const customerIds = [
          ...new Set(bookingResponse?.map((booking) => booking.customerId)),
        ];
        const customerResponses = [];
        for (const customerId of customerIds) {
          const customerResponse = await getCustomer(customerId);
          console.log(customerResponse);
          setCustomers([...customers, customerResponse]);
          // if (customerResponse) customerResponses.push(customerResponse);
        }
        console.log(customerResponses);
        // if (!ignore) setCustomers(customerResponses);
      } catch (error) {
        console.error("Error while getting customer data");
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
              {customers?.map((customer) => (
                <div key={customer.id}>
                  <p className="text-sm text-dark-red">
                    Customer: {customer.id}
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

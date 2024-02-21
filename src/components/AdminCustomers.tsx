import { useEffect, useState } from "react";
import "tailwindcss/components.css";
import { ICustomer } from "../models/Customer";
import {
  getRestaurantCustomers,
  restaurantId,
  updateCustomer,
} from "../services/restaurant";
import AdminCustomersListItem from "./AdminCustomersListItem";
import Spinner from "./Spinner";
import WavySection from "./WavySection";

const AdminCustomers = () => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [customers, setCustomers] = useState<ICustomer[]>();
  const handleEditCustomer = async (customer: ICustomer) => {
    const { _id, ...updateBody } = customer;
    await updateCustomer({ ...updateBody, id: _id });
    setCustomers(
      customers?.map((c) => (c._id === customer._id ? customer : c)),
    );
  };
  useEffect(() => {
    if (customers) return;
    setIsLoading(true);
    let ignore = false;

    const fetchData = async () => {
      try {
        const response = await getRestaurantCustomers(restaurantId);

        if (!ignore) setCustomers(response);
        setIsLoading(false);
      } catch (error) {
        console.error("Couldn't get bookings");
        setIsError(true);
        setIsLoading(false);
      }
    };
    fetchData();

    return () => {
      ignore = true;
      setIsLoading(false);
    };
  }, [customers]);

  return (
    <>
      <div className="-mt-wave">
        <WavySection
          bgColor="dark-red"
          waveIdTop={8}
          waveIdBottom={1}
          bottom={false}
        >
          <div className="mx-auto max-w-screen-xl px-sm pb-wave-2 pt-md">
            <h2 className="mb-4 text-4xl text-almost-white">Customers</h2>
            {isError && !isLoading && <p>Something went wrong...</p>}
            {isLoading && !isError && (
              <Spinner chiliColor="dark-red">Loading...</Spinner>
            )}
            {customers?.map((customer) => (
              <AdminCustomersListItem
                key={customer._id}
                customer={customer}
                onEdit={handleEditCustomer}
              />
            ))}
          </div>
        </WavySection>
      </div>
    </>
  );
};

export default AdminCustomers;

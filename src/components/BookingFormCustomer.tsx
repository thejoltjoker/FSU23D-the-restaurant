import { Booking } from "../models/Booking";
import { Customer } from "../models/Customer";

import "./BookingForm/BookingForm.css";
interface IBookingFormCustomerProps {
  booking: Booking;
  updateCustomer: (customer: Customer) => void;
}

const BookingFormCustomer = ({
  booking,
  updateCustomer,
}: IBookingFormCustomerProps) => {
  return (
    <div className="flex flex-wrap gap-sm py-xs">
      <div className="flex shrink grow basis-1/2 flex-col gap-xs">
        <label htmlFor="first-name">First name</label>
        <input
          type="text"
          name="first-name"
          id="first-name"
          className="w-full"
          placeholder="Juan"
          value={booking.customer.name}
          onChange={(e) => {
            const customer: Customer = {
              ...booking.customer,
              name: e.target.value,
            };
            updateCustomer(customer);
          }}
        />
      </div>
      <div className="flex shrink grow basis-1/2 flex-col gap-xs">
        <label htmlFor="last-name">Last name</label>
        <input
          type="text"
          name="last-name"
          id="last-name"
          className="w-full"
          placeholder="Rodriguez"
          value={booking.customer.lastname}
          onChange={(e) => {
            const customer: Customer = {
              ...booking.customer,
              lastname: e.target.value,
            };
            updateCustomer(customer);
          }}
        />
      </div>
      <div className="flex shrink grow basis-1/2 flex-col gap-xs">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="w-full"
          value={booking.customer.email}
          onChange={(e) => {
            const customer: Customer = {
              ...booking.customer,
              email: e.target.value,
            };
            updateCustomer(customer);
          }}
        />
      </div>
      <div className="flex shrink grow basis-1/2 flex-col gap-xs">
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          className="w-full"
          value={booking.customer.phone}
          onChange={(e) => {
            const customer: Customer = {
              ...booking.customer,
              phone: e.target.value,
            };
            updateCustomer(customer);
          }}
        />
      </div>
    </div>
  );
};

export default BookingFormCustomer;

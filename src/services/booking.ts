import _ from "lodash";
import { IBooking } from "../models/Booking";

export const saveBookingsToLocalStorage = (
  bookings: IBooking[],
  replace: boolean = false,
): IBooking[] => {
  if (replace) {
    localStorage.setItem("bookings", JSON.stringify(bookings));
    return bookings;
  } else {
    const existingBookings = JSON.parse(
      localStorage.getItem("bookings") ?? "[]",
    );
    const newBookings = _.unionBy(existingBookings, bookings, "_id");
    localStorage.setItem("bookings", JSON.stringify(newBookings));
    return newBookings;
  }
};

export const saveBookingToLocalStorage = (booking: IBooking): IBooking[] => {
  const bookings = JSON.parse(localStorage.getItem("bookings") ?? "[]");
  const newBookings = [...bookings, booking];
  localStorage.setItem("bookings", JSON.stringify(newBookings));
  return newBookings;
};

export const getBookingsFromLocalStorage = (): IBooking[] => {
  const bookings = JSON.parse(localStorage.getItem("bookings") ?? "[]");
  return bookings;
};

export const getCustomerIdFromLocalStorage = (): string => {
  const customerId = localStorage.getItem("customerId") ?? "";
  return customerId;
};

export const setCustomerIdToLocalStorage = (customerId: string): string => {
  localStorage.setItem("customerId", customerId);
  return customerId;
};

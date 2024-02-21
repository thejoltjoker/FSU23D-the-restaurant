import { IBooking } from "../models/Booking";

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

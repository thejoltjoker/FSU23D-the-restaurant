import { IBooking } from "../models/Booking";
import { IUpdateBooking } from "../models/IUpdateBooking";

export const bookingToUpdateBooking = (booking: IBooking): IUpdateBooking => {
  const { _id, ...updateBody } = booking;
  return { ...updateBody, id: _id };
};

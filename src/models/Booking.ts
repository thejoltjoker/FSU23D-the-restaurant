import { Customer } from "./Customer";

export class Booking {
  constructor(
    public restaurantId: string,
    public date: string,
    public time: string,
    public numberOfGuests: number,
    public customer: Customer,
  ) {}
}

export interface IBooking {
  _id: string;
  restaurantID: string;
  date: string;
  time: string;
  numberOfGuests: number;
  customerId: string;
}

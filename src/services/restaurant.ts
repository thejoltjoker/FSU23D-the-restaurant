import { Booking, IBooking } from "../models/Booking";
import { Customer, ICustomer } from "../models/Customer";
import { ICreateBookingResponse } from "../models/ICreateBookingResponse";
import { IRestaurant } from "../models/IRestaurant";
import { get, post, put } from "./http";

export const restaurantId = "65c5e43412ebb6ed53265ab9";

export class Endpoint {
  public static baseUrl = "https://school-restaurant-api.azurewebsites.net/";
  public static createRestaurant: string = `${Endpoint.baseUrl}restaurant/create`;
  public static createBooking: string = `${Endpoint.baseUrl}booking/create`;
  public static createCustomer: string = `${Endpoint.baseUrl}customer/create`;

  constructor() {}

  public static getRestaurant(restaurantId: string) {
    return `${Endpoint.baseUrl}restaurant/${restaurantId}`;
  }

  public static getBooking(bookingId: string) {
    return `${Endpoint.baseUrl}booking/${bookingId}`;
  }

  public static getRestaurantBookings(restaurantId: string) {
    return `${Endpoint.baseUrl}booking/restaurant/${restaurantId}`;
  }

  public static updateBooking(bookingId: string) {
    return `${Endpoint.baseUrl}booking/update/${bookingId}`;
  }

  public static deleteBooking(bookingId: string) {
    return `${Endpoint.baseUrl}booking/delete/${bookingId}`;
  }

  public static getCustomer(customerId: string) {
    return `${Endpoint.baseUrl}customer/${customerId}`;
  }

  public static updateCustomer(customerId: string) {
    return `${Endpoint.baseUrl}customer/update/${customerId}`;
  }
}

export const getRestaurant = async (restaurantId: string) => {
  try {
    const response = await get<IRestaurant[]>(
      Endpoint.getRestaurant(restaurantId),
    );
    return response[0];
  } catch (error) {
    console.log("Error while getting restaurant data");
  }
};

export const getBooking = async (bookingId: string) => {
  try {
    const response = await get<IBooking[]>(Endpoint.getBooking(bookingId));
    return response[0];
  } catch (error) {
    console.log(`Error while getting booking ${bookingId}`);
  }
};

export const getRestaurantBookings = async (restaurantId: string) => {
  try {
    const response = await get<IBooking[]>(
      Endpoint.getRestaurantBookings(restaurantId),
    );
    return response;
  } catch (error) {
    console.log(`Error while getting bookings for restaurant ${restaurantId}`);
  }
};

export const createBooking = async (booking: Booking) => {
  try {
    const body = JSON.stringify(booking);
    const response = await post<ICreateBookingResponse>(
      Endpoint.createBooking,
      body,
    );
    return response;
  } catch (error) {
    console.log(
      `Error while creating booking at restaurant ${booking.restaurantId}`,
    );
  }
};

export const updateBooking = async (booking: IBooking) => {
  try {
    const body = JSON.stringify(booking);
    const response = await put(Endpoint.updateBooking(booking.id), body);
    return response;
  } catch (error) {
    console.log(`Error while updating booking ${booking.id}`);
  }
};

export const deleteBooking = async (bookingId: string) => {
  try {
    const response = await get(Endpoint.deleteBooking(bookingId));
    return response;
  } catch (error) {
    console.log(`Error while deleting booking ${bookingId}`);
  }
};

export const getCustomer = async (customerId: string) => {
  try {
    const response = await get<Customer[]>(Endpoint.getCustomer(customerId));
    return response[0];
  } catch (error) {
    console.log(`Error while getting customer ${customerId}`);
  }
};

export const getRestaurantCustomers = async (restaurantId: string) => {
  try {
    const bookings = await getRestaurantBookings(restaurantId);
    const customerIds = [
      ...new Set(bookings?.map((booking) => booking.customerId)),
    ];
    const customers = await Promise.all(
      customerIds.map((id) => getCustomer(id)),
    );
    return customers;
  } catch (error) {
    console.log(`Error while getting customers for restaurant ${restaurantId}`);
  }
};

export const createCustomer = async (customer: Customer) => {
  try {
    const body = JSON.stringify(customer);
    const response = await post<string>(Endpoint.createCustomer, body);
    return response;
  } catch (error) {
    console.log(`Error while creating customer ${customer.name}`);
  }
};

export const updateCustomer = async (customer: ICustomer) => {
  try {
    const body = JSON.stringify(customer);
    const response = await put(Endpoint.updateCustomer(customer.id), body);
    return response;
  } catch (error) {
    console.log(`Error while updating customer ${customer.id}`);
  }
};

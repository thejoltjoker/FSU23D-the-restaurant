import { IBooking } from "../models/IBooking";
import { ICustomer } from "../models/ICustomer";
import { get, post } from "./http";

const restaurantId = "65c5e43412ebb6ed53265ab9";

export class Endpoint {
  public static baseUrl = "https://school-restaurant-api.azurewebsites.net/";
  public static createRestaurant: string = `${Endpoint.baseUrl}restaurant/create`;

  constructor() {}

  public static restaurant(restaurantId: string) {
    return `${Endpoint.baseUrl}restaurant/${restaurantId}`;
  }

  public static booking(bookingId: string) {
    return `${Endpoint.baseUrl}booking/${bookingId}`;
  }
}

export const getRestaurant = async <IRestaurant>(restaurantId: string) => {
  try {
    const response = await get<IRestaurant>(Endpoint.restaurant(restaurantId));
    return response;
  } catch (error) {
    console.log("Error while getting restaurant data");
  }
};

export const getBooking = async (bookingId: string) => {
  // TODO
  const url = `${baseURL}booking/${bookingId}`;
};

export const getRestaurantBookings = async (restaurantId: string) => {
  // TODO
  const url = `${baseURL}booking/restaurant/${restaurantId}`;
};

export const createBooking = async (booking: IBooking) => {
  // TODO
  const url = `${baseURL}booking/create`;
  const body = JSON.stringify(booking);
  post(url, body);
};

export const updateBooking = async (bookingId: string) => {
  // TODO
  const url = `${baseURL}booking/update/${restaurantId}`;
};

export const deleteBooking = async (bookingId: string) => {
  // TODO
  const url = `${baseURL}booking/delete/${restaurantId}`;
};

export const getCustomer = async (customerId: string) => {
  // TODO
  const url = `${baseURL}customer/${customerId}`;
};
export const createCustomer = async (customer: ICustomer) => {
  // TODO
  const url = `${baseURL}customer/create`;
};
export const updateCustomer = async (customerId: string) => {
  // TODO
  const url = `${baseURL}customer/update/${customerId}`;
};

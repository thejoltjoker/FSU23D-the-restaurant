import { IBooking } from "../models/IBooking";
import { get, post } from "./http";

const baseURL = "https://school-restaurant-api.azurewebsites.net/";
const restaurantId = "65c5e43412ebb6ed53265ab9";

export const getRestaurant = async () => {
  const url = `${baseURL}restaurant/${restaurantId}`;

  try {
    const response = await get(url);
    return response;
  } catch (error) {
    console.log("Error while getting restaurant data");
  }
};

export const createBooking = async (booking: IBooking) => {
  const url = `${baseURL}booking/create`;
  const body = JSON.stringify(booking);

  post(url, body);
};

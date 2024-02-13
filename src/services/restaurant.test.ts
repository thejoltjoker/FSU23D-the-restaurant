import { Endpoint } from "./restaurant";

describe("Endpoint", () => {
  it("should have the correct baseUrl", () => {
    expect(Endpoint.baseUrl).toBe(
      "https://school-restaurant-api.azurewebsites.net/",
    );
  });

  it("should generate the correct get restaurant url", () => {
    const restaurantId = "test-id";

    const url = Endpoint.restaurant(restaurantId);

    expect(url).toBe(
      `https://school-restaurant-api.azurewebsites.net/restaurant/${restaurantId}`,
    );
  });

  it("should return the create restaurant url", () => {
    const url = Endpoint.createRestaurant;

    expect(url).toBe(
      `https://school-restaurant-api.azurewebsites.net/restaurant/create`,
    );
  });

  it("should generate the correct get booking url", () => {
    const bookingId = "test-booking-id";
    const url = Endpoint.booking(bookingId);

    expect(url).toBe(
      `https://school-restaurant-api.azurewebsites.net/booking/${bookingId}`,
    );
  });
});

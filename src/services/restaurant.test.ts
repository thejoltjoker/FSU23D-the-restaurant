import { Endpoint } from "./restaurant";

describe("Endpoint", () => {
  it("should have the correct baseUrl", () => {
    expect(Endpoint.baseUrl).toBe(
      "https://school-restaurant-api.azurewebsites.net/",
    );
  });

  it("should generate the correct get restaurant url", () => {
    const restaurantId = "test-id";

    const url = Endpoint.getRestaurant(restaurantId);

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
    const url = Endpoint.getBooking(bookingId);

    expect(url).toBe(
      `https://school-restaurant-api.azurewebsites.net/booking/${bookingId}`,
    );
  });

  it("should generate the correct get restaurant bookings url", () => {
    const restaurantId = "restaurant-id";
    const url = Endpoint.getRestaurantBookings(restaurantId);

    expect(url).toBe(
      `https://school-restaurant-api.azurewebsites.net/booking/restaurant/${restaurantId}`,
    );
  });

  it("should return the correct create booking url", () => {
    const url = Endpoint.createBooking;

    expect(url).toBe(
      `https://school-restaurant-api.azurewebsites.net/booking/create`,
    );
  });

  it("should generate the correct update booking url", () => {
    const bookingId = "booking-id";
    const url = Endpoint.updateBooking(bookingId);

    expect(url).toBe(
      `https://school-restaurant-api.azurewebsites.net/booking/update/${bookingId}`,
    );
  });

  it("should generate the correct delete booking url", () => {
    const bookingId = "booking-id";
    const url = Endpoint.deleteBooking(bookingId);

    expect(url).toBe(
      `https://school-restaurant-api.azurewebsites.net/booking/delete/${bookingId}`,
    );
  });

  it("should generate the correct get customer url", () => {
    const customerId = "customer-id";
    const url = Endpoint.getCustomer(customerId);

    expect(url).toBe(
      `https://school-restaurant-api.azurewebsites.net/customer/${customerId}`,
    );
  });

  it("should return the correct create customer url", () => {
    const url = Endpoint.createCustomer;

    expect(url).toBe(
      `https://school-restaurant-api.azurewebsites.net/customer/create`,
    );
  });

  it("should generate the correct update customer url", () => {
    const customerId = "customer-id";
    const url = Endpoint.updateCustomer(customerId);

    expect(url).toBe(
      `https://school-restaurant-api.azurewebsites.net/customer/update/${customerId}`,
    );
  });
});

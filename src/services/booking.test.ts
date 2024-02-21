import { IBooking } from "../models/Booking";
import { saveBookingToLocalStorage } from "./booking";
import { restaurantId } from "./restaurant";

describe("booking module", () => {
  afterEach(() => {
    localStorage.clear();
  });

  describe("saveBookingToLocalStorage function", () => {
    it("should save given booking data to localStorage", () => {
      const booking: IBooking = {
        _id: "65d32905901c7dd7154906d5",
        restaurantId: restaurantId,
        date: "2000-01-01",
        time: "18:00",
        numberOfGuests: 4,
        customerId: "65d32905901c7dd7154906d4",
      };

      saveBookingToLocalStorage(booking);

      const retrievedFromLocalStorage = JSON.parse(
        localStorage.getItem("bookings") ?? "",
      );
      expect(retrievedFromLocalStorage).toStrictEqual([booking]);
    });

    it("should append booking to existing localStorage", () => {
      const bookings = [
        {
          _id: "65d32905901c7dd71549v7dd",
          restaurantId: restaurantId,
          date: "2000-01-01",
          time: "21:00",
          numberOfGuests: 10,
          customerId: "65d32905901c7dd7154958cj",
        },
      ];

      localStorage.setItem("bookings", JSON.stringify(bookings));

      const booking: IBooking = {
        _id: "65d32905901c7dd7154906d5",
        restaurantId: restaurantId,
        date: "2000-01-01",
        time: "18:00",
        numberOfGuests: 4,
        customerId: "65d32905901c7dd7154906d4",
      };

      saveBookingToLocalStorage(booking);

      const retrievedFromLocalStorage = JSON.parse(
        localStorage.getItem("bookings") ?? "",
      );
      expect(retrievedFromLocalStorage).toStrictEqual([...bookings, booking]);
    });

    it("should return all bookings from localStorage", () => {
      const bookings = [
        {
          _id: "65d32905901c7dd71549v7dd",
          restaurantId: restaurantId,
          date: "2000-01-01",
          time: "21:00",
          numberOfGuests: 10,
          customerId: "65d32905901c7dd7154958cj",
        },
      ];

      localStorage.setItem("bookings", JSON.stringify(bookings));

      const booking: IBooking = {
        _id: "65d32905901c7dd7154906d5",
        restaurantId: restaurantId,
        date: "2000-01-01",
        time: "18:00",
        numberOfGuests: 4,
        customerId: "65d32905901c7dd7154906d4",
      };

      const result = saveBookingToLocalStorage(booking);

      expect(result).toStrictEqual([...bookings, booking]);
    });
  });
});

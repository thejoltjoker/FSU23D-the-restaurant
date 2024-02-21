import { IBooking } from "../models/Booking";
import {
  getCustomerIdFromLocalStorage,
  saveBookingToLocalStorage,
  saveBookingsToLocalStorage,
  setCustomerIdToLocalStorage,
} from "./booking";
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

  describe("saveBookingsToLocalStorage function", () => {
    it("should save given bookings data to localStorage", () => {
      const bookings: IBooking[] = [
        {
          _id: "65d32905901c7dd7154906d5",
          restaurantId: restaurantId,
          date: "2000-01-01",
          time: "18:00",
          numberOfGuests: 4,
          customerId: "65d32905901c7dd7154906d4",
        },
      ];

      saveBookingsToLocalStorage(bookings);

      const retrievedFromLocalStorage = JSON.parse(
        localStorage.getItem("bookings") ?? "",
      );
      expect(retrievedFromLocalStorage).toStrictEqual(bookings);
    });

    it("should append bookings to existing localStorage", () => {
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

      const newBookings: IBooking[] = [
        {
          _id: "65d32905901c7dd7154906d5",
          restaurantId: restaurantId,
          date: "2000-01-01",
          time: "18:00",
          numberOfGuests: 4,
          customerId: "65d32905901c7dd7154906d4",
        },
      ];

      saveBookingsToLocalStorage(newBookings);

      const retrievedFromLocalStorage = JSON.parse(
        localStorage.getItem("bookings") ?? "",
      );
      expect(retrievedFromLocalStorage).toStrictEqual([
        ...bookings,
        ...newBookings,
      ]);
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

      const newBookings: IBooking[] = [
        {
          _id: "65d32905901c7dd7154906d5",
          restaurantId: restaurantId,
          date: "2000-01-01",
          time: "18:00",
          numberOfGuests: 4,
          customerId: "65d32905901c7dd7154906d4",
        },
      ];

      const result = saveBookingsToLocalStorage(newBookings);

      expect(result).toStrictEqual([...bookings, ...newBookings]);
    });

    it("should not save duplicate bookings", () => {
      const bookings = [
        {
          _id: "65d32905901c7dd71549v7dd",
          restaurantId: restaurantId,
          date: "2000-01-01",
          time: "21:00",
          numberOfGuests: 10,
          customerId: "65d32905901c7dd7154958cj",
        },
        {
          _id: "65d32905901c7dd7154906d5",
          restaurantId: restaurantId,
          date: "2000-01-01",
          time: "18:00",
          numberOfGuests: 4,
          customerId: "65d32905901c7dd7154906d4",
        },
      ];

      localStorage.setItem("bookings", JSON.stringify(bookings));

      const newBookings: IBooking[] = [
        {
          _id: "65d32905901c7dd7154906d5",
          restaurantId: restaurantId,
          date: "2000-01-01",
          time: "18:00",
          numberOfGuests: 4,
          customerId: "65d32905901c7dd7154906d4",
        },
      ];

      const result = saveBookingsToLocalStorage(newBookings);

      expect(result).toStrictEqual(bookings);

      const retrievedFromLocalStorage = JSON.parse(
        localStorage.getItem("bookings") ?? "",
      );
      expect(retrievedFromLocalStorage).toStrictEqual(bookings);
    });
  });

  describe("getCustomerIdFromLocalStorage function", () => {
    it("should return a customerId string from localStorage if there is one", () => {
      const customerId = "test-id";
      localStorage.setItem("customerId", customerId);
      const result = getCustomerIdFromLocalStorage();
      expect(result).toStrictEqual(customerId);
    });
    it("should return an empty string if no customerId", () => {
      localStorage.clear();
      const result = getCustomerIdFromLocalStorage();
      expect(result).toStrictEqual("");
    });
  });

  describe("setCustomerIdToLocalStorage function", () => {
    it("should set a customerId string to localStorage", () => {
      const customerId = "test-id";
      setCustomerIdToLocalStorage(customerId);
      const result = localStorage.getItem("customerId");
      expect(result).toStrictEqual(customerId);
    });
  });
});

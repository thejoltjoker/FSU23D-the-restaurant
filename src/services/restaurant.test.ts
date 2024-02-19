import axios from "axios";
import { Mock, vi } from "vitest";
import { TimeSlots } from "../models/TimeSlots";
import {
  Endpoint,
  getAvailableTables,
  getAvailableTimeSlots,
  getRestaurantBookings,
} from "./restaurant";

vi.mock("axios");

describe("restaurant service", () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  describe("getRestaurantBookings function", () => {
    it("should return the bookings for the given restaurant id", async () => {
      const restaurantId = "65cd4b5c36d71723f5b8d515";
      const mockData = [
        {
          _id: "65d328f79e299a6dae545c58",
          restaurantId: restaurantId,
          date: "2000-01-01",
          time: TimeSlots.Six,
          numberOfGuests: 4,
          customerId: "65cd2dc8340ab2862be405c5",
        },
        {
          _id: "65d32905901c7dd7154906d5",
          restaurantId: restaurantId,
          date: "2000-01-01",
          time: TimeSlots.Six,
          numberOfGuests: 4,
          customerId: "65d32905901c7dd7154906d4",
        },
        {
          _id: "65d3291f9e299a6dae545c5b",
          restaurantId: restaurantId,
          date: "2000-01-01",
          time: TimeSlots.Six,
          numberOfGuests: 7,
          customerId: "65d3291f9e299a6dae545c5a",
        },
      ];
      (axios.get as Mock).mockResolvedValue({ data: mockData });

      const result = await getRestaurantBookings(restaurantId);

      expect(result).toEqual(mockData);
    });
  });

  describe("getAvailableTables function", () => {
    it("should return the correct amount of available tables for 19:00", async () => {
      const restaurantId = "65cd4b5c36d71723f5b8d515";
      const mockData = [
        {
          _id: "65d328f79e299a6dae545c51",
          restaurantId: restaurantId,
          date: "2000-01-01",
          time: TimeSlots.Six,
          numberOfGuests: 1,
          customerId: "65cd2dc8340ab2862be40523",
        },
        {
          _id: "65d328f79e299a6dae545c55",
          restaurantId: restaurantId,
          date: "2000-01-01",
          time: TimeSlots.Six,
          numberOfGuests: 1,
          customerId: "65cd2dc8340ab2862be405c0",
        },
        {
          _id: "65d328f79e299a6dae545c25",
          restaurantId: restaurantId,
          date: "2000-01-01",
          time: TimeSlots.Nine,
          numberOfGuests: 1,
          customerId: "65cd2dc8340ab2862ce405c8",
        },
      ];
      (axios.get as Mock).mockResolvedValue({ data: mockData });

      const result = await getAvailableTables(
        "65cd4b5c36d71723f5b8d515",
        "2000-01-01",
        TimeSlots.Six,
      );

      expect(result).toEqual(13);
    });
    it("should return the correct amount of available tables for 21:00", async () => {
      const restaurantId = "65cd4b5c36d71723f5b8d515";
      const mockData = [
        {
          _id: "65d328f79e299a6dae545c51",
          restaurantId: restaurantId,
          date: "2000-01-01",
          time: TimeSlots.Six,
          numberOfGuests: 1,
          customerId: "65cd2dc8340ab2862be405c5",
        },
        {
          _id: "65d328f79e299a6dae545c55",
          restaurantId: restaurantId,
          date: "2000-01-01",
          time: TimeSlots.Six,
          numberOfGuests: 1,
          customerId: "65cd2dc8340ab2862be405c5",
        },
        {
          _id: "65d328f79e299a6dae545c25",
          restaurantId: restaurantId,
          date: "2000-01-01",
          time: TimeSlots.Nine,
          numberOfGuests: 3,
          customerId: "65cd2dc8340ab2862be405c5",
        },
      ];
      (axios.get as Mock).mockResolvedValue({ data: mockData });

      const result = await getAvailableTables(
        restaurantId,
        "2000-01-01",
        TimeSlots.Nine,
      );

      expect(result).toEqual(14);
    });
    it("should return the correct amount of available tables when more than one table per booking", async () => {
      const restaurantId = "65cd4b5c36d71723f5b8d515";
      const mockData = [
        {
          _id: "65d328f79e299a6dae545c58",
          restaurantId: restaurantId,
          date: "2000-01-01",
          time: TimeSlots.Six,
          numberOfGuests: 4,
          customerId: "65cd2dc8340ab2862be405c5",
        },
        {
          _id: "65d32905901c7dd7154906d5",
          restaurantId: restaurantId,
          date: "2000-01-01",
          time: TimeSlots.Six,
          numberOfGuests: 7,
          customerId: "65d32905901c7dd7154906d4",
        },
        {
          _id: "65d3291f9e299a6dae545c5b",
          restaurantId: restaurantId,
          date: "2000-01-01",
          time: TimeSlots.Six,
          numberOfGuests: 12,
          customerId: "65d3291f9e299a6dae545c5a",
        },
        {
          _id: "65d3291f9e299a6dae545c5b",
          restaurantId: restaurantId,
          date: "2000-01-01",
          time: TimeSlots.Six,
          numberOfGuests: 19,
          customerId: "65d3291f9e299a6dae545c5a",
        },
      ];
      (axios.get as Mock).mockResolvedValue({ data: mockData });

      const result = await getAvailableTables(
        restaurantId,
        "2000-01-01",
        TimeSlots.Six,
      );

      expect(result).toEqual(6);
    });
    it("should return 0 when all tables are booked", async () => {
      const restaurantId = "65cd4b5c36d71723f5b8d515";
      const mockData = [
        {
          _id: "65d328f79e299a6dae545c58",
          restaurantId: restaurantId,
          date: "2000-01-01",
          time: TimeSlots.Six,
          numberOfGuests: 1,
          customerId: "65cd2dc8340ab2862be405c5",
        },
        {
          _id: "65d32905901c7dd7154906d5",
          restaurantId: restaurantId,
          date: "2000-01-01",
          time: TimeSlots.Six,
          numberOfGuests: 2,
          customerId: "65d32905901c7dd7154906d4",
        },
        {
          _id: "65d3291f9e299a6dae545c5b",
          restaurantId: restaurantId,
          date: "2000-01-01",
          time: TimeSlots.Six,
          numberOfGuests: 3,
          customerId: "65d3291f9e299a6dae545c63",
        },
        {
          _id: "65d3291f9e299a6dae545c5b",
          restaurantId: restaurantId,
          date: "2000-01-01",
          time: TimeSlots.Six,
          numberOfGuests: 6,
          customerId: "65d3291f9e299a6dae545c86",
        },
        {
          _id: "65d3291f9e299a6dae545c5b",
          restaurantId: restaurantId,
          date: "2000-01-01",
          time: TimeSlots.Six,
          numberOfGuests: 6,
          customerId: "65d3291f9e299a6dae545c22",
        },
        {
          _id: "65d3291f9e299a6dae545c5b",
          restaurantId: restaurantId,
          date: "2000-01-01",
          time: TimeSlots.Six,
          numberOfGuests: 6,
          customerId: "65d3291f9e299a6dae545c92",
        },
        {
          _id: "65d3291f9e299a6dae545c5b",
          restaurantId: restaurantId,
          date: "2000-01-01",
          time: TimeSlots.Six,
          numberOfGuests: 6,
          customerId: "65d3291f9e299a6dae545052",
        },
        {
          _id: "65d3291f9e299a6dae545c5b",
          restaurantId: restaurantId,
          date: "2000-01-01",
          time: TimeSlots.Six,
          numberOfGuests: 6,
          customerId: "65d3291f9e299a6dae545vve",
        },
        {
          _id: "65d3291f9e299a6dae545c5b",
          restaurantId: restaurantId,
          date: "2000-01-01",
          time: TimeSlots.Six,
          numberOfGuests: 6,
          customerId: "65d3291f9e299a6dae545c5a",
        },
        {
          _id: "65d3291f9e299a6dae545c5b",
          restaurantId: restaurantId,
          date: "2000-01-01",
          time: TimeSlots.Six,
          numberOfGuests: 6,
          customerId: "65d3291f9e299a6dae545c5a",
        },
        {
          _id: "65d3291f9e299a6dae545c5b",
          restaurantId: restaurantId,
          date: "2000-01-01",
          time: TimeSlots.Six,
          numberOfGuests: 6,
          customerId: "65d3291f9e299a6dae545c5a",
        },
        {
          _id: "65d3291f9e299a6dae545c5b",
          restaurantId: restaurantId,
          date: "2000-01-01",
          time: TimeSlots.Six,
          numberOfGuests: 6,
          customerId: "65d3291f9e299a6dae545c5a",
        },
        {
          _id: "65d3291f9e299a6dae545c5b",
          restaurantId: restaurantId,
          date: "2000-01-01",
          time: TimeSlots.Six,
          numberOfGuests: 6,
          customerId: "65d3291f9e299a6dae545c5a",
        },
        {
          _id: "65d3291f9e299a6dae545c5b",
          restaurantId: restaurantId,
          date: "2000-01-01",
          time: TimeSlots.Six,
          numberOfGuests: 6,
          customerId: "65d3291f9e299a6dae545c5a",
        },
        {
          _id: "65d3291f9e299a6dae545c5b",
          restaurantId: restaurantId,
          date: "2000-01-01",
          time: TimeSlots.Six,
          numberOfGuests: 6,
          customerId: "65d3291f9e299a6dae545c5a",
        },
      ];
      (axios.get as Mock).mockResolvedValue({ data: mockData });

      const result = await getAvailableTables(
        restaurantId,
        "2000-01-01",
        TimeSlots.Six,
      );

      expect(result).toEqual(0);
    });
  });

  describe("getAvailableTimeSlots function", () => {
    it("should return both time slots when they have tables available", async () => {
      const restaurantId = "65cd4b5c36d71723f5b8d515";
      const mockData = [
        {
          _id: "65d328f79e299a6dae545c51",
          restaurantId: restaurantId,
          date: "2000-01-01",
          time: TimeSlots.Nine,
          numberOfGuests: 2,
          customerId: "65cd2dc8340ab2862be40523",
        },
        {
          _id: "65d328f79e299a6dae545c25",
          restaurantId: restaurantId,
          date: "2000-01-01",
          time: TimeSlots.Six,
          numberOfGuests: 1,
          customerId: "65cd2dc8340ab2862ce405c8",
        },
      ];
      (axios.get as Mock).mockResolvedValue({ data: mockData });

      const result = await getAvailableTimeSlots(
        "65cd4b5c36d71723f5b8d515",
        "2000-01-01",
        4,
      );

      expect(result).toStrictEqual(Object.values(TimeSlots));
    });
    it("should return only time slot 18:00 when 21:00 is full", async () => {
      const restaurantId = "65cd4b5c36d71723f5b8d515";
      const mockData = [
        {
          _id: "65d328f79e299a6dae545c51",
          restaurantId: restaurantId,
          date: "2000-01-01",
          time: TimeSlots.Nine,
          numberOfGuests: 90,
          customerId: "65cd2dc8340ab2862be40523",
        },
        {
          _id: "65d328f79e299a6dae545c25",
          restaurantId: restaurantId,
          date: "2000-01-01",
          time: TimeSlots.Six,
          numberOfGuests: 1,
          customerId: "65cd2dc8340ab2862ce405c8",
        },
      ];
      (axios.get as Mock).mockResolvedValue({ data: mockData });

      const result = await getAvailableTimeSlots(
        "65cd4b5c36d71723f5b8d515",
        "2000-01-01",
        8,
      );

      expect(result).toStrictEqual([TimeSlots.Six]);
    });
    it("should return only time slot 21:00 when 18:00 is full", async () => {
      const restaurantId = "65cd4b5c36d71723f5b8d515";
      const mockData = [
        {
          _id: "65d328f79e299a6dae545c51",
          restaurantId: restaurantId,
          date: "2000-01-01",
          time: TimeSlots.Six,
          numberOfGuests: 90,
          customerId: "65cd2dc8340ab2862be40523",
        },
        {
          _id: "65d328f79e299a6dae545c25",
          restaurantId: restaurantId,
          date: "2000-01-01",
          time: TimeSlots.Nine,
          numberOfGuests: 9,
          customerId: "65cd2dc8340ab2862ce405c8",
        },
        {
          _id: "65d328f79e299a6dae545c25",
          restaurantId: restaurantId,
          date: "2000-01-01",
          time: TimeSlots.Nine,
          numberOfGuests: 4,
          customerId: "65cd2dc8340ab2862ce405c8",
        },
      ];
      (axios.get as Mock).mockResolvedValue({ data: mockData });

      const result = await getAvailableTimeSlots(
        "65cd4b5c36d71723f5b8d515",
        "2000-01-01",
        3,
      );

      expect(result).toStrictEqual([TimeSlots.Nine]);
    });
    it("should return an empty array when all time slots are full", async () => {
      const restaurantId = "65cd4b5c36d71723f5b8d515";
      const mockData = [
        {
          _id: "65d328f79e299a6dae545c51",
          restaurantId: restaurantId,
          date: "2000-01-01",
          time: TimeSlots.Nine,
          numberOfGuests: 90,
          customerId: "65cd2dc8340ab2862be40523",
        },
        {
          _id: "65d328f79e299a6dae545c25",
          restaurantId: restaurantId,
          date: "2000-01-01",
          time: TimeSlots.Six,
          numberOfGuests: 90,
          customerId: "65cd2dc8340ab2862ce405c8",
        },
      ];
      (axios.get as Mock).mockResolvedValue({ data: mockData });

      const result = await getAvailableTimeSlots(
        "65cd4b5c36d71723f5b8d515",
        "2000-01-01",
        8,
      );

      expect(result).toStrictEqual([]);
    });
    it("should return an empty array when trying to book more tables than available", async () => {
      const restaurantId = "65cd4b5c36d71723f5b8d515";
      const mockData = [
        {
          _id: "65d328f79e299a6dae545c51",
          restaurantId: restaurantId,
          date: "2000-01-01",
          time: TimeSlots.Nine,
          numberOfGuests: 85,
          customerId: "65cd2dc8340ab2862be40523",
        },
        {
          _id: "65d328f79e299a6dae545c25",
          restaurantId: restaurantId,
          date: "2000-01-01",
          time: TimeSlots.Six,
          numberOfGuests: 85,
          customerId: "65cd2dc8340ab2862ce405c8",
        },
      ];
      (axios.get as Mock).mockResolvedValue({ data: mockData });

      const result = await getAvailableTimeSlots(
        "65cd4b5c36d71723f5b8d515",
        "2000-01-01",
        8,
      );

      expect(result).toStrictEqual([]);
    });
  });

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
});

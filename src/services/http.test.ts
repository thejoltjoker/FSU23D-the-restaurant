import axios from "axios";
import { Mock, vi } from "vitest";
import { get } from "./http";

vi.mock("axios");

describe("crud functions", () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  describe("get", () => {
    it("fetches data successfully using axios", async () => {
      const url = "http://example.com";
      const mockData = { data: "mock data" };
      (axios.get as Mock).mockResolvedValue({ data: mockData });

      const result = await get<string>(url);

      expect(result).toEqual(mockData);
      expect(axios.get).toHaveBeenCalledWith(url, {
        headers: { Accept: "application/json" },
      });
    });

    it("handles errors in request", async () => {
      const url = "http://example.com/404";
      const error = new Error("Mock error");
      (axios.get as Mock).mockRejectedValue(error);

      await expect(get(url)).rejects.toThrow(error);
      expect(axios.get).toHaveBeenCalledWith(url, {
        headers: { Accept: "application/json" },
      });
    });
  });
});

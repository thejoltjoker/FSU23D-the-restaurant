import axios from "axios";

export const get = async <T>(url: string) => {
  const headersList = {
    Accept: "application/json",
  };
  try {
    const response = await axios.get<T>(url, { headers: headersList });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(`Error while fetching data from ${url}`, error.message);
    } else {
      console.error(`Error while fetching data from ${url}`, error);
    }
    throw error;
  }
};

export const post = async <T>(url: string, body: string) => {
  const headersList = {
    accept: "application/json",
    "Content-Type": "application/json",
  };
  try {
    const response = await axios.post<T>(url, body, { headers: headersList });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(`Error while posting data to ${url}`, error.message);
    } else {
      console.error(`Error while posting data to ${url}`, error);
    }
    throw error;
  }
};

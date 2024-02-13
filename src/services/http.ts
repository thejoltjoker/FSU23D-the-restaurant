import axios from "axios";

const handleError = (method: string, url: string, error: unknown) => {
  if (axios.isAxiosError(error)) {
    console.error(
      `Error while performing ${method} request to ${url}`,
      error.message,
    );
  } else {
    console.error(`Error while performing ${method} request to ${url}`, error);
  }
};

export const get = async <T>(url: string) => {
  const headers = {
    Accept: "application/json",
  };
  try {
    const response = await axios.get<T>(url, { headers: headers });
    return response.data;
  } catch (error) {
    handleError("GET", url, error);
    throw error;
  }
};

export const post = async <T>(url: string, body: string) => {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  try {
    const response = await axios.post<T>(url, body, { headers: headers });
    return response.data;
  } catch (error) {
    handleError("POST", url, error);
    throw error;
  }
};

export const put = async <T>(url: string, body: string) => {
  const headers = {
    Accept: "*/*",
    "Content-Type": "application/json",
  };
  try {
    const response = await axios.put<T>(url, body, { headers: headers });
    return response.data;
  } catch (error) {
    handleError("PUT", url, error);
    throw error;
  }
};

export const remove = async <T>(url: string) => {
  const headers = {
    Accept: "*/*",
  };
  try {
    const response = await axios.delete<T>(url, { headers: headers });
    return response.data;
  } catch (error) {
    handleError("DELETE", url, error);
    throw error;
  }
};

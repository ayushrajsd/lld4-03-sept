import { axiosInstance } from ".";

export const makePayment = async (token, amount) => {
  try {
    const response = await axiosInstance.post("/api/bookings/make-payment", {
      token,
      amount,
    });
    return response.data;
  } catch (error) {
    return error.response;
  }
};

export const bookShow = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/api/bookings/book-show",
      payload
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
    return err.response;
  }
};

export const getAllBookings = async (payload) => {
  try {
    const response = await axiosInstance.get(
      `/api/bookings/get-all-bookings/${payload.userId}`
    );
    return response.data;
  } catch (err) {
    return err.response;
  }
};

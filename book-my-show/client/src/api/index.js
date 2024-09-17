import axios from "axios";

const token = localStorage.getItem("token");

export const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

// add a request interceptor

axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;

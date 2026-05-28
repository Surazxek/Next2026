import axios from "axios";
import { AppConfig } from "./AppConfig";
// import {cookies} from "next/headers"
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: `${AppConfig.baseUrl}`,
  timeout: 30000,
  timeoutErrorMessage: "Server timed out",
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = Cookies.get("_nxt_at_60");
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// axiosInstance.interceptors.request.use(async(config) => {
//     const token  = (await cookies()).get("_nxt_at_60")
//     console.log(token)
//     return config
// })

// interceptors

axiosInstance.interceptors.response.use(
  (success) => success.data,
  (error) => {
    if (error.response) {
      throw error.response.data;
    } else {
      throw error.message;
    }
  },
);

export default axiosInstance;

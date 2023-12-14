import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.REACT_APP_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;

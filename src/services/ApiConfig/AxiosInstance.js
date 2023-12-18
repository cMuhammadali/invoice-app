import axios from "axios";

const token = localStorage.getItem("token");

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_URL,
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});

// axiosInstance.interceptors.request.use(
//   function (request) {
//     request.headers.common["Authorization"] = `Bearer ${token}`;
//     console.log(request);
//     return request;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );

// axiosInstance.interceptors.response.use(
//   function (response) {
//     console.log(response);
//     return response;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;

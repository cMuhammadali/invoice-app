import axios from "axios";

const instance = axios.create({
  baseURL: "https://invoices.hryordamchi.uz",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;

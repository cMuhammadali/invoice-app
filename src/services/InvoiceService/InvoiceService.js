import axiosInstance from "../ApiConfig/AxiosInstance";

export const createInvoice = async (invoiceData) => {
  const response = await axiosInstance.post("/invoices", invoiceData);
  return response.data;
};

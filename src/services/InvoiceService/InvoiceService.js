import axiosInstance from "../ApiConfig/AxiosInstance";

export const getInvoices = async () => {
  try {
    const response = await axiosInstance.get("/invoices");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createInvoice = async (invoiceData) => {
  try {
    const response = await axiosInstance.post("/invoices", invoiceData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

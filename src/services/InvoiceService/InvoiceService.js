import axiosInstance from "../ApiConfig/AxiosInstance";

export const getInvoices = async () => {
  try {
    const response = await axiosInstance.get("/invoices");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getOneInvoices = async (id) => {
  try {
    const response = await axiosInstance.get(`/invoices/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createInvoice = async (invoiceData) => {
  try {
    const response = await axiosInstance.post("/invoices", invoiceData);
    console.log('response 1 =>', response);
    return response;
  } catch (error) {
    throw error;
  }
};

export const deleteInvoice = async (id) => {
  try {
    const response = await axiosInstance.delete(`/invoices/${id}`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const patchInvoice = async (id, invoiceDate) => {
  console.log("invoiceDate patch service =>", invoiceDate);
  try {
    const response = await axiosInstance.patch(`/invoices/${id}`);
    console.log('response patch =>', response);
    return response.data;
  } catch (error) {
    throw error;
  }
};

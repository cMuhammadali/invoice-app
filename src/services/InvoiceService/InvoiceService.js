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
    console.log("response 1 =>", response);
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

export const patchInvoice = async (id) => {
  try {
    const response = await axiosInstance.patch(`/invoices/${id}`, {
      paid: true,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const putInvoice = async (id, invoiceData, paid) => {
  try {
    const response = await axiosInstance.put(`/invoices/${id}`, {
      userId: localStorage.getItem("id"),
      email: invoiceData?.clientEmail,
      paid: paid,
      dueDate: "2023-12-12",
      to: invoiceData?.clientName,
      description: invoiceData?.clientDesc,
      price: invoiceData?.price,
      term: 7,
    });
    return response.data;
  } catch (error) {
    console.log("error put service", error);
    throw error;
  }
};

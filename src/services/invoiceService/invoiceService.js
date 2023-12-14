import instance from "../instance/instance";

export const createInvoice = async (invoiceData) => {
  const response = await instance.post("/invoices", invoiceData);
  return response.data;
};

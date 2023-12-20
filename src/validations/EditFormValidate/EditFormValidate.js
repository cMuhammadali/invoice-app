import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  clientName: Yup.string()
    .min(3, "Name must contain 3 characters")
    .max(50, "Name must be at most 50 characters")
    .required("Can't be empty"),
  clientDueDate: Yup.date().required("Can't be empty"),
  clientEmail: Yup.string()
    .email("Invalid email address")
    .required("Can't be empty"),
  clientPaymentTerms: Yup.string().required("Can't be empty"),
  clientDesc: Yup.string().required("Can't be empty"),
  price: Yup.number()
    .min(100, "Must be at least 100")
    .max(1000, "Must be less than 1000")
    .required("Can't be empty"),
});

export default validationSchema;

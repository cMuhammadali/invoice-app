import * as Yup from "yup";

const validationSchemaLogin = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Can't be empty"),
  password: Yup.string()
    .min(3, "Password must contain 3 characters")
    .max(15, "Password must be at most 15 characters")
    .required("Can't be empty"),
});

export default validationSchemaLogin;

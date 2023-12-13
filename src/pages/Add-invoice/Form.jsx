import LabelForm from "../../components/LabelComponent/LabelForm.jsx";
import ErrorForm from "../../components/ErrorForm/ErrorForm.jsx";
import { InputComponent } from "../../components/index.js";
import { DatePicker, Select } from "formik-antd";
import { todoSlice } from "../../store/Store.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import "./Form.css";

export default function FormAdd() {
  const validationSchemaAddInvoice = Yup.object().shape({
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
      .min(100, "Must be at least 100").max(1000, "Must be less than 1000")
      .required("Can't be empty"),
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function goBack() {
    navigate(-1);
  }

  return (
    <div
      className="w-full h-3/6 bg-white rounded-md"
      style={{ paddingBottom: "32px", paddingTop: "32px" }}
    >
      <div className="px-8">
        <h1 className="font-bold font-spartan text-3xl">New Invoice</h1>
        <Formik
          initialValues={{
            clientEmail: "",
            clientName: "",
            clientDueDate: null,
            clientPaymentTerms: "",
            clientDesc: "",
            price: null,
          }}
          validationSchema={validationSchemaAddInvoice}
          onSubmit={(values) => {
            console.log("values =>", values);
            dispatch(
              todoSlice.actions.addTodo({
                values,
              })
            );
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            isValid,
            handleSubmit,
            dirty,
          }) => (
            <Form layout="vertical">
              <div className="mt-5 relative">
                <LabelForm className="text-ink">Client's Name</LabelForm>
                <InputComponent
                  placeholder="John"
                  name="clientName"
                  className="font-bold font-spartan py-2 mt-1"
                  value={values.clientName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorForm
                  className="text-textRed600 absolute bottom"
                  touched={touched.clientName}
                  errors={errors.clientName}
                />
              </div>
              <div className="mt-8 relative">
                <LabelForm className="text-ink">Client's Email</LabelForm>
                <InputComponent
                  placeholder="user@gmail.com"
                  name="clientEmail"
                  className="font-bold font-spartan py-2"
                  value={values.clientEmail}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorForm
                  className="text-textRed600 absolute bottom"
                  touched={touched.clientEmail}
                  errors={errors.clientEmail}
                />
              </div>
              <div className="mt-8 flex">
                <div className="flex-auto relative">
                  <LabelForm className="text-ink">Due Date</LabelForm>
                  <DatePicker
                    placeholder="1 Apr 2004"
                    name="clientDueDate"
                    className="font-bold font-spartan py-2 w-11/12"
                    value={values.clientDueDate}
                    onBlur={handleBlur}
                  />
                  <ErrorForm
                    className="text-textRed600 absolute bottom"
                    touched={touched.clientDueDate}
                    errors={errors.clientDueDate}
                  />
                </div>
                <div className="flex-auto relative">
                  <LabelForm className="text-ink">Payment Terms</LabelForm>
                  <Select
                    name="clientPaymentTerms"
                    placeholder="Net day"
                    className="font-bold font-spartan w-full"
                    style={{ height: "41px" }}
                  >
                    <Select.Option value="Net 1 day">Net 1 day</Select.Option>
                    <Select.Option value="Net 7 days">Net 7 days</Select.Option>
                    <Select.Option value="Net 14 days">
                      Net 14 days
                    </Select.Option>
                    <Select.Option value="Net 30 days">
                      Net 30 days
                    </Select.Option>
                  </Select>
                  <ErrorForm
                    className="text-textRed600 absolute bottom"
                    touched={touched.clientPaymentTerms}
                    errors={errors.clientPaymentTerms}
                  />
                </div>
              </div>
              <div className="mt-8 relative">
                <LabelForm className="text-ink">Project Description</LabelForm>
                <InputComponent
                  placeholder="Description"
                  name="clientDesc"
                  className="font-bold font-spartan py-2"
                  value={values.clientDesc}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorForm
                  className="text-textRed600 absolute bottom"
                  touched={touched.clientDesc}
                  errors={errors.clientDesc}
                />
              </div>
              <div className="mt-8 relative">
                <LabelForm className="text-ink">Price</LabelForm>
                <InputComponent
                  type="number"
                  placeholder="Price"
                  name="price"
                  className="font-bold font-spartan py-2"
                  value={values.price}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorForm
                  className="text-textRed600 absolute bottom"
                  touched={touched.price}
                  errors={errors.price}
                />
              </div>
              <div className="flex justify-between mt-8">
                <button
                  className="px-8 py-4 justify-start rounded-full font-spartan font-bold discard-button"
                  onClick={goBack}
                >
                  Discard
                </button>
                <button
                  disabled={!isValid && !dirty}
                  onClick={handleSubmit}
                  type="submit"
                  className="px-8 py-4 rounded-full text-white font-spartan font-bold login-button"
                >
                  Save & Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

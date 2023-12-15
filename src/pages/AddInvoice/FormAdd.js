import { validationSchemaAddInvoice } from "../../validations/Index";
import { FormItem, InputComponent } from "../../components/index";
import { ErrorForm } from "../../components/index";
import { LabelForm } from "../../components/index";
import { DatePicker, Select } from "formik-antd";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import "./Form.css";

export default function FormAdd() {
  const navigate = useNavigate();

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
          }}
        >
          {() => (
            <Form layout="vertical">
              <FormItem label="Client's Name" name="clientName" type="text">
                <InputComponent
                  name="clientName"
                  placeholder="John"
                  className="font-bold font-spartan py-2 mt-1"
                />
              </FormItem>
              <FormItem label="Client's Email" name="clientEmail" type="text">
                <InputComponent
                  placeholder="user@gmail.com"
                  name="clientEmail"
                  className="font-bold font-spartan py-2"
                />
              </FormItem>
              <div className="flex justify-between">
                <FormItem label="Due Date" name="clientDueDate">
                  <div className="flex-auto relative">
                    <DatePicker
                      placeholder="1 Apr 2004"
                      name="clientDueDate"
                      className="font-bold font-spartan py-2 w-11/12"
                    />
                  </div>
                </FormItem>
                <FormItem label="Payment Terms" name="clientPaymentTerms">
                  <div className="flex-auto relative">
                    <Select
                      name="clientPaymentTerms"
                      placeholder="Net day"
                      className="font-bold font-spartan w-full"
                      style={{ height: "41px" }}
                    >
                      <Select.Option value="Net 1 day">Net 1 day</Select.Option>
                      <Select.Option value="Net 7 days">
                        Net 7 days
                      </Select.Option>
                      <Select.Option value="Net 14 days">
                        Net 14 days
                      </Select.Option>
                      <Select.Option value="Net 30 days">
                        Net 30 days
                      </Select.Option>
                    </Select>
                  </div>
                </FormItem>
              </div>
              <FormItem
                label="Project Description"
                name="clientDesc"
                type="text"
              >
                <InputComponent
                  placeholder="Description"
                  name="clientDesc"
                  className="font-bold font-spartan py-2"
                />
              </FormItem>
              <FormItem label="Price" name="price" type="number">
                <InputComponent
                  placeholder="Price"
                  name="price"
                  className="font-bold font-spartan py-2"
                />
              </FormItem>
              <div className="flex justify-between mt-8">
                <button
                  className="px-8 py-4 justify-start rounded-full font-spartan font-bold discard-button"
                  onClick={goBack}
                >
                  Discard
                </button>
                <button
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

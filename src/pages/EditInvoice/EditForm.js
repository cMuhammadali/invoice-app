import { validateSchemaEditInvoice } from "../../validations/Index";
import { FormItem, InputComponent } from "../../components/index";
import { Form, DatePicker, Select } from "formik-antd";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";

export default function EditForm() {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  return (
    <div
      className="w-full h-3/6"
      style={{ background: "#fff", paddingBottom: "32px", paddingTop: "20px" }}
    >
      <div className="px-8">
        <h1 className="font-bold font-spartan text-3xl">
          Edit <span className="color-ink">#</span>XM9141
        </h1>
        <Formik
          initialValues={{
            clientEmail: "alexgrim@mail.com",
            clientName: "Alex Grim",
            clientDueDate: null,
            clientPaymetTerms: "",
            clientDesc: "Graphic Design",
            price: 7800,
          }}
          validationSchema={validateSchemaEditInvoice}
          onSubmit={(values) => {
            console.log("values =>", values);
          }}
        >
          {() => (
            <Form layout="vertical">
              <FormItem label="Client's Name" name="clientName">
                <InputComponent
                  name="clientName"
                  placeholder="John"
                  className="font-bold font-spartan py-2 mt-1 text-base"
                />
              </FormItem>
              <FormItem label="Client's Email" name="clientEmail">
                <InputComponent
                  name="clientEmail"
                  placeholder="user@gmail.com"
                  className="font-bold font-spartan py-2 mt-1 text-base"
                />
              </FormItem>
              <div className="flex justify-between">
                <div className="flex-auto mr-2 w-2/4">
                  <FormItem label="Due Date" name="clientDueDate">
                    <DatePicker
                      name="clientDueDate"
                      placeholder="1 Apr 2004"
                      className="font-bold font-spartan py-2 w-full"
                    />
                  </FormItem>
                </div>
                <div className="flex-auto h-10 ml-2 w-2/4">
                  <div className="flex-auto relative">
                    <FormItem label="Payment Terms" name="clientPaymentTerms">
                      <Select
                        name="clientPaymentTerms"
                        placeholder="Net day"
                        className="font-bold font-spartan w-full"
                        style={{ height: "40px" }}
                      >
                        <Select.Option value="Net 1 day">
                          Net 1 day
                        </Select.Option>
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
                    </FormItem>
                  </div>
                </div>
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
              <FormItem label="Price" name="price">
                <InputComponent
                  placeholder="Price"
                  name="price"
                  className="font-bold font-spartan py-2"
                />
              </FormItem>
              <div className="flex justify-end mt-5">
                <button
                  className="px-8 py-4 mr-4 rounded-full font-spartan text-base discard-button"
                  onClick={goBack}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-8 py-4 rounded-full text-white font-spartan text-base login-button"
                >
                  Save Changes
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

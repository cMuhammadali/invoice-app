import { validationSchemaAddInvoice } from "../../validations/Index";
import { Button, FormItem, Input } from "../../components/index";
import { useNavigate } from "react-router-dom";
import { DatePicker, Select } from "antd";
import { Formik, Form } from "formik";
import "./Form.css";

export default function FormAdd() {
  const navigate = useNavigate();
  const dateFormat = "DD.MM.YYYY";

  function goBack() {
    navigate(-1);
  }

  return (
    <div
      className="w-full h-3/6 bg-white rounded-md"
      style={{ paddingBottom: "32px", paddingTop: "26px" }}
    >
      <div className="px-8">
        <h1 className="font-bold font-spartan text-3xl">New Invoice</h1>
        <Formik
          initialValues={{
            clientEmail: "",
            clientName: "",
            clientDueDate: null,
            clientPaymentTerms: null,
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
              <FormItem label="Client's Name" name="clientName">
                <Input
                  name="clientName"
                  placeholder="John"
                  className="font-bold font-spartan py-2 mt-1 text-base"
                />
              </FormItem>
              <FormItem label="Client's Email" name="clientEmail">
                <Input
                  placeholder="user@gmail.com"
                  name="clientEmail"
                  className="font-bold font-spartan py-2 text-base"
                />
              </FormItem>
              <div className="flex justify-between">
                <div className="flex-auto mr-2 w-2/4">
                  <FormItem label="Due Date" name="clientDueDate">
                    <DatePicker
                      name="clientDueDate"
                      placeholder="15 Dec 2023"
                      className="font-bold font-spartan py-2 w-full text-base"
                      format={dateFormat}
                    />
                  </FormItem>
                </div>
                <div className="flex-auto h-10 ml-2 w-2/4">
                  <div className="flex-auto relative">
                    <FormItem label="Payment Terms" name="clientPaymentTerms">
                      <Select
                        name="clientPaymentTerms"
                        placeholder="Net day"
                        className="font-bold font-spartan w-full h-10"
                      >
                        <Select.Option value={1}>Net 1 day</Select.Option>
                        <Select.Option value={7}>Net 7 days</Select.Option>
                        <Select.Option value={14}>Net 14 days</Select.Option>
                        <Select.Option value={30}>Net 30 days</Select.Option>
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
                <Input
                  placeholder="Description"
                  name="clientDesc"
                  className="font-bold font-spartan py-2 text-base"
                />
              </FormItem>
              <FormItem label="Price" name="price" type="number">
                <Input
                  placeholder="Price"
                  name="price"
                  className="font-bold font-spartan py-2 text-base"
                />
              </FormItem>
              <div className="flex justify-between mt-8">
                <Button
                  className="px-8 py-4 justify-start rounded-full font-spartan discard-button text-base"
                  onClick={goBack}
                >
                  Discard
                </Button>
                <Button
                  type="submit"
                  className="px-8 py-4 rounded-full text-white font-spartan login-button text-base"
                >
                  Save & Submit
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

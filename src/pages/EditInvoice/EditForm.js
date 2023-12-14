import { Input, Form, DatePicker, Select } from "formik-antd";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

export default function EditForm() {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  const validationSchema = Yup.object().shape({
    clientName: Yup.string().required("can't be empty"),
    clientDueDate: Yup.date().required("can't be empty"),
    clientEmail: Yup.string()
      .email("Invalid email address")
      .required("can't be empty"),
    clientPaymetTerms: Yup.string().required("can't be empty"),
    clientDesc: Yup.string().required("can't be empty"),
    price: Yup.number().required("can't be empty"),
  });

  return (
    <div
      className="w-full h-3/6"
      style={{ background: "#fff", paddingBottom: "32px", paddingTop: "32px" }}
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
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log("values =>", values);
          }}
        >
          {() => (
            <Form layout="vertical">
              <Form.Item
                label="Client’s Name"
                name="clientName"
                className="font-spartan mt-5 font-medium"
              >
                <Input
                  placeholder="John"
                  suffix
                  name="clientName"
                  className="font-bold font-spartan py-2"
                />
              </Form.Item>
              <Form.Item
                label="Client’s Email"
                name="clientEmail"
                className="font-spartan mt-5 font-medium"
              >
                <Input
                  placeholder="user@gmail.com"
                  suffix
                  name="clientEmail"
                  className="font-bold font-spartan py-2"
                />
              </Form.Item>
              <div className="flex">
                <Form.Item
                  label="Due Date"
                  name="clientDueDate"
                  className="font-spartan mt-5 font-medium flex-auto"
                >
                  <DatePicker
                    placeholder="1 Apr 2004"
                    suffix
                    name="clientDueDate"
                    className="font-bold font-spartan py-2"
                    style={{ width: "90%" }}
                  />
                </Form.Item>
                <Form.Item
                  label="Payment Terms"
                  name="clientPaymetTerms"
                  className="font-spartan mt-5 font-medium flex-auto"
                >
                  <Select
                    placeholder="Net 30 days"
                    suffix
                    name="clientPaymetTerms"
                    className="font-bold font-spartan"
                    style={{ height: "41px" }}
                  >
                    <Select.Option className="font-spartan font-bold">
                      Net 1 days
                    </Select.Option>
                    <Select.Option className="font-spartan font-bold">
                      Net 7 days
                    </Select.Option>
                    <Select.Option className="font-spartan font-bold">
                      Net 14 days
                    </Select.Option>
                    <Select.Option className="font-spartan font-bold">
                      Net 30 days
                    </Select.Option>
                  </Select>
                </Form.Item>
              </div>
              <Form.Item
                label="Project Description"
                name="clientDesc"
                className="font-spartan mt-5 font-medium"
              >
                <Input
                  placeholder="Description"
                  suffix
                  name="clientDesc"
                  className="font-bold font-spartan py-2"
                />
              </Form.Item>
              <Form.Item
                label="Price"
                name="price"
                className="font-spartan mt-5 font-medium"
              >
                <Input
                  type="number"
                  placeholder="Price"
                  suffix
                  name="price"
                  className="font-bold font-spartan py-2"
                />
              </Form.Item>
              <div className="flex justify-end">
                <button
                  className="px-8 py-4 mr-4 rounded-full font-spartan font-bold discard-button"
                  onClick={goBack}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-8 py-4 rounded-full text-white font-spartan font-bold login-button"
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

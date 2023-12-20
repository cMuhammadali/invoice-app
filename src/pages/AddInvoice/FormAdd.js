import { createNewInvoice } from "../../services/InvoiceSlice/InvoiceSlice";
import { validationSchemaAddInvoice } from "../../validations/Index";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { DatePicker, Select } from "antd";
import { Formik, Form } from "formik";
import {
  Button,
  FormItem,
  Input,
  LoaderSecond,
  ModalError,
} from "../../components/index";
import dayjs from "dayjs";
import "dayjs/locale/en";
import "dayjs/locale/es";
import "dayjs/locale/en";
import "./Form.css";

dayjs.extend(customParseFormat);
dayjs.locale("en");

const options = [
  {
    value: 1,
    label: "Net 1 day",
  },
  {
    value: 7,
    label: "Net 7 day",
  },
  {
    value: 14,
    label: "Net 14 day",
  },
  {
    value: 30,
    label: "Net 30 day",
  },
];

const dateFormat = "YYYY/MM/DD";
const worker = {
  clientDueDate: dayjs("2023-12-12T12:12:12+0000"),
};

export default function FormAdd() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, status, isLoading } = useSelector((state) => state.invoice);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [formAttempt, setFormAttempt] = useState(0);

  function goBack() {
    navigate(-1);
  }

  const dateNow = new Date();
  const date = dateNow.toLocaleDateString();

  console.log(status);
  const handleSubmit = (values) => {
    setFormAttempt((prev) => prev + 1);
    dispatch(
      createNewInvoice({
        userId: localStorage.getItem("id"),
        paid: false,
        email: values.clientEmail,
        to: values.clientName,
        dueDate: values.clientDueDate,
        term: values.clientPaymentTerms,
        createdDate: date,
        description: values.clientDesc,
        price: values.price,
      })
    );
  };

  useEffect(() => {
    if (error) {
      setIsModalVisible(true);
    }
    if (status === 201) {
      navigate("/");
    }
  }, [error, formAttempt, status]);

  return (
    <>
      <ModalError
        open={isModalVisible}
        onCancel={setIsModalVisible}
        setIsModalVisible={setIsModalVisible}
        footer={false}
        title="Error"
        buttonChildren={<Link to={"/login"}>Login</Link>}
      >
        {error}
      </ModalError>
      <div className="w-full h-3/6 bg-white rounded-md pb-8 pt-6">
        <div className="px-8">
          <h1 className="font-bold font-spartan text-3xl">New Invoice</h1>
          <Formik
            initialValues={{
              clientEmail: "",
              clientName: "",
              clientDueDate: worker.clientDueDate,
              clientPaymentTerms: 7,
              clientDesc: "",
              price: null,
            }}
            validationSchema={validationSchemaAddInvoice}
            onSubmit={handleSubmit}
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
                        format={dateFormat}
                        name="clientDueDate"
                        placeholder="15 Dec 2023"
                        className="font-bold font-spartan py-2 w-full text-base border-1 border-ink"
                      />
                    </FormItem>
                  </div>
                  <div className="flex-auto h-10 ml-2 w-2/4">
                    <div className="flex-auto relative">
                      <FormItem label="Payment Terms" name="clientPaymentTerms">
                        <Select
                          name="clientPaymentTerms"
                          placeholder="Net day"
                          className="font-bold font-spartan w-full h-10 border-1 border-ink"
                          options={options}
                        />
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
                    {isLoading ? <LoaderSecond /> : "Save & Submit"}
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}

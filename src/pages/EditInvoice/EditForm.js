import { validateSchemaEditInvoice } from "../../validations/Index";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchInvoices,
  putInvoiceThunk,
} from "../../services/InvoiceSlice/InvoiceSlice";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Select, DatePicker } from "antd";
import { Form } from "formik-antd";
import {
  Button,
  FormItem,
  Input,
  Loader,
  LoaderSecond,
  ModalError,
} from "../../components/index";
import { Formik } from "formik";
import dayjs from "dayjs";
import "dayjs/locale/en";
import "dayjs/locale/es";
import "dayjs/locale/en";

dayjs.extend(customParseFormat);
dayjs.locale("en");

export default function EditForm({ id, paid }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const oneInvoice = useSelector((state) => state.invoice.oneInvoice);
  const { isLoading, error, status } = useSelector((state) => state.invoice);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const dateFormat = "YYYY/MM/DD";
  const worker = {
    clientDueDate: dayjs("2023-12-12T12:12:12+0000"),
  };

  function goBack() {
    navigate(-1);
  }

  useEffect(() => {
    dispatch(fetchInvoices());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      setIsModalVisible(true);
    }
    if (status === 200) {
      navigate(-1);
    }
  }, [error, status]);

  const handleSubmitPatch = (values) => {
    dispatch(
      putInvoiceThunk({
        id: id,
        invoiceData: values,
        paid
      })
    );
  };

  return (
    <>
      <ModalError
        buttonChildren={true}
        open={isModalVisible}
        footer={false}
        title="Error"
        onCancel={() => setIsModalVisible(false)}
      >
        {error?.response?.data}
      </ModalError>
      <div className="w-full h-3/6 bg-white pt-5 pb-6">
        {oneInvoice ? (
          <div className="px-8">
            <h1 className="font-bold font-spartan text-3xl">
              Edit <span className="color-ink">#</span>
              {oneInvoice.userId}
            </h1>
            <Formik
              initialValues={{
                clientEmail: oneInvoice.email,
                clientName: oneInvoice.to,
                clientDueDate: worker.clientDueDate,
                clientPaymentTerms: 7,
                clientDesc: oneInvoice.description || null,
                price: oneInvoice.price,
              }}
              validationSchema={validateSchemaEditInvoice}
              onSubmit={handleSubmitPatch}
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
                      name="clientEmail"
                      placeholder="user@gmail.com"
                      className="font-bold font-spartan py-2 mt-1 text-base"
                    />
                  </FormItem>
                  <div className="flex justify-between">
                    <div className="flex-auto mr-2 w-2/4">
                      <FormItem label="Due Date" name="clientDueDate">
                        <DatePicker
                          format={dateFormat}
                          name="clientDueDate"
                          placeholder="1 Apr 2004"
                          className="font-bold font-spartan py-2 w-full"
                        />
                      </FormItem>
                    </div>
                    <div className="flex-auto h-10 ml-2 w-2/4">
                      <div className="flex-auto relative">
                        <FormItem
                          label="Payment Terms"
                          name="clientPaymentTerms"
                        >
                          <Select
                            name="clientPaymentTerms"
                            placeholder="Net day"
                            className="font-bold font-spartan w-full"
                            style={{ height: "40px" }}
                          >
                            <Select.Option value={1}>Net 1 day</Select.Option>
                            <Select.Option value={7}>Net 7 days</Select.Option>
                            <Select.Option value={14}>
                              Net 14 days
                            </Select.Option>
                            <Select.Option value={30}>
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
                    <Input
                      placeholder="Description"
                      name="clientDesc"
                      className="font-bold font-spartan py-2"
                    />
                  </FormItem>
                  <FormItem label="Price" name="price">
                    <Input
                      placeholder="Price"
                      name="price"
                      className="font-bold font-spartan py-2"
                    />
                  </FormItem>
                  <div className="flex justify-end mt-5">
                    <Button
                      className="px-8 py-4 mr-4 rounded-full font-spartan text-base discard-button"
                      onClick={goBack}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      className="px-8 py-4 rounded-full text-white font-spartan text-base login-button"
                    >
                      {isLoading ? (
                        <Loader className="loader w-8 h-8" />
                      ) : (
                        "Save Changes"
                      )}
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        ) : (
          <LoaderSecond />
        )}
      </div>
    </>
  );
}

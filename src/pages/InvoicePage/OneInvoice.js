import { useSelector, useDispatch } from "react-redux";
import {
  fetchInvoices,
  patchInvoiceThunk,
} from "../../services/InvoiceSlice/InvoiceSlice";
import { useEffect, useState } from "react";
import InvoiceCenter from "./InvoiceCenter";
import { Link } from "react-router-dom";
import {
  Button,
  Loader,
  LoaderSecond,
  ModalDelete,
} from "../../components/index";
import "./OneInvoice.css";

export default function OneInvoice({ id }) {
  const dispatch = useDispatch();
  const oneInvoice = useSelector((state) => state.invoice.oneInvoice);
  const { isLoading } = useSelector((state) => state.invoice);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchInvoices());
  }, [dispatch]);

  const handlePatch = () => {
    dispatch(patchInvoiceThunk(id));
  };

  return (
    <div>
      {oneInvoice ? (
        <>
          <div className="w-full flex py-6 px-8 rounded-md shadow-box items-center bg-white">
            <div className="flex-auto text-center">
              <div className="items-center flex justify-start">
                <h1 className="font-spartan" style={{ color: "#858BB2" }}>
                  Status
                </h1>
                {oneInvoice.paid ? (
                  <div className="w-8">
                    <span className="flex-auto font-spartan p-4 rounded-md ml-4 bg-whiteGreen">
                      <span className="dot-green rounded-full bg-greenPaid"></span>{" "}
                      <span
                        className="ml-2 font-bold"
                        style={{ color: "rgba(51, 214, 159, 1)" }}
                      >
                        Paid
                      </span>
                    </span>
                  </div>
                ) : (
                  <div className="w-8">
                    <span className="flex-auto font-spartan p-4 rounded-md ml-4 bg-whiteOrange">
                      <span className="dot-orange rounded-full bg-orangePending"></span>
                      <span className="ml-2 font-bold text-orangePending">
                        Pending
                      </span>
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex-auto">
              <div className="flex justify-end">
                <Link to={`/edit-invoice/${id}`}>
                  <Button className="edit-button px-6 py-4 rounded-full font-spartan mr-3">
                    Edit
                  </Button>
                </Link>
                <Button
                  className="delete-button px-7 py-4 rounded-full font-spartan text-white mr-3"
                  onClick={() => setIsOpen(true)}
                >
                  Delete
                </Button>
                <ModalDelete
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  title={"Confirm Deletion"}
                  id={id}
                  body={`Are you sure you want to delete invoice ${oneInvoice.to}? This action cannot be undone.`}
                />
                {oneInvoice.paid ? null : (
                  <Button
                    className="paid-button px-7 py-4 rounded-full font-spartan text-white"
                    onClick={handlePatch}
                  >
                    {isLoading ? <Loader className="loader" /> : "Mark as Paid"}
                  </Button>
                )}
              </div>
            </div>
          </div>

          <div className="mt-4">
            <InvoiceCenter oneInvoice={oneInvoice} />
          </div>
        </>
      ) : (
        <LoaderSecond />
      )}
    </div>
  );
}

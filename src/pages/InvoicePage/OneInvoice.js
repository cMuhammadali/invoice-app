import { ModalDelete } from "../../components/index";
import InvoiceCenter from "./InvoiceCenter";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./OneInvoice.css";

export default function OneInvoice() {
  const [isTrue, setIsTrue] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="w-full flex py-6 px-8 rounded-md shadow-box items-center bg-white">
        <div className="flex-auto text-center">
          <div className="items-center flex justify-start">
            <h1 className="font-spartan" style={{ color: "#858BB2" }}>
              Status
            </h1>
            {isTrue === true ? (
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
            <Link to={"/edit-invoice/XM9141"}>
              <button className="edit-button px-6 py-4 rounded-full font-spartan font-bold mr-3">
                Edit
              </button>
            </Link>
            <button
              className="delete-button px-7 py-4 rounded-full font-spartan font-bold text-white mr-3"
              onClick={() => setIsOpen(true)}
            >
              Delete
            </button>
            <ModalDelete
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              title={"Confirm Deletion"}
              id={"XM9141"}
              body={`Are you sure you want to delete invoice #${"XM9141"}? This action cannot be undone.`}
            />
            {isTrue === true ? (
              <></>
            ) : (
              <button
                className="paid-button px-7 py-4 rounded-full font-spartan font-bold text-white"
                onClick={() => setIsTrue(!isTrue)}
              >
                Mark as Paid
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="mt-4">
        <InvoiceCenter />
      </div>
    </div>
  );
}

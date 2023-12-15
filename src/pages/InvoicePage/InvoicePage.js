import { fetchOneInvoices } from "../../services/InvoiceSlice/InvoiceSlice";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import OneInvoice from "./OneInvoice";
import { useEffect } from "react";

export default function InvoicePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams(); 

  function goBack() {
    navigate(-1);
  }

  useEffect(() => {
    dispatch(fetchOneInvoices(id));
  }, [dispatch]);

  return (
    <div>
      <div
        className="flex items-center"
        style={{ cursor: "pointer" }}
        onClick={goBack}
      >
        <img src="/src/assets/icons/GoBack.svg" alt="goBack" />
        <h1 className="font-bold font-spartan ml-2 p-3">Go back</h1>
      </div>

      <div className="mt-4">
        <OneInvoice id={id} />
      </div>
    </div>
  );
}

import { useNavigate } from "react-router-dom";
import OneInvoice from "./one-invoice";

export default function InvoicePage() {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

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
        <OneInvoice />
      </div>
    </div>
  );
}

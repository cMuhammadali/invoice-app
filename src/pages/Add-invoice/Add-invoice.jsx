import { useNavigate } from "react-router-dom";
import Form from "./Form";

export default function AddInvoice() {
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

      <div>
        <Form />
      </div>
    </div>
  );
}

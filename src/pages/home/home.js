import { fetchInvoices } from "../../services/InvoiceSlice/InvoiceSlice.js";
import { useSelector, useDispatch } from "react-redux";
import { Navbar } from "../../components/index.js";
import { List } from "../../components/index.js";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [token, setToken] = useState(null);
  const dispatch = useDispatch();
  const { invoices } = useSelector((state) => state.invoice);
  const [invoicesList, setInvoicesList] = useState(null);

  useEffect(() => {
    dispatch(fetchInvoices());
    setToken(localStorage.getItem("token"));
  }, [dispatch]);

  function handleFilter(value) {
    console.log(value);
    if (value === "all") {
      setInvoicesList(invoices);
    } else if (value === "pending") {
      const resultPending = invoices.filter(
        (invoice) => invoice.paid === false
      );
      console.log("pending =>", resultPending);
      setInvoicesList(resultPending);
    } else if (value === "paid") {
      const resultPaid = invoices.filter((invoice) => invoice.paid === true);
      console.log("paid =>", resultPaid);
      setInvoicesList(resultPaid);
    }
  }

  console.log(invoices);
  return (
    <div>
      <Navbar
        invoicesList={invoicesList}
        token={token}
        handleFilter={handleFilter}
      />
      <div>
        <List invoicesList={invoicesList} />
      </div>
    </div>
  );
}

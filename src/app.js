import { Login, Home, AddInvoice, InvoicePage } from "./pages/index";
import { Route, Routes } from "react-router-dom";
import { EditInvoice } from './pages/index.js';
import { Main } from "./components/index.js";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route path="/" element={<Main />}>
        <Route index element={<Home />} />
        <Route path="/new-invoice" element={<AddInvoice />} />
        <Route path="/invoice-page/XM9141" element={<InvoicePage />} />
        <Route path="/edit-invoice/XM9141" element={<EditInvoice />} />
      </Route>
    </Routes>
  );
}

export default App;

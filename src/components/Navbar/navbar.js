import { fetchInvoices } from "../../services/InvoiceSlice/InvoiceSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../index";
import "./Navbar.css";

export default function Navbar() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [token, setToken] = useState(null);
  const dispatch = useDispatch();
  const { invoices } = useSelector((state) => state.invoice);

  useEffect(() => {
    dispatch(fetchInvoices());
    setToken(localStorage.getItem("token"))
  }, [dispatch]);

  return (
    <div className="w-full flex">
      <div className="flex-auto text-left">
        <h1 className="font-spartan text-4xl font-bold">Invoices</h1>
        <p className="text-ink">
          There are {invoices ? invoices.length : 0} total invoices
        </p>
      </div>

      <div className="flex-auto">
        <div style={{ display: "flex", justifyContent: "right" }}>
          <div
            className="items-center"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div className="mr-10">
              <div
                className="flex items-center"
                style={{ cursor: "pointer" }}
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <span className="font-spartan">Filter by status</span>
                {isFilterOpen ? (
                  <img
                    src="/src/assets/icons/UpPath.svg"
                    aria-hidden={true}
                    alt="Up"
                    className="ml-3"
                  />
                ) : (
                  <img
                    src="/src/assets/icons/Path 2.svg"
                    alt="path2"
                    className="ml-3"
                    aria-hidden={true}
                  />
                )}
              </div>

              {isFilterOpen && (
                <div className="p-3 shadow-xl w-40 absolute rounded-md z-50 select-box">
                  <ul>
                    <li className="font-spartan text-sm mt-2 cursor-pointer">
                      <input type="checkbox" />{" "}
                      <span className="ml-3">All</span>
                    </li>
                    <li className="font-spartan text-sm mt-2">
                      <input type="checkbox" />{" "}
                      <span className="ml-3">Pending</span>
                    </li>
                    <li className="font-spartan text-sm mt-2">
                      <input type="checkbox" />{" "}
                      <span className="ml-3">Paid</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            {token ? (
              <Link to={"/new-invoice"}>
                <Button className="create-button text-white rounded-full px-3 flex items-center py-2 pr-4">
                  <img
                    src="/src/assets/icons/+.svg"
                    alt="plus"
                    className="p-3 bg-white rounded-full"
                  />{" "}
                  <span className="ml-5 text-white">New Invoice</span>
                </Button>
              </Link>
            ) : (
              <Link to={"/login"}>
                <Button className="create-button text-white rounded-full px-3 flex items-center py-2 pr-4">
                  <img
                    src="/src/assets/icons/+.svg"
                    alt="plus"
                    className="p-3 bg-white rounded-full"
                  />{" "}
                  <span className="ml-5 text-white">New Invoice</span>
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

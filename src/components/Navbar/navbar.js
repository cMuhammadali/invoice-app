import { Link } from "react-router-dom";
import { useState } from "react";
import "./navbar.css";

export default function Navbar() {
  const [isTrue, setIsTrue] = useState(false);

  return (
    <div className="w-full flex">
      <div className="flex-auto text-left">
        <h1 className="font-spartan text-4xl font-bold">Invoices</h1>
        <p className="text-ink"> 
          There are 6 total invoices
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
                onClick={() => setIsTrue(!isTrue)}
              >
                <span className="font-spartan font-bold">Filter by status</span>
                {isTrue === true ? (
                  <img
                    src="/src/assets/icons/UpPath.svg"
                    alt="Up"
                    className="ml-3"
                  />
                ) : (
                  <img
                    src="/src/assets/icons/Path 2.svg"
                    alt="path2"
                    className="ml-3"
                  />
                )}
              </div>

              {isTrue && (
                <div className="p-3 shadow-xl w-40 absolute rounded-md z-50 select-box">
                  <ul>
                    <li
                      style={{ cursor: "pointer" }}
                      className="font-spartan text-sm font-bold mt-2"
                    >
                      <input type="checkbox" />{" "}
                      <span className="ml-3">All</span>
                    </li>
                    <li className="font-spartan text-sm font-bold mt-2">
                      <input type="checkbox" />{" "}
                      <span className="ml-3">Pending</span>
                    </li>
                    <li className="font-spartan text-sm font-bold mt-2">
                      <input type="checkbox" />{" "}
                      <span className="ml-3">Paid</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <Link to={"/new-invoice"}>
              <button className="font-bold create-button text-white rounded-full px-3 flex items-center py-2 pr-4">
                <img
                  src="/src/assets/icons/+.svg"
                  alt="plus"
                  className="p-3 bg-white rounded-full"
                />{" "}
                <span className="ml-5 text-white">New Invoice</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

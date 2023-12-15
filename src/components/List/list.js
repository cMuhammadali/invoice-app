import { fetchInvoices } from "../../services/InvoiceSlice/InvoiceSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./List.css";

export default function List() {
  const dispatch = useDispatch();
  const { invoices, isLoading, error } = useSelector((state) => state.invoice);

  useEffect(() => {
    dispatch(fetchInvoices());
  }, [dispatch]);

  return (
    <div className="w-full h-96 mt-14">
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        invoices?.map((item) => {
          return (
            <div
              className="p-6 rounded-md flex text-center items-center mt-6 mr-2 ml-2 shadow-box"
              key={item.id}
            >
              <span className="flex-auto font-spartan">
                <span className="text-ink font-bold">#</span>
                <span className="font-bold">{item.userId}</span>
              </span>
              <span className="flex-auto font-spartan text-listText">
                {item.createdDate}
              </span>
              <span className="flex-auto font-spartan text-listText">
                {item.to}
              </span>
              <span className="flex-auto font-spartan font-bold">
                £ {item.price}
              </span>
              <span className="flex-auto font-spartan p-2 rounded-md bg-whiteGreen items-center relative">
                {item.paid ? (
                  <>
                    <span className="dot-green bg-greenPaid rounded-full"></span>
                    <span className="ml-2 font-bold text-greenPaid">Paid</span>
                  </>
                ) : (
                  <>
                    <span className="dot-orange bg-orangePending rounded-full"></span>
                    <span className="ml-2 font-bold text-orangePending">
                      Pending
                    </span>
                  </>
                )}
              </span>
              <Link to={"/invoice-page/XM9141"} className="p-4">
                <img
                  style={{ cursor: "pointer" }}
                  className="h-4 font-spartan"
                  src="/src/assets/icons/Path 5.svg"
                  alt="path"
                />
              </Link>
            </div>
          );
        })
      )}
    </div>
  );
}

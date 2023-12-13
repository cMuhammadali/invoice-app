import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./List.css";

export default function List() {
  const todos = useSelector((state) => state.todo);

  return (
    <div className="w-full h-96 mt-14">
      <div className="p-6 rounded-md flex text-center items-center mt-6 mr-2 ml-2 shadow-box">
        <span className="flex-auto font-spartan">
          <span className="text-ink font-bold">#</span>
          <span className="font-bold">RT3080</span>
        </span>
        <span className="flex-auto font-spartan text-listText">
          Due 19 Aug 2021
        </span>
        <span className="flex-auto font-spartan text-listText">
          Jensen Huang
        </span>
        <span className="flex-auto font-spartan font-bold">£ 1,800.90</span>
        <span className="flex-auto font-spartan p-2 rounded-md bg-whiteGreen items-center relative">
          <span className="dot-green bg-greenPaid rounded-full"></span>
          {/* <img src="/src/assets/icons/GreenCircle.svg" alt="green circle" className="absolute left-8 top-4"/> */}
          <span className="ml-2 font-bold text-greenPaid">Paid</span>
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
      <div className="p-6 rounded-md flex text-center items-center mt-6 mr-2 ml-2 shadow-box">
        <span className="flex-auto font-spartan">
          <span className="text-ink font-bold">#</span>
          <span className="font-bold">RT3080</span>
        </span>
        <span
          className="flex-auto font-spartan"
          style={{ color: "rgba(126, 136, 195, 1)" }}
        >
          Due 19 Aug 2021
        </span>
        <span
          className="flex-auto font-spartan"
          style={{ color: "rgba(126, 136, 195, 1)" }}
        >
          Jensen Huang
        </span>
        <span className="flex-auto font-spartan font-bold">£ 1,800.90</span>
        <span className="flex-auto font-spartan p-2 rounded-md bg-whiteOrange">
          <span className="dot-orange bg-orangePending rounded-full"></span>
          <span className="ml-2 font-bold text-orangePending">Pending</span>
        </span>
        <img
          style={{ cursor: "pointer" }}
          className="flex-auto h-4 font-spartan"
          src="/src/assets/icons/Path 5.svg"
          alt="path"
        />
      </div>
      {todos?.map((value) => {
        console.log("value", value?.values?.clientDesc);
        return (
          <div className="p-6 rounded-md flex text-center items-center mt-6 mr-2 ml-2 shadow-box">
            <span className="flex-auto font-spartan">
              <span className="text-ink font-bold">#</span>
              <span className="font-bold">RT3080</span>
            </span>
            <span
              className="flex-auto font-spartan"
              style={{ color: "rgba(126, 136, 195, 1)" }}
            >
              {value?.values?.clientDueDate}
            </span>
            <span
              className="flex-auto font-spartan"
              style={{ color: "rgba(126, 136, 195, 1)" }}
            >
              {value?.values?.clientName}
            </span>
            <span className="flex-auto font-spartan font-bold">
              {value?.values?.price}
            </span>
            <span className="flex-auto font-spartan p-2 rounded-md bg-whiteOrange">
              <span className="dot-orange bg-orangePending rounded-full"></span>
              <span className="ml-2 font-bold text-orangePending">Pending</span>
            </span>
            <img
              style={{ cursor: "pointer" }}
              className="flex-auto h-4 font-spartan"
              src="/src/assets/icons/Path 5.svg"
              alt="path"
            />
          </div>
        );
      })}
    </div>
  );
}

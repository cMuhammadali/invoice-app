import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import React, { useEffect } from "react";
import { Sidebar } from "../index";

export default function Main() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, []);

  return (
    <div className="flex">
      <div className="w-1/12">
        <Sidebar />
      </div>
      <div className="w-full h-screen pt-5 px-72 overflow-auto rounded-md bg-mainBg">
        <Outlet />
      </div>
    </div>
  );
}

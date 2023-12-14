import { Outlet } from "react-router-dom";
import { Sidebar } from "../index";
import React from "react";

export default function Main() {
  return (
    <div className="flex">
      <div className="w-1/12">
        <Sidebar />
      </div>
      <div className="w-full h-screen pt-4 px-72 overflow-auto rounded-md bg-mainBg">
        <Outlet />
      </div>
    </div>
  );
}

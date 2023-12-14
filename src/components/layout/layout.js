import { Outlet } from "react-router-dom";
import { Sidebar } from "../index";
import { Navbar } from "../index";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <Sidebar />

      <Outlet />
    </div>
  );
}

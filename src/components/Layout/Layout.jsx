import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from "../Navbar/Navbar";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <Sidebar />

      <Outlet />
    </div>
  );
}

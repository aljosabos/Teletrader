import { Header } from "../layout/Header/Header";
import { Outlet } from "react-router-dom";
import "./Dashboard.scss";

export function Dashboard() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

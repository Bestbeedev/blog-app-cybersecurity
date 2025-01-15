import Header from "@/components/common/customUI/Header";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="h-full w-full">
      <Header />
      <div className="h-full w-full">
        <Outlet />
      </div>
    </div>
  );
}

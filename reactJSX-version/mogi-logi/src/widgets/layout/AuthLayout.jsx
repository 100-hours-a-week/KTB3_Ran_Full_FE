import { Outlet } from "react-router-dom";
import { Banner } from "@/shared/ui/banner/banner.jsx";

export function AuthLayout() {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
}

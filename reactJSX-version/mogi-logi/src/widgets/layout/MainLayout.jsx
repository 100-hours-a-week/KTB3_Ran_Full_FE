import "../../App.css";
import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "../ui/Footer/Footer.jsx";
import { Header } from "../ui/Header/Header.jsx";

export function MainLayout() {
  const location = useLocation();
  const hideFooter = location.pathname === "/post/create";
  return (
    <>
      <Header />
      <div style={{ height: "100px" }} />
      <main>
        <Outlet />
      </main>
      {!hideFooter && <Footer />}
    </>
  );
}

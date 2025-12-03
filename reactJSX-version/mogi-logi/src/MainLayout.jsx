import "./App.css";
import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "./widgets/ui/Footer/Footer";
import { Header } from "./widgets/ui/Header/Header";

function MainLayout() {
  const location = useLocation();
  const hideFooter = location.pathname === "/post/create";
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      {!hideFooter && <Footer />}
    </>
  );
}

export default MainLayout;

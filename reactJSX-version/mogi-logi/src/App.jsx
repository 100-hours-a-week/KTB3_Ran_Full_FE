import "./App.css";
import { Outlet } from "react-router-dom";
import { Footer } from "./widgets/ui/Footer/Footer";
import { Header } from "./widgets/ui/Header/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;

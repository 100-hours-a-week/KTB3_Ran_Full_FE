import { useNavigate } from "react-router-dom";
import { Logo } from "../../../shared/ui/logo/Logo";
import "./Header.css";

export const Header = () => {
  const navigate = useNavigate();
  const homeNav = () => {
    navigate("/home");
  };
  return (
    <header>
      <div className="header-inner">
        <button onClick={homeNav}>
          <Logo width={200} style={{ cursor: "pointer" }} />
        </button>
        <div className="header-menu">
          <button className="profile-modal"></button>
        </div>
      </div>
    </header>
  );
};

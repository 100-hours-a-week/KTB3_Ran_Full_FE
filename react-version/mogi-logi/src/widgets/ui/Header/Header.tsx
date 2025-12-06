import { Logo } from "../../../shared/ui/logo/Logo";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <div className="header-inner">
        <button
          onClick={() => {
            console.log("logo");
          }}
        >
          <Logo width={200} style={{ cursor: "pointer" }} />
        </button>
        <div className="header-menu">
          <button className="home-nev">홈</button>
          <button className="login-nev">들어가기</button>
        </div>
      </div>
    </header>
  );
};

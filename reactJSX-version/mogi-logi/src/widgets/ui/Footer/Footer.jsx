import { FooterLogo } from "@/shared/ui/logo";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-inner">
        <FooterLogo width={200} />

        <div className="footer-info">
          <div className="footer-meta">
            <div className="copyright">
              © 2025 Chaeyoung Yong. <br />
              All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

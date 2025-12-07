import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

//글로벌 스타일 정의
import "./shared/styles/tokens/color.css";
import "./shared/styles/tokens/spacing.css";
import "./shared/styles/tokens/typography.css";
import { ToastProvider } from "@/shared";
import { AppRoot } from "./app/AppRoot.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppRoot />
  </StrictMode>,
);

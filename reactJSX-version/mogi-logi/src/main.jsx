import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/router/router";

//글로벌 스타일 정의
import "./shared/styles/tokens/color.css";
import "./shared/styles/tokens/spacing.css";
import "./shared/styles/tokens/typography.css";
import { ToastProvider } from "./shared/ui/toast/Toast.jsx";

createRoot(document.getElementById("root")).render(
  <ToastProvider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </ToastProvider>,
);

import { createBrowserRouter, Navigate, redirect } from "react-router-dom";
import App from "../../App";
import { HomePage } from "../../pages/home/ui/HomePage";
import { LoginPage } from "../../pages/auth/login/ui/LoginPage";
import { SignupPage } from "../../pages/auth/signup/ui/SignupPage";
import { ROUTES } from "./routes";

//라우터 가드
function requireAuth() {
  const token = sessionStorage.getItem("accessToken");
  //   const publicPaths = ["/login", "/signup"];
  //   const isPublic = publicPaths.includes(path);

  //   if (!token && !isPublic) {
  //     console.log("로그인 필요 : 로그인 페이지로 이동");
  //     location.hash = "/login";
  //     return;
  //   }
  if (!token) {
    throw redirect("/login");
  }
  return;
}

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      //기본 루트 리다이렉트
      { index: true, element: <Navigate to={ROUTES.HOME} /> },
      { path: ROUTES.LOGIN, element: <LoginPage /> },
      { path: ROUTES.SIGNUP, element: <SignupPage /> },
      {
        path: ROUTES.HOME,
        element: <HomePage />,
        // loader: async () => requireAuth(),
      },
      { path: ROUTES.NONE, element: <SignupPage /> },
    ],
  },
]);

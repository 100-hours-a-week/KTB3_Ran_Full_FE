import { createBrowserRouter, Navigate, redirect } from "react-router-dom";
import App from "../../App";
import { HomePage } from "../../pages/home/ui/HomePage";
import { LoginPage } from "../../pages/auth/signup/ui/LoginPage";

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
      { index: true, element: <Navigate to="/home" /> },
      {
        path: "/home",
        element: <HomePage />,
        // loader: async () => requireAuth(),
      },
      { path: "/login", element: <LoginPage /> },
      { path: "/signup" },
    ],
  },
]);

import { createBrowserRouter, Navigate, redirect } from "react-router-dom";
import App from "../../MainLayout";
import { HomePage } from "../../pages/home/ui/HomePage";
import { LoginPage } from "../../pages/auth/login/ui/LoginPage";
import { SignupPage } from "../../pages/auth/signup/ui/SignupPage";
import { ROUTES } from "./routes";
import MainLayout from "../../MainLayout";
import AuthLayout from "../../AuthLayout";
import { PostDetailPage } from "../../pages/postDetail/ui/PostDetailPage";
import { PostCreatePage } from "../../pages/postCreate/ui/PostCreatePage";

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
    /*인증 페이지*/
  },
  {
    element: <AuthLayout />,
    children: [
      //outlet
      { path: ROUTES.LOGIN, element: <LoginPage /> },
      { path: ROUTES.SIGNUP, element: <SignupPage /> },
    ],
  },
  {
    /*일반 페이지 (헤더 푸터 적용)*/
  },
  {
    // loader: async () => requireAuth(),
    element: <MainLayout />,
    children: [
      //outlet
      //기본 루트 리다이렉트
      { index: true, element: <Navigate to={ROUTES.HOME} /> },
      {
        path: ROUTES.HOME,
        element: <HomePage />,
      },
      { path: ROUTES.DETAIL, element: <PostDetailPage /> },
      { path: ROUTES.NONE, element: <SignupPage /> },
      { path: ROUTES.CREATE, element: <PostCreatePage /> },
    ],
  },
]);

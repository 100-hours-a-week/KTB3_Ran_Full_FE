import { RouterProvider } from "react-router-dom";
import { router } from "../router/router";

export function withRouter(children) {
  return <RouterProvider router={router}>{children}</RouterProvider>;
}

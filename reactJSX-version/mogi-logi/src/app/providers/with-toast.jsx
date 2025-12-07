import { ToastProvider } from "@/shared";

export function withToast(children) {
  return <ToastProvider>{children}</ToastProvider>;
}

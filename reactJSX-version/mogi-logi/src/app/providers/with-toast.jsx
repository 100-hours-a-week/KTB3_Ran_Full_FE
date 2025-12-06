import { ToastProvider } from "../../shared/ui/toast/Toast";

export function withToast(children) {
  return <ToastProvider>{children}</ToastProvider>;
}

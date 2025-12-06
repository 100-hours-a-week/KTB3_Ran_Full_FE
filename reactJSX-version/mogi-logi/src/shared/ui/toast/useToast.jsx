import { createContext, useContext } from "react";

const ToastContext = createContext(null);

export function useToast() {
  return useContext(ToastContext);
}

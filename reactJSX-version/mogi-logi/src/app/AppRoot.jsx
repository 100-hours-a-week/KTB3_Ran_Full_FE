import { withProviders } from "./providers";
import { App } from "./App.jsx";

export function AppRoot() {
  return withProviders(<App />);
}

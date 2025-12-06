import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export function withQueryClient(children) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

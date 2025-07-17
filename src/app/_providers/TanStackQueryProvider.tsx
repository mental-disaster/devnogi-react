"use client";

import { queryClient } from "@/lib/api/clients";
import { QueryClientProvider } from "@tanstack/react-query";

export default function TanStackQueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

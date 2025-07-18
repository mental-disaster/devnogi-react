import { server } from "./server";

declare global {
  var __msw_server_started__: boolean | undefined;
}

export function initMockServer() {
  const vercelEnv = process.env.VERCEL_ENV;

  if (
    (vercelEnv === "development" || vercelEnv === "preview") &&
    process.env.API_MOCKING === "enabled" &&
    !globalThis.__msw_server_started__
  ) {
    server.listen({ onUnhandledRequest: "bypass" });
    globalThis.__msw_server_started__ = true;
  }
}

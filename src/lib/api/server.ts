import { initMockServer } from "@/mocks/initServer";
import axios, { AxiosInstance } from "axios";
import { NextRequest } from "next/server";

export function createServerAxios(request: NextRequest): AxiosInstance {
  initMockServer();

  const gatewayUrl = process.env.GATEWAY_BASE_URL;
  if (!gatewayUrl) {
    throw new Error("gatewayUrl 환경 변수가 설정되지 않았습니다.");
  }

  return axios.create({
    baseURL: gatewayUrl,
    timeout: 5000,
    headers: {
      "Content-Type": "application/json",
      Authorization: request.headers.get("authorization") ?? "",
      Cookie: request.headers.get("cookie") ?? "",
    },
  });
}

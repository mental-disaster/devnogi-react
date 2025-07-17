import { QueryClient } from "@tanstack/react-query";
import axios, { AxiosInstance } from "axios";

export const clientAxios: AxiosInstance = axios.create({
  baseURL: "/api",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 200, // 쿼리 fresh 유지 기간 0.2초 (ms)
      refetchOnWindowFocus: false, // 포커스 복귀 시 재요청 끔
      refetchOnReconnect: false, // 네트워크 재연결 시 재요청 끔
      refetchOnMount: false, // 마운트 시 재요청 끔
    },
  },
});

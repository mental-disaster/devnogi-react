"use client";

import { Home, RotateCw } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">문제가 발생했습니다!</h2>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center px-4 py-2 font-medium text-white bg-gray-800 rounded-md hover:bg-gray-700 gap-2 cursor-pointer"
          >
            <RotateCw className="w-4 h-4" />
            <span>다시 시도</span>
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-4 py-2 font-medium text-white bg-gray-800 rounded-md hover:bg-gray-700 gap-2"
          >
            <Home className="w-4 h-4" />
            <span>홈으로 가기</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

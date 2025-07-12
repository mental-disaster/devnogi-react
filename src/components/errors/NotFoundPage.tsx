"use client";

import { ArrowLeft, Home } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="text-lg">페이지를 찾을 수 없습니다.</p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center justify-center px-4 py-2 font-medium text-white bg-gray-800 rounded-md hover:bg-gray-700 gap-2 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>뒤로 가기</span>
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

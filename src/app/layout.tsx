import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import TanStackQueryProvider from "./_providers/TanStackQueryProvider";

// 폰트 woff 등으로 변환 금지 - 수정 금지 원본 사용 저작권 조건 있음
const mabinogi = localFont({
  src: "./Mabinogi_Classic_OTF.otf",
});

export const metadata: Metadata = {
  title: "Devnogi",
  description: "마비노기 정보 커뮤니티",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={mabinogi.className}>
      <body>
        <TanStackQueryProvider>{children}</TanStackQueryProvider>
      </body>
    </html>
  );
}

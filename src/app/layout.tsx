import type { Metadata } from "next";
import "./globals.css";
import TanStackQueryProvider from "./_providers/TanStackQueryProvider";

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
    <html lang="ko">
      <body>
        <TanStackQueryProvider>{children}</TanStackQueryProvider>
      </body>
    </html>
  );
}

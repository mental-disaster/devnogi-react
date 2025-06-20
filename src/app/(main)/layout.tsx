import NavBar from "@/components/nav-bar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex flex-col">
      <div className="max-w-2xl w-full mx-auto">
        <NavBar />
      </div>
      <div className="w-screen border-b" />
      <main className="max-w-2xl w-full mx-auto flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}

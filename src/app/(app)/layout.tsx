import React from "react";
import Sidebar from "@/components/Sidebar";

interface AppLayoutProps {
  children: React.ReactNode;
}

function AppLayout({ children }: AppLayoutProps) {
  return (
    <main className={"flex min-h-screen"}>
      <Sidebar />
      <div className={"mx-[30px] my-[50px] w-full"}>{children}</div>
    </main>
  );
}

export default AppLayout;

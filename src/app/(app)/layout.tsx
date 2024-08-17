import React from "react";
import Sidebar from "@/components/Sidebar";
import { getServerUser } from "@/utils/user";
import { redirect } from "next/navigation";

interface AppLayoutProps {
  children: React.ReactNode;
}

function AppLayout({ children }: AppLayoutProps) {
  const user = getServerUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <main className={"flex min-h-screen"}>
      <Sidebar />
      <div className={"px-[18px] md:px-[30px] my-[50px] w-full"}>
        {children}
      </div>
    </main>
  );
}

export default AppLayout;

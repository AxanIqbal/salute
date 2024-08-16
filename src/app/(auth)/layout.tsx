import React from "react";
import Image from "next/image";
import Logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";
import { inter } from "@/utils/fonts";

interface LayoutProps {
  children: React.ReactNode;
}

function AuthLayout({ children }: LayoutProps) {
  return (
    <main className={"flex justify-center items-center min-h-screen flex-col"}>
      <div
        className={
          "flex gap-[11px] items-center mb-[50px] flex-col md:flex-row"
        }
      >
        <Image src={Logo} alt={"logo"} width={111} height={49} />
        <div>
          <p
            className={cn("font-[700] text-[40px] text-center", inter.variable)}
            style={{ lineHeight: "36px" }}
          >
            <span className={"text-textRed"}>Auto Mechanic</span> Workshop
          </p>
          <p
            className={cn(
              "text-textGray font-[600] text-center md:text-start",
              inter.variable,
            )}
          >
            Best Car Repair service
          </p>
        </div>
      </div>
      <div
        className={
          "border px-[25px] py-[50px] rounded-[10px] w-full max-w-[550px]"
        }
      >
        {children}
      </div>
    </main>
  );
}

export default AuthLayout;

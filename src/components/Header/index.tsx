import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import AvatarImagee from "@/assets/avatar.png";
import { cn } from "@/lib/utils";
import { inter } from "@/utils/fonts";

interface IHeader {
  role?: "customer";
  className?: string;
}

function Header({ role, className }: IHeader) {
  return (
    <div className={cn("flex justify-between w-full items-start", className)}>
      {role === "customer" && (
        <div>
          <p
            className={cn("font-bold text-[40px]", inter.variable)}
            style={{ lineHeight: "30px" }}
          >
            <span className={cn("text-textRed", inter.variable)}>Customer</span>{" "}
            Portal
          </p>
          <p className={"text-textGray text-center"}>Best Car Repair service</p>
        </div>
      )}

      {!role && <div />}

      <div className={"flex gap-[12px] items-center"}>
        <p className={"text-textGray"}>andrew@rapchat.com</p>
        <Avatar className={"h-[45px] w-[45px]"}>
          <AvatarImage src={AvatarImagee.src} />
        </Avatar>
      </div>
    </div>
  );
}

export default Header;

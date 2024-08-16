"use client";

import React, { useState } from "react";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { inter } from "@/utils/fonts";
import { Input } from "@/components/ui/input";
import SearchIcon from "@/assets/svg/search.svg";
import SidebarTile from "@/components/Sidebar/Tile";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import MenuIcon from "@/assets/svg/menu.svg";

const tabs = [
  { title: "dashboard", location: "/dashboard" },
  { title: "My Jobs", location: "/my-jobs" },
  { title: "Submit New Job", location: "/new-job" },
  { title: "Approval", location: "/approval" },
  // { title: "Payments", location: "/payments" },
  { title: "Feedback & Ratings", location: "/feedback-rating" },
  { title: "Profile settings", location: "/settings" },
  { title: "Help & Support", location: "/support" },
  { title: "Notifications", location: "/notifications" },
];

function Sidebar() {
  const router = useRouter();
  const [isNav, setIsNav] = useState(false);

  return (
    <>
      <Button
        className={"fixed top-4 left-4 z-20 md:hidden"}
        size={"icon"}
        onClick={() => setIsNav((prevState) => !prevState)}
      >
        <MenuIcon width={20} height={20} />
      </Button>
      <div
        className={cn(
          "fixed md:sticky w-full max-w-[300px] min-h-screen bg-[#616161] md:bg-[#61616166] z-10 transition-all duration-500",
          isNav ? "left-0" : "-left-full",
        )}
      >
        <div className={"mt-[50px] flex flex-col items-center mb-[15px]"}>
          <Image src={Logo} alt={"logo"} width={111} height={49} />
          <p
            className={cn("font-[700] text-[20px] text-center", inter.variable)}
            style={{ lineHeight: "24px" }}
          >
            <span className={"text-textRed"}>Auto Mechanic</span> Workshop
          </p>
          <p className={cn("text-[13px] text-textGray", inter.variable)}>
            Best Car Repair service
          </p>
        </div>

        <Input
          className={"md:border-none bg-[#616161CC] mx-[24px] mb-[20px]"}
          placeholder={"Search job"}
          rightIcon={<SearchIcon />}
        />

        <div className={"w-full"}>
          {tabs.map((e) => (
            <SidebarTile
              key={e.location}
              title={e.title}
              location={e.location}
              onClick={() => setIsNav(false)}
            />
          ))}
          <p
            className={"pl-[40px] py-[12px] w-full block cursor-pointer"}
            onClick={() => {
              document.cookie =
                "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
              router.replace("/login");
            }}
          >
            Log out
          </p>
        </div>
      </div>
    </>
  );
}

export default Sidebar;

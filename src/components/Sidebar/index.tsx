"use client";

import React from "react";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { inter } from "@/utils/fonts";
import { Input } from "@/components/ui/input";
import SearchIcon from "@/assets/search.svg";
import SidebarTile from "@/components/Sidebar/Tile";
import Link from "next/link";

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
  return (
    <div
      className={
        "fixed md:relative w-full max-w-[300px] min-h-screen bg-[#616161] md:bg-[#61616166] z-10"
      }
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
          <SidebarTile key={e.location} title={e.title} location={e.location} />
        ))}
        <Link
          className={"pl-[40px] py-[12px] w-full block cursor-pointer"}
          href={"/login"}
          replace
        >
          Log out
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;

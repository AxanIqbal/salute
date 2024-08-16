"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface SidebarProps {
  title: string;
  location: string;
}

function SidebarTile({ title, location }: SidebarProps) {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <Link
      href={location}
      className={cn(
        "pl-[40px] py-[12px] w-full block",
        pathname === location ? "bg-red" : "",
      )}
    >
      {title}
    </Link>
  );
}

export default SidebarTile;

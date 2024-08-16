"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface SidebarProps {
  title: string;
  location: string;
  onClick?: () => void;
}

function SidebarTile({ title, location, onClick }: SidebarProps) {
  const pathname = usePathname();

  return (
    <Link
      href={location}
      className={cn(
        "pl-[40px] py-[12px] w-full block",
        pathname === location ? "bg-red" : "",
      )}
      onClick={onClick}
    >
      {title}
    </Link>
  );
}

export default SidebarTile;

import React from "react";
import { Button } from "@/components/ui/button";

interface UpperTileProps {
  icon: React.ReactNode;
  title: string;
  location: string;
  count: number;
}

function UpperTile({ icon, title, count }: UpperTileProps) {
  return (
    <div
      className={
        "p-[18px] flex flex-col items-center bg-[#616161CC] rounded-[10px] flex-1 min-w-[320px]"
      }
    >
      <p className={"font-bold text-[20px] text-[#FFFFFFCC] mb-[6px]"}>
        {title}
      </p>
      <div className={"flex items-center justify-center gap-[8px] mb-[30px]"}>
        {icon}
        <p className={"font-bold text-[20px]"}>{count}</p>
      </div>

      <Button>View Details</Button>
    </div>
  );
}

export default UpperTile;

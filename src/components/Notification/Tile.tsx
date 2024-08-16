import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface INotificationTile {
  title: string;
  description: string;
  isRead?: boolean;
}

function NotificationTile({ title, description, isRead }: INotificationTile) {
  return (
    <div
      className={cn(
        "px-[15px] py-[17px] flex justify-between",
        isRead ? "bg-[#61616166]" : "bg-[#FFFFFF33]",
      )}
    >
      <div>
        <p className={"text-[22px]"}>{title}</p>
        <p className={"text-[#FFFFFFCC] text-[16px]"}>{description}</p>
      </div>

      <div className={"flex gap-[8px]"}>
        {!isRead && (
          <Button className={"w-[65px] h-[28px] rounded-[5px] text-[12px]"}>
            View
          </Button>
        )}
        <Button
          className={"w-[65px] h-[28px] rounded-[5px] text-[12px]"}
          variant={"destructive"}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}

export default NotificationTile;

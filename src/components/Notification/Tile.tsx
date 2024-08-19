import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface INotificationTile {
  title: string;
  description: string;
  isRead?: boolean;
  isBorder?: boolean;
}

function NotificationTile({
  title,
  description,
  isRead,
  isBorder,
}: INotificationTile) {
  return (
    <div
      className={cn(
        "px-[15px] py-[17px] flex justify-between items-center",
        isRead ? "bg-[#61616166]" : "bg-[#FFFFFF33]",
        isBorder ? "border-l-[2px] border-red" : undefined,
      )}
    >
      <div>
        <p className={"text-[22px]"}>{title}</p>
        <p className={"text-[#FFFFFFCC] text-[16px]"}>{description}</p>
      </div>

      <div className={"flex gap-[8px] items-center"}>
        {!isRead && (
          <Button className={"w-[65px] h-[28px] rounded-[5px] text-[12px]"}>
            View
          </Button>
        )}

        {isRead && <p>23 Apr 2022</p>}
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

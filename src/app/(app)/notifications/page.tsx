import React from "react";
import Header from "@/components/Header";
import { cn } from "@/lib/utils";
import { inter } from "@/utils/fonts";
import { Button } from "@/components/ui/button";
import NotificationTile from "@/components/Notification/Tile";

function NotificationPage() {
  return (
    <div className={"w-full"}>
      <Header className={"mb-[30px]"} />
      <div className={"flex justify-between"}>
        <p className={cn("font-bold text-[32px] mb-[13px]", inter.variable)}>
          Notifications
        </p>

        <Button className={"h-[40px]"} variant={"secondary"}>
          Mark all as read
        </Button>
      </div>

      <p className={"text-[22px] text-[#FFFFFFCC] mb-[20px]"}>
        You have 3 unread notifications
      </p>

      <div className={"flex flex-col gap-[12px]"}>
        <NotificationTile
          title={"You have received quotation"}
          description={"You have received quotation for Vehicle number 456754"}
          isBorder
        />
        <NotificationTile
          title={"A great opportunity for you"}
          description={"Get 20% discount from 1st aug to 14 aug on all repairs"}
        />
        <NotificationTile
          title={"Your request has been viewed"}
          description={"Your request for the quotation has been viewed"}
        />
        <NotificationTile
          title={"Your request has been viewed"}
          description={"Your request for the quotation has been viewed"}
          isRead
        />
      </div>
    </div>
  );
}

export default NotificationPage;

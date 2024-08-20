import React from "react";
import { cn } from "@/lib/utils";

export const TableCell = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"td">) => {
  return (
    <td
      className={cn(
        "border border-white rounded-[10px] py-[12px] text-[#FFFFFF33] min-w-[150px] font-bold",
        className,
      )}
      {...props}
    />
  );
};

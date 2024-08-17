import React from "react";
import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export function Table({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"table">) {
  return (
    <ScrollArea>
      <table
        className={cn(
          "table-auto border-separate border-spacing-y-1 w-full",
          className,
        )}
        {...props}
      />
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}

export function THead({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"th">) {
  return (
    <th
      className={cn(
        "p-[16px] text-start bg-[#616161CC] font-medium text-[16px] text-nowrap",
        className,
      )}
      {...props}
    />
  );
}

export function TableCell({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"td">) {
  return <td className={cn("p-[16px] text-nowrap")} {...props} />;
}

export function TableRow({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"tr">) {
  return (
    <tr className={cn("bg-[#616161CC] shadow-2xl", className)} {...props} />
  );
}

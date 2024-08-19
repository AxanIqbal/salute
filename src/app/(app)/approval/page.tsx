"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import { cn } from "@/lib/utils";
import { inter } from "@/utils/fonts";
import Slider from "@/components/ui/slider";
import ApprovedTable from "@/components/Approval/approved";
import Pending from "@/components/Approval/pending";
import Canceled from "@/components/Approval/cancel";

const op = [
  { value: "approve", label: "Approved" },
  { value: "pending", label: "Pending" },
  { value: "cancelled", label: "Cancelled" },
] as const;

type valuesT = (typeof op)[number]["value"];

function ApprovalPage() {
  const [slide, setSlide] = useState<valuesT>("approve");

  return (
    <div className={"w-full"}>
      <Header className={"mb-[30px]"} isBell />
      <p className={cn("font-bold text-[32px] mb-[20px]", inter.variable)}>
        Quotation List
      </p>

      <Slider
        className={"mb-[20px]"}
        options={[
          { value: "approve", label: "Approved" },
          { value: "pending", label: "Pending" },
          { value: "cancelled", label: "Cancelled" },
        ]}
        onChange={setSlide}
        value={slide}
      />

      {slide === "approve" && <ApprovedTable />}
      {slide === "pending" && <Pending />}
      {slide === "cancelled" && <Canceled />}
    </div>
  );
}

export default ApprovalPage;

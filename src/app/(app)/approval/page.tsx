"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import { cn } from "@/lib/utils";
import { inter } from "@/utils/fonts";
import Slider from "@/components/ui/slider";

function ApprovalPage() {
  const [slide, setSlide] = useState("approve");

  return (
    <div className={"w-full"}>
      <Header className={"mb-[30px]"} />
      <p className={cn("font-bold text-[32px] mb-[20px]", inter.variable)}>
        Quotation List
      </p>

      <Slider
        options={[
          { value: "approve", label: "Approved" },
          { value: "pending", label: "Pending" },
          { value: "cancelled", label: "Cancelled" },
        ]}
        onChange={setSlide}
        value={slide}
      />
    </div>
  );
}

export default ApprovalPage;

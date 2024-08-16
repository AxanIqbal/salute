import React from "react";
import Header from "@/components/Header";
import { cn } from "@/lib/utils";
import { inter } from "@/utils/fonts";

function NewJob() {
  return (
    <div className={"w-full"}>
      <Header className={"mb-[30px]"} />
      <p className={cn("font-bold text-[32px] mb-[20px]", inter.variable)}>
        Job Submission Form
      </p>
    </div>
  );
}

export default NewJob;

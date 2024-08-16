import React from "react";
import Header from "@/components/Header";
import { cn } from "@/lib/utils";
import { inter } from "@/utils/fonts";

function MyJobs() {
  return (
    <div className={"w-full"}>
      <Header className={"mb-[30px]"} />
      <p className={cn("font-bold text-[32px] mb-[20px]", inter.variable)}>
        My Jobs
      </p>
    </div>
  );
}

export default MyJobs;

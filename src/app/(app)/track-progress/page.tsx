"use client";

import React from "react";
import Header from "@/components/Header";
import BackIcon from "@/assets/svg/back.svg";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Progress } from "@/components/ui/progress";

function Tile({ title, value }: { title: string; value: string }) {
  return (
    <div className={"flex gap-[8px] font-bold items-center"}>
      <p className={"text-[18px]"}>{title}</p>
      <p className={"text-[#FFFFFFCC]"}>{value}</p>
    </div>
  );
}

function TrackProgress() {
  const router = useRouter();
  return (
    <div className={"w-full"}>
      <Header className={"mb-[30px]"} isBell />
      <Button
        className={"h-[32px] w-[32px] rounded-[5px] p-0"}
        onClick={() => router.back()}
      >
        <BackIcon />
      </Button>

      <div
        className={
          "flex gap-x-[120px] gap-y-[20px] flex-col md:flex-row flex-wrap"
        }
      >
        <div>
          <p className={"font-bold text-[32px] my-[20px]"}>Tracking progress</p>
          <div className={"flex flex-col gap-[10px]"}>
            <Tile title={"Vehicle Name:"} value={"Honda Civic type R"} />
            <Tile title={"Vehicle No:"} value={"BHG3456"} />
            <Tile title={"Vehicle Year:"} value={"2015"} />
            <Tile title={"Vehicle Make:"} value={"United"} />
            <Tile title={"Vehicle Mileage:"} value={"23km"} />
            <Tile title={"Vehicle Part:"} value={"Bumper"} />
            <Tile title={"Service:"} value={"Denting"} />
            <Tile title={"Submission Date:"} value={"12 July 2024"} />
          </div>
        </div>

        <div
          className={
            "bg-[#616161CC] px-[23px] py-[20px] rounded-[10px] w-full max-w-[450px]"
          }
        >
          <p className={"font-bold text-[18px] text-center"}>
            Honda civic Type R
          </p>
          <p className={"font-medium text-[16px] text-[#FFFFFF80] text-center"}>
            Bumper Repairing
          </p>

          <p className={"font-medium text-[16px]"}>Process: 32%</p>
          <Progress value={32} className={"h-[8px] w-full my-[6px]"} />
          <p className={"font-medium text-[16px] mb-[20px]"}>
            Estimated completion: 15 July 2024
          </p>
        </div>
      </div>
    </div>
  );
}

export default TrackProgress;

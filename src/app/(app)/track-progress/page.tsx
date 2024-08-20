import React from "react";
import Header from "@/components/Header";
import { Progress } from "@/components/ui/progress";
import BackButton from "@/components/ui/back-button";
import { Indicator } from "@/components/Track/Timeline";

function Tile({ title, value }: { title: string; value: string }) {
  return (
    <div className={"flex gap-[8px] font-bold items-center"}>
      <p className={"text-[18px]"}>{title}</p>
      <p className={"text-[#FFFFFFCC]"}>{value}</p>
    </div>
  );
}

function TrackProgress() {
  return (
    <div className={"w-full"}>
      <Header className={"mb-[30px]"} isBell />
      <BackButton />

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

          <div>
            <div
              className={
                "flex gap-[6px] pb-[50px] relative overflow-hidden pt-[2px]"
              }
            >
              <Indicator />
              <div>
                <p className={"font-medium text-[12px] leading-[15px]"}>
                  New parts arrived
                </p>
                <p className={"font-medium text-[10px]"}>10 July, 2024</p>
              </div>
            </div>

            <div
              className={
                "flex gap-[6px] pb-[50px] relative overflow-hidden pt-[2px]"
              }
            >
              <Indicator />
              <div>
                <p className={"font-medium text-[12px] leading-[15px]"}>
                  Installation
                </p>
                <p className={"font-medium text-[10px]"}>In progress</p>
              </div>
            </div>

            <div
              className={
                "flex gap-[6px] pb-[50px] relative overflow-hidden pt-[2px]"
              }
            >
              <Indicator variant={"outline"} />
              <div>
                <p className={"font-medium text-[12px] leading-[15px]"}>
                  Final inspection
                </p>
                <p className={"font-medium text-[10px]"}>In progress</p>
              </div>
            </div>

            <div className={"flex gap-[6px] relative overflow-hidden pt-[2px]"}>
              <Indicator variant={"outline"} className={"after:hidden"} />
              <div>
                <p className={"font-medium text-[12px] leading-[15px]"}>
                  Ready for pickup
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrackProgress;
